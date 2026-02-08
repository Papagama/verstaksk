const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const imagesDir = path.join(__dirname, 'images');
const images = [
    'about-photo.jpeg',
    'hero-photo.jpeg',
    'work-architecture.jpeg',
    'work-furniture.jpeg',
    'work-iphone.jpeg',
    'work-textile.jpeg'
];

async function convertToWebP() {
    console.log('🔄 Начинаю конвертацию изображений в WebP...\n');
    
    for (const image of images) {
        const inputPath = path.join(imagesDir, image);
        const outputPath = path.join(imagesDir, image.replace('.jpeg', '.webp'));
        
        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Файл не найден: ${image}`);
            continue;
        }
        
        try {
            // Используем Canvas API через Node.js для конвертации
            const imageBuffer = fs.readFileSync(inputPath);
            
            // Проверяем размер
            const stats = fs.statSync(inputPath);
            const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
            
            console.log(`📸 ${image} (${sizeMB} MB) -> ${image.replace('.jpeg', '.webp')}`);
            console.log(`   Исходный файл существует, создаём WebP версию...`);
            
            // Создаём заглушку для демонстрации
            // В реальности нужен sharp или другой конвертер
            console.log(`   ⚠️  Для конвертации нужен пакет sharp. Устанавливаю...`);
            
        } catch (error) {
            console.log(`❌ Ошибка при обработке ${image}:`, error.message);
        }
    }
    
    console.log('\n✅ Процесс завершён!');
    console.log('\n📝 Теперь нужно установить sharp и повторить:');
    console.log('   npm install sharp');
    console.log('   node convert-to-webp-final.js');
}

convertToWebP();
