const fs = require('fs');
const path = require('path');

async function convertToWebP() {
    console.log('🔄 Конвертация изображений в WebP...\n');
    
    let sharp;
    try {
        sharp = require('sharp');
    } catch (error) {
        console.log('❌ Пакет sharp не установлен!');
        console.log('📦 Установите его командой: npm install sharp');
        console.log('\nИли используйте Python скрипт: python convert-to-webp.py');
        process.exit(1);
    }
    
    const imagesDir = path.join(__dirname, 'images');
    const images = [
        'about-photo.jpeg',
        'hero-photo.jpeg',
        'work-architecture.jpeg',
        'work-furniture.jpeg',
        'work-iphone.jpeg',
        'work-textile.jpeg'
    ];
    
    let converted = 0;
    
    for (const image of images) {
        const inputPath = path.join(imagesDir, image);
        const outputPath = path.join(imagesDir, image.replace('.jpeg', '.webp'));
        
        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Пропускаю: ${image} (файл не найден)`);
            continue;
        }
        
        try {
            const inputStats = fs.statSync(inputPath);
            const inputSize = (inputStats.size / 1024).toFixed(2);
            
            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);
            
            const outputStats = fs.statSync(outputPath);
            const outputSize = (outputStats.size / 1024).toFixed(2);
            const savings = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);
            
            console.log(`✅ ${image.padEnd(30)} ${inputSize}KB → ${outputSize}KB (экономия ${savings}%)`);
            converted++;
            
        } catch (error) {
            console.log(`❌ Ошибка при конвертации ${image}:`, error.message);
        }
    }
    
    console.log(`\n🎉 Конвертировано ${converted} из ${images.length} изображений!`);
    console.log('\n📝 Теперь нужно обновить пути в HTML файлах.');
}

convertToWebP();
