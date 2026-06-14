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
    initParticlesJS();

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
            'Software Engineer & DevOps Engineer',


        ],
        typeSpeed: 880,
        backSpeed: 90,
        backDelay: 3000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Particles.js Configuration
function initParticlesJS() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#4b0082', '#800080', '#a100a1']
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4b0082',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
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
                    gsap.to(card, {
                        duration: 0.5,
                        opacity: 1,
                        scale: 1,
                        ease: 'power3.out'
                    });
                } else {
                    gsap.to(card, {
                        duration: 0.5,
                        opacity: 0.3,
                        scale: 0.8,
                        ease: 'power3.out'
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

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.className;
        const newTheme = currentTheme === 'theme-purple' ? '' : 'theme-purple';

        body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // Toggle meteor shower effect
        toggleMeteorShower(newTheme);
    });
}

// Update theme icon
function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'theme-purple') {
        icon.className = 'fas fa-meteor';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Toggle meteor shower effect
function toggleMeteorShower(theme) {
    const meteorShower = document.getElementById('meteor-shower');
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
