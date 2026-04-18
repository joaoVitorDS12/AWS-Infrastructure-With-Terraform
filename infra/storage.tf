resource "aws_s3_bucket" "app_bucket" {
  bucket        = "${var.project_name}-${random_id.bucket_id.hex}"
  force_destroy = true

  tags = local.common_tags
}

resource "random_id" "bucket_id" {
  byte_length = 4
}