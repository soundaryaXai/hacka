document.addEventListener('DOMContentLoaded', () => {

    // Navigation links scroll to sections
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Get Started button -> open role modal
    document.getElementById('getStartedBtn').addEventListener('click', () => {
        document.getElementById('roleModal').style.display = 'flex';
    });

    // Close modal
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('roleModal').style.display = 'none';
    });

    // Rose Petal Generation
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (5 + Math.random() * 5) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.width = (12 + Math.random() * 8) + 'px';
        petal.style.height = petal.style.width;
        document.body.appendChild(petal);
    }
});
