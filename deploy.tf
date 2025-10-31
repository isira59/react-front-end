provider "aws" {
  region = "eu-north-1"
}

# EC2 instance
resource "aws_instance" "frontend_ec2" {
  ami                         = "ami-07e075f00c26b085a"  # Replace with new AMI ID
  instance_type               = "t3.micro"
  subnet_id                   = "subnet-0a2fda8671ffa0e21"
  vpc_security_group_ids      = ["sg-08508ce4b5ca5d940"]
  associate_public_ip_address = true
  key_name                    = "testing"   # Your existing key pair

  tags = {
    Name = "React-Frontend-EC2"
  }

  # Provision Docker and run container
  provisioner "remote-exec" {
    connection {
      type        = "ssh"
      host        = self.public_ip
      user        = "ubuntu"
      private_key = file("testing.pem")
    }

  inline = [
    # Wait for cloud-init to finish
    "sleep 30",

    # Update & install Docker correctly
    "sudo apt-get update -y",
    "sudo apt-get install -y ca-certificates curl gnupg lsb-release",
    "sudo mkdir -p /etc/apt/keyrings",
    "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg",
    "echo \"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
    "sudo apt-get update -y",
    "sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin",

    # Start and enable Docker
    "sudo systemctl start docker",
    "sudo systemctl enable docker",

    # Wait a bit for Docker service to start
    "sleep 10",

    # Pull and run your image
    "sudo docker pull isira59/react-frontend-app:latest",
    "sudo docker run -d -p 80:80 --name react-frontend isira59/react-frontend-app:latest"
  ]
  }
}

