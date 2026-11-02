(() => {
  const config = window.REI_DAS_PORTAS || {};
  const number = String(config.whatsappNumber || '').replace(/\D/g, '');
  const button = document.getElementById('whatsapp-button');
  const status = document.getElementById('contact-status');
  document.getElementById('year').textContent = new Date().getFullYear();

  if (/^[1-9]\d{9,14}$/.test(number)) {
    button.href = `https://wa.me/${number}?text=${encodeURIComponent(config.whatsappMessage || 'Olá! Gostaria de saber mais sobre a Rei Das Portas.')}`;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.removeAttribute('aria-disabled');
    status.textContent = 'Conte sua ideia. Vamos conversar sobre o seu projeto.';
  }
})();
