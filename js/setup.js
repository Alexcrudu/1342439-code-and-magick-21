'use strict';

const FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
const WIZZARD_NUMBER = 4;
let popup = document.querySelector('.setup');
let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


popup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrayItem(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function generateName() {
  let name = getRandomArrayItem(FIRST_NAME) + ' ' + getRandomArrayItem(SURNAME);
  return name;
}


function generateWizard() {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  let wizard = {
    name: generateName(),
    coatColor: getRandomArrayItem(COAT_COLOR),
    eyesColor: getRandomArrayItem(EYES_COLOR),
  };

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

let fragment = document.createDocumentFragment();
for (let i = 0; i < WIZZARD_NUMBER; i++) {
  fragment.appendChild(generateWizard());
}
similarListElement.appendChild(fragment);
