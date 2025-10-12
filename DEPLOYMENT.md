# 🚀 Deployment Guide for Aditi's Portfolio

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `portfolio` (or any name you prefer)
5. Make it public
6. Don't initialize with README (we already have files)
7. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Update Homepage URL

Edit the `package.json` file and update the homepage URL:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio"
}
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build your React app for production
2. Create a `gh-pages` branch
3. Push the built files to GitHub Pages
4. Make your site available at `https://YOUR_USERNAME.github.io/portfolio`

### Step 5: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

## Alternative Deployment Options

### Netlify Deployment

1. Go to [Netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Choose your portfolio repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

### Vercel Deployment

1. Go to [Vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "Import Project"
4. Choose your portfolio repository
5. Vercel will auto-detect React settings
6. Click "Deploy"

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

## Custom Domain (Optional)

### For GitHub Pages:

1. Create a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update your DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub repository settings:
   - Go to Pages settings
   - Add your custom domain

### For Netlify/Vercel:

1. In your hosting platform dashboard
2. Go to Domain settings
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure you've updated the homepage URL in package.json
2. **Build Fails**: Check that all dependencies are installed (`npm install`)
3. **Styling Issues**: Ensure all CSS files are properly imported
4. **GitHub Pages Not Updating**: Try running `npm run deploy` again

### Useful Commands:

```bash
# Check if everything is working locally
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

## Updating Your Portfolio

After making changes to your portfolio:

1. Test locally: `npm start`
2. Build for production: `npm run build`
3. Deploy: `npm run deploy`
4. Your changes will be live on GitHub Pages

## Final Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Homepage URL updated in package.json
- [ ] Site deployed with `npm run deploy`
- [ ] GitHub Pages enabled in repository settings
- [ ] Site accessible at your GitHub Pages URL
- [ ] All sections working properly
- [ ] Contact form functional
- [ ] Mobile responsive design working
- [ ] All links and buttons working

## Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all dependencies are installed
4. Check GitHub Pages build logs in repository settings

Your portfolio should now be live and accessible to the world! 🌟
