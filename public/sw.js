// Service Worker for PWA functionality
const CACHE_NAME = 'anu-portfolio-v3'
const urlsToCache = [
  '/',
  '/me',
  '/work/reportcaster',
  '/work/ml-functions',
  '/work/iq-plugin',
  '/images/og-image.jpg',
  '/images/favicon-192x192.png',
  '/images/favicon-512x512.png',
]

// Install event - clear ALL old caches first, then cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      // Delete ALL existing caches
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName)
        })
      )
    }).then(() => {
      // Now open new cache
      return caches.open(CACHE_NAME)
    }).then((cache) => {
      return cache.addAll(urlsToCache)
    }).catch((err) => {
      console.log('Cache install failed:', err)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  return self.clients.claim()
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // Skip caching ALL Next.js internal files (they're dynamic and shouldn't be cached)
  // This includes all _next/static files, CSS, JS chunks, etc.
  const url = new URL(event.request.url)
  if (url.pathname.includes('/_next/') ||
    url.pathname.startsWith('/_next/') ||
    url.pathname.includes('layout.css') ||
    url.pathname.includes('app-pages-internals') ||
    url.pathname.includes('main-app.js') ||
    url.pathname.includes('page.js') ||
    url.pathname.includes('error.js') ||
    url.pathname.includes('not-found.js') ||
    url.pathname.includes('.css') ||
    url.pathname.includes('.js')) {
    // Always fetch from network for Next.js internal files - bypass cache completely
    event.respondWith(fetch(event.request))
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((response) => {
            // Don't cache 404 responses or invalid responses
            if (!response || response.status !== 200 || response.status === 404 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return response
          })
      })
      .catch(() => {
        // Return offline page if available
        return caches.match('/')
      })
  )
})

