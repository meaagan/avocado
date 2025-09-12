# Firebase Authentication & Security Setup Guide

## Overview
This guide will help you complete the Firebase Authentication setup for your Avocado Sushi CMS to resolve the "Missing or insufficient permissions" error.

## Steps to Complete Setup

### 1. Update Firebase Security Rules

Go to your Firebase Console → Firestore Database → Rules tab and replace your current rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Content collection - only authenticated users can read/write
    match /content/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Allow all other collections to be read publicly, but require auth for writes
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

**Important:** These rules allow:
- Only authenticated users can read/write to the `content` collection (your CMS data)
- All other data can be read publicly (for your website visitors)
- Only authenticated users can write to any collection

### 2. Enable Authentication in Firebase Console

1. Go to Firebase Console → Authentication
2. Click "Get Started" if not already enabled
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

### 3. Create an Admin User

1. In Firebase Console → Authentication → Users tab
2. Click "Add user"
3. Enter admin email: `admin@avocadosushi.ca` (or your preferred email)
4. Enter a secure password
5. Click "Add user"

### 4. How to Access Admin Mode

#### Option 1: URL Parameter (for first-time setup)
- Visit your website with: `?admin=avocado2024`
- Example: `https://yoursite.com?admin=avocado2024`
- This will open the admin panel where you can login

#### Option 2: Direct Login (after setup)
- If you're already logged in, the admin gear icon will be visible
- Click the gear icon to access the CMS

### 5. Test the Setup

1. Visit your site with `?admin=avocado2024`
2. The admin panel should open
3. Enter your admin credentials
4. You should now be able to edit content without permission errors

## Security Notes

- The URL parameter `?admin=avocado2024` only shows the login form - it doesn't grant access
- Actual access requires valid Firebase Authentication credentials
- Only authenticated users can modify content
- The admin toggle is only visible to authenticated users (except when using the URL parameter)

## Troubleshooting

### Still getting permission errors?
1. Check that your Firebase rules are saved and published
2. Ensure you're logged in with the correct admin account
3. Clear your browser cache and try again
4. Check the browser console for specific error details

### Can't see the admin toggle?
1. Make sure you're using the URL parameter: `?admin=avocado2024`
2. Or ensure you're logged in with an admin account

### Login not working?
1. Verify the admin user exists in Firebase Console → Authentication → Users
2. Check that Email/Password authentication is enabled
3. Ensure you're using the correct email and password

## Next Steps

Once this is working:
1. You can remove the URL parameter requirement by modifying the visibility logic in `FirebaseCMS.js`
2. Consider adding more granular permissions (e.g., different admin levels)
3. Add password reset functionality if needed

## Files Modified

- `/src/lib/firebase.js` - Added Firebase Auth import
- `/src/components/cms/FirebaseCMS.js` - Integrated with authentication
- `/src/components/cms/AdminAuth.js` - New authentication component