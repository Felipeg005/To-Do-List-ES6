/* eslint-disable-line */import _ from 'lodash';
import '../style.css';
import optionsIcon from '../imgs/app_screenshot.png';
import refreshIcon from '../imgs/1024px-Refresh_icon.png';
import enterIcon from '../imgs/Enter-icon.png';
import checkTask from './modules/check-status';
import add from './modules/add';
import editDescription from './modules/edit-description';
import clear from './modules/clear';
import showDeleteBtn from './modules/show-delete';
import deleteElement from './modules/delete';

let listArray = [];

const load = () => {
/* eslint-disable-next-line */
  if (!(listArray = JSON.parse(localStorage.getItem('taskStorage')))) {
    listArray = [];
    localStorage.setItem('taskStorage', JSON.stringify(listArray));
  }
  const headerContainer = document.querySelector('#refresh');
  const refreshButton = document.createElement('img');
  const enterButton = document.querySelector('.enter-btn');
  const imgEnterButton = document.createElement('img');
  refreshButton.src = refreshIcon;
  refreshButton.alt = '';
  refreshButton.classList.add('refresh-img');
  headerContainer.appendChild(refreshButton);
  imgEnterButton.src = enterIcon;
  imgEnterButton.classList.add('enter-img');
  enterButton.appendChild(imgEnterButton);

  for (let i = 0; i < listArray.length; i += 1) {
    if ((listArray[i].completed === false)) {
      if(listArray[i].index > i) {
        listArray[i].idContainer = `list-element move-button${i + 1}`;
        listArray[i].idInput = `input-text${i + 1}`
        listArray[i].idCheckbox = `input-checkbox${i + 1}`
        listArray[i].index = i + 1;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      }
      const listContainer = document.querySelector('.list-items');
      const listElement = document.createElement('li');
      listElement.classList.add('list-element', `move-button${i + 1}`);
      listContainer.appendChild(listElement);
      const checkButtonDiv = document.createElement('div');
      const checkInput = document.createElement('input');
      const description = document.createElement('input');
      const moveButton = document.createElement('img');
      checkButtonDiv.classList.add('form-check');
      checkInput.setAttribute('type', 'checkbox');
      checkInput.id = `input-checkbox${i + 1}`;
      description.id = `input-text${i + 1}`;
      description.classList.add('description', `input-checkbox${i + 1}`);
      description.placeholder = listArray[i].description;
      moveButton.src = optionsIcon;
      moveButton.classList.add('move-button');
      moveButton.id = `move-button${i + 1}`;
      listElement.appendChild(checkButtonDiv);
      listElement.appendChild(description);
      listElement.appendChild(moveButton);
      checkButtonDiv.appendChild(checkInput);
    } else if (listArray[i].completed === true) {
      if(listArray[i].index > i) {
        listArray[i].idContainer = `list-element move-button${i + 1}`;
        listArray[i].idInput = `input-text${i + 1}`;
        listArray[i].idCheckbox = `input-checkbox${i + 1}`;
        listArray[i].index = i + 1;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      }
      const listContainer = document.querySelector('.list-items');
      const listElement = document.createElement('li');
      listElement.classList.add('list-element', `move-button${i + 1}`);
      listContainer.appendChild(listElement);
      const checkButtonDiv = document.createElement('div');
      const checkInput = document.createElement('input');
      const description = document.createElement('input');
      const moveButton = document.createElement('img');
      checkButtonDiv.classList.add('form-check');
      checkInput.setAttribute('type', 'checkbox');
      checkInput.id = `input-checkbox${i + 1}`;
      description.id = `input-text${i + 1}`;
      description.classList.add('description', `input-checkbox${i + 1}`);
      description.placeholder = listArray[i].description;
      moveButton.src = optionsIcon;
      moveButton.classList.add('move-button');
      moveButton.id = `move-button${i + 1}`;
      listElement.appendChild(checkButtonDiv);
      listElement.appendChild(description);
      listElement.appendChild(moveButton);
      checkButtonDiv.appendChild(checkInput);
      document.querySelector(`.${listArray[i].idCheckbox}`).classList.toggle('checked-description');
    }
  }
};

document.body.addEventListener ('keydown', (event) => {
  editDescription(event.target.id);
});
document.getElementById('form').addEventListener('submit', add);
document.body.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    checkTask(event.target.id);
  }
  if (`${event.target.className}` === 'clear-btn'){
    clear();
  }
  if (`${event.target.className}` === 'move-button'){
    showDeleteBtn(event.target.id);
  }
  if (`${event.target.className}` === 'delete-button'){
    deleteElement(event.target.parentNode);
  }
 console.log(event.target.className);
});
window.addEventListener('DOMContentLoaded', () => {
  load();
});