# 🧪 Testing Cross-Browser Form Tracking

## Quick Test Guide

### **Step 1: Install Dependencies**
```bash
npm install
```

### **Step 2: Start Development Server**
```bash
npm run dev
```

### **Step 3: Test Scenarios**

#### **Test 1: Basic Form Submission**
1. Open `http://localhost:3000`
2. Fill out the visitor consent form
3. Submit the form
4. **Expected**: Form disappears, portfolio loads

#### **Test 2: Clear Browser Data**
1. After submitting form, clear browser cache/history
2. Refresh the page
3. **Expected**: Form should NOT appear (session cookie persists)

#### **Test 3: Different Browser**
1. Fill form in Chrome
2. Open Firefox and visit the same URL
3. **Expected**: Form should NOT appear (IP + user agent tracking)

#### **Test 4: Incognito Mode**
1. Fill form in normal mode
2. Open incognito/private window
3. Visit the same URL
4. **Expected**: Form should NOT appear (IP tracking)

#### **Test 5: Different Device/Network**
1. Fill form on desktop
2. Visit from mobile (different IP)
3. **Expected**: Form SHOULD appear (different IP/user agent)

## 🔍 Debug Information

### **Check Browser Console:**
- Look for consent tracking logs
- Check for any errors in API calls

### **Check Server Logs:**
- Look for consent storage/retrieval logs
- Monitor API endpoint calls

### **Check Database:**
```bash
# If using SQLite, check the database file
ls -la visitor-consent.db
```

## 🚨 Troubleshooting

### **Form Still Appears After Submission:**
1. Check browser console for errors
2. Verify API endpoints are working
3. Check server logs for consent storage

### **Form Doesn't Appear for New Users:**
1. Clear all browser data completely
2. Check if session cookies are being set
3. Verify IP tracking is working

### **Database Issues:**
1. Ensure SQLite dependencies are installed
2. Check file permissions for database creation
3. Verify database path is writable

## ✅ Success Indicators

- Form disappears after submission
- Form doesn't reappear after clearing cache
- Form doesn't appear in different browsers on same device
- Form appears for truly new users/devices
- Server logs show consent tracking
- Database file is created and populated

## 🎯 Expected Behavior

| Scenario | Form Should Appear? | Reason |
|----------|-------------------|---------|
| First visit | ✅ Yes | New user |
| After submission | ❌ No | Consent stored |
| Clear cache | ❌ No | Session cookie persists |
| Different browser | ❌ No | IP + user agent tracking |
| Incognito mode | ❌ No | IP tracking |
| Different device | ✅ Yes | Different IP/user agent |
| After 30 days | ✅ Yes | Session expired |

This testing ensures your cross-browser form tracking solution is working correctly!
