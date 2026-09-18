document.addEventListener('DOMContentLoaded', () => {
  // Garantiza que la página active animaciones si JavaScript está habilitado
  document.body.classList.add('js-enabled');

  /* ===================================================
     1. Navegación Móvil (Menú Hamburguesa)
     =================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-item');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' || false;
      mobileToggle.setAttribute('aria-expanded', !expanded);
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      });
    });
  }

  /* ===================================================
     2. Navbar Scroll Style Change
     =================================================== */
  const mainNav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });

  /* ===================================================
     3. Intersection Observer para Revelado Suave
     =================================================== */
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Opcional: Dejar de observar una vez revelado
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ===================================================
     4. Acordeón Interactivo de Servicios
     =================================================== */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const accordionContent = accordionItem.querySelector('.accordion-content');
      const isActive = accordionItem.classList.contains('active');

      // Cerrar todos los demás items activos
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const content = item.querySelector('.accordion-content');
        if (content) content.style.maxHeight = null;
        const btn = item.querySelector('.accordion-header');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      // Alternar el item actual si no estaba activo
      if (!isActive) {
        accordionItem.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ===================================================
     5. Historia Desplegable del Estudio
     =================================================== */
  const toggleHistoryBtn = document.getElementById('toggle-history-btn');
  const historyContent = document.getElementById('history-content');

  if (toggleHistoryBtn && historyContent) {
    toggleHistoryBtn.addEventListener('click', () => {
      historyContent.classList.toggle('expanded');
      const isExpanded = historyContent.classList.contains('expanded');
      
      const btnSpan = toggleHistoryBtn.querySelector('span');
      if (btnSpan) {
        btnSpan.textContent = isExpanded ? 'OCULTAR HISTORIA' : 'LEER HISTORIA COMPLETA';
      }
    });
  }

  /* ===================================================
     6. Feedback de Formulario Netlify
     =================================================== */
  const contactForm = document.getElementById('squid-contact-form');
  const successMsg = document.getElementById('form-success-msg');

  if (contactForm && successMsg) {
    contactForm.addEventListener('submit', (e) => {
      // Si el envío se maneja vía AJAX/fetch o Netlify predeterminado:
      // Mostramos un feedback visual mientras procesa
      const submitBtn = contactForm.querySelector('.btn-submit span');
      if (submitBtn) {
        submitBtn.textContent = 'ENVIANDO...';
      }
    });
  }
});
