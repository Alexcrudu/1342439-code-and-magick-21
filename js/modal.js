'use strict';

const POPUP_OPEN = document.querySelector('.setup-open');
const POPUP = document.querySelector('.setup');
const POPUP_CLOSE = document.querySelector('.setup-close');
const INPUT_NAME = document.querySelector('.setup-user-name');
const USERNAMEINPUT = document.querySelector('.setup-user-name');
const MIN_USERNAME_LENGTH = 2;
const MAX_USERNAME_LENGTH = 25;
const COAT_COLOR_WIZARD = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLOR_WIZARD = ['black', 'red', 'blue', 'yellow', 'green'];
const FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const SETUP_WIZARD = document.querySelector('.setup-wizard');
const WIZARD_EYES_COLOR = SETUP_WIZARD.querySelector('.wizard-eyes');
const WIZARD_COAT_COLOR = SETUP_WIZARD.querySelector('.wizard-coat');
const SETUP_FIREBALL = document.querySelector('.setup-fireball-wrap');
const INPUT_EYES = document.querySelector('input[value=black]');
const INPUT_COAT = document.querySelector('input[name=coat-color]');
const INPUT_FIREBALL = document.querySelector('input[name=fireball-color]');
let popupFocused = false;


INPUT_NAME.addEventListener('focus', function () {
  popupFocused = true;
}
);

INPUT_NAME.addEventListener('blur', function () {
  popupFocused = false;
}
);


let onPopupEscPress = function (evt) {
  if (popupFocused) {
    return;
  }
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

let openPopup = function () {
  POPUP.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

let closePopup = function () {
  POPUP.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

POPUP_OPEN.addEventListener('click', function () {
  openPopup();
});

POPUP_OPEN.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

POPUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


POPUP_CLOSE.addEventListener('click', function () {
  closePopup();
});

USERNAMEINPUT.addEventListener('input', function () {
  let valueLength = USERNAMEINPUT.value.length;
  if (valueLength < MIN_USERNAME_LENGTH) {
    USERNAMEINPUT.setCustomValidity('Ещё ' + (MIN_USERNAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_USERNAME_LENGTH) {
    USERNAMEINPUT.setCustomValidity('Удалите лишние ' + (valueLength - MAX_USERNAME_LENGTH) + ' симв.');
  } else {
    USERNAMEINPUT.setCustomValidity('');
  }

  USERNAMEINPUT.reportValidity();
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrayItem(array) {
  return array[getRandomInt(0, array.length - 1)];
}

SETUP_FIREBALL.addEventListener('click', function () {
  SETUP_FIREBALL.style.background = getRandomArrayItem(FIREBALL_COLOR);
  INPUT_FIREBALL.value = SETUP_FIREBALL.style.background;
});

WIZARD_COAT_COLOR.addEventListener('click', function () {
  WIZARD_COAT_COLOR.style.fill = getRandomArrayItem(COAT_COLOR_WIZARD);
  INPUT_COAT.value = WIZARD_COAT_COLOR.style.fill;
});

WIZARD_EYES_COLOR.addEventListener('click', function () {
  WIZARD_EYES_COLOR.style.fill = getRandomArrayItem(EYES_COLOR_WIZARD);
  INPUT_EYES.value = WIZARD_EYES_COLOR.style.fill;
});
