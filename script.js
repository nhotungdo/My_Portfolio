// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Particles.js
function initParticlesJS() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#4b0082', '#800080', '#a100a1']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
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
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
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
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Custom Cursor Class
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('custom-cursor');
        this.follower = document.getElementById('custom-cursor-follower');
        this.init();
    }

    init() {
        if (!this.cursor || !this.follower) return;

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';

            setTimeout(() => {
                this.follower.style.left = e.clientX + 'px';
                this.follower.style.top = e.clientY + 'px';
            }, 50);
        });

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('hover');
                this.follower.classList.add('hover');
            });

            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('hover');
                this.follower.classList.remove('hover');
            });
        });
    }
}

// Drag & Drop Projects Class
class ProjectDragDrop {
    constructor() {
        this.projectsGrid = document.getElementById('sortable-projects');
        this.toggleBtn = document.getElementById('toggle-drag-drop');
        this.isDragEnabled = false;
        this.init();
    }

    init() {
        if (!this.projectsGrid || !this.toggleBtn) return;

        this.toggleBtn.addEventListener('click', () => {
            this.toggleDragDrop();
        });

        // Initialize Sortable.js
        this.sortable = Sortable.create(this.projectsGrid, {
            animation: 300,
            ghostClass: 'drag-over',
            chosenClass: 'dragging',
            disabled: true,
            onEnd: (evt) => {
                this.updateProjectOrder();
            }
        });
    }

    toggleDragDrop() {
        this.isDragEnabled = !this.isDragEnabled;
        this.sortable.option('disabled', !this.isDragEnabled);
        this.toggleBtn.classList.toggle('active', this.isDragEnabled);

        if (this.isDragEnabled) {
            this.toggleBtn.innerHTML = '<i class="fas fa-lock"></i><span>Khóa</span>';
        } else {
            this.toggleBtn.innerHTML = '<i class="fas fa-grip-vertical"></i><span>Kéo thả</span>';
        }
    }

    updateProjectOrder() {
        const projects = Array.from(this.projectsGrid.children);
        const order = projects.map((project, index) => ({
            id: project.dataset.category,
            order: index
        }));

        console.log('New project order:', order);
        // Here you could save the order to localStorage or send to server
    }
}

