document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation click handler ---
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

    // --- Get Started button opens modal ---
    document.getElementById('getStartedBtn').addEventListener('click', () => {
        document.getElementById('roleModal').style.display = 'flex';
    });

    // --- Close modal button ---
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('roleModal').style.display = 'none';
    });

    // --- Rose Petal Generation with artistic SVGs ---
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (5 + Math.random() * 5) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';

        // SVG shape of petal with gradient
        const svg = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <defs>
                    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" style="stop-color:#ff4b91; stop-opacity:0.7" />
                       <stop offset="100%" style="stop-color:#ff0066; stop-opacity:0.7" />

                    </linearGradient>
                </defs>
                <path d="M12 2C9 5 2 9 6 14c3 3 6 6 6 6s3-3 6-6c4-5-3-9-6-12z"
                    fill="url(#grad${i})"/>
            </svg>
        `;
        petal.innerHTML = svg;
        document.body.appendChild(petal);
    }

});
