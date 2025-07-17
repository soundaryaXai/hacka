// Modal logic for index.html
document.addEventListener('DOMContentLoaded', function () {
    // Role modal logic
    const getStartedBtn = document.getElementById('getStartedBtn');
    const roleModal = document.getElementById('roleModal');
    const closeModalBtn = document.getElementById('closeModal');

    if (getStartedBtn && roleModal && closeModalBtn) {
        getStartedBtn.addEventListener('click', function () {
            roleModal.style.display = 'flex';
        });
        closeModalBtn.addEventListener('click', function () {
            roleModal.style.display = 'none';
        });
        // Close modal when clicking outside content
        roleModal.addEventListener('click', function (e) {
            if (e.target === roleModal) {
                roleModal.style.display = 'none';
            }
        });
    }

    // Auth page logic (login/register toggle)
    function setupAuthToggle(loginId, registerId, showRegisterId, showLoginId) {
        const loginSection = document.getElementById(loginId);
        const registerSection = document.getElementById(registerId);
        const showRegister = document.getElementById(showRegisterId);
        const showLogin = document.getElementById(showLoginId);

        if (loginSection && registerSection && showRegister && showLogin) {
            showRegister.addEventListener('click', function (e) {
                e.preventDefault();
                loginSection.style.display = 'none';
                registerSection.style.display = 'block';
            });
            showLogin.addEventListener('click', function (e) {
                e.preventDefault();
                registerSection.style.display = 'none';
                loginSection.style.display = 'block';
            });
        }
    }

    // User Auth
    setupAuthToggle('loginSection', 'registerSection', 'showRegister', 'showLogin');
    // Volunteer Auth (if present)
    setupAuthToggle('loginSection', 'registerSection', 'showRegister', 'showLogin');

    // Dashboard/Profile toggle logic
    function setupDashboardProfile(toggleBtnId, dashboardId, profileId, backBtnId) {
        const toggleBtn = document.getElementById(toggleBtnId);
        const dashboardSection = document.getElementById(dashboardId);
        const profileSection = document.getElementById(profileId);
        const backBtn = document.getElementById(backBtnId);

        if (toggleBtn && dashboardSection && profileSection && backBtn) {
            toggleBtn.addEventListener('click', function () {
                dashboardSection.style.display = 'none';
                profileSection.style.display = 'block';
            });
            backBtn.addEventListener('click', function () {
                profileSection.style.display = 'none';
                dashboardSection.style.display = 'block';
            });
        }
    }

    // User Dashboard
    setupDashboardProfile('toggleProfileBtn', 'dashboardSection', 'profileSection', 'backToDashboard');
    // Volunteer Dashboard (if present)
    setupDashboardProfile('toggleProfileBtn', 'dashboardSection', 'profileSection', 'backToDashboard');
});