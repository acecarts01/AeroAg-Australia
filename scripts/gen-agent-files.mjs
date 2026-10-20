import fs from 'fs';
import path from 'path';
import { SITE, CONTACT, PRODUCTS, CATEGORIES, BRAND } from '../config/site.js';

const DOMAIN = SITE.domain === 'pending' ? 'example.com.au' : SITE.domain;
const BASE_URL = `${SITE.protocol}://${DOMAIN}`;

if (SITE.domain === 'pending') {
  console.warn('\x1b[31m%s\x1b[0m', '!!! WARNING: SITE.domain is set to "pending". Using placeholder example.com.au. !!!');
}

/**
 * Generate Robots.txt
 */
function genRobots() {
  const content = `User-agent: *
Disallow: /thank-you/
Disallow: /api/
Sitemap: ${BASE_URL}/sitemap.xml

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /
`;
  fs.writeFileSync(path.join(process.cwd(), 'public/robots.txt'), content);
}

/**
 * Generate LLMS.txt
 */
function genLlms() {
  const content = `# ${SITE.name}
> ${SITE.tagline}

${BRAND.description}

## Pages
- [Home](${BASE_URL}/)
- [Ultimate Guide to Agricultural Drones](${BASE_URL}/guide-agricultural-drones/)
- [DJI Agras T50](${BASE_URL}/dji-agras-t50/)
- [DJI Agras T25](${BASE_URL}/dji-agras-t25/)
- [DJI Agras T40](${BASE_URL}/dji-agras-t40/)
- [DJI Mavic 3 Multispectral](${BASE_URL}/dji-mavic-3-multispectral/)
`;
  fs.writeFileSync(path.join(process.cwd(), 'public/llms.txt'), content);
}

// Ensure public directory exists
if (!fs.existsSync(path.join(process.cwd(), 'public'))) {
  fs.mkdirSync(path.join(process.cwd(), 'public'));
}

genRobots();
genLlms();
console.log('Agent files generated successfully.');
