import * as cheerio from 'cheerio';

const DOC_ID = '1HqwAg8Sk2kJqCDX9Fk7_IFeMOf5t5bbG';
const FETCH_HEADERS = { 'User-Agent': 'Mozilla/5.0' };

function unwrapGoogleRedirect(href) {
  try {
    const url = new URL(href);
    if (url.hostname === 'www.google.com' && url.pathname === '/url') {
      const real = url.searchParams.get('q');
      if (real) return real;
    }
  } catch {
    // not a valid absolute URL, fall through
  }
  return href;
}

function extractSection(text) {
  const lines = text.split('\n').map((l) => l.trim());
  const sectionIdx = lines.findIndex((l) => /unreached people group/i.test(l));
  if (sectionIdx === -1) throw new Error('Unreached People Group section not found in bulletin');

  let i = sectionIdx + 1;
  while (i < lines.length && lines[i] === '') i++;
  const headingLine = lines[i];
  if (!headingLine) throw new Error('No group heading found after the UPG label');

  i++;
  while (i < lines.length && lines[i] === '') i++;
  const descLines = [];
  while (i < lines.length && lines[i] !== '') {
    descLines.push(lines[i]);
    i++;
  }

  let name = headingLine;
  let location = '';
  const inMatch = headingLine.match(/^(.*?)\s+in\s+([^,]+)$/i);
  if (inMatch) {
    name = inMatch[1].trim();
    location = inMatch[2].trim();
  }

  return { name, location, desc: descLines.join(' ').trim() };
}

function findGroupLink(html, name) {
  const $ = cheerio.load(html);
  let href = null;
  $('a[href]').each((_, el) => {
    if (href) return;
    const anchorText = $(el).text().trim();
    if (anchorText.length > 2 && name.includes(anchorText)) {
      href = unwrapGoogleRedirect($(el).attr('href'));
    }
  });
  return href;
}

export default async function handler(req, res) {
  try {
    const [txtRes, htmlRes] = await Promise.all([
      fetch(`https://docs.google.com/document/d/${DOC_ID}/export?format=txt`, { headers: FETCH_HEADERS }),
      fetch(`https://docs.google.com/document/d/${DOC_ID}/export?format=html`, { headers: FETCH_HEADERS }),
    ]);

    if (!txtRes.ok || !htmlRes.ok) {
      throw new Error(`Bulletin fetch failed (${txtRes.status}/${htmlRes.status})`);
    }

    const [text, html] = await Promise.all([txtRes.text(), htmlRes.text()]);
    const { name, location, desc } = extractSection(text);
    const href = findGroupLink(html, name);

    if (!href) throw new Error('No hyperlink found for the unreached group');

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json({ name, location, href, desc });
  } catch (err) {
    res.status(502).json({ error: err.message || 'Unknown error fetching bulletin' });
  }
}
