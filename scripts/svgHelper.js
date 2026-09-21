// Generator script for all Grade 6 educational SVG diagrams
import fs from 'fs';
import path from 'path';

const outDir = 'public/images';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to generate styled SVG card
function createSvg(title, subtitle, badge, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="800" height="460" style="background:#0f172a; border-radius:16px; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#e11d48"/>
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
    <filter id="cardGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="460" rx="16" fill="url(#bgGrad)"/>
  <rect x="1.5" y="1.5" width="797" height="457" rx="14.5" fill="none" stroke="#334155" stroke-width="1.5"/>

  <!-- Top Header Bar -->
  <rect x="20" y="18" width="760" height="54" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <rect x="34" y="30" width="8" height="30" rx="4" fill="url(#primaryGrad)"/>
  <text x="52" y="45" font-size="18" font-weight="800" fill="#f8fafc" letter-spacing="0.5">${title}</text>
  <text x="52" y="61" font-size="12" font-weight="500" fill="#94a3b8">${subtitle}</text>

  <!-- Badge on top right -->
  <rect x="630" y="29" width="136" height="30" rx="8" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1"/>
  <text x="698" y="49" font-size="12" font-weight="700" fill="#60a5fa" text-anchor="middle">${badge}</text>

  <!-- Main Visual Body Content -->
  <g transform="translate(20, 86)">
    ${content}
  </g>

  <!-- Bottom Watermark & Status -->
  <rect x="20" y="424" width="760" height="24" rx="6" fill="#1e293b" fill-opacity="0.6"/>
  <text x="32" y="440" font-size="11" font-weight="600" fill="#64748b">108 課綱六年級專家精編・全方位觀念圖解</text>
  <text x="768" y="440" font-size="11" font-weight="600" fill="#38bdf8" text-anchor="end">Junyi Academic Design System</text>
</svg>`;
}

export { createSvg, outDir };
