#------------------------------------------------------------------------------
# Terraform Configuration
#------------------------------------------------------------------------------
locals {
  environment = var.environment

  project_name = var.project_name
  name         = basename(path.cwd)

  bucket_name = "${local.project_name}-${local.environment}"

  tags = merge(var.default_tags, {
    "Name" = local.name
  })

}

#------------------------------------------------------------------------------
# S3 Bucket Website
#------------------------------------------------------------------------------
module "s3_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.8.2"

  bucket = local.bucket_name
  acl    = "private"

  tags = local.tags

  versioning = {
    enabled    = true
    status     = true
    mfa_delete = false
  }

  website = {
    index_document = "index.html"
    error_document = "index.html"
  }
}


#------------------------------------------------------------------------------
# CloudFront Origin Access Identity
#------------------------------------------------------------------------------
resource "aws_cloudfront_origin_access_identity" "cf_oai" {
  comment = "OAI to restrict access to AWS S3 content"
}

#------------------------------------------------------------------------------
# S3 Bucket Policy
#------------------------------------------------------------------------------
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${module.s3_bucket.s3_bucket_arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.cf_oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "example" {
  bucket = module.s3_bucket.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_policy.json
}


#------------------------------------------------------------------------------
# Cloudfront Function for S3 Bucket Website
#------------------------------------------------------------------------------
resource "aws_cloudfront_function" "redirect-to-index" {
  name    = "${local.project_name}-redirect-to-index"
  runtime = "cloudfront-js-1.0"
  comment = "Add index.html to request URLs that don’t include a file name"
  publish = true
  code    = file("${path.module}/function.js")
}

#------------------------------------------------------------------------------
# Cloudfront for S3 Bucket Website
#------------------------------------------------------------------------------
# tfsec issues ignored
#  - AWS045: Enable WAF for the CloudFront distribution. Pending to implement.
resource "aws_cloudfront_distribution" "website" {
  # tfsec:ignore:AWS045

  comment = "CloudFront Distribution for S3 Bucket Website"

  dynamic "custom_error_response" {
    for_each = var.cloudfront_custom_error_responses
    content {
      error_caching_min_ttl = custom_error_response.value.error_caching_min_ttl
      error_code            = custom_error_response.value.error_code
      response_code         = custom_error_response.value.response_code
      response_page_path    = custom_error_response.value.response_page_path
    }
  }

  default_cache_behavior {
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6" # Managed-CachingOptimized
    origin_request_policy_id   = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf" # Managed-CORS-S3Origin
    response_headers_policy_id = "eaab4381-ed33-4a86-88ca-d9558dc6cd63"
    # Managed-CORS-with-preflight-and-SecurityHeadersPolicy

    allowed_methods = [
      "GET", "HEAD", "OPTIONS"
    ]
    cached_methods = [
      "GET", "HEAD", "OPTIONS"
    ]
    target_origin_id       = module.s3_bucket.s3_bucket_id
    viewer_protocol_policy = var.cloudfront_viewer_protocol_policy
    compress               = true

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.redirect-to-index.arn
    }
  }

  security_headers_config {
    content_type_options {
      override = true
    }

    frame_options {
      override     = true
      frame_option = "DENY"
    }

    referrer_policy {
      override        = true
      referrer_policy = "same-origin"
    }

    strict_transport_security {
      override                   = true
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
    }

    xss_protection {
      override   = true
      mode_block = true
      protection = true
    }
  }

  default_root_object = var.cloudfront_default_root_object
  enabled             = true
  is_ipv6_enabled     = var.cloudfront_is_ipv6_enabled
  http_version        = var.cloudfront_http_version

  # TODO - Add variable to support ordered_cache_behavior
  # ordered_cache_behavior (Optional) - An ordered list of cache behaviors resource for this distribution. List from top to bottom in order of precedence. The topmost cache behavior will have precedence 0.

  origin {
    domain_name = module.s3_bucket.s3_bucket_bucket_regional_domain_name
    origin_id   = module.s3_bucket.s3_bucket_id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.cf_oai.cloudfront_access_identity_path
    }
  }

  price_class = var.cloudfront_price_class

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = merge({
    Name = "${local.project_name}-${local.environment}-cloudfront-website"
  }, local.tags)

  viewer_certificate {
    acm_certificate_arn            = var.cloudfront_viewer_certificate.acm_certificate_arn
    ssl_support_method             = var.cloudfront_viewer_certificate.ssl_support_method
    minimum_protocol_version       = var.cloudfront_viewer_certificate.minimum_protocol_version
    cloudfront_default_certificate = var.cloudfront_viewer_certificate.cloudfront_default_certificate
  }

  # TODO - Work to add Web ACL variables
  # web_acl_id (Optional) - A unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution.
  # To specify a web ACL created using the latest version of AWS WAF (WAFv2), use the ACL ARN, for example aws_wafv2_web_acl.example.arn. To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example aws_waf_web_acl.example.id. The WAF Web ACL must exist in the WAF Global (CloudFront) region and the credentials configuring this argument must have waf:GetWebACL permissions assigned.

  retain_on_delete    = var.cloudfront_website_retain_on_delete
  wait_for_deployment = var.cloudfront_website_wait_for_deployment
}
