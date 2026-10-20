// Modern Portfolio JavaScript with Enhanced Animations

// Initialize all libraries
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        disable: 'mobile'
    });

    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Initialize Particles.js
    initThreeJS();

    // Initialize Typed.js
    initTypingEffects();

    // Initialize all animations
    initLoadingScreen();
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initMagneticButtons();
    initCounterAnimations();
    initProjectFilters();
    initContactForm();
    initThemeToggle();
    initMobileMenu();
    initPerformanceOptimizations();
    initTimelineAnimations();
    initEducationAnimations();
    initLanguageChart();
});

// Utility function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Modern Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;

        progressFill.style.width = progress + '%';
        progressText.textContent = Math.round(progress) + '%';

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'visible';
            }, 500);
        }
    }, 100);
}

// Enhanced Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
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

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Hero Section Animations
function initHeroAnimations() {
    // GSAP Timeline for hero animations
    const heroTimeline = gsap.timeline();

    heroTimeline
        .from('.hero-text', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-visual', {
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-buttons', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.scroll-indicator', {
            duration: 0.6,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.2');

    // Floating shapes animation
    gsap.to('.shape', {
        y: -20,
        rotation: 360,
        duration: 6,
        ease: 'power2.inOut',
        stagger: 2,
        repeat: -1,
        yoyo: true
    });

    // Avatar rings animation
    gsap.to('.avatar-ring', {
        scale: 1.1,
        opacity: 0.4,
        duration: 2,
        ease: 'power2.inOut',
        stagger: 0.5,
        repeat: -1,
        yoyo: true
    });

    // 3D Parallax Hover Effect
    const parallaxContainer = document.querySelector('.parallax-container');
    const modelContainer = document.querySelector('.model-3d-container');

    if (parallaxContainer && modelContainer) {
        parallaxContainer.addEventListener('mousemove', (e) => {
            const rect = parallaxContainer.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg
            const rotateY = ((x - centerX) / centerX) * 15;
            
            modelContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            modelContainer.style.transition = 'transform 0.1s ease';
        });

        parallaxContainer.addEventListener('mouseleave', () => {
            modelContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
            modelContainer.style.transition = 'transform 0.5s ease';
        });
    }
}

// Typing Effects
function initTypingEffects() {
    // Hero name typing effect
    const typedName = new Typed('#typed-name', {
        strings: ['Đỗ Nho Tùng'],
        typeSpeed: 900,
        backSpeed: 100,
        backDelay: 3000,
        loop: false,
        showCursor: true,
        cursorChar: '|'
    });

    // Subtitle typing effect
    const typedSubtitle = new Typed('#typed-subtitle', {
        strings: [
            'Software Developer',
            'Full-Stack & Mobile Developer',
            'Building cool things :)',
            'Tech, Code & Coffee ☕'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Three.js Configuration
function initThreeJS() {
    const canvas = document.getElementById('bg-3d');
    if (!canvas) return;

    // Khởi tạo Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Tạo các hạt 3D (Particles)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    const color1 = new THREE.Color('#4b0082'); // Tím đậm
    const color2 = new THREE.Color('#a100a1'); // Tím sáng
    const color3 = new THREE.Color('#ffffff'); // Trắng
    
    for(let i = 0; i < particlesCount * 3; i+=3) {
        // Tọa độ ngẫu nhiên lan tỏa rộng
        posArray[i] = (Math.random() - 0.5) * 20;
        posArray[i+1] = (Math.random() - 0.5) * 20;
        posArray[i+2] = (Math.random() - 0.5) * 20;
        
        // Màu ngẫu nhiên theo theme
        const randomColor = Math.random();
        let mixedColor;
        if (randomColor < 0.33) mixedColor = color1;
        else if (randomColor < 0.66) mixedColor = color2;
        else mixedColor = color3;
        
        colorsArray[i] = mixedColor.r;
        colorsArray[i+1] = mixedColor.g;
        colorsArray[i+2] = mixedColor.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    // Material cho các hạt
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);

    camera.position.z = 5;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) - 0.5;
        mouseY = (event.clientY / window.innerHeight) - 0.5;
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Xoay toàn bộ khối hạt từ từ
        particleMesh.rotation.y = elapsedTime * 0.05;
        particleMesh.rotation.x = elapsedTime * 0.02;

        // Tương tác với chuột (Parallax effect)
        particleMesh.rotation.y += mouseX * 0.1;
        particleMesh.rotation.x += mouseY * 0.1;

        renderer.render(scene, camera);
    }
    
    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Dynamic Theme Color Updater for Three.js Particles
    function updateParticlesTheme(theme) {
        let c1, c2, c3;
        if (theme === 'theme-christmas') {
            c1 = new THREE.Color('#ffffff'); // Pure Snow White
            c2 = new THREE.Color('#70d6ff'); // Glacial Ice Cyan
            c3 = new THREE.Color('#ffd166'); // Champagne Gold Starlight
        } else if (theme === 'theme-halloween') {
            c1 = new THREE.Color('#ff6a00'); // Neon Jack-O'-Lantern
            c2 = new THREE.Color('#00ff87'); // Toxic Green
            c3 = new THREE.Color('#9933ff'); // Violet Ghost
        } else if (theme === 'theme-purple') {
            c1 = new THREE.Color('#e94560'); // Crimson Neon
            c2 = new THREE.Color('#533483'); // Deep Violet
            c3 = new THREE.Color('#ffffff'); // Starlight White
        } else {
            c1 = new THREE.Color('#4b0082'); // Deep Purple
            c2 = new THREE.Color('#a100a1'); // Bright Orchid
            c3 = new THREE.Color('#ffffff'); // Pure White
        }

        const colors = particlesGeometry.attributes.color.array;
        for (let i = 0; i < particlesCount * 3; i += 3) {
            const rand = Math.random();
            let col = rand < 0.35 ? c1 : (rand < 0.7 ? c2 : c3);
            colors[i] = col.r;
            colors[i + 1] = col.g;
            colors[i + 2] = col.b;
        }
        particlesGeometry.attributes.color.needsUpdate = true;
    }

    window.updateThreeParticlesTheme = updateParticlesTheme;

    // Apply active theme immediately if saved
    const activeTheme = localStorage.getItem('theme') || document.body.className;
    if (activeTheme) {
        updateParticlesTheme(activeTheme);
    }
}

// Scroll Animations
function initScrollAnimations() {
    // Section reveal animations
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Section title animations
    const sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(title => {
        gsap.fromTo(title, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate underline
        gsap.fromTo(title.querySelector('.title-underline'), {
            width: 0
        }, {
            width: '100%',
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // About section animations
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');

    if (aboutImage && aboutText) {
        gsap.fromTo(aboutImage, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutImage,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.fromTo(aboutText, {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutText,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Skills animations
    const skillsSections = document.querySelectorAll('.skills-section');

    skillsSections.forEach((section, sectionIndex) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: sectionIndex * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item, index) => {
        gsap.fromTo(item, {
            opacity: 0,
            x: -30
        }, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    const softSkillItems = document.querySelectorAll('.soft-skill-item');

    softSkillItems.forEach((item, index) => {
        gsap.fromTo(item, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Project cards animations
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // GitHub Stats animations
    const githubCards = document.querySelectorAll('.github-stat-card');
    githubCards.forEach((card, index) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    const githubBanner = document.querySelector('.github-profile-banner');
    if (githubBanner) {
        gsap.fromTo(githubBanner, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: githubBanner,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Contact section animations
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');

    if (contactInfo && contactForm) {
        gsap.fromTo(contactInfo, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: contactInfo,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.fromTo(contactForm, {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: contactForm,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

// Magnetic Button Effect
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('[data-magnetic]');

    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                duration: 0.3,
                x: x * 0.1,
                y: y * 0.1,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.3,
                x: 0,
                y: 0,
                ease: 'power2.out'
            });
        });
    });
}

// Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'));
        const numberElement = counter.querySelector('.stat-number');

        gsap.to(numberElement, {
            duration: 2,
            innerHTML: target,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: counter,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Project Filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    gsap.to(card, {
                        duration: 0.4,
                        opacity: 1,
                        scale: 1,
                        pointerEvents: 'auto',
                        ease: 'power3.out'
                    });
                } else {
                    gsap.to(card, {
                        duration: 0.3,
                        opacity: 0,
                        scale: 0.8,
                        pointerEvents: 'none',
                        ease: 'power3.in',
                        onComplete: () => {
                            const currentActive = document.querySelector('.filter-btn.active');
                            const currentFilter = currentActive ? currentActive.getAttribute('data-filter') : 'all';
                            if (currentFilter !== 'all' && card.getAttribute('data-category') !== currentFilter) {
                                card.style.display = 'none';
                            }
                        }
                    });
                }
            });
        });
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Simple validation
            let isValid = true;
            const errors = {};

            if (!data.name.trim()) {
                errors.name = 'Vui lòng nhập tên của bạn';
                isValid = false;
            }

            if (!data.email.trim() || !isValidEmail(data.email)) {
                errors.email = 'Vui lòng nhập email hợp lệ';
                isValid = false;
            }

            if (!data.subject.trim()) {
                errors.subject = 'Vui lòng nhập chủ đề';
                isValid = false;
            }

            if (!data.message.trim()) {
                errors.message = 'Vui lòng nhập nội dung tin nhắn';
                isValid = false;
            }

            // Show errors or submit
            if (!isValid) {
                showFormErrors(errors);
            } else {
                showSuccessMessage('Tin nhắn đã được gửi thành công!');
                form.reset();
            }
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form errors
function showFormErrors(errors) {
    Object.keys(errors).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        const errorElement = field.parentNode.querySelector('.form-error');

        if (errorElement) {
            errorElement.textContent = errors[fieldName];
            errorElement.classList.add('show');

            field.style.borderColor = '#ff6b6b';
        }
    });
}

// Show success message
function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Multi-Theme System (Standard, Cyber Purple Meteor, Modern Halloween, Modern Christmas)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function getCurrentTheme() {
        if (body.classList.contains('theme-christmas')) return 'theme-christmas';
        if (body.classList.contains('theme-halloween')) return 'theme-halloween';
        if (body.classList.contains('theme-purple')) return 'theme-purple';
        return '';
    }

    function applyTheme(theme) {
        body.classList.remove('theme-purple', 'theme-halloween', 'theme-christmas');
        if (theme) {
            body.classList.add(theme);
        }
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
        toggleMeteorShower(theme);
        toggleHalloweenAtmosphere(theme);
        toggleChristmasAtmosphere(theme);
        if (window.updateThreeParticlesTheme) {
            window.updateThreeParticlesTheme(theme);
        }
    }

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || '';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = getCurrentTheme();
            let newTheme = '';
            if (currentTheme === '') {
                newTheme = 'theme-purple';
            } else if (currentTheme === 'theme-purple') {
                newTheme = 'theme-halloween';
            } else if (currentTheme === 'theme-halloween') {
                newTheme = 'theme-christmas';
            } else {
                newTheme = '';
            }
            applyTheme(newTheme);
        });
    }

    // Init interactive easter eggs
    initHalloweenSpider();
    initChristmasBauble();
}

// Update theme icon
function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    const toggleBtn = document.getElementById('theme-toggle');
    if (!icon) return;

    if (theme === 'theme-christmas') {
        icon.className = 'fas fa-snowflake';
        if (toggleBtn) {
            toggleBtn.setAttribute('title', 'Theme: Giáng Sinh Hiện Đại ❄️ (Bấm để chuyển về Mặc định)');
        }
    } else if (theme === 'theme-halloween') {
        icon.className = 'fas fa-ghost';
        if (toggleBtn) {
            toggleBtn.setAttribute('title', 'Theme: Halloween Hiện Đại 👻 (Bấm để chuyển sang Giáng Sinh)');
        }
    } else if (theme === 'theme-purple') {
        icon.className = 'fas fa-meteor';
        if (toggleBtn) {
            toggleBtn.setAttribute('title', 'Theme: Tím Sao Băng ☄️ (Bấm để chuyển sang Halloween)');
        }
    } else {
        icon.className = 'fas fa-moon';
        if (toggleBtn) {
            toggleBtn.setAttribute('title', 'Theme: Mặc định 🌙 (Bấm để chuyển sang Tím Sao Băng)');
        }
    }
}

// Toggle meteor shower effect
function toggleMeteorShower(theme) {
    const meteorShower = document.getElementById('meteor-shower');
    if (!meteorShower) return;
    if (theme === 'theme-purple') {
        meteorShower.style.opacity = '1';
        // Add more meteors dynamically
        addMoreMeteors();
    } else {
        meteorShower.style.opacity = '0';
    }
}

// Add more meteors dynamically
function addMoreMeteors() {
    const meteorShower = document.getElementById('meteor-shower');
    if (!meteorShower) return;

    // Clear existing meteors
    meteorShower.innerHTML = '';

    // Add meteors with random positions and delays
    for (let i = 0; i < 20; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.top = Math.random() * 100 + '%';
        meteor.style.left = Math.random() * 100 + '%';
        meteor.style.animationDelay = Math.random() * 12 + 's';
        meteor.style.animationDuration = (2 + Math.random() * 2) + 's';
        meteorShower.appendChild(meteor);
    }
}

// Toggle Halloween atmosphere effects
function toggleHalloweenAtmosphere(theme) {
    const atmosphere = document.getElementById('halloween-atmosphere');
    const spider = document.getElementById('halloween-spider');
    const isHalloween = theme === 'theme-halloween';

    if (atmosphere) {
        if (isHalloween) {
            atmosphere.style.display = 'block';
            addHalloweenEmbers();
        } else {
            atmosphere.style.display = 'none';
        }
    }

    if (spider) {
        spider.style.display = isHalloween ? 'block' : 'none';
    }
}

// Add dynamic floating will-o'-the-wisp embers for Halloween
function addHalloweenEmbers() {
    const container = document.getElementById('halloween-embers-container');
    if (!container) return;

    // Clear existing embers to prevent duplication
    container.innerHTML = '';

    const emberColors = [
        'radial-gradient(circle, #ff6a00 0%, #ff8800 60%, transparent 100%)',
        'radial-gradient(circle, #00ff87 0%, #10b981 60%, transparent 100%)',
        'radial-gradient(circle, #ff9900 0%, #ff3b00 70%, transparent 100%)',
        'radial-gradient(circle, #a855f7 0%, #7928ca 70%, transparent 100%)'
    ];

    const emberShadows = [
        '0 0 10px #ff6a00, 0 0 20px #ff8800',
        '0 0 10px #00ff87, 0 0 20px #10b981',
        '0 0 12px #ff9900, 0 0 22px #ff3b00',
        '0 0 10px #a855f7, 0 0 20px #7928ca'
    ];

    for (let i = 0; i < 24; i++) {
        const ember = document.createElement('div');
        ember.className = 'halloween-ember';
        const colorIdx = i % emberColors.length;
        const size = (3 + Math.random() * 5) + 'px';

        ember.style.width = size;
        ember.style.height = size;
        ember.style.background = emberColors[colorIdx];
        ember.style.boxShadow = emberShadows[colorIdx];
        ember.style.left = (Math.random() * 98) + '%';
        ember.style.animationDelay = (Math.random() * 12) + 's';
        ember.style.animationDuration = (7 + Math.random() * 8) + 's';

        container.appendChild(ember);
    }
}

// Dangling Spider Interactive Easter Egg
function initHalloweenSpider() {
    const spider = document.getElementById('halloween-spider');
    if (!spider) return;

    spider.addEventListener('click', () => {
        const spiderBody = spider.querySelector('.spider-body');
        if (spiderBody) {
            spiderBody.style.transform = 'scale(1.5) rotate(360deg)';
            spiderBody.style.color = '#00ff87';
            setTimeout(() => {
                spiderBody.style.transform = '';
                spiderBody.style.color = '';
            }, 600);
        }
    });
}

// Toggle Christmas atmosphere effects
function toggleChristmasAtmosphere(theme) {
    const atmosphere = document.getElementById('christmas-atmosphere');
    const bauble = document.getElementById('christmas-bauble');
    const fairyLights = document.getElementById('fairy-lights');
    const isChristmas = theme === 'theme-christmas';

    if (atmosphere) {
        if (isChristmas) {
            atmosphere.style.display = 'block';
            addSnowflakes();
        } else {
            atmosphere.style.display = 'none';
        }
    }

    if (bauble) {
        bauble.style.display = isChristmas ? 'block' : 'none';
    }

    if (fairyLights) {
        fairyLights.style.display = isChristmas ? 'flex' : 'none';
    }
}

// Add dynamic realistic snowflakes
function addSnowflakes() {
    const container = document.getElementById('snowflakes-container');
    if (!container) return;

    // Clear existing snowflakes
    container.innerHTML = '';

    const snowflakeSymbols = ['❄', '❅', '❆', '•', '✦'];
    const totalFlakes = 40;

    for (let i = 0; i < totalFlakes; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = snowflakeSymbols[i % snowflakeSymbols.length];

        const size = (0.7 + Math.random() * 1.3) + 'rem';
        const opacity = (0.35 + Math.random() * 0.65);
        const left = (Math.random() * 99) + '%';
        const duration = (6 + Math.random() * 8) + 's';
        const delay = (Math.random() * 10) + 's';

        flake.style.fontSize = size;
        flake.style.opacity = opacity;
        flake.style.left = left;
        flake.style.animationDuration = duration;
        flake.style.animationDelay = delay;

        container.appendChild(flake);
    }
}

// Interactive Christmas Bauble Easter Egg
function initChristmasBauble() {
    const bauble = document.getElementById('christmas-bauble');
    if (!bauble) return;

    bauble.addEventListener('click', () => {
        const ornament = bauble.querySelector('.bauble-ornament');
        if (ornament) {
            ornament.style.transform = 'scale(1.5) rotate(360deg)';
            createStardustBurst(bauble);
            setTimeout(() => {
                ornament.style.transform = '';
            }, 600);
        }
    });
}

// Stardust Burst Particle Effect
function createStardustBurst(targetEl) {
    const count = 14;

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'stardust-burst';
        const angle = (i / count) * 2 * Math.PI;
        const distance = 35 + Math.random() * 35;
        const dx = Math.cos(angle) * distance + 'px';
        const dy = Math.sin(angle) * distance + 'px';

        star.style.setProperty('--dx', dx);
        star.style.setProperty('--dy', dy);
        targetEl.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 700);
    }
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Timeline Animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        gsap.fromTo(item, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Education Animations
function initEducationAnimations() {
    const educationItems = document.querySelectorAll('.education-item');

    educationItems.forEach((item, index) => {
        gsap.fromTo(item, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Interactive Project Showcase
function initLanguageChart() {
    // Project showcase data
    const projectShowcaseData = [
        {
            id: 1,
            name: 'JavaScript Game Engine',
            description: 'Game engine thuần JavaScript với physics engine và WebGL',
            image: '🎮',
            category: 'JavaScript',
            technologies: ['Vanilla JS', 'Canvas API', 'WebGL', 'Web Audio'],
            difficulty: 'Advanced',
            completion: 95,
            github: 'https://github.com/nhotungdo/js-game-engine',
            live: 'https://game-engine-demo.com',
            features: ['Physics Engine', 'Sprite Animation', 'Sound System', '3D Rendering'],
            color: '#f7df1e'
        },
        {
            id: 2,
            name: 'React E-commerce Platform',
            description: 'Nền tảng thương mại điện tử hiện đại với đầy đủ tính năng',
            image: '🛒',
            category: 'React',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            difficulty: 'Expert',
            completion: 100,
            github: 'https://github.com/nhotungdo/ecommerce',
            live: 'https://ecommerce-demo.com',
            features: ['Payment Gateway', 'Admin Dashboard', 'Real-time Chat', 'Analytics'],
            color: '#61dafb'
        },
        {
            id: 3,
            name: 'Node.js API Framework',
            description: 'Framework API development với microservices architecture',
            image: '⚡',
            category: 'Node.js',
            technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
            difficulty: 'Expert',
            completion: 92,
            github: 'https://github.com/nhotungdo/api-framework',
            live: 'https://api-docs.com',
            features: ['Microservices', 'Rate Limiting', 'JWT Auth', 'Swagger Docs'],
            color: '#339933'
        },
        {
            id: 4,
            name: 'Vue.js Dashboard',
            description: 'Dashboard phân tích dữ liệu với biểu đồ tương tác',
            image: '📊',
            category: 'Vue.js',
            technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
            difficulty: 'Advanced',
            completion: 88,
            github: 'https://github.com/nhotungdo/dashboard',
            live: 'https://dashboard-demo.com',
            features: ['Real-time Charts', 'Data Export', 'User Management', 'Notifications'],
            color: '#4fc08d'
        },
        {
            id: 5,
            name: 'TypeScript Library',
            description: 'Thư viện TypeScript với type-safe utilities',
            image: '📚',
            category: 'TypeScript',
            technologies: ['TypeScript', 'Webpack', 'Jest', 'Rollup'],
            difficulty: 'Advanced',
            completion: 85,
            github: 'https://github.com/nhotungdo/ts-library',
            live: 'https://ts-library-docs.com',
            features: ['Type Safety', 'Tree Shaking', 'Unit Tests', 'Documentation'],
            color: '#3178c6'
        }
    ];

    // Create showcase container
    const skillsSection = document.querySelector('.skills-section');
    if (!skillsSection) return;

    const showcaseContainer = document.createElement('div');
    showcaseContainer.className = 'project-showcase-container';
    showcaseContainer.innerHTML = `
        <h3 class="showcase-title">
            <i class="fas fa-cube"></i>
            Interactive Project Showcase
        </h3>
        <div class="showcase-stats">
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <div class="stat-info">
                    <div class="stat-number" id="totalProjects">0</div>
                    <div class="stat-label">Projects</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fas fa-code"></i>
                </div>
                <div class="stat-info">
                    <div class="stat-number" id="jsProjects">0</div>
                    <div class="stat-label">JS Projects</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="stat-info">
                    <div class="stat-number" id="avgCompletion">0</div>
                    <div class="stat-label">Avg Completion</div>
                </div>
            </div>
        </div>
        <div class="showcase-content">
            <div class="project-grid"></div>
            <div class="showcase-controls">
                <button class="showcase-btn" id="viewAllBtn">
                    <i class="fas fa-eye"></i>
                    View All Projects
                </button>
                <button class="showcase-btn" id="filterBtn">
                    <i class="fas fa-filter"></i>
                    Filter by Tech
                </button>
            </div>
        </div>
    `;

    // Insert showcase before skills grid
    const skillsGrid = skillsSection.querySelector('.skills-grid');
    skillsSection.insertBefore(showcaseContainer, skillsGrid);

    // Initialize showcase
    createProjectGrid(projectShowcaseData);
    updateShowcaseStats(projectShowcaseData);
    initShowcaseControls();

    // Animate showcase on scroll
    gsap.fromTo(showcaseContainer, {
        opacity: 0,
        y: 50,
        scale: 0.9
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: showcaseContainer,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
}

function createProjectGrid(data) {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projectGrid.innerHTML = '';

    data.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card-3d';
        projectCard.setAttribute('data-project-id', project.id);
        projectCard.innerHTML = `
            <div class="card-3d-wrapper">
                <div class="card-3d-front">
                    <div class="project-image">
                        <div class="project-emoji">${project.image}</div>
                        <div class="project-overlay">
                            <div class="overlay-content">
                                <div class="project-category" style="background-color: ${project.color}">
                                    ${project.category}
                                </div>
                                <div class="project-difficulty ${project.difficulty.toLowerCase()}">
                                    ${project.difficulty}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h4 class="project-title">${project.name}</h4>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-completion">
                            <div class="completion-bar">
                                <div class="completion-fill" style="width: ${project.completion}%; background-color: ${project.color}"></div>
                            </div>
                            <span class="completion-text">${project.completion}% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="card-3d-back">
                    <div class="back-content">
                        <h4 class="back-title">${project.name}</h4>
                        <div class="features-list">
                            <h5>Key Features:</h5>
                            <ul>
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" class="project-link" target="_blank">
                                <i class="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                            <a href="${project.live}" class="project-link" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                                <span>Live Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add 3D hover effect
        projectCard.addEventListener('mousemove', (e) => {
            const rect = projectCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            projectCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });

        // Add click to flip effect
        projectCard.addEventListener('click', () => {
            projectCard.classList.toggle('flipped');
        });

        // Animate card entrance
        gsap.fromTo(projectCard, {
            opacity: 0,
            y: 50,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.2
        });

        projectGrid.appendChild(projectCard);
    });
}

function updateShowcaseStats(data) {
    const totalProjects = data.length;
    const jsProjects = data.filter(project => project.category === 'JavaScript').length;
    const avgCompletion = Math.round(data.reduce((sum, project) => sum + project.completion, 0) / totalProjects);

    gsap.to('#totalProjects', {
        innerHTML: totalProjects,
        duration: 1,
        ease: 'power2.out',
        snap: { innerHTML: 1 }
    });

    gsap.to('#jsProjects', {
        innerHTML: jsProjects,
        duration: 1,
        ease: 'power2.out',
        snap: { innerHTML: 1 }
    });

    gsap.to('#avgCompletion', {
        innerHTML: avgCompletion + '%',
        duration: 1,
        ease: 'power2.out',
        snap: { innerHTML: 1 }
    });
}

function initShowcaseControls() {
    const viewAllBtn = document.getElementById('viewAllBtn');
    const filterBtn = document.getElementById('filterBtn');

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            showAllProjects();
        });
    }

    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            showFilterModal();
        });
    }
}

function showAllProjects() {
    const modal = document.createElement('div');
    modal.className = 'projects-modal';
    modal.innerHTML = `
        <div class="modal-content large">
            <div class="modal-header">
                <h3>All Projects Portfolio</h3>
                <button class="close-btn" onclick="closeProjectsModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="projects-grid-full">
                    <!-- Additional projects will be loaded here -->
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Animate modal
    gsap.fromTo(modal, {
        opacity: 0,
        scale: 0.8
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
    });

    // Load additional projects
    loadAdditionalProjects();
}

function showFilterModal() {
    const modal = document.createElement('div');
    modal.className = 'filter-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Filter Projects</h3>
            <div class="filter-options">
                <div class="filter-group">
                    <h4>Technology</h4>
                    <div class="filter-checkboxes">
                        <label><input type="checkbox" value="JavaScript" checked> JavaScript</label>
                        <label><input type="checkbox" value="React" checked> React</label>
                        <label><input type="checkbox" value="Node.js" checked> Node.js</label>
                        <label><input type="checkbox" value="Vue.js" checked> Vue.js</label>
                        <label><input type="checkbox" value="TypeScript" checked> TypeScript</label>
                    </div>
                </div>
                <div class="filter-group">
                    <h4>Difficulty</h4>
                    <div class="filter-checkboxes">
                        <label><input type="checkbox" value="Beginner" checked> Beginner</label>
                        <label><input type="checkbox" value="Advanced" checked> Advanced</label>
                        <label><input type="checkbox" value="Expert" checked> Expert</label>
                    </div>
                </div>
            </div>
            <div class="modal-actions">
                <button onclick="applyFilters()">Apply Filters</button>
                <button onclick="closeFilterModal()">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    gsap.fromTo(modal, {
        opacity: 0,
        scale: 0.8
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
    });
}

function closeProjectsModal() {
    const modal = document.querySelector('.projects-modal');
    if (modal) {
        gsap.to(modal, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => modal.remove()
        });
    }
}

function closeFilterModal() {
    const modal = document.querySelector('.filter-modal');
    if (modal) {
        gsap.to(modal, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => modal.remove()
        });
    }
}

function applyFilters() {
    // Filter logic would go here
    showNotification('Filters applied successfully!', 'success');
    closeFilterModal();
}

function loadAdditionalProjects() {
    // This would load additional projects from an API or data source
    const additionalProjects = [
        {
            name: 'Discord Bot',
            description: 'Bot Discord với music player và moderation',
            image: '🤖',
            category: 'Node.js',
            completion: 90
        },
        {
            name: 'Portfolio Website',
            description: 'Website portfolio với animations và 3D effects',
            image: '🎨',
            category: 'JavaScript',
            completion: 100
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid-full');
    if (projectsGrid) {
        additionalProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card-mini';
            projectCard.innerHTML = `
                <div class="project-emoji">${project.image}</div>
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <div class="completion-badge">${project.completion}%</div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }
}

function showAddSkillModal() {
    const modal = document.createElement('div');
    modal.className = 'skill-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Add New Skill</h3>
            <form id="addSkillForm">
                <input type="text" placeholder="Skill Name" required>
                <input type="number" placeholder="Current Level (0-100)" min="0" max="100" required>
                <input type="number" placeholder="Target Level (0-100)" min="0" max="100" required>
                <select required>
                    <option value="">Select Category</option>
                    <option value="Programming">Programming</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Database">Database</option>
                </select>
                <div class="modal-actions">
                    <button type="button" onclick="closeModal()">Cancel</button>
                    <button type="submit">Add Skill</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Animate modal
    gsap.fromTo(modal, {
        opacity: 0,
        scale: 0.8
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
    });
}

function closeModal() {
    const modal = document.querySelector('.skill-modal');
    if (modal) {
        gsap.to(modal, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => modal.remove()
        });
    }
}

function exportSkillData() {
    const data = {
        exportDate: new Date().toISOString(),
        skills: document.querySelectorAll('.progress-item').length,
        message: 'Skill progress data exported successfully!'
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skill-progress.json';
    a.click();
    URL.revokeObjectURL(url);

    showNotification('Data exported successfully!', 'success');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    gsap.fromTo(notification, {
        opacity: 0,
        y: -50
    }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
    });

    setTimeout(() => {
        gsap.to(notification, {
            opacity: 0,
            y: -50,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => notification.remove()
        });
    }, 3000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        month: 'short',
        day: 'numeric'
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });

    // Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        // Update scroll-based animations here
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0.1);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    });
}
