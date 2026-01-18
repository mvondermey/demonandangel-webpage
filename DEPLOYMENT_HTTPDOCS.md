# 🚀 Netcup httpdocs Deployment Guide

## ✅ Your Website is Ready for httpdocs Deployment!

### 📁 What You Have:
- **Static files** in `/out/` folder
- **13 pages** with original images
- **German SEO content**
- **Mobile responsive design**

---

## 🎯 Step-by-Step Deployment (httpdocs)

### 1️⃣ Login to Netcup SCP
```
URL: https://scp.netcup.net
Username: Your Netcup username
Password: Your password
```

### 2️⃣ Navigate to Webhosting
1. Click **"Webhosting"** in the left menu
2. Select your hosting package
3. Click **"File Manager"**

### 3️⃣ Go to httpdocs Directory
1. In File Manager, navigate to **`/httpdocs/`**
2. This is your web root directory

### 4️⃣ Backup Existing Files (IMPORTANT!)
1. In `/httpdocs/`, select all files
2. Right-click → **"Download"** (backup to your computer)
3. Save backup somewhere safe

### 5️⃣ Upload Your Website

#### Method A: File Manager (Easiest)
1. **Delete all files** in `/httpdocs/`
2. **Upload contents of `out` folder**:
   - Open your local `/out/` folder
   - Select ALL files and folders
   - Drag them into File Manager
   - Drop them into `/httpdocs/`
   - Wait for upload to complete

#### Method B: FTP/SFTP
```
Host: your-server.netcup.net
Username: your-ftp-username
Password: your-ftp-password
Port: 21 (FTP) or 22 (SFTP)

Upload contents of /out/ to /httpdocs/
```

### 6️⃣ Upload .htaccess
1. Copy the `.htaccess` file from your project
2. Upload it to `/httpdocs/` folder
3. This ensures proper routing

### 7️⃣ Set Document Root
1. In Netcup SCP → **Webhosting** → **Domains**
2. Select your domain (demonandangel.com)
3. Set **Document Root** to `/httpdocs/`
4. Save changes

---

## 📁 Files to Upload (from `/out/` folder):

```
out/
├── index.html              # Homepage
├── 404.html               # Error page
├── robots.txt             # SEO robots
├── sitemap.xml            # SEO sitemap
├── _next/                 # Next.js assets
├── images/                # Your original images
├── faq/                   # FAQ page
├── kontakt/               # Contact page
├── preise/                # Prices page
├── laser-haarentfernung-gesicht/
├── laser-haarentfernung-intimbereich/
├── laser-haarentfernung-maenner/
└── schmerzfreie-laser-haarentfernung/
```

---

## ⚡ After Deployment

### ✅ Test Your Website:
1. Visit: `https://demonandangel.com`
2. Check all pages work
3. Test mobile version
4. Verify images load correctly
5. Test WhatsApp links

### 🔍 SEO Check:
1. View page source → check German content
2. Test contact form
3. Verify WhatsApp booking works
4. Check Google Maps integration

---

## 🆘 Troubleshooting for httpdocs

### ❌ If you see 404 errors:
- Check that `.htaccess` is uploaded to `/httpdocs/`
- Verify document root is `/httpdocs/`
- Ensure all files are uploaded correctly

### ❌ If images don't load:
- Check `/httpdocs/images/` folder exists
- Verify image paths in HTML
- Check file permissions (755 for folders, 644 for files)

### ❌ If styling is broken:
- Ensure `/httpdocs/_next/` folder is uploaded
- Check CSS files are accessible
- Verify file permissions

### ❌ If you see directory listing:
- Make sure `index.html` is in `/httpdocs/`
- Check `.htaccess` routing rules

---

## 📞 Netcup Support

### Contact Netcup if needed:
- Phone: +49 511 132 132 30
- Email: support@netcup.de
- Knowledge Base: wiki.netcup.de

### Common httpdocs Issues:
- **File permissions**: Set to 755 for folders, 644 for files
- **Domain propagation**: Wait 24-48 hours after DNS changes
- **SSL certificate**: Usually auto-installed by Netcup
- **httpdocs vs www**: Always use httpdocs for your hosting package

---

## 🎉 Success!

Your website should now be live at:
- **https://demonandangel.com**
- **http://demonandangel.com**

### 📊 What You Get:
✅ Professional German laser hair removal website  
✅ 13 SEO-optimized pages  
✅ Original images from your business  
✅ Mobile responsive design  
✅ Fast loading static files  
✅ WhatsApp booking integration  
✅ Google Maps location  
✅ Contact forms  

**Your modern website is now live in httpdocs and ready to attract customers!** 🚀
