'use strict';

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
  let name1 = (['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']);
  let name2 = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  let name = getRandomArrayItem(name1) + ' ' + getRandomArrayItem(name2);
  return name;
}


function generateWizard() {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  let wizard = {
    name: generateName(),
    coatColor: getRandomArrayItem(['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']),
    eyesColor: getRandomArrayItem(['black', 'red', 'blue', 'yellow', 'green']),
  };

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

let fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(generateWizard());
}
similarListElement.appendChild(fragment);
