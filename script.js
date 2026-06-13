const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const navLinks = document.querySelectorAll('#site-nav a');
const form = document.querySelector('#inquiry-form');
const note = document.querySelector('#form-note');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.forEach(link => link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const fields = [
      ['Company', data.get('company')],
      ['Contact Person', data.get('name')],
      ['Country', data.get('country')],
      ['Email', data.get('email')],
      ['WhatsApp / Phone', data.get('phone')],
      ['Product Interest', data.get('product')],
      ['Estimated Quantity', data.get('quantity')],
      ['Certification Requirements', data.get('certification')],
      ['Message', data.get('message')]
    ];
    const body = fields.map(([label, value]) => `${label}: ${value || '-'}`).join('\n');
    const subject = encodeURIComponent('Export Inquiry - Aron Coffee & Tea Export PLC');
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:arontradingcoffee@gmail.com?subject=${subject}&body=${mailBody}`;
    if (note) note.textContent = 'Opening your email app with the inquiry details. Please press Send from your email client.';
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
