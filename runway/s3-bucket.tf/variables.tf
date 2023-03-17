# General
variable "default_tags" {
  type = object({
    owner   = string
    project = string
  })
}

variable "project_name" {
  type        = string
  default     = "homepage"
  description = "Project Name"
}

variable "environment" {
  type        = string
  description = "Environment Name"
}

variable "aws_account_id" {
  type        = string
  description = "AWS Account Id"
}

variable "region" {
  type        = string
  description = "AWS Region"
}

# Cloudfront Config

variable "cloudfront_price_class" {
  type        = string
  description = "Cloudfront Price Class"
  default     = "PriceClass_100"
}

variable "cloudfront_default_root_object" {
  type        = string
  description = "Cloudfront Default Root Object"
  default     = "index.html"
}

variable "cloudfront_custom_error_response" {
  type = list(object({
    error_caching_min_ttl = number
    error_code            = number
    response_code         = number
    response_page_path    = string
  }))
  default = [
    {
      error_caching_min_ttl = 300
      error_code            = 403
      response_code         = 200
      response_page_path    = "/index.html"
    },
    {
      error_caching_min_ttl = 300
      error_code            = 404
      response_code         = 200
      response_page_path    = "/index.html"
    }
  ]
}

variable "cloudfront_viewer_certificate" {
  type = object({
    acm_certificate_arn            = string
    ssl_support_method             = string
    minimum_protocol_version       = string
    cloudfront_default_certificate = bool
  })
  default = {
    acm_certificate_arn            = ""
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2019"
    cloudfront_default_certificate = true
  }
}

variable "cloudfront_http_version" {
  type        = string
  description = "Cloudfront Http Version"
  default     = "http2and3"
}


variable "cloudfront_is_ipv6_enabled" {
  type        = bool
  description = "Cloudfront Is Ipv6 Enabled"
  default     = true
}

variable "cloudfront_viewer_protocol_policy" {
  type        = string
  description = "Cloudfront Viewer Protocol Policy"
  default     = "redirect-to-https"
}

variable "cloudfront_website_retain_on_delete" {
  type        = bool
  description = "Cloudfront Website Retain On Delete"
  default     = false
}

variable "cloudfront_website_wait_for_deployment" {
  type        = bool
  description = "Cloudfront Website Wait For Deployment"
  default     = true
}
