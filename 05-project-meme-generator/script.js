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
