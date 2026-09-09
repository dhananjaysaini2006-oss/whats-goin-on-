import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5173,
    open: false,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html')
      }
    }
  },
  plugins: [
    {
      name: 'rss-local-proxy',
      configureServer(server) {
        server.middlewares.use('/api/proxy-rss', async (req, res) => {
          try {
            const urlObj = new URL(req.url, 'http://localhost:5173');
            const targetUrl = urlObj.searchParams.get('url');
            if (!targetUrl) {
              res.statusCode = 400;
              res.end('Missing target url');
              return;
            }

            const response = await fetch(targetUrl, {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache'
              }
            });

            const isExtractImage = urlObj.searchParams.get('extract') === 'image';
            const text = await response.text();

            if (isExtractImage) {
              const finalBaseUrl = response.url || targetUrl;
              const extractedImage = extractOgImage(text, finalBaseUrl);
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Cache-Control', 'public, max-age=86400');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: !!extractedImage, image: extractedImage }));
              return;
            }

            const contentType = response.headers.get('content-type') || 'application/xml; charset=utf-8';
            res.setHeader('Content-Type', contentType);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.statusCode = response.status;
            res.end(text);
          } catch (err) {
            res.statusCode = 502;
            res.end(`Proxy error: ${err.message}`);
          }
        });
      }
    }
  ]
});

function extractOgImage(html, baseUrl) {
  if (!html) return null;
  const patterns = [
    /<meta[^>]+(?:property|name)=["'](?:og:image|og:image:url|og:image:secure_url|twitter:image|twitter:image:src)["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|og:image:url|og:image:secure_url|twitter:image|twitter:image:src)["']/i,
    /<link[^>]+rel=["'](?:image_src|default_image)["'][^>]+href=["']([^"']+)["']/i,
    /<meta[^>]+itemprop=["']image["'][^>]+content=["']([^"']+)["']/i
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      let rawUrl = match[1].trim().replace(/&amp;/g, '&');
      if (rawUrl.startsWith('//')) {
        rawUrl = 'https:' + rawUrl;
      } else if (rawUrl.startsWith('/') && baseUrl) {
        try {
          rawUrl = new URL(rawUrl, baseUrl).href;
        } catch (e) {}
      }
      if (
        rawUrl.startsWith('http') &&
        !rawUrl.includes('1x1') &&
        !rawUrl.includes('pixel') &&
        !rawUrl.includes('favicon') &&
        !rawUrl.includes('analytics')
      ) {
        return rawUrl;
      }
    }
  }
  return null;
}
