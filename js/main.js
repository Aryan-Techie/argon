// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Get saved theme from localStorage or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        
        // Add event listener to toggle button
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }
        
        // Update icon based on current theme
        this.updateIcon();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        this.updateIcon();
        this.animateToggle();
    }

    updateIcon() {
        const themeIcon = document.getElementById('theme-icon');
        if (!themeIcon) return;

        if (this.currentTheme === 'dark') {
            // Sun icon for switching to light mode
            themeIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            `;
        } else {
            // Moon icon for switching to dark mode
            themeIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            `;
        }
    }

    animateToggle() {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.classList.add('rotating');
            setTimeout(() => {
                toggleButton.classList.remove('rotating');
            }, 600);
        }
    }
}

// Smooth scroll enhancement for any future navigation
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Enhanced loading animation
function addLoadingAnimation() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0)';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Enhanced grid interaction
class GridManager {
    constructor() {
        this.init();
    }

    init() {
        this.createMouseFollowGrid();
        this.addMouseMoveListener();
    }

    createMouseFollowGrid() {
        // Create a dynamic grid overlay that follows mouse
        const gridOverlay = document.createElement('div');
        gridOverlay.id = 'mouse-grid-overlay';
        gridOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(30, 144, 255, 0.1) 0%, 
                rgba(30, 144, 255, 0.05) 30%, 
                transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(gridOverlay);
    }

    addMouseMoveListener() {
        let mouseTimeout;
        
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            document.documentElement.style.setProperty('--mouse-x', `${x}%`);
            document.documentElement.style.setProperty('--mouse-y', `${y}%`);
            
            const overlay = document.getElementById('mouse-grid-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                
                clearTimeout(mouseTimeout);
                mouseTimeout = setTimeout(() => {
                    overlay.style.opacity = '0';
                }, 2000);
            }
        });

        // Hide overlay when mouse leaves window
        document.addEventListener('mouseleave', () => {
            const overlay = document.getElementById('mouse-grid-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    }
}

// Parallax grid effect
class ParallaxGrid {
    constructor() {
        this.init();
    }

    init() {
        this.addScrollListener();
    }

    addScrollListener() {
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            document.documentElement.style.setProperty('--scroll-offset', `${rate}px`);
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new GridManager();
    new ParallaxGrid();
    addLoadingAnimation();
    
    // Add some interactive hover effects
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Project is ready to use - no dynamic percentage calculation needed