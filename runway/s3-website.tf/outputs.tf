output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.website.id
  description = "CloudFront Distribution ID"
}

output "cloudfront_distribution_arn" {
  value       = aws_cloudfront_distribution.website.arn
  description = "CloudFront Distribution ARN"
}

output "cloudfront_distribution_domain_name" {
  value       = aws_cloudfront_distribution.website.domain_name
  description = "CloudFront Distribution Domain Name"
}

output "cloudfront_origin_access_identity_id" {
  value       = aws_cloudfront_origin_access_identity.cf_oai.id
  description = "CloudFront Origin Access Identity ID"
}

output "s3_bucket_id" {
  value       = module.s3_bucket.s3_bucket_id
  description = "AWS S3 Bucket ID"
}

output "s3_bucket_domain_name" {
  value       = module.s3_bucket.s3_bucket_bucket_domain_name
  description = "AWS S3 Bucket Domain Name"
}

output "s3_bucket_regional_domain_name" {
  value       = module.s3_bucket.s3_bucket_bucket_regional_domain_name
  description = "AWS S3 Bucket Regional Domain Name"
}
