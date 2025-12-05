# Terminal Commands for Dev Server

## Option 1: Try Dev Server on Different Ports

### Kill all Next.js processes first:
```bash
cd /Users/anu/Work/anu-portfolio && pkill -9 -f "next" && pkill -9 -f "node.*dev"
```

### Clear cache:
```bash
cd /Users/anu/Work/anu-portfolio && rm -rf .next out node_modules/.cache .turbo .swc
```

### Try port 8080 (less restricted):
```bash
cd /Users/anu/Work/anu-portfolio && PORT=8080 npm run dev
```

### Or try port 8081:
```bash
cd /Users/anu/Work/anu-portfolio && PORT=8081 npm run dev
```

### Or try port 5000:
```bash
cd /Users/anu/Work/anu-portfolio && PORT=5000 npm run dev
```

---

## Option 2: Build Static Site (Recommended for Static Export)

### Build the site:
```bash
cd /Users/anu/Work/anu-portfolio && npm run build
```

### Serve the built site on port 8000:
```bash
cd /Users/anu/Work/anu-portfolio && npx serve -s out -l 8000
```

### Or use Python's simple HTTP server:
```bash
cd /Users/anu/Work/anu-portfolio/out && python3 -m http.server 8000
```

### Or use Node's http-server:
```bash
cd /Users/anu/Work/anu-portfolio && npx http-server out -p 8000 -o
```

---

## Option 3: Check What's Using Ports

### Check if port 3000 is in use:
```bash
lsof -i :3000
```

### Check if port 3001 is in use:
```bash
lsof -i :3001
```

### Kill specific process using a port:
```bash
kill -9 $(lsof -ti:3000)
```

---

## Option 4: Use Next.js with Explicit Port Flag

```bash
cd /Users/anu/Work/anu-portfolio && npx next dev -p 8080 -H 127.0.0.1
```

---

## Quick All-in-One: Clear & Restart

```bash
cd /Users/anu/Work/anu-portfolio && pkill -9 -f "next" && rm -rf .next && PORT=8080 npm run dev
```

---

## To Open in Chrome After Server Starts

Once server is running, open:
```bash
open -a "Google Chrome" "http://localhost:8080"
```

Or replace `8080` with whatever port worked.
