import _ from 'lodash';
import './style.css';
import optionsIcon from './imgs/app_screenshot.png';
import refreshIcon from './imgs/1024px-Refresh_icon.png';
import enterIcon from './imgs/Enter-icon.png';

let listArray = [];

// Add new task

function add() {
  const newInput = document.getElementById('new-item');
  const newTask = {
    description: `${newInput.value}`,
    completed: false,
    index: listArray.length + 1,
  };
  listArray.push(newTask);
  localStorage.setItem('taskStorage', JSON.stringify(listArray));
}

document.getElementById('form').addEventListener('submit', add);

function load() {
  if (!(listArray = JSON.parse(localStorage.getItem('taskStorage')))) { // eslint-disable-line no-use-before-define
    listArray = [{
      description: 'Take a walk with the dog',
      completed: false,
      index: 1,
    },
    {
      description: 'Do my homework',
      completed: false,
      index: 2,
    }];
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
    if ((listArray[i].index) === (i + 1)) {
      const listContainer = document.querySelector('.list-items');
      const listElement = document.createElement('li');
      listElement.classList.add('list-element');
      listContainer.appendChild(listElement);
      const checkButtonDiv = document.createElement('div');
      const checkInput = document.createElement('input');
      const description = document.createElement('input');
      const moveButton = document.createElement('img');
      checkButtonDiv.classList.add('form-check');
      checkInput.setAttribute('type', 'checkbox');
      checkInput.id = `input-checkbox${i + 1}`;
      description.classList.add('description', `input-checkbox${i + 1}`);
      description.placeholder = listArray[i].description;
      moveButton.src = optionsIcon;
      moveButton.classList.add('move-button');
      listElement.appendChild(checkButtonDiv);
      listElement.appendChild(description);
      listElement.appendChild(moveButton);
      checkButtonDiv.appendChild(checkInput);
    }
  }
}

// Check task function

function checkTask(checkedId) {
  const checkBox = document.querySelector(`.${checkedId}`);
  checkBox.classList.toggle('checked-description');
}

document.body.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    checkTask(event.target.id);
  }
});
window.addEventListener('DOMContentLoaded', load);