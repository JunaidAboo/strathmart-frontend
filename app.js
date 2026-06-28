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

// ── Mobile Menu Toggle ──
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('open');
}

// Close menu when a link is clicked
document.addEventListener('click', function(e) {
    const menu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('open');
    }
});

// ── Hamburger Menu ──
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    hamburger.classList.toggle('open');
    navUl.classList.toggle('open');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            const hamburger = document.getElementById('hamburger');
            const navUl = document.querySelector('nav ul');
            if (hamburger) hamburger.classList.remove('open');
            if (navUl) navUl.classList.remove('open');
        });
    });
});