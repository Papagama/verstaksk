// Инициализация
document.body.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer для анимаций
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        window.scrollY > 60 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    });

    // Эффект печатной машинки с циклом
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const words = ['продают', 'работают', 'впечатляют'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentWord = words[wordIndex];
            
            if (!isDeleting) {
                // Печатаем
                if (charIndex < currentWord.length) {
                    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(typeWriter, 150);
                } else {
                    // Пауза перед удалением
                    setTimeout(() => {
                        isDeleting = true;
                        typeWriter();
                    }, 2000);
                }
            } else {
                // Удаляем по одному символу
                if (charIndex > 0) {
                    charIndex--;
                    typewriterElement.textContent = currentWord.substring(0, charIndex);
                    setTimeout(typeWriter, 100);
                } else {
                    // Переходим к следующему слову
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(typeWriter, 500);
                }
            }
        }

        setTimeout(() => {
            typeWriter();
        }, 800);
    }

    // Бургер-меню
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const navLinks = nav.querySelectorAll('a');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие меню при клике на пункт
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Кастомный курсор
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    });

    function animateFollower() {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;
        followerX += dx * 0.1;
        followerY += dy * 0.1;
        cursorFollower.style.transform = `translate(${followerX - 4}px, ${followerY - 4}px)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover эффект для интерактивных элементов
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px) scale(2)`);
        el.addEventListener('mouseleave', () => cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px) scale(1)`);
    });
});
