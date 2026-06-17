// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Service accordion
function toggleSvc(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('.svc-chevron');
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.service-block-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.service-block-header').forEach(h => h.classList.remove('open'));
  document.querySelectorAll('.svc-chevron').forEach(c => c.classList.remove('open'));
  if (!isOpen) {
    body.classList.add('open');
    header.classList.add('open');
    chevron.classList.add('open');
  }
}

// FAQ accordion
function toggleFaq(qEl) {
  const answer = qEl.nextElementSibling;
  const arrow = qEl.querySelector('.faq-arrow');
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('open'));
  if (!isOpen) {
    answer.classList.add('open');
    arrow.classList.add('open');
  }
}

// Forms (no backend - show confirmation message)
function handleFormSubmit(formId, noteId) {
  const form = document.getElementById(formId);
  const note = document.getElementById(noteId);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = "Thanks for reaching out! We'll get back to you shortly. For faster service, call (360) 323-3302.";
    form.reset();
  });
}
handleFormSubmit('heroForm', 'heroFormNote');
handleFormSubmit('contactForm', 'contactFormNote');
