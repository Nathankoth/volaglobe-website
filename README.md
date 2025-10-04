# Volaris Global Limited — Official Website

> **Strategic Investments & Advisory**  
> One-page corporate site showcasing Volaris Global's vision, focus areas, and leadership team.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Repository Ownership](#repository-ownership)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Deployment Options](#deployment-options)
  - [Option 1: Docker (Recommended)](#option-1-docker-recommended)
  - [Option 2: Namecheap Shared Hosting (FTP/SFTP)](#option-2-namecheap-shared-hosting-ftpsftp)
  - [Option 3: VPS Deployment](#option-3-vps-deployment)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Design System](#design-system)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

---

## Overview

This repository contains the official website for **Volaris Global Limited**, a strategic investments and advisory group focused on identifying and scaling high-potential ventures across Technology, Real Estate, Renewable Energy, and Consumer Services.

**Key Features:**
- Single-page responsive design
- Professional investor-focused presentation
- WCAG AA accessibility baseline
- Optimized for performance (Lighthouse 90+)
- Mobile-first responsive layout
- Semantic HTML5 with structured data

---

## Repository Ownership

**This repository and all its contents (code, assets, design tokens, documentation) are owned by Ogunbajo Nathaniel and Volaris Global Limited.**

Do not alter ownership, licensing, or redistribute without express written permission from the owner.

- **Owner:** Ogunbajo Nathaniel / Volaris Global Limited
- **License:** Proprietary — All rights reserved
- **Contact:** invest@volarisglobal.com

## Navbar & Branding

### Logo Assets

Logo files are located in `public/assets/branding/`:
- **`volaris_full.png`** - Full logo with wordmark (transparent PNG)
  - **Usage:** Desktop/tablet header, hero sections, print materials
  - **Max Width:** 220px (desktop), 160px (tablet)
  - **Clear Space:** 12-16px around logo
  
- **`volaris_mark.png`** - Mark-only logo (transparent PNG)
  - **Usage:** Mobile header, favicon, app icons, compact UI elements
  - **Size:** 48px (mobile header)
  - **Clear Space:** 12-16px around logo

### Favicon Files

Located in `public/`:
- `favicon-16x16.png` - 16×16 favicon
- `favicon-32x32.png` - 32×32 favicon
- `apple-touch-icon.png` - 180×180 Apple touch icon

All favicons are generated from `volaris_mark.png` with transparent backgrounds.

### Glass Effect Navbar

The sticky navbar uses a translucent glass effect with backdrop blur:

**Default State (over hero):**
```css
background: rgba(13, 10, 11, 0.28);
backdrop-filter: blur(8px) saturate(1.05);
border-bottom: 1px solid rgba(255, 255, 255, 0.06);
```

**Scrolled State (opaque):**
```css
background: rgba(13, 10, 11, 0.88);
box-shadow: 0 8px 24px -6px rgba(13, 10, 11, 0.16);
border-bottom: 1px solid rgba(255, 255, 255, 0.06);
```

**Navigation Colors:**
- Nav Links: `#F3EFF5` (hover: `#72B01D`)
- CTA Button: Background `#72B01D`, Text `#FFFFFF`
- Mobile Menu Icon: `#F3EFF5`

**Responsive Behavior:**
- Desktop/Tablet: Shows full wordmark logo (`volaris_full.png`)
- Mobile (<640px): Shows mark-only logo (`volaris_mark.png`)

**Accessibility:**
- Keyboard navigable with visible focus rings (`#72B01D`)
- ARIA labels on all interactive elements
- WCAG AA contrast ratios maintained

### Replacing Brand Assets

To replace logos:
1. Place new PNG files (with transparent backgrounds) in `public/assets/branding/`
2. Maintain filenames: `volaris_full.png` and `volaris_mark.png`
3. Recommended: Export mark logo at multiple sizes for favicons
4. Update favicon files in `public/` if changing mark design

---

## Technology Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Custom Design System
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Deployment:** Docker (nginx) or Static Export

---

## Quick Start

### Prerequisites

- **Node.js** 18+ ([Install via nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn**
- **Docker** (optional, for containerized deployment)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/volaris-site.git
cd volaris-site

# 2. Install dependencies
npm ci

# 3. Copy environment variables (optional for static site)
cp .env.example .env

# 4. Start development server
npm run dev

# The site will be available at http://localhost:8080
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The production build will be output to the `dist/` directory.

---

## Deployment Options

### Option 1: Docker (Recommended)

**Why Docker?**
- Consistent environment across dev, staging, and production
- Easy to scale and replicate
- Works on any platform (local, VPS, cloud)

#### Step 1: Build Docker Image

```bash
# Build the Docker image
docker build -t volaris-site:latest .

# Verify the image was created
docker images | grep volaris-site
```

#### Step 2: Run Locally

```bash
# Run the container
docker run -d -p 80:80 --name volaris-web volaris-site:latest

# The site will be available at http://localhost
```

#### Step 3: Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

#### Docker Commands Cheat Sheet

```bash
# Stop container
docker stop volaris-web

# Start container
docker start volaris-web

# Remove container
docker rm volaris-web

# View logs
docker logs volaris-web

# Access container shell
docker exec -it volaris-web sh
```

---

### Option 2: Namecheap Shared Hosting (FTP/SFTP)

Namecheap cPanel hosting supports static site uploads via FTP/SFTP.

#### Prerequisites
- Namecheap hosting account with cPanel access
- FTP/SFTP credentials (available in Namecheap dashboard)

#### Step 1: Build the Site

```bash
npm ci
npm run build
# Output is in ./dist/
```

#### Step 2: Upload via FTP

**Option A: Using FileZilla (GUI)**
1. Download [FileZilla](https://filezilla-project.org/)
2. Connect to your Namecheap FTP:
   - **Host:** ftp.yourdomain.com (or IP from cPanel)
   - **Username:** Your cPanel username
   - **Password:** Your cPanel password
   - **Port:** 21 (FTP) or 22 (SFTP)
3. Navigate to `/public_html/` on the server
4. Upload all files from `./dist/` to `/public_html/`

**Option B: Using `lftp` (Command Line)**

```bash
# Install lftp (Linux/Mac)
# Ubuntu/Debian: sudo apt install lftp
# Mac: brew install lftp

# Upload files
lftp -u "FTP_USERNAME,FTP_PASSWORD" ftp.yourdomain.com -e "mirror -R ./dist /public_html --delete; bye"
```

**Option C: Using cPanel File Manager**
1. Log in to your Namecheap cPanel
2. Open **File Manager**
3. Navigate to `public_html/`
4. Click **Upload** and select all files from `./dist/`
5. Wait for upload to complete

#### Step 3: Configure Domain & SSL

1. In Namecheap cPanel, go to **Domains** → ensure your domain points to `public_html/`
2. Enable **AutoSSL** or install **Let's Encrypt SSL** via cPanel
3. Test your site: https://yourdomain.com

#### GitHub Actions Auto-Deploy to Namecheap

See [CI/CD with GitHub Actions](#cicd-with-github-actions) section below.

---

### Option 3: VPS Deployment

For full control, deploy to a VPS (DigitalOcean, Hetzner, AWS EC2, etc.)

#### Step 1: Provision VPS

1. Create a VPS instance (Ubuntu 22.04 recommended)
2. SSH into your server:
   ```bash
   ssh root@your-vps-ip
   ```

#### Step 2: Install Docker

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

#### Step 3: Clone Repository

```bash
# Create directory
mkdir -p /var/www/volaris
cd /var/www/volaris

# Clone your repo (replace with your actual repo URL)
git clone https://github.com/<your-username>/volaris-site.git .

# Copy environment file
cp .env.example .env
nano .env  # Edit as needed
```

#### Step 4: Build and Run

```bash
# Build and start with Docker Compose
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f web
```

#### Step 5: Configure Reverse Proxy (Optional)

For SSL and custom domain, set up nginx or Caddy as a reverse proxy:

**Using Caddy (easiest for SSL):**

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

**Caddyfile contents:**
```
yourdomain.com {
    reverse_proxy localhost:80
    encode gzip
}
```

```bash
# Reload Caddy
systemctl reload caddy

# Enable auto-start
systemctl enable caddy
```

Caddy automatically provisions and renews Let's Encrypt SSL certificates.

---

## CI/CD with GitHub Actions

This repository includes a GitHub Actions workflow (`.github/workflows/ci-deploy.yml`) that:
1. ✅ Builds the site on every push to `main`
2. ✅ Runs linting (if configured)
3. ✅ Creates build artifacts
4. ✅ Deploys to Namecheap via FTP (when secrets are configured)
5. ✅ Creates GitHub Releases with downloadable build archives

### Setup GitHub Secrets

To enable auto-deploy, add these secrets in your GitHub repository:

**Settings → Secrets and variables → Actions → New repository secret**

#### For Namecheap FTP Deploy:
- `FTP_HOST` → e.g., `ftp.yourdomain.com`
- `FTP_USERNAME` → Your cPanel username
- `FTP_PASSWORD` → Your cPanel password

#### For VPS Deploy (optional):
- `VPS_HOST` → Your VPS IP address
- `VPS_USERNAME` → SSH username (e.g., `root`)
- `VPS_SSH_KEY` → Your private SSH key

### Manual Workflow Trigger

You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Select **Build and Deploy Volaris Site**
3. Click **Run workflow** → **Run workflow**

---

## Design System

Volaris Global Limited uses a custom design system built on Tailwind CSS with semantic color tokens.

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | #0D0A0B | Headlines, body text, primary UI |
| `--accent` | #72B01D | CTAs, highlights, links |
| `--accent-dark` | #3F7D20 | Hover states, depth |
| `--background` | #F3EFF5 | Page background |
| `--surface` | #FFFFFF | Cards, elevated surfaces |
| `--muted` | #454955 | Secondary text, disabled states |
| `--border` | #E6E7EB | Borders, dividers |

### Typography

- **Headings:** Montserrat (700, 800)
- **Body:** Inter (400, 500, 600)

### Spacing & Rhythm

- **Container max-width:** 1200px
- **Section padding:** 96px (desktop), 64px (tablet), 48px (mobile)
- **Card border-radius:** 12px
- **Button border-radius:** 8px

Design tokens are defined in:
- `src/index.css` (CSS variables)
- `tailwind.config.ts` (Tailwind theme extensions)

---

## Project Structure

```
volaris-site/
├── .github/
│   └── workflows/
│       └── ci-deploy.yml        # GitHub Actions CI/CD
├── public/
│   ├── assets/
│   │   └── branding/            # Brand assets (logos)
│   │       ├── volaris_full.jpg # Full logo with wordmark
│   │       └── volaris_mark.jpg # Mark-only logo
│   ├── favicon-32x32.png        # Favicon (32x32)
│   ├── apple-touch-icon.png     # Apple touch icon (180x180)
│   └── robots.txt               # SEO directives
├── src/
│   ├── assets/                  # Images and media
│   │   ├── hero-bg.jpg
│   │   ├── ogunbadru.jpg        # Team: Ogunbajo Nathaniel
│   │   ├── olayton.jpg          # Team: Olayitan Afiz
│   │   └── mrchris.jpg          # Team: Mr. Chris
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable UI components (shadcn)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── VisionMission.tsx
│   │   ├── InvestmentFocus.tsx
│   │   ├── Leadership.tsx
│   │   ├── InvestorCTA.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Index.tsx            # Main landing page
│   │   └── NotFound.tsx         # 404 page
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles + design tokens
├── .env.example                 # Environment variables template
├── docker-compose.yml           # Docker Compose config
├── Dockerfile                   # Docker build instructions
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── vite.config.ts               # Vite build configuration
└── README.md                    # This file
```

---

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### Key Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `CONTACT_EMAIL` | Primary contact email | `invest@volarisglobal.com` |
| `LINKEDIN_URL` | LinkedIn company page | `https://linkedin.com/company/volaris-global-limited` |

**Note:** This is a static site, so most environment variables are optional and used only if backend features are added in the future.

---

## Troubleshooting

### Build Failures

**Problem:** `npm run build` fails with errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

### Docker Container Won't Start

**Problem:** Container exits immediately

**Solution:**
```bash
# Check logs
docker logs volaris-web

# Common fixes:
# 1. Ensure port 80 is not in use
lsof -i :80  # Check what's using port 80
sudo systemctl stop apache2  # Stop Apache if running

# 2. Rebuild image
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### FTP Upload Issues

**Problem:** Files won't upload to Namecheap

**Solutions:**
1. Verify FTP credentials in Namecheap cPanel
2. Check firewall settings (port 21 for FTP, 22 for SFTP)
3. Try SFTP instead of FTP
4. Use cPanel File Manager as fallback

### Site Shows Blank Page After Deploy

**Problem:** Site loads but shows nothing

**Solutions:**
1. Check browser console for errors (F12)
2. Verify all files uploaded correctly (check `index.html` exists)
3. Clear browser cache (Ctrl+Shift+R)
4. Check file permissions on server (should be 644 for files, 755 for directories)

### SSL Certificate Issues

**Namecheap:**
- Enable AutoSSL in cPanel → SSL/TLS Status
- Wait 10-15 minutes for certificate provisioning

**VPS with Caddy:**
- Check Caddy logs: `journalctl -u caddy -f`
- Verify domain DNS points to your VPS IP

---

## Independent Hosting

This project is designed for complete independence and can be deployed to any hosting provider without external dependencies.

### Step 1: Verify You Have Full Source Code
```bash
# Clone the repo to your local machine
git clone https://github.com/<your-username>/volaris-site.git
cd volaris-site

# Verify you can build it
npm ci
npm run build

# Success? You have everything you need!
```

### Step 2: Deploy to Your Own Infrastructure

Choose one of the deployment options above (Docker, Namecheap, VPS).

### Step 3: Update DNS

1. Log in to your domain registrar (Namecheap, GoDaddy, etc.)
2. Update A record to point to your new host's IP
3. Update CNAME if using a subdomain
4. Wait 24-72 hours for DNS propagation

### Step 4: Verify New Hosting

```bash
# Check DNS propagation
dig yourdomain.com

# Check site loads
curl -I https://yourdomain.com
```

**Important:** Always keep a backup of your codebase!

---

## Contact

**Volaris Global Limited**

- **Email:** invest@volarisglobal.com
- **Website:** [volarisglobal.com](#) *(update after deployment)*
- **LinkedIn:** [linkedin.com/company/volaris-global-limited](https://linkedin.com/company/volaris-global-limited)

For investor enquiries, partnerships, or press:  
📧 **invest@volarisglobal.com**

---

## License

**Proprietary** — All rights reserved by Volaris Global Limited.

This code is the exclusive property of Volaris Global Limited. Unauthorized copying, distribution, or use is strictly prohibited without written permission.

---

**Built with ❤️ for sustainable returns and resilient businesses.**
