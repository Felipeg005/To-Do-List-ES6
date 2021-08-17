import _ from 'lodash';
import './style.css';
import Icon from './imgs/app_screenshot.png';

const listArray = [
  {
    description: 'Make Homework',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean the cat sandbox',
    completed: false,
    index: 2,
  }
]

function add() {
  const listContainer = document.querySelector('.list-items');
  const listElement = document.createElement('li');
  listElement.classList.add('list-element');
  listContainer.appendChild(listElement);
  const checkButtonDiv = document.createElement('div');
  const checkInput = document.createElement('input');
  const description = document.createElement('h3');
  const moveButton = document.createElement('img');
  checkButtonDiv.classList.add('form-check');
  // checkInput.classList.add('form-check-input');
  checkInput.setAttribute('type', 'checkbox');
  checkInput.id = 'flexCheckDefault';
  description.classList.add('description');
  description.innerHTML = listArray[0].description;
  moveButton.src = Icon;
  moveButton.classList.add('move-button');
  listElement.appendChild(checkButtonDiv);
  listElement.appendChild(description);
  listElement.appendChild(moveButton);
  checkButtonDiv.appendChild(checkInput);

}

add();