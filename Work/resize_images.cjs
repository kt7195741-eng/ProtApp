const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets');

async function processImages() {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (!['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) continue;

        const filePath = path.join(dir, file);
        try {
            const metadata = await sharp(filePath).metadata();
            if (metadata.width > 1200) {
                console.log(`Resizing ${file} (${metadata.width}x${metadata.height}) to 800px width...`);
                const parsed = path.parse(file);
                const webpFilename = parsed.name + '.webp';
                const webpPath = path.join(dir, webpFilename);
                const tempPath = filePath + '.tmp.webp';

                await sharp(filePath)
                    .resize({ width: 800, withoutEnlargement: true })
                    .webp({ quality: 75 })
                    .toFile(tempPath);

                fs.unlinkSync(filePath);
                fs.renameSync(tempPath, webpPath);

                console.log(`Successfully created/replaced ${webpFilename}`);
            }
        } catch (e) {
            console.error(`Error processing ${file}:`, e);
        }
    }
}

processImages();
