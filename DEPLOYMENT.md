# Volaris Global Limited — Deployment Guide

**Complete step-by-step deployment instructions for self-hosting**

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Production Build](#production-build)
4. [Deployment Methods](#deployment-methods)
   - [Method 1: Docker on Local Machine](#method-1-docker-on-local-machine)
   - [Method 2: Namecheap Shared Hosting](#method-2-namecheap-shared-hosting)
   - [Method 3: DigitalOcean VPS](#method-3-digitalocean-vps)
   - [Method 4: AWS EC2](#method-4-aws-ec2)
5. [Post-Deployment Checklist](#post-deployment-checklist)
6. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed ([Download](https://nodejs.org/))
- ✅ Git installed ([Download](https://git-scm.com/))
- ✅ GitHub account with repository access
- ✅ Domain name (e.g., volarisglobal.com)
- ✅ Hosting account or VPS (choose one):
  - Namecheap shared hosting with cPanel
  - DigitalOcean Droplet ($6/month)
  - AWS EC2 instance (t2.micro free tier)
  - Any VPS provider (Hetzner, Linode, Vultr, etc.)

---

## Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/YOUR_USERNAME/volaris-site.git
cd volaris-site

# 2. Install dependencies
npm ci

# 3. Copy environment file (optional for static site)
cp .env.example .env

# 4. Start development server
npm run dev

# Open http://localhost:8080 in your browser
```

---

## Production Build

```bash
# Build optimized production bundle
npm run build

# Output will be in ./dist/ directory

# Test production build locally
npm run preview
```

**Build checklist:**
- ✅ Build completes without errors
- ✅ `dist/` directory contains `index.html` and assets
- ✅ Preview works at http://localhost:4173
- ✅ No console errors in browser

---

## Deployment Methods

### Method 1: Docker on Local Machine

**Best for:** Testing, local development, learning Docker

#### Step 1: Install Docker

**macOS:**
```bash
# Download Docker Desktop from docker.com/products/docker-desktop
# Or use Homebrew:
brew install --cask docker
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
# Log out and back in for group changes to take effect
```

**Windows:**
- Download Docker Desktop from docker.com/products/docker-desktop

#### Step 2: Build Docker Image

```bash
# Navigate to project directory
cd volaris-site

# Build image
docker build -t volaris-site:latest .

# Verify build
docker images | grep volaris-site
```

#### Step 3: Run Container

```bash
# Run on port 80 (requires sudo on Linux)
docker run -d -p 80:80 --name volaris-web volaris-site:latest

# Or run on port 8080 (no sudo required)
docker run -d -p 8080:80 --name volaris-web volaris-site:latest

# Verify container is running
docker ps

# Check logs
docker logs volaris-web
```

#### Step 4: Access Site

- **Port 80:** http://localhost
- **Port 8080:** http://localhost:8080

#### Docker Commands Reference

```bash
# Stop container
docker stop volaris-web

# Start container
docker start volaris-web

# Restart container
docker restart volaris-web

# Remove container
docker rm -f volaris-web

# View logs (live)
docker logs -f volaris-web

# Access container shell
docker exec -it volaris-web sh

# Remove image
docker rmi volaris-site:latest
```

---

### Method 2: Namecheap Shared Hosting

**Best for:** Simple deployment, low cost ($2-5/month)

#### Step 1: Build the Site

```bash
npm run build
# Files are now in ./dist/
```

#### Step 2: Get FTP Credentials

1. Log in to [Namecheap account](https://www.namecheap.com/myaccount/)
2. Navigate to **Hosting List**
3. Click **Manage** next to your hosting package
4. Go to **Advanced** → **FTP Accounts** or **cPanel** → **FTP Accounts**
5. Note your credentials:
   - **FTP Host:** ftp.yourdomain.com or provided IP
   - **Username:** Your cPanel username
   - **Password:** Your cPanel password
   - **Port:** 21 (FTP) or 22 (SFTP/SSH)

#### Step 3: Upload Files

**Option A: Using FileZilla (GUI) - Recommended for Beginners**

1. Download [FileZilla Client](https://filezilla-project.org/download.php?type=client)
2. Install and open FileZilla
3. Connect:
   - **Host:** ftp.yourdomain.com
   - **Username:** (from Step 2)
   - **Password:** (from Step 2)
   - **Port:** 21
4. Navigate to `/public_html/` (right panel)
5. Drag and drop all files from `./dist/` (left panel) to `/public_html/` (right panel)
6. Wait for upload to complete

**Option B: Using cPanel File Manager**

1. Log in to cPanel (usually https://yourdomain.com:2083)
2. Open **File Manager**
3. Navigate to `public_html/`
4. Click **Upload**
5. Select all files from your `./dist/` folder
6. Wait for upload
7. Refresh and verify files are there

**Option C: Using Command Line (Linux/Mac)**

```bash
# Install lftp (if not already installed)
# Ubuntu/Debian: sudo apt install lftp
# Mac: brew install lftp

# Upload files
lftp -u "YOUR_FTP_USERNAME,YOUR_FTP_PASSWORD" ftp.yourdomain.com <<EOF
cd public_html
mirror -R dist/ .
bye
EOF
```

#### Step 4: Configure Domain

1. In cPanel, go to **Domains** or **Addon Domains**
2. Verify your domain points to `public_html/`
3. If using a subdomain, set document root to `public_html/subdomain/`

#### Step 5: Enable SSL

1. In cPanel, go to **SSL/TLS Status**
2. Enable **AutoSSL** for your domain
3. Wait 10-15 minutes for certificate to provision
4. Verify SSL works: https://yourdomain.com

#### Step 6: Test Deployment

- Visit https://yourdomain.com
- Check all pages load correctly
- Test on mobile device
- Run Lighthouse audit (Chrome DevTools → Lighthouse)

**Troubleshooting:**
- Site shows directory listing → Check `index.html` exists in `public_html/`
- 403 Forbidden → Check file permissions (should be 644)
- Images not loading → Verify assets/ folder uploaded correctly

---

### Method 3: DigitalOcean VPS

**Best for:** Full control, scalability, professional hosting

**Cost:** $6/month for basic droplet

#### Step 1: Create Droplet

1. Sign up at [DigitalOcean](https://www.digitalocean.com/)
2. Create new Droplet:
   - **Image:** Ubuntu 22.04 LTS
   - **Plan:** Basic ($6/month)
   - **CPU:** Regular (1GB RAM)
   - **Datacenter:** Choose closest to your audience
   - **Authentication:** SSH key (recommended) or password
3. Note your droplet's IP address

#### Step 2: Connect to Droplet

```bash
# Replace YOUR_DROPLET_IP with actual IP
ssh root@YOUR_DROPLET_IP

# If using SSH key:
ssh -i ~/.ssh/id_rsa root@YOUR_DROPLET_IP
```

#### Step 3: Install Docker

```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y

# Verify installation
docker --version
docker-compose --version
```

#### Step 4: Clone Repository

```bash
# Create directory
mkdir -p /var/www/volaris
cd /var/www/volaris

# Clone repository (replace with your repo URL)
git clone https://github.com/YOUR_USERNAME/volaris-site.git .

# Or use GitHub's deploy token if private repo
git clone https://YOUR_TOKEN@github.com/YOUR_USERNAME/volaris-site.git .
```

#### Step 5: Configure Environment

```bash
# Copy environment file
cp .env.example .env

# Edit if needed
nano .env
```

#### Step 6: Build and Run

```bash
# Build and start
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f web
```

#### Step 7: Configure Firewall

```bash
# Allow HTTP and HTTPS
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp  # SSH (important!)

# Enable firewall
ufw enable

# Check status
ufw status
```

#### Step 8: Install Caddy for SSL

```bash
# Install Caddy
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install caddy

# Create Caddyfile
nano /etc/caddy/Caddyfile
```

**Add this configuration:**
```
yourdomain.com {
    reverse_proxy localhost:80
    encode gzip
    
    # Optional: Add security headers
    header {
        Strict-Transport-Security "max-age=31536000;"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        Referrer-Policy "strict-origin-when-cross-origin"
    }
}
```

```bash
# Reload Caddy
systemctl reload caddy

# Enable auto-start
systemctl enable caddy

# Check status
systemctl status caddy
```

#### Step 9: Point Domain to VPS

1. Log in to your domain registrar (Namecheap, GoDaddy, etc.)
2. Go to DNS settings
3. Add/Update A record:
   - **Type:** A
   - **Host:** @ (or yourdomain.com)
   - **Value:** YOUR_DROPLET_IP
   - **TTL:** Automatic or 300
4. Save changes
5. Wait 10-60 minutes for DNS propagation

#### Step 10: Verify Deployment

```bash
# Check DNS resolution
dig yourdomain.com

# Test HTTPS
curl -I https://yourdomain.com

# Check Docker logs
docker-compose logs web
```

---

### Method 4: AWS EC2

**Best for:** Enterprise, AWS ecosystem, free tier eligible

#### Step 1: Launch EC2 Instance

1. Log in to [AWS Console](https://console.aws.amazon.com/)
2. Navigate to **EC2** → **Launch Instance**
3. Configure:
   - **Name:** volaris-web
   - **AMI:** Ubuntu Server 22.04 LTS
   - **Instance type:** t2.micro (free tier)
   - **Key pair:** Create new or use existing
   - **Security group:**
     - SSH (22) from your IP
     - HTTP (80) from 0.0.0.0/0
     - HTTPS (443) from 0.0.0.0/0
4. Launch instance
5. Note public IP address

#### Step 2: Connect to Instance

```bash
# Download your .pem key file
chmod 400 your-key.pem

# Connect
ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

#### Step 3: Follow Same Steps as DigitalOcean

From here, follow **Method 3: DigitalOcean VPS** starting from Step 3.

The commands are identical for Ubuntu-based systems.

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at https://yourdomain.com
- [ ] SSL certificate is valid (green padlock)
- [ ] All images load correctly
- [ ] Navigation works (all anchor links)
- [ ] Contact email link works (mailto:invest@volarisglobal.com)
- [ ] Mobile responsive (test on phone)
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] No console errors (F12 → Console)
- [ ] robots.txt accessible: https://yourdomain.com/robots.txt
- [ ] Favicon displays correctly

### SEO Checklist

- [ ] Google Search Console verification
- [ ] Submit sitemap (if generated)
- [ ] Update social media meta tags with actual domain
- [ ] Test Open Graph preview: https://www.opengraph.xyz/
- [ ] Add Google Analytics (optional)

---

## Monitoring & Maintenance

### VPS Monitoring

```bash
# Check Docker container status
docker ps

# View logs
docker logs volaris-web

# Check disk space
df -h

# Check memory usage
free -h

# Monitor CPU
top
```

### Update Deployment

```bash
# On VPS, pull latest changes
cd /var/www/volaris
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Backup Strategy

**Automated backup script:**

```bash
# Create backup script
nano /root/backup-volaris.sh
```

**Add this:**
```bash
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
cd /var/www/volaris
tar -czf $BACKUP_DIR/volaris-$DATE.tar.gz .

# Keep only last 7 backups
ls -t $BACKUP_DIR/volaris-*.tar.gz | tail -n +8 | xargs -r rm

echo "Backup completed: volaris-$DATE.tar.gz"
```

```bash
# Make executable
chmod +x /root/backup-volaris.sh

# Add to crontab (daily at 2 AM)
crontab -e

# Add this line:
0 2 * * * /root/backup-volaris.sh >> /var/log/backup.log 2>&1
```

### Restore from Backup

```bash
cd /var/www/volaris
tar -xzf /root/backups/volaris-YYYYMMDD_HHMMSS.tar.gz
docker-compose up -d --build
```

---

## Need Help?

**Support Resources:**
- GitHub Issues: https://github.com/YOUR_USERNAME/volaris-site/issues
- Email: invest@volarisglobal.com
- Docker Docs: https://docs.docker.com/
- DigitalOcean Tutorials: https://www.digitalocean.com/community/tutorials
- Namecheap Knowledge Base: https://www.namecheap.com/support/knowledgebase/

**Common Issues:**
- [Docker container won't start](#troubleshooting-docker)
- [Site shows blank page](#troubleshooting-blank-page)
- [SSL certificate errors](#troubleshooting-ssl)
- [FTP upload fails](#troubleshooting-ftp)

---

**You're all set! 🚀**

Your Volaris Global Limited website is now live and fully under your control.
