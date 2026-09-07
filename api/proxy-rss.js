export default async function handler(req, res) {
  // Support both Node.js (req, res) and Web Standard Fetch API (request)
  const isNode = res && typeof res.status === 'function';
  let targetUrl = '';

  if (isNode) {
    const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    targetUrl = req.query?.url || urlObj.searchParams.get('url');
  } else {
    const urlObj = new URL(req.url);
    targetUrl = urlObj.searchParams.get('url');
  }

  if (!targetUrl) {
    if (isNode) return res.status(400).send('Missing target url');
    return new Response('Missing target url', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });

    const isExtractImage = isNode
      ? (req.query?.extract === 'image' || urlObj.searchParams.get('extract') === 'image')
      : (urlObj.searchParams.get('extract') === 'image');

    const text = await response.text();

    if (isExtractImage) {
      const finalBaseUrl = response.url || targetUrl;
      const extractedImage = extractOgImage(text, finalBaseUrl);
      const payload = JSON.stringify({ success: !!extractedImage, image: extractedImage });

      if (isNode) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        return res.status(200).send(payload);
      }

      return new Response(payload, {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=86400'
        }
      });
    }

    const contentType = response.headers.get('content-type') || 'application/xml; charset=utf-8';

    if (isNode) {
      res.setHeader('Content-Type', contentType);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return res.status(response.status).send(text);
    }

    return new Response(text, {
      status: response.status,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (err) {
    if (isNode) return res.status(502).send(`Proxy error: ${err.message}`);
    return new Response(`Proxy error: ${err.message}`, { status: 502 });
  }
}

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
