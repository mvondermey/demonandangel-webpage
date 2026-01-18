# Deployment Guide for Netcup

## Option 1: Netcup Webhosting (Static Site) - RECOMMENDED

### Step 1: Build the static site
```bash
npm run build
```

### Step 2: Upload to Netcup
1. Login to Netcup SCP
2. Go to "Webhosting" → "File Manager"
3. Upload the `.next` folder contents to your web space
4. Set the `.next` folder as document root

### Step 3: Configure .htaccess
Create `.htaccess` in your web root:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]
```

## Option 2: Netcup VPS with Docker

### Step 1: Create Dockerfile
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

### Step 2: Build and run
```bash
docker build -t demonandangel .
docker run -p 3000:3000 demonandangel
```

## Option 3: Netcup VPS with Node.js

### Step 1: Install Node.js on VPS
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Upload and run
```bash
# Upload files to VPS
scp -r /path/to/project/* root@your-vps:/var/www/demonandangel/

# On VPS:
cd /var/www/demonandangel
npm install
npm run build
npm install -g pm2
pm2 start npm --name "demonandangel" -- start
```

## Option 4: Netcup Cloud Hosting (WordPress Alternative)

### Step 1: Use Netcup Cloud Hosting
1. Order Netcup Cloud Hosting (better than shared hosting)
2. Install Node.js and dependencies
3. Deploy as in Option 3

## Option 5: External Hosting Services

### Vercel (Easiest)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

## **Recommendation for SEO:**

Use **Option 1 (Static Site)** because:
- ✅ Fastest loading times
- ✅ Best for Google SEO
- ✅ No server maintenance
- ✅ Works with Netcup Webhosting
- ✅ Cheap (€3-5/month)

## **For Dynamic Features:**

If you need contact forms, booking systems, etc., use **Option 2 (Docker)** or **Option 3 (VPS)**.

## **WordPress Alternative:**

You DON'T need WordPress! Next.js is much better for:
- ✅ Performance (10x faster than WordPress)
- ✅ SEO (Google loves Next.js)
- ✅ Security (no vulnerabilities)
- ✅ Modern development

## **Quick Start:**

1. Run `npm run build`
2. Upload `.next` folder to Netcup Webhosting
3. Set document root to `.next`
4. Done! 🎉
