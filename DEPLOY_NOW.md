# Deploy to Cloudflare Pages - Step by Step

## Your Cloudflare Setup
- ✅ Account ID: `f88ed3952168d010955bc0e5db9c2802`
- ✅ Domain: `ethicalcapitalgroup.com` (active and ready)
- ✅ GitHub Repo: `https://github.com/cidrum/ethical-capital-site`
- ✅ Web3Forms Key: `b23a8a1d-bd5b-4c12-8cbd-f226c01510aa`

## Deploy in 5 Minutes

### Step 1: Create Pages Project
1. Go to: https://dash.cloudflare.com/f88ed3952168d010955bc0e5db9c2802/pages
2. Click: **Create application**
3. Click: **Connect to Git**
4. Click: **Connect GitHub** (authorize if prompted)
5. Select repository: **ethical-capital-site**
6. Click: **Begin setup**

### Step 2: Configure Build Settings
```
Project name: ethical-capital-site
Production branch: main
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
```

### Step 3: Add Environment Variable
Click **Add variable** and enter:
```
Variable name: WEB3FORMS_ACCESS_KEY
Value: b23a8a1d-bd5b-4c12-8cbd-f226c01510aa
```

### Step 4: Deploy
Click **Save and Deploy**

Wait 2-3 minutes for the build to complete.

### Step 5: Add Custom Domain
1. Once deployed, go to: **Custom domains**
2. Click: **Set up a custom domain**
3. Enter: `ethicalcapitalgroup.com`
4. Click: **Continue**
5. Cloudflare will automatically configure DNS (since your domain is already in Cloudflare)
6. Also add: `www.ethicalcapitalgroup.com` (repeat the process)

## Done!
Your site will be live at:
- https://ethicalcapitalgroup.com
- https://www.ethicalcapitalgroup.com

Contact form will send to: **rmkmgtholdings@gmail.com**

## Future Updates
Just push to GitHub - Cloudflare auto-deploys from the main branch!