// Project Sorting & Filtering Class
class ProjectManager {
    constructor() {
        this.sortSelect = document.getElementById('sort-projects');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projects = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        if (this.sortSelect) {
            this.sortSelect.addEventListener('change', (e) => {
                this.sortProjects(e.target.value);
            });
        }

        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterProjects(e.target.closest('.filter-btn').dataset.filter);
            });
        });
    }

    sortProjects(sortBy) {
        const projectsArray = Array.from(this.projects);

        projectsArray.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
                case 'date':
                    const dateA = a.dataset.date || '0';
                    const dateB = b.dataset.date || '0';
                    return dateB.localeCompare(dateA);
                case 'category':
                    return a.dataset.category.localeCompare(b.dataset.category);
                default:
                    return 0;
            }
        });

        // Reorder DOM
        const container = this.projects[0].parentNode;
        projectsArray.forEach(project => {
            container.appendChild(project);
        });
    }

    filterProjects(category) {
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        event.target.closest('.filter-btn').classList.add('active');

        this.projects.forEach(project => {
            if (category === 'all' || project.dataset.category === category) {
                project.style.display = 'block';
                project.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

// Advanced Parallax Effects Class
class ParallaxController {
    constructor() {
        this.layers = document.querySelectorAll('[data-speed]');
        this.init();
    }

    init() {
        if (this.layers.length === 0) return;

        window.addEventListener('scroll', () => {
            this.updateParallax();
        });

        this.updateParallax();
    }

    updateParallax() {
        const scrolled = window.pageYOffset;

        this.layers.forEach(layer => {
            const speed = parseFloat(layer.dataset.speed);
            const yPos = -(scrolled * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Lazy Loading Class
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if (this.images.length === 0) return;

        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.imageObserver.unobserve(entry.target);
                    }
                });
            });

            this.images.forEach(img => this.imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            this.images.forEach(img => this.loadImage(img));
        }
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (src) {
            img.src = src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
        }
    }
}

// SPA Navigation Class
class SPANavigator {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href').substring(1);
                this.navigateTo(target);
            });
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.section) {
                this.navigateTo(e.state.section, false);
            }
        });
    }

    navigateTo(section, updateHistory = true) {
        if (section === this.currentSection) return;

        const targetElement = document.getElementById(section);
        if (!targetElement) return;

        // Smooth scroll to section
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Update navigation state
        this.currentSection = section;

        if (updateHistory) {
            history.pushState({ section }, '', `#${section}`);
        }

        // Update active navigation link
        this.updateActiveNavLink(section);
    }

    updateActiveNavLink(section) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${section}`) {
                link.classList.add('active');
            }
        });
    }
}

// Enhanced Scroll Animations
function initEnhancedScrollAnimations() {
    // Smooth scrolling for anchor links
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

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Enhanced AOS animations with custom triggers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.aosDelay || 0;
                const animation = element.dataset.aos || 'fade-up';

                setTimeout(() => {
                    element.classList.add('aos-animate');
                    element.style.animationDelay = delay + 'ms';
                }, parseInt(delay));
            }
        });
    }, observerOptions);

    // Observe all elements with AOS attributes
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced Scroll Animations Class
class ScrollAnimationController {
    constructor() {
        this.init();
    }

    init() {
        // GSAP ScrollTrigger animations
        gsap.from('.hero-content', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 100,
            opacity: 0
        });

        // Parallax hero background
        gsap.to('.hero-background', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: -100
        });

        // Stagger project cards
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.projects',
                start: 'top 80%'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        // Magnetic effect for interactive elements
        this.initMagneticEffect();
    }

    initMagneticEffect() {
        const magneticElements = document.querySelectorAll('[data-magnetic]');

        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(element, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3
                });
            });
        });
    }
}

// Performance Monitor Class
class PerformanceMonitor {
    constructor() {
        this.fpsCounter = document.getElementById('fps-counter');
        this.memoryUsage = document.getElementById('memory-usage');
        this.loadTime = document.getElementById('load-time');
        this.init();
    }

    init() {
        this.measureLoadTime();
        this.startFPSCounter();
        this.startMemoryMonitor();
    }

    measureLoadTime() {
        if (this.loadTime) {
            const loadTime = performance.now();
            this.loadTime.textContent = `${Math.round(loadTime)}ms`;
        }
    }

    startFPSCounter() {
        if (!this.fpsCounter) return;

        let frameCount = 0;
        let lastTime = performance.now();

        const countFPS = () => {
            frameCount++;
            const currentTime = performance.now();

            if (currentTime - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                this.fpsCounter.textContent = fps;
                frameCount = 0;
                lastTime = currentTime;
            }

            requestAnimationFrame(countFPS);
        };

        countFPS();
    }

    startMemoryMonitor() {
        if (!this.memoryUsage || !performance.memory) return;

        setInterval(() => {
            const memory = performance.memory;
            const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
            this.memoryUsage.textContent = `${usedMB} MB`;
        }, 1000);
    }
}

// Enhanced Navbar with Sticky Behavior
function initEnhancedNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (!navbar) return;

    // Sticky navbar on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove sticky class
        if (scrollTop > 100) {
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('navbar-sticky');
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;

        // Update active navigation link
        updateActiveNavLink();
    });

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height

                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: offsetTop, autoKill: false },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Add scroll-triggered animations to navbar
    gsap.fromTo(navbar,
        { y: -100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        }
    );
}

// Typing effect for hero section
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing effect after loading screen
        setTimeout(typeWriter, 2500);
    }
}

// Enhanced typing effect for hero title
function initHeroTypingEffect() {
    const heroTitle = document.querySelector('.hero-name');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        let isTyping = true;

        const typeWriter = () => {
            if (index < text.length && isTyping) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 150);
            }
        };

        // Start typing after a delay
        setTimeout(() => {
            typeWriter();
        }, 1000);

        // Add cursor effect
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';
        cursor.style.cssText = `
            color: var(--accent-purple);
            animation: blink 1s infinite;
        `;

        heroTitle.appendChild(cursor);

        // Remove cursor when typing is complete
        setTimeout(() => {
            isTyping = false;
            cursor.remove();
        }, text.length * 150 + 1000);
    }
}

// Particle effect for hero background
function initParticleEffect() {
    const particles = document.querySelector('.particles');

    // Create additional floating particles
    for (let i = 0; i < 20; i++) {
        createParticle(particles);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(${Math.random() * 100 + 75}, 0, ${Math.random() * 100 + 130}, ${Math.random() * 0.5 + 0.1})`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(particle);
}

