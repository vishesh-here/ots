// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // FAQ functionality
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const answer = document.getElementById(targetId);
            const icon = this.querySelector('i');
            
            if (answer.classList.contains('hidden')) {
                // Close all other FAQs
                document.querySelectorAll('.faq-answer').forEach(faq => {
                    faq.classList.add('hidden');
                });
                document.querySelectorAll('.faq-question i').forEach(i => {
                    i.classList.remove('rotate-180');
                });
                
                // Open clicked FAQ
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                answer.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        });
    });

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                const messageDiv = document.getElementById('form-message');
                messageDiv.className = 'mt-4 p-4 rounded-lg bg-green-100 border border-green-300 text-green-700';
                messageDiv.textContent = 'Thank you for your interest in becoming a founding member! We will review your application and get back to you soon.';
                messageDiv.classList.remove('hidden');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Scroll to message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 2000);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navigation
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add transition to nav
    nav.style.transition = 'transform 0.3s ease-in-out';
});

// Utility function to handle form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Add input event listeners for real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('border-red-500');
                this.classList.add('border-green-500');
            } else {
                this.classList.remove('border-green-500');
                this.classList.add('border-red-500');
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.value.trim()) {
                this.classList.remove('border-red-500', 'border-green-500');
            }
        });
    });
});

// Add loading animation for better UX
function showLoading(element) {
    element.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...';
    element.disabled = true;
}

function hideLoading(element, originalText) {
    element.innerHTML = originalText;
    element.disabled = false;
}

// Add parallax effect to hero section (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add typing effect for hero text (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load (uncomment to enable)
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('h1');
//     if (heroTitle && window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 30);
//     }
// });