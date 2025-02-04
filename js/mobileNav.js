const initializeMobileMenu = function() {
    console.log('Initializing mobile menu...');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) {
        console.error('Menu elements not found');
        return;
    }

    const newMenuToggle = menuToggle.cloneNode(true);
    menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);

    newMenuToggle.onclick = function(e) {
        console.log('Menu toggle clicked');
        e.preventDefault();
        e.stopPropagation();
        
        newMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    };
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeMobileMenu();
});

if (document.readyState === 'complete') {
    initializeMobileMenu();
} 