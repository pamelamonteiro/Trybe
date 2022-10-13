const btnLogin = document.getElementById('button-login');
const agreementButton = document.getElementById('agreement');

function login() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', login);

function agreementChange() {
  if (agreementButton.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}
agreementButton.addEventListener('click', agreementChange);
