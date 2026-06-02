# 🚀 Trouble-Gan Deployment Guide (Google Firebase Hosting - FREE)

## ✅ What's Already Done
- [x] Production build created (`dist/` folder)
- [x] Firebase configuration files set up (`firebase.json`, `.firebaserc`)
- [x] Developer credit added: "Developed By Kulwanth Kotagiri"

## 📋 Deployment Steps

### Step 1: Create a Google Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Create Project"**
3. Enter project name: `trouble-gan-game` (or your preferred name)
4. Accept the terms and click **"Create Project"**
5. Wait for initialization to complete (~1-2 minutes)

### Step 2: Get Your Project ID
1. In Firebase Console, look at the **Project Settings** (⚙️ icon)
2. Copy the **Project ID** (looks like: `trouble-gan-abcd1234`)

### Step 3: Update Firebase Configuration
Open `.firebaserc` and replace with your project ID:
```json
{
  "projects": {
    "default": "your-project-id-here"
  }
}
```

### Step 4: Login to Firebase
Open Terminal/PowerShell in your project folder and run:
```powershell
npx firebase login
```
- This opens a browser to authenticate with your Google account
- Click "Allow" to grant permission
- Return to terminal when done

### Step 5: Deploy to Firebase Hosting
Run this command:
```powershell
npx firebase deploy
```

### Step 6: Access Your Live Website
After deployment completes, you'll see:
```
✓  Deploy complete!

Project Console: https://console.firebase.google.com/project/your-project-id
Hosting URL: https://your-project-id.web.app
```

**Your website is now LIVE!** 🎉

## 📦 Free Tier Benefits
- ✅ **1 GB Storage** (plenty for your site)
- ✅ **10 GB/Month bandwidth** (more than enough)
- ✅ **Automatic SSL/TLS certificate** (HTTPS)
- ✅ **Custom domain support** (optional, paid)
- ✅ **Zero cost**

## 🔄 Updates & Redeploy
Whenever you make changes to your site:
1. Build the project: `npm run build`
2. Deploy again: `npx firebase deploy`

## 🆘 Troubleshooting

### "firebase command not found"
Try using `npx firebase` instead:
```powershell
npx firebase login
npx firebase deploy
```

### Still getting errors?
1. Ensure you're in the correct directory: `cd "c:\Users\Admin\Downloads\my-pet-hooligan-game (2)"`
2. Check that `dist/` folder exists with `index.html` inside
3. Verify `.firebaserc` has your correct project ID

## 📝 Notes
- **Production build size:** ~277 KB (highly optimized with Vite)
- **Framework:** React 19 + TypeScript + Tailwind CSS
- **Hosting:** Google Firebase (Free tier)
- **Developer:** Kulwanth Kotagiri

## 🎮 Your Site Features
- Custom cursor with animations
- Dancing character component
- Particle effects
- Responsive design
- Game modes showcase
- Faction information
- News section
- Partner logos carousel

---
**Need help?** Check [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
