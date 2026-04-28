/* ──────────────────────────────────────────────
   Scroll-Reveal Animation System
   Lightweight Intersection Observer approach
   ────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animations for sibling elements
                const el = entry.target;
                const delay = el.dataset.revealDelay || 0;
                setTimeout(() => {
                    el.classList.add('revealed');
                }, delay);
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el, i) => {
        // Auto-stagger children inside a grid or flex container
        if (el.closest('.reveal-stagger')) {
            const siblings = Array.from(el.closest('.reveal-stagger').querySelectorAll('.reveal'));
            const idx = siblings.indexOf(el);
            el.dataset.revealDelay = idx * 100;
        }
        observer.observe(el);
    });
});
