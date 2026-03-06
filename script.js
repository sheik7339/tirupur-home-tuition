document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isMenuOpen = !mobileMenu.classList.contains('scale-y-0');

            if (isMenuOpen) {
                // Close Menu
                mobileMenu.classList.add('scale-y-0', 'opacity-0');
                mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
                mobileMenuBtn.classList.remove('bg-primary-50', 'text-primary-600', 'rounded-lg');
            } else {
                // Open Menu
                mobileMenu.classList.remove('scale-y-0', 'opacity-0');
                mobileMenuBtn.innerHTML = '<i class="ph ph-x"></i>';
                mobileMenuBtn.classList.add('bg-primary-50', 'text-primary-600', 'rounded-lg');
            }
        });

        // Close menu when navigating
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('scale-y-0', 'opacity-0');
                mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
                mobileMenuBtn.classList.remove('bg-primary-50', 'text-primary-600', 'rounded-lg');
            });
        });
    }

    // 2. Sticky Navbar & Shadow on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-soft');
            navbar.classList.replace('bg-white/90', 'bg-white');
        } else {
            navbar.classList.remove('shadow-soft');
            navbar.classList.replace('bg-white', 'bg-white/90');
        }
    });

    // 3. Scroll Reveal Animations via IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    function revealElementOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only reveal once for premium feel
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach((el) => {
            observer.observe(el);
        });
    }

    // Check initial visibility status immediately
    revealElementOnScroll();

    // 4. Testimonials Horizontal Scroll Carousel
    const carousel = document.getElementById('review-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (carousel && prevBtn && nextBtn) {
        // Approximate width to scroll (card width + gap)
        const scrollAmount = 350;

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // 5. Form submission enhancement
    const form = document.getElementById('enquiryForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Note: formsubmit.co will handle the routing, 
            // but we can add minor UI feedback until the redirect happens.
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = '<i class="ph-bold ph-spinner animate-spin mr-2"></i> Sending...';
                btn.classList.add('opacity-80', 'cursor-not-allowed');
            }
        });
    }
});
