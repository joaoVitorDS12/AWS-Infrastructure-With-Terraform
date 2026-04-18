resource "aws_launch_template" "web" {
  name_prefix = "web-template"

  iam_instance_profile {
    name = aws_iam_instance_profile.ec2_profile.name
  }

  image_id           = var.ami_id
  instance_type = var.instance_type

  key_name = aws_key_pair.deployer.key_name

  vpc_security_group_ids = [aws_security_group.ec2_sg.id]

user_data = base64encode(<<-EOF
#!/bin/bash
set -e

yum update -y
yum install -y httpd aws-cli

systemctl enable httpd
systemctl start httpd

cd /var/www/html
rm -rf *

aws s3 cp s3://${aws_s3_bucket.app_bucket.bucket}/index.html . || echo "fallback" > index.html

chown -R apache:apache /var/www/html

systemctl restart httpd
EOF
)

  tag_specifications {
    resource_type = "instance"

    tags = {
      Name = "web-server"
    }
  }
}

resource "aws_autoscaling_group" "web" {
  name = "web-asg"
  
  desired_capacity = 2
  max_size         = 3
  min_size         = 2

  vpc_zone_identifier = var.subnets

  target_group_arns = [aws_lb_target_group.web_tg.arn]

  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value               = "web-server"
    propagate_at_launch = true
  }
}

resource "aws_key_pair" "deployer" {
  key_name   = "aws-key-ci"
  public_key = file("../aws-key-ci.pub")
}