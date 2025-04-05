// build-github-pages.js
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure the build directory exists
const distDir = path.resolve('./dist');
const publicDir = path.resolve('./dist/public');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Run the Vite build with GitHub Pages base path
console.log('Building static site with Vite...');
exec('vite build --base=/portfolio/', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Build stderr: ${stderr}`);
  }
  
  console.log(`Build stdout: ${stdout}`);
  console.log('Vite build completed!');
  
  // Create a GitHub Pages CNAME file if needed
  // If you have a custom domain, uncomment the following lines and replace example.com
  // fs.writeFileSync(path.join(publicDir, 'CNAME'), 'example.com');
  
  // Create a .nojekyll file to bypass Jekyll processing
  fs.writeFileSync(path.join(publicDir, '.nojekyll'), '');
  
  // Copy the index.html file to 404.html for SPA routing
  try {
    fs.copyFileSync(
      path.join(publicDir, 'index.html'),
      path.join(publicDir, '404.html')
    );
    console.log('Created 404.html for SPA routing');
  } catch (err) {
    console.error('Error creating 404.html:', err);
  }
  
  console.log('Static site build for GitHub Pages completed!');
});