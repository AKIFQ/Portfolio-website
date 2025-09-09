import sharp from 'sharp';
import { mkdir, copyFile } from 'fs/promises';
import path from 'path';

const root = path.resolve(process.cwd());
const publicDir = path.join(root, 'public');
const srcSvg = path.join(publicDir, 'favicon.svg');

const outputs = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

async function generate() {
  await mkdir(publicDir, { recursive: true });
  await Promise.all(
    outputs.map(async ({ size, name }) => {
      const outPath = path.join(publicDir, name);
      await sharp(srcSvg).resize(size, size).png().toFile(outPath);
      return outPath;
    })
  );

  // Provide legacy favicon.ico from 32px PNG
  const icoPath = path.join(publicDir, 'favicon-32x32.png');
  const legacyIco = path.join(publicDir, 'favicon.ico');
  await copyFile(icoPath, legacyIco);

  console.log('Icon generation complete. Files written to /public');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});


