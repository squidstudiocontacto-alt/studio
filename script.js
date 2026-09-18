document.addEventListener('DOMContentLoaded', () => {
  // Garantiza que la página muestre contenido si JS se activa
  document.body.classList.add('js-enabled');

  // 1. Animaciones al hacer Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // 2. Acordeón Interactivo de Servicios
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const accordionContent = accordionItem.querySelector('.accordion-content');
      
      const isActive = accordionItem.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
      });

      if (!isActive) {
        accordionItem.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  });

  // 3. Desplegable de Historia del Estudio
  const toggleHistoryBtn = document.getElementById('toggle-history-btn');
  const historyContent = document.getElementById('history-content');

  if (toggleHistoryBtn && historyContent) {
    toggleHistoryBtn.addEventListener('click', () => {
      historyContent.classList.toggle('expanded');
      
      if (historyContent.classList.contains('expanded')) {
        toggleHistoryBtn.querySelector('span').textContent = 'OCULTAR HISTORIA';
      } else {
        toggleHistoryBtn.querySelector('span').textContent = 'LEER HISTORIA COMPLETA';
      }
    });
  }
});
