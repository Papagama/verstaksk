/**
 * GSAP ANIMATIONS
 * Крутые анимации для сайта
 */

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Проверка на мобильное устройство
const isMobile = window.innerWidth < 768;

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. HERO SECTION - Эффектное появление
    // ============================================
    
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
        .from('.hero h1', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
        })
        .from('.hero .hero__bullets li', {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, '-=0.6')
        .from('.hero .btn', {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.4')
        .from('.hero__image', {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=1');

    // ============================================
    // 2. SECTION TAGS - Плавное появление
    // ============================================
    
    gsap.utils.toArray('.section-tag').forEach(tag => {
        gsap.from(tag, {
            scrollTrigger: {
                trigger: tag,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // ============================================
    // 3. ЗАГОЛОВКИ СЕКЦИЙ - Эффект разделения
    // ============================================
    
    gsap.utils.toArray('section h2').forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // ============================================
    // 4. AI APPROACH - 3D вращающиеся буквы
    // ============================================
    
    // Отключаем тяжелую 3D анимацию на мобильных
    if (!isMobile) {
        const ai3dContainer = document.querySelector('.ai-3d-text');
        if (ai3dContainer) {
            const letterA = ai3dContainer.querySelector('.ai-letter-a');
            const letterI = ai3dContainer.querySelector('.ai-letter-i');
            
            // Устанавливаем data-text атрибуты для псевдоэлементов
            letterA.setAttribute('data-text', 'A');
            letterI.setAttribute('data-text', 'I');
            
            // Создаем timeline для непрерывной анимации
            const ai3dTimeline = gsap.timeline({ repeat: -1 });
            
            // Анимация буквы A
            ai3dTimeline.to(letterA, {
                rotationY: 360,
                rotationX: 15,
                duration: 8,
                ease: 'none'
            }, 0);
            
            // Анимация буквы I (с небольшой задержкой)
            ai3dTimeline.to(letterI, {
                rotationY: -360,
                rotationX: -15,
                duration: 10,
                ease: 'none'
            }, 0);
            
            // Плавающий эффект для всего контейнера
            gsap.to(ai3dContainer, {
                y: -30,
                duration: 3,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            });
            
            // Параллакс эффект при скролле
            gsap.to('.ai-3d-container', {
                scrollTrigger: {
                    trigger: '.ai-approach',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: -150,
                rotation: 10,
                ease: 'none'
            });
            
            // Пульсация opacity
            gsap.to('.ai-letter', {
                opacity: 0.15,
                duration: 2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                stagger: 0.5
            });
        }
    }

    // Карточки AI подхода
    gsap.utils.toArray('.ai-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out'
        });
    });

    // ============================================
    // 5. EXPERTISE CARDS - Эффект волны
    // ============================================
    
    gsap.utils.toArray('.expertise-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            scale: 0.9,
            opacity: 0,
            rotationY: 15,
            duration: 1,
            delay: index * 0.2,
            ease: 'back.out(1.5)'
        });
    });

    // ============================================
    // 6. ABOUT SECTION - Параллакс фото
    // ============================================
    
    const aboutImage = document.querySelector('.about__image img');
    if (aboutImage) {
        gsap.to(aboutImage, {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -50,
            ease: 'none'
        });
    }

    // ============================================
    // 7. SERVICES - Анимация списка
    // ============================================
    
    gsap.utils.toArray('.services__list li').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.services__list',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            x: -40,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // ============================================
    // 8. PORTFOLIO CARDS - Эффект появления
    // ============================================
    
    // Наблюдаем за изменениями в grid (когда JS добавляет карточки)
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (portfolioGrid) {
        const observer = new MutationObserver(() => {
            const cards = portfolioGrid.querySelectorAll('.portfolio__item');
            cards.forEach((card, index) => {
                // Проверяем, не анимирована ли уже карточка
                if (!card.classList.contains('gsap-animated')) {
                    card.classList.add('gsap-animated');
                    
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        },
                        y: 80,
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.8,
                        delay: (index % 6) * 0.1,
                        ease: 'power3.out'
                    });
                }
            });
        });
        
        observer.observe(portfolioGrid, { childList: true });
    }

    // ============================================
    // 9. CTA SECTION - Пульсация кнопки
    // ============================================
    
    const ctaButton = document.querySelector('.cta .btn');
    if (ctaButton) {
        gsap.from(ctaButton, {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(2)'
        });
        
        // Пульсация при наведении
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    // ============================================
    // 10. FOOTER - Появление снизу
    // ============================================
    
    gsap.from('footer', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 95%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    // ============================================
    // 11. ПЛАВНАЯ ПРОКРУТКА для якорных ссылок
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: 'power3.inOut'
                    });
                }
            }
        });
    });

    // ============================================
    // 12. SCROLL PROGRESS BAR
    // ============================================
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent), #ff8c00);
        z-index: 10000;
        transform-origin: left;
    `;
    document.body.appendChild(progressBar);
    
    gsap.to(progressBar, {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        },
        width: '100%',
        ease: 'none'
    });

    console.log('🎨 GSAP анимации загружены!');
});
