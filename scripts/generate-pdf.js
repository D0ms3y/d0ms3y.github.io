const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    console.log('Starting PDF generation...');
    
    // Launch headless browser (using 'shell' which is the stable old headless mode, great for PDFs)
    const browser = await puppeteer.launch({
      headless: 'shell',
      // For local development on Mac/Windows, we usually don't need extra args.
      // If it still fails, you can add args: ['--no-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to roughly A4 size for better rendering before print
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
    
    // Absolute file path to the built HTML file (from the isolated temp build)
    const filePath = path.resolve(__dirname, '../.tmp-pdf/cv.html');
    
    if (!fs.existsSync(filePath)) {
      throw new Error(`Could not find built CV at ${filePath}. Did you run parcel build first?`);
    }

    const fileUrl = `file://${filePath}`;
    console.log(`Loading page: ${fileUrl}`);

    // Wait until network is idle to ensure fonts and images are loaded
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Wait an extra second just in case there are subtle rendering delays (e.g. fonts)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Determine output path (generated directly into src so Parcel processes it natively)
    const outputPath = path.resolve(__dirname, '../src/docs/cv.pdf');
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    console.log(`Saving PDF to: ${outputPath}`);
    
    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true, // Important to print the dark background and colors
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    await browser.close();
    
    console.log('✅ PDF successfully generated!');
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
})();
