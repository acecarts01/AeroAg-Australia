import fs from 'fs';
import { SITE, COMPLIANCE, PRODUCTS } from '../config/site.js';

/**
 * AeroAg Australia - Pre-ship Crosscheck
 */

let failures = 0;

function log(msg, type = 'info') {
  const icons = { info: 'ℹ️', success: '✅', fail: '❌', warn: '⚠️' };
  console.log(`${icons[type]} ${msg}`);
}

function checkBannedTerms() {
  const files = [
    './app/page.jsx',
    './app/dji-agras-t50/page.jsx',
    './app/dji-agras-t25/page.jsx',
    './app/dji-agras-t40/page.jsx',
    './app/dji-mavic-3-multispectral/page.jsx',
    './app/guide-agricultural-drones/page.jsx'
  ];

  files.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    COMPLIANCE.bannedTerms.forEach(term => {
      if (content.toLowerCase().includes(term.toLowerCase())) {
        log(`Banned term "${term}" found in ${file}`, 'fail');
        failures++;
      }
    });
  });
}

function checkPlaceholders() {
  if (SITE.domain === 'DOMAIN.com') {
    log('SITE.domain is still set to placeholder', 'fail');
    failures++;
  }
}

function checkH1() {
  const files = [
    './app/page.jsx',
    './app/dji-agras-t50/page.jsx',
    './app/dji-agras-t25/page.jsx',
    './app/dji-agras-t40/page.jsx',
    './app/dji-mavic-3-multispectral/page.jsx',
    './app/guide-agricultural-drones/page.jsx'
  ];

  files.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    const h1Count = (content.match(/<h1/g) || []).length;
    if (h1Count !== 1) {
      log(`${file} has ${h1Count} H1 tags (exactly 1 required)`, 'fail');
      failures++;
    }
  });
}

log('Starting Pre-ship Crosscheck...');
checkBannedTerms();
checkPlaceholders();
checkH1();

if (failures > 0) {
  log(`Crosscheck failed with ${failures} errors.`, 'fail');
  process.exit(1);
} else {
  log('Crosscheck passed successfully.', 'success');
  process.exit(0);
}
