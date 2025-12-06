# Fix 404 Errors on Case Study Pages

## Problem
- 404 errors for static assets (`/next/static/...`)
- Case study pages not loading
- Dev server permission errors on port 3000

## Solution

### Step 1: Kill all processes on port 3000
```bash
lsof -ti:3000 | xargs kill -9
```

If that doesn't work, try:
```bash
sudo lsof -ti:3000 | xargs kill -9
```

### Step 2: Complete cache cleanup
```bash
npm run clean:full
```

This removes:
- `.next` directory
- `out` directory  
- `node_modules/.cache`
- `.turbo` cache
- TypeScript build info
- ESLint cache

### Step 3: Restart dev server
```bash
npm run dev
```

### Step 4: Access case studies with CORRECT URLs
The URLs should be:
- http://localhost:3000/work/reportcaster/
- http://localhost:3000/work/ml-functions/
- http://localhost:3000/work/iq-plugin/

**NOT** the malformed URL like:
- ❌ `http://localhost:3000/Principal UX Designer | Enterprise Design & AI/ML UX`

## If port 3000 is still blocked

Try a different port:
```bash
PORT=3001 npm run dev
```

Then access:
- http://localhost:3001/work/reportcaster/

## Quick Fix Command
Run all steps at once:
```bash
lsof -ti:3000 | xargs kill -9 2>/dev/null; npm run clean:full && npm run dev
```
