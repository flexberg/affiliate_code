window.initializeMobileFilters = function() {
    console.log('Initializing mobile filters...');
    
    const filterToggle = document.querySelector('.filter-toggle');
    const filters = document.querySelector('.filters');
    const filterOverlay = document.querySelector('.filter-overlay');

    console.log('Elements found:', {
        filterToggle: !!filterToggle,
        filters: !!filters,
        filterOverlay: !!filterOverlay
    });

    if (!filterToggle || !filters || !filterOverlay) {
        console.error('Required elements not found');
        return;
    }

    // Remove existing listeners and clone the button
    const newFilterToggle = filterToggle.cloneNode(true);
    filterToggle.parentNode.replaceChild(newFilterToggle, filterToggle);

    function toggleFilters(e) {
        console.log('Toggle filters clicked');
        e.preventDefault();
        e.stopPropagation();
        
        filters.classList.toggle('active');
        filterOverlay.classList.toggle('active');
        document.body.style.overflow = filters.classList.contains('active') ? 'hidden' : '';
    }

    newFilterToggle.onclick = toggleFilters;
    newFilterToggle.addEventListener('click', toggleFilters);
    newFilterToggle.addEventListener('touchstart', toggleFilters);

    filterOverlay.onclick = () => {
        filters.classList.remove('active');
        filterOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.filters input').forEach(input => {
        input.onclick = () => {
            setTimeout(() => {
                filters.classList.remove('active');
                filterOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }, 300);
        };
    });
};

function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeMobileFilters();
}); 