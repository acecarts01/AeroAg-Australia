import fs from 'fs';
import { SITE, CONTACT, PRODUCTS } from './config/site.js';

// Simple build script to handle static generation tasks not covered by Next.js
console.log('Running AeroAg Australia static build script...');

const DOMAIN = SITE.domain;
const BASE_URL = `https://${DOMAIN}`;

// Generate Sitemap.xml (Simple version for Batch 1)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>
  <url><loc>${BASE_URL}/guide-agricultural-drones/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>
  <url><loc>${BASE_URL}/dji-agras-t50/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>
  <url><loc>${BASE_URL}/dji-agras-t25/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>
  <url><loc>${BASE_URL}/dji-agras-t40/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>
  <url><loc>${BASE_URL}/dji-mavic-3-multispectral/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>
</urlset>`;

if (!fs.existsSync('./public')) fs.mkdirSync('./public');
fs.writeFileSync('./public/sitemap.xml', sitemap);

console.log('Build tasks complete.');
