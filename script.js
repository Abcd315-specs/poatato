// Create floating particles background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Page Navigation System
let currentPage = 1;

function goToPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    // Show selected page
    const page = document.getElementById(`page-${pageNumber}`);
    if (page) {
        page.style.display = 'block';
        setTimeout(() => {
            page.classList.add('active');
        }, 10);
        currentPage = pageNumber;
        window.scrollTo(0, 0);
    }
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (navLinks) navLinks.classList.toggle('active');
    });
}

// Countdown Timer
function startCountdown() {
    const countdownDate = new Date("Mar 26, 2026 00:00:00").getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
}



// Confetti effect
function createConfetti() {
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#fb5607', '#ffbe0b'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = '0.8';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${2 + Math.random() * 1}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Flower animation effect
function createFlowers() {
    const flowers = ['🌹', '🌸', '🌺', '🌻', '🌼', '💐', '🏵️', '🌷'];
    const flowerCount = 40;
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.style.position = 'fixed';
        flower.style.fontSize = (Math.random() * 30 + 20) + 'px';
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.top = '-50px';
        flower.style.pointerEvents = 'none';
        flower.style.zIndex = '9998';
        flower.style.userSelect = 'none';
        flower.style.animation = `flowerFall ${3 + Math.random() * 2}s linear forwards`;
        flower.style.opacity = '1';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        document.body.appendChild(flower);
    }
    
    // Remove all flowers after 5 seconds
    setTimeout(() => {
        document.querySelectorAll('div[style*="flowerFall"]').forEach(f => f.remove());
    }, 5000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes flowerFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes magicalGradient {
        0% { background-position: 0% 50%; }
        25% { background-position: 100% 25%; }
        50% { background-position: 100% 75%; }
        75% { background-position: 0% 75%; }
        100% { background-position: 0% 50%; }
    }
    @keyframes magicalPulse {
        0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
        25% { opacity: 0.9; transform: scale(1.02) rotate(1deg); }
        50% { opacity: 1; transform: scale(1.05) rotate(0deg); }
        75% { opacity: 0.9; transform: scale(1.02) rotate(-1deg); }
    }
    @keyframes navbarGlow {
        0%, 100% { box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(102, 126, 234, 0.3); }
        50% { box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3), 0 0 80px rgba(240, 147, 251, 0.5); }
    }
    @keyframes logoGlow {
        0%, 100% { filter: brightness(1) drop-shadow(0 0 10px rgba(240, 147, 251, 0.5)); }
        50% { filter: brightness(1.2) drop-shadow(0 0 20px rgba(255, 107, 157, 0.8)); }
    }
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.1); }
        45% { transform: scale(0.9); }
        60% { transform: scale(1.05); }
        80% { transform: scale(0.95); }
    }
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(2deg); }
        66% { transform: translateY(-10px) rotate(-1deg); }
    }
    @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
    }