// Scroll animations with GSAP
function initScrollAnimations() {
    // Hero section parallax
    gsap.to('.hero-background', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Skill items stagger animation
    gsap.from('.skill-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Project cards stagger animation
    gsap.from('.project-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Contact methods animation
    gsap.from('.contact-method', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.contact-methods',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Button effects and interactions
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        // Ripple effect
        button.addEventListener('click', function (e) {
            const ripple = this.querySelector('.btn-ripple');
            if (ripple) {
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';

                ripple.style.animation = 'none';
                ripple.offsetHeight; // Trigger reflow
                ripple.style.animation = 'ripple 0.6s linear';
            }
        });

        // Hover effects
        button.addEventListener('mouseenter', function () {
            if (this.classList.contains('btn-primary')) {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });

        button.addEventListener('mouseleave', function () {
            if (this.classList.contains('btn-primary')) {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Hero buttons specific functionality
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (index === 0) { // "Xem dự án" button
                document.querySelector('#projects').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (index === 1) { // "Liên hệ" button
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project filtering functionality
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    // Show card with fade in effect
                    gsap.to(card, {
                        opacity: 0,
                        y: 20,
                        duration: 0.3,
                        onComplete: () => {
                            card.style.display = 'block';
                            gsap.to(card, {
                                opacity: 1,
                                y: 0,
                                duration: 0.5,
                                ease: 'power2.out'
                            });
                        }
                    });
                } else {
                    // Hide card with fade out effect
                    gsap.to(card, {
                        opacity: 0,
                        y: -20,
                        duration: 0.3,
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Form handling with enhanced validation
function initFormHandling() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            // Reset previous errors
            clearFormErrors();

            let isValid = true;

            // Validate name
            if (!name.value.trim()) {
                showFieldError('name', 'Vui lòng nhập họ và tên');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showFieldError('name', 'Tên phải có ít nhất 2 ký tự');
                isValid = false;
            } else {
                showFieldSuccess('name');
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showFieldError('email', 'Vui lòng nhập email');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showFieldError('email', 'Email không hợp lệ');
                isValid = false;
            } else {
                showFieldSuccess('email');
            }

            // Validate subject
            if (!subject.value.trim()) {
                showFieldError('subject', 'Vui lòng nhập tiêu đề');
                isValid = false;
            } else if (subject.value.trim().length < 5) {
                showFieldError('subject', 'Tiêu đề phải có ít nhất 5 ký tự');
                isValid = false;
            } else {
                showFieldSuccess('subject');
            }

            // Validate message
            if (!message.value.trim()) {
                showFieldError('message', 'Vui lòng nhập nội dung tin nhắn');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showFieldError('message', 'Tin nhắn phải có ít nhất 10 ký tự');
                isValid = false;
            } else {
                showFieldSuccess('message');
            }

            if (isValid) {
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.querySelector('span').textContent;

                submitBtn.disabled = true;
                submitBtn.querySelector('span').textContent = 'Đang gửi...';

                showNotification('Đang gửi tin nhắn...', 'info');

                setTimeout(() => {
                    showNotification('Tin nhắn đã được gửi thành công!', 'success');
                    this.reset();
                    submitBtn.disabled = false;
                    submitBtn.querySelector('span').textContent = originalText;
                    clearFormSuccess();
                }, 2000);
            }
        });
    }
}

// Helper functions for form validation
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(`${fieldId}-error`);

    if (field && errorDiv) {
        field.classList.add('error');
        field.classList.remove('success');
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
    }
}

function showFieldSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(`${fieldId}-error`);

    if (field && errorDiv) {
        field.classList.add('success');
        field.classList.remove('error');
        errorDiv.classList.remove('show');
    }
}

function clearFormErrors() {
    const errorDivs = document.querySelectorAll('.form-error');
    const fields = document.querySelectorAll('.form-group input, .form-group textarea');

    errorDivs.forEach(div => div.classList.remove('show'));
    fields.forEach(field => {
        field.classList.remove('error', 'success');
    });
}

function clearFormSuccess() {
    const fields = document.querySelectorAll('.form-group input, .form-group textarea');
    fields.forEach(field => {
        field.classList.remove('success');
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4b0082' : type === 'error' ? '#ff4444' : '#800080'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Enhanced Parallax effect for background elements
function initParallaxEffect() {
    // Parallax for particles
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const particles = document.querySelector('.particles');

        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Enhanced parallax for demo section layers
    const parallaxLayers = document.querySelectorAll('[data-speed]');
    if (parallaxLayers.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxLayers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed);
                const yPos = -(scrolled * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Intersection Observer for additional animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add floating animation to skill items
                if (entry.target.classList.contains('skill-item')) {
                    entry.target.style.animation = `float 3s ease-in-out infinite`;
                    entry.target.style.animationDelay = Math.random() * 2 + 's';
                }

                // Add glow effect to project cards
                if (entry.target.classList.contains('project-card')) {
                    entry.target.style.boxShadow = '0 10px 30px rgba(75, 0, 130, 0.3)';
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.skill-item, .project-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize intersection observer after page load
setTimeout(initIntersectionObserver, 3000);

// Smooth reveal animation for sections
function revealSection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
            observer.unobserve(entry.target);
        }
    });
}

const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15
});

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Add CSS for section reveal animation
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    section.section-revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
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
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Any scroll-based animations can go here
}, 16)); // 60fps

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function () {
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            gsap.to(this, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function () {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            gsap.to(this, {
                y: -5,
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', function () {
            gsap.to(this, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});

// Add cursor trail effect (optional)
function initCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(75, 0, 130, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0;
    `;

    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
}

// Uncomment the line below if you want the cursor trail effect
// initCursorTrail();

// Advanced Interactive Features
function initAdvancedInteractions() {
    // Text Scramble Effect
    initTextScrambleEffect();

    // Magnetic Buttons
    initMagneticButtons();

    // Enhanced Project Card Interactions
    initEnhancedProjectCards();

    // Smooth Reveal Animations
    initSmoothReveals();
}

// Text Scramble Effect
function initTextScrambleEffect() {
    const scrambleElements = document.querySelectorAll('.scramble-text');

    scrambleElements.forEach(element => {
        const text = element.textContent;
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        element.innerHTML = '';

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            element.appendChild(span);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach((span, index) => {
                        setTimeout(() => {
                            span.style.transition = 'all 0.3s ease';
                            span.style.opacity = '1';
                            span.style.transform = 'translateY(0)';
                        }, index * 50);
                    });
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(element);
    });
}

// Magnetic Buttons
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn, .project-link, .floating-link');

    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.2,
                y: y * 0.2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Enhanced Project Card Interactions
function initEnhancedProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const image = card.querySelector('.project-image');
        const overlay = card.querySelector('.project-overlay');
        const content = card.querySelector('.project-content');

        // 3D Tilt Effect
        if (window.VanillaTilt) {
            VanillaTilt.init(card, {
                max: 15,
                speed: 400,
                glare: true,
                'max-glare': 0.3
            });
        }

        // Enhanced Hover Effects
        card.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(content, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(content, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Smooth Reveal Animations
function initSmoothReveals() {
    const revealElements = document.querySelectorAll('.skill-item, .project-card, .demo-item');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                gsap.fromTo(element, {
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    delay: Math.random() * 0.3
                });

                revealObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

// Main initialization
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after 2 seconds
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);

    // Initialize all functionality
    initNavbar();
    initTypingEffect();
    initParticleEffect();
    initScrollAnimations();
    initEnhancedScrollAnimations(); // Call the new function here
    initButtonEffects();
    initFormHandling();
    initParallaxEffect();
    initEnhancedNavbar(); // Call the new enhanced navbar function

    // Initialize new advanced features
    new ThemeManager();
    new AnimationController();
    new PerformanceMonitor();
    new CustomCursor();
    new ProjectDragDrop();
    new ProjectManager();
    new ParallaxController();
    new LazyLoader();
    new SPANavigator();
    new ScrollAnimationController();

    // Initialize particles
    initParticlesJS();

    // Initialize cursor trail if enabled
    if (CONFIG.animations.cursorTrail) {
        initCursorTrail();
    }

    // Initialize advanced interactions
    initAdvancedInteractions();

    console.log('🚀 Portfolio initialized with advanced JavaScript features!');
    console.log('📊 Performance monitoring active');
    console.log('🎨 Theme system ready');
    console.log('⚡ Animation controls available');
});
