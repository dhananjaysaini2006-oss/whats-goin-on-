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

    const text = await response.text();

    if (isNode) {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return res.status(response.status).send(text);
    }

    return new Response(text, {
      status: response.status,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (err) {
    if (isNode) return res.status(502).send(`Proxy error: ${err.message}`);
    return new Response(`Proxy error: ${err.message}`, { status: 502 });
  }
}
