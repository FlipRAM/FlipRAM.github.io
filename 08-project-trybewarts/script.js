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
  const textToCount = document.querySelector('#textarea');
  const textToCountSize = textToCount.value.length;
  const contP = document.querySelector('#counter');
  contP.innerText = `Caracteres restantes: ${(500 - textToCountSize).toString()}`;
}

const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', countDownCaracters);

function getFullName() {
  const firstName = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  return `${firstName.value} ${lastname.value}`;
}

function getFamily() {
  const family = document.querySelectorAll('input[name="family"]');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked === true) {
      return family[i].value;
    }
  }
}

function getContent() {
  const content = document.querySelectorAll('input[name="contentToLearn"]');
  const contentList = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked === true) {
      contentList.push(content[i].value);
    }
  }
  return contentList;
}

function getRate() {
  const rate = document.querySelectorAll('input[name="rate"]');
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked === true) {
      return rate[i].value;
    }
  }
}

function saveForms(event) {
  event.preventDefault();
  const fullName = getFullName();
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = getFamily();
  const content = getContent();
  const rate = getRate();
  const observation = document.querySelector('#textarea').value;
  const form = document.querySelector('#evaluation-form');
  form.innerHTML = `<p>Nome: ${fullName}</p><p>Email: ${email}</p>
  <p>Casa: ${house}</p><p>Família: ${family}</p><p>Matérias: ${content.join(', ')}</p>
  <p>Avaliação: ${rate}</p><p>Observações: ${observation}</p>`;
}

const buttonEnviarFill = document.querySelector('#submit-btn');
buttonEnviarFill.addEventListener('click', saveForms);
