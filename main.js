document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainLinks = document.getElementById('main-links');

    if (mobileMenu && mainLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mainLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        const links = mainLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mainLinks.classList.remove('active');
            });
        });
    }
});
