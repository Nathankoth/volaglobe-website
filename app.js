// D-Gate Waitlist Landing Page JavaScript
// Extracted and adapted from vf-alpha.vercel.app design system

class WaitlistApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupCarousel();
        this.setupFAQ();
        this.setupThemeToggle();
        this.setupStickyCTA();
        this.setupFormValidation();
    }

    setupEventListeners() {
        // Waitlist form submission
        const waitlistForm = document.getElementById('waitlistForm');
        if (waitlistForm) {
            waitlistForm.addEventListener('submit', this.handleWaitlistSubmit.bind(this));
        }

        // Join waitlist buttons
        const joinButtons = document.querySelectorAll('#joinWaitlistBtn, #footerJoinWaitlist, #stickyJoinBtn');
        joinButtons.forEach(btn => {
            btn.addEventListener('click', this.scrollToForm.bind(this));
        });

        // Request demo button
        const requestDemoBtn = document.getElementById('requestDemoBtn');
        if (requestDemoBtn) {
            requestDemoBtn.addEventListener('click', this.handleRequestDemo.bind(this));
        }

        // Modal close
        const closeModal = document.getElementById('closeModal');
        if (closeModal) {
            closeModal.addEventListener('click', this.closeModal.bind(this));
        }

        // Share and invite buttons
        const shareBtn = document.getElementById('shareBtn');
        const inviteBtn = document.getElementById('inviteBtn');
        if (shareBtn) shareBtn.addEventListener('click', this.handleShare.bind(this));
        if (inviteBtn) inviteBtn.addEventListener('click', this.handleInvite.bind(this));

        // Close modal on backdrop click
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    }

    setupCarousel() {
        const carousel = document.querySelector('.device-mockup-carousel');
        const indicators = document.querySelectorAll('.indicator');
        
        if (!carousel || !indicators.length) return;

        let currentSlide = 0;
        const slides = carousel.querySelectorAll('.mockup');
        const totalSlides = slides.length;

        // Auto-rotate carousel
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            this.updateCarousel(currentSlide, slides, indicators);
        }, 4000);

        // Manual navigation
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                this.updateCarousel(currentSlide, slides, indicators);
            });
        });
    }

    updateCarousel(activeIndex, slides, indicators) {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === activeIndex);
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === activeIndex);
        });
    }

    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    const isExpanded = question.getAttribute('aria-expanded') === 'true';
                    question.setAttribute('aria-expanded', !isExpanded);
                });
            }
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        // Load saved theme
        const savedTheme = localStorage.getItem('dgate-theme');
        if (savedTheme === 'premium') {
            document.body.classList.add('premium-theme');
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('premium-theme');
            const isPremium = document.body.classList.contains('premium-theme');
            localStorage.setItem('dgate-theme', isPremium ? 'premium' : 'default');
        });
    }

    setupStickyCTA() {
        const stickyCTA = document.getElementById('stickyCta');
        if (!stickyCTA) return;

        // Show sticky CTA on mobile when scrolled past hero
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stickyCTA.classList.remove('visible');
                } else {
                    stickyCTA.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            observer.observe(heroSection);
        }
    }

    setupFormValidation() {
        const emailInput = document.getElementById('email');
        const roleSelect = document.getElementById('role');
        
        if (emailInput) {
            emailInput.addEventListener('blur', this.validateEmail.bind(this));
        }
        
        if (roleSelect) {
            roleSelect.addEventListener('change', this.validateRole.bind(this));
        }
    }

    validateEmail() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.showFieldError(emailInput, 'Please enter a valid email address');
            return false;
        } else {
            this.clearFieldError(emailInput);
            return true;
        }
    }

    validateRole() {
        const roleSelect = document.getElementById('role');
        const role = roleSelect.value;
        
        if (!role) {
            this.showFieldError(roleSelect, 'Please select your role');
            return false;
        } else {
            this.clearFieldError(roleSelect);
            return true;
        }
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = 'hsl(var(--destructive))';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.5rem';
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = 'hsl(var(--destructive))';
    }

    clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.style.borderColor = '';
    }

    async handleWaitlistSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const formError = document.getElementById('formError');
        
        // Validate form
        const emailValid = this.validateEmail();
        const roleValid = this.validateRole();
        
        if (!emailValid || !roleValid) {
            this.showFormError('Please fix the errors above');
            return;
        }

        // Show loading state
        this.setButtonLoading(submitBtn, true);
        this.clearFormError();

        try {
            // Collect form data
            const formData = new FormData(form);
            const data = {
                email: formData.get('email'),
                role: formData.get('role'),
                company: formData.get('company') || null,
                monthlyListings: formData.get('monthlyListings') || null,
                howHeard: formData.get('howHeard') || null
            };

            // Submit to serverless function
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to join waitlist');
            }

            const result = await response.json();
            
            if (result.success) {
                this.showSuccessModal();
                form.reset();
            } else {
                throw new Error(result.error || 'Failed to join waitlist');
            }

        } catch (error) {
            console.error('Waitlist submission error:', error);
            this.showFormError('Something went wrong. Please try again.');
        } finally {
            this.setButtonLoading(submitBtn, false);
        }
    }

    setButtonLoading(button, loading) {
        const btnText = button.querySelector('.btn-text');
        const btnLoading = button.querySelector('.btn-loading');
        
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }

    showFormError(message) {
        const formError = document.getElementById('formError');
        if (formError) {
            formError.textContent = message;
            formError.style.display = 'block';
        }
    }

    clearFormError() {
        const formError = document.getElementById('formError');
        if (formError) {
            formError.style.display = 'none';
        }
    }

    showSuccessModal() {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Focus management
            const firstFocusable = modal.querySelector('button');
            if (firstFocusable) {
                firstFocusable.focus();
            }
        }
    }

    closeModal() {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    scrollToForm() {
        const form = document.getElementById('waitlistForm');
        if (form) {
            form.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // Focus on email input
            const emailInput = form.querySelector('#email');
            if (emailInput) {
                setTimeout(() => emailInput.focus(), 500);
            }
        }
    }

    handleRequestDemo() {
        // For now, just scroll to form. In production, this would open a demo request modal
        this.scrollToForm();
    }

    async handleShare() {
        const shareData = {
            title: 'D-Gate - AI-Powered Property Analysis',
            text: 'Join me on the waitlist for D-Gate, the revolutionary AI-powered property analysis platform!',
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(shareData.url);
                this.showToast('Link copied to clipboard!');
            }
        } catch (error) {
            console.error('Share error:', error);
            this.showToast('Unable to share. Please try again.');
        }
    }

    handleInvite() {
        // Open email client with pre-filled message
        const subject = encodeURIComponent('Join me on D-Gate waitlist!');
        const body = encodeURIComponent(`Hi!

I just joined the waitlist for D-Gate, an amazing AI-powered property analysis platform that's going to revolutionize real estate.

You should check it out: ${window.location.href}

Best regards!`);
        
        window.open(`mailto:?subject=${subject}&body=${body}`);
    }

    handleKeyboardNavigation(e) {
        // Close modal on Escape
        if (e.key === 'Escape') {
            this.closeModal();
        }
    }

    showToast(message) {
        // Simple toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: hsl(var(--card));
            color: hsl(var(--foreground));
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-glass);
            border: 1px solid hsl(var(--border));
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Analytics tracking
class Analytics {
    static track(event, properties = {}) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', event, properties);
        }
        
        // Plausible Analytics
        if (typeof plausible !== 'undefined') {
            plausible(event, { props: properties });
        }
        
        console.log('Analytics event:', event, properties);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WaitlistApp();
    
    // Track page view
    Analytics.track('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
