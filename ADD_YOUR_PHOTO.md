# 📸 How to Add Your Photo

## Quick Steps:

1. **Add your photo** to the `public/images/` folder
2. **Name it** `profile-photo.jpg` (or update the code to use your filename)
3. **Recommended size**: 300x300 pixels or larger (square image works best)
4. **Formats supported**: JPG, PNG, WebP

## Detailed Instructions:

### Step 1: Prepare Your Photo
- **Size**: At least 300x300 pixels (square format recommended)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution for crisp display
- **Background**: Professional headshot works best

### Step 2: Add to Project
1. Copy your photo to: `public/images/profile-photo.jpg`
2. Or rename your photo to `profile-photo.jpg` and place it in `public/images/`

### Step 3: Alternative Filenames
If you want to use a different filename, update the Hero.js file:

```javascript
// Change this line in src/components/Hero.js
src="/images/profile-photo.jpg"
// To your filename:
src="/images/your-photo-name.jpg"
```

### Step 4: Test
- Save your photo in the correct location
- Refresh your browser at http://localhost:3001/portfolio
- Your photo should now appear in the Hero section!

## 📁 File Structure:
```
portfolio/
├── public/
│   ├── images/
│   │   └── profile-photo.jpg  ← Your photo goes here
│   └── index.html
├── src/
└── ...
```

## 🎨 Photo Tips:
- **Professional headshot** works best
- **Good lighting** and clear background
- **Square crop** for perfect circle display
- **High resolution** for crisp quality
- **Smile!** 😊

## 🔄 Fallback:
If no photo is found, it will show "AD" initials as a placeholder.

Your photo will be displayed in a beautiful circular frame with a pink gradient ring around it! 🌸
