// Menu móvel: exibe ou esconde os links em telas pequenas.
const menuBotao = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');
menuBotao.addEventListener('click', () => {
  const estaAberto = menu.classList.toggle('aberto');
  menuBotao.setAttribute('aria-expanded', estaAberto);
});
document.querySelectorAll('.menu a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('aberto');
  menuBotao.setAttribute('aria-expanded', 'false');
}));

// Tema escolhido é salvo apenas neste navegador para melhorar a experiência do visitante.
const temaBotao = document.querySelector('.tema-botao');
if (localStorage.getItem('tema') === 'escuro') document.body.classList.add('escuro');
temaBotao.addEventListener('click', () => {
  document.body.classList.toggle('escuro');
  localStorage.setItem('tema', document.body.classList.contains('escuro') ? 'escuro' : 'claro');
});

// Validação exigida pelo enunciado antes da simulação de envio.
const formulario = document.querySelector('#formulario-contato');
const campos = ['nome', 'email', 'mensagem'];
const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function mostrarErro(campo, texto) { document.querySelector(`#erro-${campo}`).textContent = texto; }
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  let formularioValido = true;
  campos.forEach((campo) => mostrarErro(campo, ''));
  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensagem = document.querySelector('#mensagem').value.trim();
  if (!nome) { mostrarErro('nome', 'Informe seu nome.'); formularioValido = false; }
  if (!email) { mostrarErro('email', 'Informe seu e-mail.'); formularioValido = false; }
  else if (!emailValido.test(email)) { mostrarErro('email', 'Informe um e-mail válido.'); formularioValido = false; }
  if (!mensagem) { mostrarErro('mensagem', 'Escreva sua mensagem.'); formularioValido = false; }
  if (formularioValido) {
    formulario.reset();
    document.querySelector('#mensagem-sucesso').textContent = 'Mensagem enviada com sucesso! Esta é uma simulação.';
  }
});

// Atualiza automaticamente o ano no rodapé.
document.querySelector('#ano').textContent = new Date().getFullYear();
