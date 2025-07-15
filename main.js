document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Get Started button
    document.getElementById('getStartedBtn')?.addEventListener('click', () => {
        document.getElementById('roleModal').style.display = 'flex';
    });

    // Close modal
    document.getElementById('closeModal')?.addEventListener('click', () => {
        document.getElementById('roleModal').style.display = 'none';
    });

    // Optional: Background effect like rose petals (abstract version)
    for(let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (5 + Math.random() * 5) + 's';
        document.body.appendChild(particle);
    }
});
