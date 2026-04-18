output "cloudfront_url" {
  value = aws_cloudfront_distribution.web_cdn.domain_name
}

output "alb_dns_name" {
  value = aws_lb.web_alb.dns_name
}

output "bucket_name" {
  value = aws_s3_bucket.app_bucket.bucket
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.web_cdn.id
}

output "asg_name" {
  value = aws_autoscaling_group.web.name
}