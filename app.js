// ── Toast Notification System ──
function showToast(message, type = 'info', duration = 3000) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.id = 'toastContainer';
        document.body.appendChild(container);
    }

    const icons = { success: '✅', error: '❌', info: 'ℹ️' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ── Hamburger Menu ──
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.getElementById('navMenu');
    if (hamburger) hamburger.classList.toggle('open');
    if (navUl) navUl.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#navMenu li a').forEach(link => {
        link.addEventListener('click', () => {
            const hamburger = document.getElementById('hamburger');
            const navUl = document.getElementById('navMenu');
            if (hamburger) hamburger.classList.remove('open');
            if (navUl) navUl.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        const hamburger = document.getElementById('hamburger');
        const navUl = document.getElementById('navMenu');
        if (hamburger && navUl && !hamburger.contains(e.target) && !navUl.contains(e.target)) {
            hamburger.classList.remove('open');
            navUl.classList.remove('open');
        }
    });
});