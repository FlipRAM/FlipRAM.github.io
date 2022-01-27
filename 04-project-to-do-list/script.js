function addTaskToList() {
  let ordList = document.querySelector('#lista-tarefas');
  let inputTask = document.querySelector('#texto-tarefa');
  let createLi = document.createElement('li');
  createLi.classList = 'task';
  createLi.innerText = inputTask.value;
  ordList.appendChild(createLi);
  inputTask.value = '';
}

let button = document.querySelector('#criar-tarefa');
button.addEventListener('click', addTaskToList);

function changeColorOfTask(element) {
  element.target.classList.add('selected');
  for (let i = element.currentTarget.firstElementChild; i !== null; i = i.nextElementSibling) {
    if (i !== element.target) {
      i.classList.remove('selected');
    }
  }
}

let listElementToPaint = document.querySelector('#lista-tarefas');
listElementToPaint.addEventListener('click', changeColorOfTask);

function completeTask(element) {
  if (element.target.classList.contains('completed')) {
    element.target.classList.remove('completed');
  } else {
    element.target.classList.add('completed');
  }
}

listElementToPaint.addEventListener('dblclick', completeTask);

function apagaLista() {
  let ordList = document.querySelector('#lista-tarefas');
  for (let i = ordList.firstElementChild; i !== null; i = ordList.firstElementChild) {
    ordList.removeChild(i);
  }
}

let buttonDelete = document.querySelector('#apaga-tudo');
buttonDelete.addEventListener('click', apagaLista);

function apagaCompletos() {
  let ordList = document.querySelector('#lista-tarefas');
  for (let i = ordList.firstElementChild; i !== null; i = i.nextElementSibling) {
    if (i.classList.contains('completed')) {
      ordList.removeChild(i);
      i = ordList.firstElementChild;
    }
  }
}

let buttonClearComplete = document.querySelector('#remover-finalizados');
buttonClearComplete.addEventListener('click', apagaCompletos);

function saveList() {
  let lista = document.querySelectorAll('li');
  sessionStorage.clear();
  if (lista.length === 0) {
    alert('Lista vazia');
  } else {
    for (let cont = 0; cont < lista.length; cont += 1) {
      let classElement = lista[cont].classList;
      let saveItem = classElement + ' ' + lista[cont].innerText
      sessionStorage.setItem(cont, saveItem);
    }
  }
}

let buttonSaveList = document.querySelector('#salvar-tarefas');
buttonSaveList.addEventListener('click', saveList);

let cookiesKeyUnordered = Object.keys(sessionStorage);
let cookiesKey = cookiesKeyUnordered.sort();
for (let i = 0; i < cookiesKey.length; i += 1) {
  for (let percorrer = 0; percorrer < cookiesKey.length; percorrer += 1) {
    if (percorrer === parseInt(cookiesKey[i])) {
      let percorrerString = percorrer.toString();
      let ordList = document.querySelector('#lista-tarefas');
      let inputTask = sessionStorage[cookiesKey[percorrer]];
      let createLi = document.createElement('li');
      if (sessionStorage[cookiesKey[percorrer]].includes('task') && sessionStorage[cookiesKey[percorrer]].includes('selected') && sessionStorage[cookiesKey[percorrer]].includes('completed')) {
        createLi.classList = 'task';
        createLi.classList.add('selected');
        createLi.classList.add('completed');
        inputTask = inputTask.replace('task', '');
        inputTask = inputTask.replace('selected', '');
        inputTask = inputTask.replace('completed', '');
        createLi.innerText = inputTask.trim();
        ordList.appendChild(createLi);
      } else if (sessionStorage[cookiesKey[percorrer]].includes('task') && sessionStorage[cookiesKey[percorrer]].includes('selected')) {
        createLi.classList = 'task';
        createLi.classList.add('selected');
        inputTask = inputTask.replace('task', '');
        inputTask = inputTask.replace('selected', '');
        createLi.innerText = inputTask.trim();
        ordList.appendChild(createLi);
      } else if (sessionStorage[cookiesKey[percorrer]].includes('task') && sessionStorage[cookiesKey[percorrer]].includes('completed')) {
        createLi.classList = 'task';
        createLi.classList.add('completed');
        inputTask = inputTask.replace('task', '');
        inputTask = inputTask.replace('completed', '');
        createLi.innerText = inputTask.trim();
        ordList.appendChild(createLi);
      } else {
        createLi.classList = 'task';
        inputTask = inputTask.replace('task', '');
        createLi.innerText = inputTask.trim();
        ordList.appendChild(createLi);
      }
    }
  }
}
sessionStorage.clear();

function moverParaCima() {
  let selectedLi = document.querySelector('.selected');
  if (selectedLi !== null) {
    let selectedLiPrev = selectedLi.previousElementSibling;
    if (selectedLiPrev !== null) {
      let textoAMudar = selectedLiPrev.innerText;
      let classeAMudar = selectedLiPrev.className;
      selectedLiPrev.remove();
      let selectedLiNext = document.createElement('li');
      selectedLiNext.className = classeAMudar;
      selectedLiNext.innerText = textoAMudar;
      selectedLi.parentNode.insertBefore(selectedLiNext, selectedLi.nextSibling);
    }
  }
}

let buttonMoveUp = document.querySelector('#mover-cima');
buttonMoveUp.addEventListener('click', moverParaCima);

function moverParaBaixo() {
  let selectedLi = document.querySelector('.selected');
  if (selectedLi !== null) {
    let selectedLiNext = selectedLi.nextElementSibling;
    if (selectedLiNext !== null) {
      let textoAMudar = selectedLiNext.innerText;
      let classeAMudar = selectedLiNext.className;
      selectedLiNext.remove();
      let selectedLiPrev = document.createElement('li');
      selectedLiPrev.className = classeAMudar;
      selectedLiPrev.innerText = textoAMudar;
      selectedLi.parentNode.insertBefore(selectedLiPrev, selectedLi);
    }
  }
}

let buttonMoveDown = document.querySelector('#mover-baixo');
buttonMoveDown.addEventListener('click', moverParaBaixo);

function removeSelected() {
  let selectedLiToRemove = document.querySelector('.selected');
  selectedLiToRemove.remove();
}

let buttonRemoveSelected = document.querySelector('#remover-selecionado');
buttonRemoveSelected.addEventListener('click', removeSelected);
