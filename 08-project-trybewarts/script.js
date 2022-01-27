const botaoSenha = document.querySelector('#button-entrar');

function checkEmail(element) {
  if (element === 'tryber@teste.com') {
    return true;
  }
}

function checkPassword(password) {
  if (password === '123456') {
    return true;
  }
}

function checkLogin() {
  const email = document.querySelector('#input-email-login').value;
  const senha = document.querySelector('#input-password').value;
  if (checkEmail(email) === true && checkPassword(senha) === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoSenha.addEventListener('click', checkLogin);

function agreementOn() {
  const agreement = document.querySelector('#agreement').checked;
  const botaoEnviar = document.querySelector('#submit-btn');
  if (agreement === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

const botaoEnviarShow = document.querySelector('#agreement');
botaoEnviarShow.addEventListener('click', agreementOn);

function countDownCaracters() {
  let textToCount = document.querySelector('#textarea');
  let textToCountSize = textToCount.value.length;
  let contP = document.querySelector('#counter');
  contP.innerText = `Caracteres restantes: ${(500 - textToCountSize).toString()}`;
}

let textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', countDownCaracters);

function saveForms(event) {
  event.preventDefault();
  let name = document.querySelector('#input-name').value;
  let lastname = document.querySelector('#input-lastname').value;
  let email = document.querySelector('#input-email').value;
  let houseChoose = document.querySelector('#house').value;
  let familyChoose = document.querySelector('#family');
  let contentChoose = document.querySelector('#content');
  let rateChoose = document.querySelector('#rate');
  let textarea = document.querySelector('#textarea').value;
  document.querySelector('#nove').attr('checked="checked"');
  console.log(rateChoose);
}

const buttonEnviarFill = document.querySelector('#submit-btn');
buttonEnviarFill.addEventListener('click', saveForms);
