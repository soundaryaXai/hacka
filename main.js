// Navigation click handler
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
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
