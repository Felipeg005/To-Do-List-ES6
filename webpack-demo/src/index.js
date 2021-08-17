import _ from 'lodash';
import './style.css';

function component() {
  const listContainer = document.querySelector('.list-container');
  const listElement = document.createElement('li');
  listElement.innerHTML = 'hello';
  listContainer.appendChild(listElement);
}

component();