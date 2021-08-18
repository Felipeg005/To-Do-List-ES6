import _ from 'lodash';
import './style.css';
import optionsIcon from './imgs/app_screenshot.png';
import refreshIcon from './imgs/1024px-Refresh_icon.png';
import enterIcon from './imgs/Enter-icon.png';

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

// Dynamically add new tasks on the list.

function load() {
  const headerContainer = document.querySelector('#refresh');
  const refreshButton = document.createElement('img');
  const enterButton = document.querySelector('.enter-btn');
  const imgEnterButton = document.createElement('img');
  refreshButton.src = refreshIcon;
  headerContainer.appendChild(refreshButton);
  imgEnterButton.src = enterIcon;
  imgEnterButton.classList.add('enter-img');
  enterButton.appendChild(imgEnterButton);

  for (let i = 0; i < listArray.length; i += 1) {
    const listContainer = document.querySelector('.list-items');
    const listElement = document.createElement('li');
    listElement.classList.add('list-element');
    listContainer.appendChild(listElement);
    const checkButtonDiv = document.createElement('div');
    const checkInput = document.createElement('input');
    const description = document.createElement('p');
    const moveButton = document.createElement('img');
    checkButtonDiv.classList.add('form-check');
    // checkInput.classList.add('form-check-input');
    checkInput.setAttribute('type', 'checkbox');
    checkInput.id = 'input-checkbox';
    description.classList.add('description');
    description.innerHTML = listArray[i].description;
    moveButton.src = optionsIcon;
    moveButton.classList.add('move-button');
    listElement.appendChild(checkButtonDiv);
    listElement.appendChild(description);
    listElement.appendChild(moveButton);
    checkButtonDiv.appendChild(checkInput);
  }
}

load();

function add() {
  let newInput = document.querySelector('#new-item')

  let newTask = {
    description: `${newInput.value}`,
    completed: false,
    index: 3,
  } 

  listArray.push(newTask);
}



const form = document.getElementById('form');

form.addEventListener('submit', (...e) => {
  preventDefault(...e)
  add(...e)
});

// Check task function
// const checkBox = document.querySelector('.input-checkbox');

// function checkTask() {
//   const formCheckDiv = document.querySelector('.form-check');
//   const checkedContainer = document.createElement('div');
//   checkBox.classList.toggle('hide');
//   formCheckDiv.appendChild(checkedContainer);

//   console.log('check');
// }

// checkBox.addEventListener('click', checkTask);