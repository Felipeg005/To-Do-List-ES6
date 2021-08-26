import { add } from '../modules/add';
jest.mock('../modules/add');

describe('test add function', () => {

  describe('add', () => {

    test('must add localStorage element', () => {
      // Arrange
      document.body.innerHTML = '<ul class="list-items"></ul>';
      let listArray = JSON.parse(localStorage.getItem('taskStorage'));
      if (!listArray) {
        listArray = [];
      }
      const newInput = document.querySelector('.list-items');
      const newTask = {
        idContainer: `list-element move-button${listArray.length + 1}`,
        idInput: `input-text${listArray.length + 1}`,
        idCheckbox: `input-checkbox${listArray.length + 1}`,
        description: `${newInput}`,
        completed: false,
        index: listArray.length + 1,
      };
      listArray.push(newTask);
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
      newInput.innerHTML += '<li>listElement</li>';
      let result = document.querySelectorAll('li');
    
      // Act

      // Assert
      expect(listArray.length).toBe(1);
      expect(result.length).toBe(1);
    })
  ;})

}) 

export default add;