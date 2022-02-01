const textToShown = document.querySelector('#text-input');
const textToChange = document.querySelector('#meme-text');

function changeText() {
  textToChange.innerText = textToShown.value;
}

textToShown.addEventListener('keyup', changeText);

const imageInput = document.querySelector('#meme-insert');

function image() {
  const imageToShown = document.getElementById('meme-insert').files[0];
  const imageToChange = document.querySelector('#meme-image');
  const reader = new FileReader();
  reader.onloadend = function placeImage() {
    imageToChange.src = reader.result;
  };
  if (imageToShown) {
    reader.readAsDataURL(imageToShown);
  } else {
    imageToChange.src = '';
  }
}

imageInput.addEventListener('change', image);

// function image() thanks to Cedric Ipkiss on https://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form

const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

function changeBorder(element) {
  const imageContainer = document.querySelector('#meme-image-container');
  const color = element.target.style.backgroundColor;
  if (color === 'red') {
    imageContainer.style.border = '3px dashed red';
  } if (color === 'blue') {
    imageContainer.style.border = '5px double blue';
  } if (color === 'green') {
    imageContainer.style.border = '6px groove green';
  }
}

buttonFire.addEventListener('click', changeBorder);
buttonWater.addEventListener('click', changeBorder);
buttonEarth.addEventListener('click', changeBorder);

const imageOne = document.getElementById('meme-1');
const imageTwo = document.getElementById('meme-2');
const imageThree = document.getElementById('meme-3');
const imageFour = document.getElementById('meme-4');

function changeImage(element) {
  const img = element.target.src;
  const memeContainer = document.getElementById('meme-image');
  if (img.includes('meme1')) {
    memeContainer.src = './imgs/meme1.png';
  } if (img.includes('meme2')) {
    memeContainer.src = './imgs/meme2.png';
  } if (img.includes('meme3')) {
    memeContainer.src = './imgs/meme3.png';
  } if (img.includes('meme4')) {
    memeContainer.src = './imgs/meme4.png';
  }
}

imageOne.addEventListener('click', changeImage);
imageTwo.addEventListener('click', changeImage);
imageThree.addEventListener('click', changeImage);
imageFour.addEventListener('click', changeImage);
