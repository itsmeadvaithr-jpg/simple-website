import './style.css';

/**
 * LaunchPad - Interactive JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Light / Dark Mode)
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  
  // Check for saved user preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });

  // 2. Mobile Navigation Toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking any nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Interactive Counter Demo
  const counterValue = document.getElementById('counterValue');
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');
  const resetBtn = document.getElementById('resetBtn');

  let count = 0;

  function updateCounter(val) {
    count = val;
    counterValue.textContent = count;
    // Brief punch animation
    counterValue.style.transform = 'scale(1.15)';
    setTimeout(() => {
      counterValue.style.transform = 'scale(1)';
    }, 150);
  }

  if (incrementBtn && decrementBtn && resetBtn) {
    incrementBtn.addEventListener('click', () => updateCounter(count + 1));
    decrementBtn.addEventListener('click', () => updateCounter(count - 1));
    resetBtn.addEventListener('click', () => updateCounter(0));
  }

  // 4. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      // Show friendly confirmation feedback
      formFeedback.textContent = `Thank you, ${name || 'friend'}! Your message has been received. We'll get back to you at ${email} shortly.`;
      formFeedback.className = 'form-feedback success';

      // Reset form
      contactForm.reset();

      // Clear notification after 6 seconds
      setTimeout(() => {
        formFeedback.style.display = 'none';
        formFeedback.className = 'form-feedback';
      }, 6000);
    });
  }

  // 5. Dynamic Footer Year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

