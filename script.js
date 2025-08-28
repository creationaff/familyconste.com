// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !service || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission (replace with actual backend integration)
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .team-member, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add loading animation to page elements
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Team member hover effects
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    member.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2c5aa0 !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Booking System
const modal = document.getElementById('bookingModal');
const bookButtons = document.querySelectorAll('.book-btn');
const closeBtn = document.querySelector('.close');
const bookingForm = document.getElementById('bookingForm');

// Open modal when booking buttons are clicked
bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const package = button.getAttribute('data-package');
        const price = button.getAttribute('data-price');
        
        document.getElementById('bookingPackage').value = package;
        document.getElementById('bookingPrice').value = `$${price}`;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Hero booking button
const heroBookBtn = document.querySelector('.hero-book-btn');
if (heroBookBtn) {
    heroBookBtn.addEventListener('click', () => {
        document.getElementById('bookingPackage').value = 'Discovery Session';
        document.getElementById('bookingPrice').value = '$150';
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle booking form submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const package = formData.get('package');
    const price = formData.get('price');
    const date = formData.get('date');
    const time = formData.get('time');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !package || !date || !time) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate booking submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Processing...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert(`Thank you for booking your sacred session!\n\nPackage: ${package}\nDate: ${date}\nTime: ${time}\n\nSofia will contact you within 24 hours to confirm your appointment and provide further details.`);
        
        this.reset();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Set minimum date to today
const dateInput = document.getElementById('bookingDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Language Translation System
const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'services': 'Services',
        'pricing': 'Pricing',
        'about': 'About',
        'practitioner': 'Practitioner',
        'contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Spiritual Family Healing Through Constellations',
        'hero-subtitle': 'Discover the hidden dynamics in your family system. Experience deep healing through guided role-playing and spiritual exploration of generational patterns.',
        'book-consultation': 'Book Consultation',
        'learn-more': 'Learn More',
        
        // Services Section
        'services-title': 'Sacred Healing Services',
        'services-subtitle': 'Transform your family dynamics through spiritual constellation work and guided healing sessions',
        'family-constellations': 'Family Constellations',
        'family-constellations-desc': 'Sacred group sessions where participants represent family members, revealing hidden dynamics and facilitating deep healing through role-playing.',
        'relationship-constellations': 'Relationship Constellations',
        'relationship-constellations-desc': 'Deep exploration of relationship dynamics through spiritual role-playing, uncovering hidden patterns and facilitating soul-level healing.',
        'generational-healing': 'Generational Healing',
        'generational-healing-desc': 'Release inherited family patterns and trauma through guided constellation work, creating healing for future generations.',
        'virtual-constellations': 'Virtual Constellations',
        'virtual-constellations-desc': 'Experience the power of family constellations through sacred online sessions, connecting with the collective field from anywhere.',
        'ancestral-wisdom': 'Ancestral Wisdom',
        'ancestral-wisdom-desc': 'Connect with ancestral knowledge and wisdom through guided meditation and constellation work, honoring your family\'s spiritual lineage.',
        'soul-integration': 'Soul Integration',
        'soul-integration-desc': 'Deep spiritual work to integrate fragmented parts of the soul and restore wholeness through guided constellation ceremonies.',
        
        // Pricing Section
        'pricing-title': 'Sacred Healing Packages',
        'pricing-subtitle': 'Choose the perfect constellation experience for your healing journey',
        'discovery-session': 'Discovery Session',
        'deep-healing-package': 'Deep Healing Package',
        'transformation-journey': 'Transformation Journey',
        'most-popular': 'Most Popular',
        'book-now': 'Book Now',
        
        // About Section
        'about-title': 'About Sofia & Family Constellations',
        'about-text-1': 'Sofia is a sacred facilitator of family constellation work, guiding individuals and families through deep spiritual healing. With over 15 years of experience in systemic family therapy and spiritual practices, she creates sacred spaces for transformation and healing.',
        'about-text-2': 'Her approach honors the wisdom of the collective field, allowing hidden family dynamics to emerge through guided role-playing. Sofia believes every family carries the potential for profound healing when we honor the sacred order of love.',
        'souls-transformed': 'Souls Transformed',
        'years-experience': 'Years of Sacred Work',
        'healing-rate': 'Healing Rate',
        
        // Team Section
        'team-title': 'Your Sacred Guide',
        'team-subtitle': 'Meet Sofia, your dedicated family constellation facilitator and spiritual guide',
        'sofia-title': 'Sacred Family Constellation Facilitator',
        'sofia-bio': 'Dedicated spiritual guide with over 15 years of experience in family constellation work, helping individuals and families discover hidden dynamics and facilitate deep healing through guided role-playing and spiritual exploration.',
        
        // Contact Section
        'contact-title': 'Begin Your Sacred Journey',
        'contact-subtitle': 'Ready to transform your family dynamics through spiritual constellation work? Connect with Sofia on Instagram to begin your healing journey.',
        'connect-instagram': 'Connect on Instagram',
        'sacred-space': 'Sacred Space',
        'sacred-hours': 'Sacred Hours',
        'instagram-contact-title': 'Connect with Sofia on Instagram',
        'instagram-contact-desc': 'For bookings, inquiries, and to learn more about family constellations, please reach out to Sofia directly on Instagram.',
        'message-instagram': 'Message @gypsiefamily',
        
        // Footer
        'footer-title': 'Sofia\'s Family Constellations',
        'footer-desc': 'Sacred family constellation work and spiritual healing to transform your family dynamics and restore harmony.',
        'sacred-services': 'Sacred Services',
        'quick-links': 'Quick Links',
        'about-us': 'About Us',
        'contact-info': 'Contact Info',
        'privacy-policy': 'Privacy Policy',
        'copyright': '© 2024 Sofia\'s Family Constellations. All rights reserved.'
    },
    ru: {
        // Navigation
        'home': 'Главная',
        'services': 'Услуги',
        'pricing': 'Цены',
        'about': 'О нас',
        'practitioner': 'Специалист',
        'contact': 'Контакты',
        
        // Hero Section
        'hero-title': 'Духовное исцеление семьи через расстановки',
        'hero-subtitle': 'Откройте скрытую динамику в вашей семейной системе. Испытайте глубокое исцеление через направленную ролевую игру и духовное исследование родовых паттернов.',
        'book-consultation': 'Записаться на консультацию',
        'learn-more': 'Узнать больше',
        
        // Services Section
        'services-title': 'Священные исцеляющие услуги',
        'services-subtitle': 'Трансформируйте динамику вашей семьи через духовную работу с расстановками и направленные исцеляющие сессии',
        'family-constellations': 'Семейные расстановки',
        'family-constellations-desc': 'Священные групповые сессии, где участники представляют членов семьи, раскрывая скрытую динамику и облегчая глубокое исцеление через ролевую игру.',
        'relationship-constellations': 'Расстановки отношений',
        'relationship-constellations-desc': 'Глубокое исследование динамики отношений через духовную ролевую игру, раскрытие скрытых паттернов и облегчение исцеления на уровне души.',
        'generational-healing': 'Родовое исцеление',
        'generational-healing-desc': 'Освободитесь от унаследованных семейных паттернов и травм через направленную работу с расстановками, создавая исцеление для будущих поколений.',
        'virtual-constellations': 'Виртуальные расстановки',
        'virtual-constellations-desc': 'Испытайте силу семейных расстановок через священные онлайн-сессии, соединяясь с коллективным полем из любой точки мира.',
        'ancestral-wisdom': 'Родовая мудрость',
        'ancestral-wisdom-desc': 'Соединитесь с родовыми знаниями и мудростью через направленную медитацию и работу с расстановками, почитая духовную линию вашей семьи.',
        'soul-integration': 'Интеграция души',
        'soul-integration-desc': 'Глубокая духовная работа по интеграции фрагментированных частей души и восстановлению целостности через направленные церемонии расстановок.',
        
        // Pricing Section
        'pricing-title': 'Священные исцеляющие пакеты',
        'pricing-subtitle': 'Выберите идеальный опыт расстановок для вашего исцеляющего путешествия',
        'discovery-session': 'Сессия открытия',
        'deep-healing-package': 'Пакет глубокого исцеления',
        'transformation-journey': 'Путь трансформации',
        'most-popular': 'Самый популярный',
        'book-now': 'Забронировать',
        
        // About Section
        'about-title': 'О Софии и семейных расстановках',
        'about-text-1': 'София - священный фасилитатор работы с семейными расстановками, направляющий людей и семьи через глубокое духовное исцеление. Имея более 15 лет опыта в системной семейной терапии и духовных практиках, она создает священные пространства для трансформации и исцеления.',
        'about-text-2': 'Ее подход почитает мудрость коллективного поля, позволяя скрытой семейной динамике проявиться через направленную ролевую игру. София верит, что каждая семья несет потенциал для глубокого исцеления, когда мы почитаем священный порядок любви.',
        'souls-transformed': 'Душ трансформировано',
        'years-experience': 'Лет священной работы',
        'healing-rate': 'Процент исцеления',
        
        // Team Section
        'team-title': 'Ваш священный проводник',
        'team-subtitle': 'Познакомьтесь с Софией, вашим преданным фасилитатором семейных расстановок и духовным проводником',
        'sofia-title': 'Священный фасилитатор семейных расстановок',
        'sofia-bio': 'Преданный духовный проводник с более чем 15-летним опытом работы с семейными расстановками, помогающий людям и семьям открывать скрытую динамику и облегчать глубокое исцеление через направленную ролевую игру и духовное исследование.',
        
        // Contact Section
        'contact-title': 'Начните ваше священное путешествие',
        'contact-subtitle': 'Готовы трансформировать динамику вашей семьи через духовную работу с расстановками? Свяжитесь с Софией в Instagram, чтобы начать ваше исцеляющее путешествие.',
        'connect-instagram': 'Связаться в Instagram',
        'sacred-space': 'Священное пространство',
        'sacred-hours': 'Священные часы',
        'instagram-contact-title': 'Свяжитесь с Софией в Instagram',
        'instagram-contact-desc': 'Для бронирования, вопросов и получения дополнительной информации о семейных расстановках, пожалуйста, обращайтесь к Софии напрямую в Instagram.',
        'message-instagram': 'Написать @gypsiefamily',
        
        // Footer
        'footer-title': 'Семейные расстановки Софии',
        'footer-desc': 'Священная работа с семейными расстановками и духовное исцеление для трансформации динамики вашей семьи и восстановления гармонии.',
        'sacred-services': 'Священные услуги',
        'quick-links': 'Быстрые ссылки',
        'about-us': 'О нас',
        'contact-info': 'Контактная информация',
        'privacy-policy': 'Политика конфиденциальности',
        'copyright': '© 2024 Семейные расстановки Софии. Все права защищены.'
    }
};

// Language selector functionality
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        translatePage(selectedLanguage);
    });
}

function translatePage(language) {
    const currentTranslations = translations[language] || translations.en;
    
    // Update navigation
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });
    
    // Update specific elements
    const elements = {
        '.hero-title': 'hero-title',
        '.hero-subtitle': 'hero-subtitle',
        '.section-title': 'services-title',
        '.section-subtitle': 'services-subtitle'
    };
    
    Object.entries(elements).forEach(([selector, key]) => {
        const element = document.querySelector(selector);
        if (element && currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });
}

// Add some interactive features
console.log('Sofia\'s Family Constellations website loaded successfully!');
console.log('Features: Mobile navigation, smooth scrolling, form validation, booking system, language translation, animations');
