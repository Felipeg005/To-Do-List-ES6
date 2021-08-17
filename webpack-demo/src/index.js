import _ from 'lodash';
import './style.css';

const listArray = [
  {
    description: '',
    completed: false,
    index: 1,
  }
]

function add() {
  const listContainer = document.querySelector('.list-items');
  const listElement = document.createElement('li');
  listElement.classList.add('list-element');
  listContainer.appendChild(listElement);
  const checkButton = document.createElement('button');
  const description = document.createElement('h3');
  const moveButton = document.createElement('svg');
  listElement.appendChild(checkButton);
  listElement.appendChild(description);
  listElement.appendChild(moveButton);

}

add();