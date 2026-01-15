# Deploy to Cloudflare Pages

## Quick Deploy via Cloudflare Dashboard

1. **Go to Cloudflare Pages**
   - Visit: https://dash.cloudflare.com/
   - Click: Workers & Pages → Create application → Pages → Connect to Git

2. **Connect GitHub Repository**
   - Authorize Cloudflare to access your GitHub
   - Select repository: `ethical-capital-site`
   - Click: Begin setup

3. **Configure Build Settings**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: (leave empty)
   Node version: 18
   ```

4. **Add Environment Variable**
   - Click "Add variable" in the Environment variables section
   - Variable name: `WEB3FORMS_ACCESS_KEY`
   - Value: `b23a8a1d-bd5b-4c12-8cbd-f226c01510aa`

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at: `ethical-capital-site.pages.dev`

## Alternative: Deploy via Cloudflare API

If you have a Cloudflare API token, you can use the script below:

```bash
# Set your Cloudflare credentials
export CLOUDFLARE_API_TOKEN="your_api_token_here"
export CLOUDFLARE_ACCOUNT_ID="your_account_id_here"

# The repository is already connected to GitHub
# Cloudflare will automatically deploy from the main branch
```

## Post-Deployment

### Add Custom Domain
1. Go to your Pages project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain (e.g., ethicalcapital.com)
4. Follow DNS configuration instructions

### Test Contact Form
1. Visit your deployed site
2. Go to the Contact page
3. Submit a test form
4. Check rmkmgtholdings@gmail.com for the submission

## Automatic Deployments

Every time you push to the `main` branch on GitHub, Cloudflare will automatically:
- Build your site
- Deploy the new version
- Make it live within minutes

## Repository Information
- GitHub: https://github.com/cidrum/ethical-capital-site
- Branch: main
- Contact form email: rmkmgtholdings@gmail.com
