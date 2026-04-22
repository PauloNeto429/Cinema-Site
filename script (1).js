// ============================================
// CINENEON — JavaScript
// ============================================

// ── Modal de detalhes do filme ──────────────
function mostrarAlerta(titulo, ano, nota) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-title').textContent = titulo.toUpperCase();
  document.getElementById('modal-year').textContent = '📅 Ano: ' + ano;
  document.getElementById('modal-rating').textContent = nota;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// Fechar modal clicando fora
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) fecharModal();
    });
  }

  // Animar cards ao entrar na tela
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
    observer.observe(card);
  });
});

// ── Formulário de contato ───────────────────
function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Simula envio (sem backend)
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (form && success) {
    form.style.opacity = '0';
    form.style.transform = 'translateY(-10px)';
    form.style.transition = 'opacity .3s, transform .3s';

    setTimeout(() => {
      form.classList.add('hidden');
      success.classList.remove('hidden');
    }, 300);
  }
}

function resetForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (form && success) {
    form.reset();
    form.style.opacity = '1';
    form.style.transform = 'none';
    form.classList.remove('hidden');
    success.classList.add('hidden');
  }
}

// ── Easter egg no console ───────────────────
console.log('%c🎬 CINENEON', 'font-size:2rem; color:#00f5ff; font-family:monospace;');
console.log('%cSite de cinema feito com muito ♥', 'color:#b8ff00; font-family:monospace;');
