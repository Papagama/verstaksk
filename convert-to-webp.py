#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys
from pathlib import Path

# Устанавливаем UTF-8 для вывода
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

try:
    from PIL import Image
    PIL_AVAILABLE = True
except ImportError:
    PIL_AVAILABLE = False
    print("WARNING: Pillow library not installed!")
    print("Install it with: pip install Pillow")
    print()

def convert_to_webp():
    """Convert all JPEG images to WebP"""
    
    if not PIL_AVAILABLE:
        return
    
    images_dir = Path(__file__).parent / 'images'
    images = [
        'about-photo.jpeg',
        'hero-photo.jpeg',
        'work-architecture.jpeg',
        'work-furniture.jpeg',
        'work-iphone.jpeg',
        'work-textile.jpeg'
    ]
    
    print('Converting images to WebP...\n')
    
    converted = 0
    
    for image_name in images:
        input_path = images_dir / image_name
        output_path = images_dir / image_name.replace('.jpeg', '.webp')
        
        if not input_path.exists():
            print(f'SKIP: {image_name} (file not found)')
            continue
        
        try:
            # Open image
            img = Image.open(input_path)
            
            # Get original file size
            input_size = input_path.stat().st_size / 1024
            
            # Convert to WebP with quality 85
            img.save(output_path, 'WEBP', quality=85, method=6)
            
            # Get new file size
            output_size = output_path.stat().st_size / 1024
            savings = ((input_size - output_size) / input_size) * 100
            
            print(f'OK: {image_name:<30} {input_size:.2f}KB -> {output_size:.2f}KB (saved {savings:.1f}%)')
            converted += 1
            
        except Exception as e:
            print(f'ERROR converting {image_name}: {e}')
    
    print(f'\nConverted {converted} of {len(images)} images!')
    print('\nNow updating HTML files...')

if __name__ == '__main__':
    convert_to_webp()