`;
document.head.appendChild(style);

const celebrateBtn = document.querySelector('.btn-glow');
if (celebrateBtn) {
    celebrateBtn.addEventListener('click', createFlowers);
}

// Blooming flower effect on touch/click
function createBloomingFlower(x, y) {
    const flowerEmojis = ['🌸', '🌺', '🌹', '🌻', '🌼', '🏵️', '🌷'];
    
    // Create single flower
    const flower = document.createElement('div');
    flower.style.position = 'fixed';
    flower.style.left = x + 'px';
    flower.style.top = y + 'px';
    flower.style.pointerEvents = 'none';
    flower.style.zIndex = '9999';
    flower.style.fontSize = '0px';
    flower.style.transform = 'translate(-50%, -50%)';
    flower.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    flower.style.textShadow = '0 0 40px rgba(255, 20, 147, 0.9), 0 0 60px rgba(255, 105, 180, 0.7)';
    flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    
    document.body.appendChild(flower);
    
    // Fast bloom animation
    setTimeout(() => {
        flower.style.fontSize = '120px';
        flower.style.opacity = '1';
        flower.style.transform = 'translate(-50%, -50%) scale(1.8) rotate(720deg)';
        flower.style.filter = 'brightness(1.5) saturate(1.5)';
    }, 10);
    
    // Quick fade out
    setTimeout(() => {
        flower.style.opacity = '0';
        flower.style.transform = 'translate(-50%, -50%) scale(0.2) rotate(1440deg)';
    }, 800);
    
    setTimeout(() => flower.remove(), 1500);
    
    // Create 1 heart above the flower
    const heart = document.createElement('div');
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = (y - 80) + 'px';
    heart.style.fontSize = '0px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9998';
    heart.style.transition = 'all 0.4s ease-out';
    heart.style.opacity = '0';
    heart.style.textShadow = '0 0 30px rgba(255, 20, 147, 0.9)';
    heart.textContent = '💖';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.fontSize = '50px';
        heart.style.opacity = '1';
        heart.style.transform = `scale(1.3) rotate(360deg)`;
        heart.style.filter = 'brightness(1.8)';
    }, 100);
    
    setTimeout(() => {
        heart.style.opacity = '0';
        heart.style.transform = `scale(0.2) rotate(720deg)`;
    }, 800);
    
    setTimeout(() => heart.remove(), 1200);
    
    // Create sparkles that spread across screen
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        const angle = (i * 360 / 8) * Math.PI / 180;
        const distance = 180 + Math.random() * 120;
        
        sparkle.style.position = 'fixed';
        sparkle.style.left = (x + Math.cos(angle) * distance) + 'px';
        sparkle.style.top = (y + Math.sin(angle) * distance) + 'px';
        sparkle.style.fontSize = '0px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9997';
        sparkle.style.transition = 'all 0.8s ease-out';
        sparkle.style.opacity = '0';
        sparkle.textContent = ['✨', '🌟', '💫'][Math.floor(Math.random() * 3)];
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.fontSize = '25px';
            sparkle.style.opacity = '1';
            sparkle.style.transform = `scale(1.2) rotate(${Math.random() * 720}deg)`;
            sparkle.style.filter = 'brightness(1.5)';
        }, 50 + i * 30);
        
        setTimeout(() => {
            sparkle.style.opacity = '0';
            sparkle.style.transform = `scale(0.3) rotate(${Math.random() * 1440}deg)`;
        }, 1000 + i * 30);
        
        setTimeout(() => sparkle.remove(), 1500 + i * 30);
    }
}

// Wheel navigation disabled - users should click buttons instead

// Add swipe gestures for mobile
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const minSwipeDistance = 50;
    
    // Horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
            // Swipe right - go to previous page
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        } else {
            // Swipe left - go to next page
            if (currentPage < 4) {
                goToPage(currentPage + 1);
            }
        }
    }
    // Vertical swipe
    else if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
            // Swipe down - go to previous page
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        } else {
            // Swipe up - go to next page
            if (currentPage < 4) {
                goToPage(currentPage + 1);
            }
        }
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        // Go to previous page
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        // Go to next page
        if (currentPage < 4) {
            goToPage(currentPage + 1);
        }
    } else if (e.key === 'Escape') {
        // Go to first page
        goToPage(1);
    }
});

// Add touch/click event listeners for blooming flowers (only on content, not buttons)
document.addEventListener('click', function(e) {
    // Don't create flowers on button clicks
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        return;
    }
    
    // Don't create flowers on Next button specifically
    if (e.target.classList.contains('next-btn') || e.target.closest('.next-btn')) {
        return;
    }
    
    createBloomingFlower(e.clientX, e.clientY);
});

document.addEventListener('touchstart', function(e) {
    e.preventDefault();
    for (let touch of e.touches) {
        // Don't create flowers on button touches
        if (touch.target.tagName === 'BUTTON' || touch.target.closest('button')) {
            continue;
        }
        
        // Don't create flowers on Next button specifically
        if (touch.target.classList.contains('next-btn') || touch.target.closest('.next-btn')) {
            continue;
        }
        
        createBloomingFlower(touch.clientX, touch.clientY);
    }
});

// Window load event
window.addEventListener('load', () => {
    // Cake Loading Screen
    const cakeLoader = document.getElementById('cake-loader');
    
    // Add click event to blow candles
    cakeLoader.addEventListener('click', () => {
        blowCandles();
    });
    
    // Show cake loader for 2-3 seconds, then fade out
    setTimeout(() => {
        // Auto blow candles before fading
        blowCandles();
        
        setTimeout(() => {
            cakeLoader.classList.add('hidden');
            
            // Remove from DOM after fade animation
            setTimeout(() => {
                cakeLoader.style.display = 'none';
            }, 800);
            
            // Initialize the main site after loader disappears
            initializeSite();
        }, 1500); // Wait for candle blow animation
    }, 2500); // 2.5 seconds
});

function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const candles = document.querySelectorAll('.candle');
    
    // Blow out all candles
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.animation = 'blowOut 0.5s ease-out forwards';
            
            // Create smoke effect
            const smoke = document.createElement('div');
            smoke.className = 'smoke';
            smoke.style.cssText = `
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 20px;
                height: 30px;
                background: linear-gradient(to top, rgba(200,200,200,0.8), transparent);
                border-radius: 50%;
                animation: smokeRise 2s ease-out forwards;
            `;
            
            candles[index].appendChild(smoke);
            
            // Remove smoke after animation
            setTimeout(() => smoke.remove(), 2000);
        }, index * 100); // Stagger the blowing
    });
    
    // Change cake text
    const cakeText = document.querySelector('.cake-text');
    if (cakeText) {
        setTimeout(() => {
            cakeText.textContent = 'Make a wish! 🎂';
        }, 500);
    }
}

function initializeSite() {
    // Initialize single page - no navigation needed
    createParticles();
    startCountdown();
    createConfetti();
    
    // Create automatic flower shower on load
    setTimeout(() => {
        createFlowerShower();
    }, 1000);
    
    // Create floating stars in hero section
    createFloatingStars();
    
    // Add button ripple effect
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        console.log('Button found:', button.textContent, button.onclick);
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', button.textContent);
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple-animation 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Create floating stars in hero section
function createFloatingStars() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const starsContainer = document.createElement('div');
    starsContainer.style.position = 'absolute';
    starsContainer.style.top = '0';
    starsContainer.style.left = '0';
    starsContainer.style.width = '100%';
    starsContainer.style.height = '100%';
    starsContainer.style.pointerEvents = 'none';
    starsContainer.style.zIndex = '1';
    
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.fontSize = (Math.random() * 20 + 10) + 'px';
        star.style.opacity = '0';
        star.style.animation = `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`;
        star.style.animationDelay = Math.random() * 5 + 's';
        star.textContent = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];
        
        starsContainer.appendChild(star);
    }
    
    heroSection.appendChild(starsContainer);
}

// Automatic flower shower function
function createFlowerShower() {
    const flowerEmojis = ['🌸', '🌺', '🌹', '🌻', '🌼', '🏵️', '🌷'];
    const showerCount = 15;
    
    for (let i = 0; i < showerCount; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.5; // Upper half of screen
            
            // Create single flower at each position
            const flower = document.createElement('div');
            flower.style.position = 'fixed';
            flower.style.left = x + 'px';
            flower.style.top = y + 'px';
            flower.style.pointerEvents = 'none';
            flower.style.zIndex = '9999';
            flower.style.fontSize = '0px';
            flower.style.transform = 'translate(-50%, -50%)';
            flower.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            flower.style.textShadow = '0 0 40px rgba(255, 20, 147, 0.9), 0 0 60px rgba(255, 105, 180, 0.7)';
            flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
            
            document.body.appendChild(flower);
            
            // Bloom animation
            setTimeout(() => {
                flower.style.fontSize = '100px';
                flower.style.opacity = '1';
                flower.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(720deg)';
                flower.style.filter = 'brightness(1.5) saturate(1.5)';
            }, 10);
            
            // Fade out
            setTimeout(() => {
                flower.style.opacity = '0';
                flower.style.transform = 'translate(-50%, -50%) scale(0.2) rotate(1440deg)';
            }, 1200);
            
            setTimeout(() => flower.remove(), 2000);
            
            // Add heart
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.left = x + 'px';
            heart.style.top = (y - 60) + 'px';
            heart.style.fontSize = '0px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9998';
            heart.style.transition = 'all 0.5s ease-out';
            heart.style.opacity = '0';
            heart.style.textShadow = '0 0 30px rgba(255, 20, 147, 0.9)';
            heart.textContent = '💖';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.fontSize = '40px';
                heart.style.opacity = '1';
                heart.style.transform = `scale(1.3) rotate(360deg)`;
                heart.style.filter = 'brightness(1.8)';
            }, 150);
            
            setTimeout(() => {
                heart.style.opacity = '0';
                heart.style.transform = `scale(0.2) rotate(720deg)`;
            }, 1000);
            
            setTimeout(() => heart.remove(), 1500);
            
        }, i * 200); // Stagger the shower
    }
}

// Image gallery click effect
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
    
    // Add hover effect
    item.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// Add scroll animation for elements
function revealOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .timer-box, .gallery-item');
    const windowHeight = window.innerHeight;
    
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.style.opacity = '1';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
