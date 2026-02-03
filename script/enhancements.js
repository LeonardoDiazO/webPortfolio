// ========================================
// SCROLL PROGRESS INDICATOR
// Add this to your main JavaScript file
// ========================================

// Add scroll progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// ========================================
// IMPROVED PLACEHOLDER TRANSLATION
// Update the changeLanguage function
// ========================================

// Add this to handle data-i18n-placeholder attributes
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (window.t) {
        const val = window.t(selectedLang, key);
        if (val) {
            el.placeholder = val;
        }
    }
});
