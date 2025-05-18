// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    });
});

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // WhatsApp Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            const phoneNumber = '923134372887';
            const formattedMessage = `New Message from Portfolio:%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});