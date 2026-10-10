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

// Event countdown uses the published date at midnight in Lisbon (UTC in December).
const countdown = document.querySelector('#event-countdown');
if (countdown) {
  const eventStart = Date.parse('2026-12-10T00:00:00Z');
  const eventEnd = Date.parse('2026-12-12T00:00:00Z');
  function updateEventCountdown() {
    const now = Date.now();
    if (now >= eventStart) {
      countdown.textContent = now < eventEnd ? 'The event dates are here: 10–11 December 2026.' : 'Thank you for your interest in the Portugal 2026 event.';
      return;
    }
    const totalHours = Math.floor((eventStart - now) / 3600000);
    countdown.replaceChildren();
    [['Days', Math.floor(totalHours / 24)], ['Hours', totalHours % 24]].forEach(([label, value]) => {
      const unit = document.createElement('span');
      unit.className = 'count-unit';
      const number = document.createElement('strong');
      number.textContent = String(value).padStart(2, '0');
      const caption = document.createElement('small');
      caption.textContent = label;
      unit.append(number, caption);
      countdown.append(unit);
    });
  }
  updateEventCountdown();
  setInterval(updateEventCountdown, 60000);
}
const motionButton = document.querySelector('#campaign-motion');
if (motionButton) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionButton.hidden = reducedMotion.matches;
  reducedMotion.addEventListener('change', event => { motionButton.hidden = event.matches; });
  motionButton.addEventListener('click', () => {
    const paused = document.body.classList.toggle('campaign-paused');
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = paused ? 'Resume animation' : 'Pause animation';
  });
}
