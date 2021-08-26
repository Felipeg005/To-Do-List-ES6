import deleteElement from '../modules/delete';
jest.mock('../modules/delete');
import {storageMock} from '../modules/localStorage';
jest.mock('../modules/localStorage');

describe('test add function', () => {
  describe('delete', () => {
    test('must delete localStorage and li element', () => {
      // Arrange
      window.localStorage = storageMock();
      document.body.innerHTML = '<ul class="list-items"><li>listElement</li><li>listElement</li></ul>';
      let listArray = JSON.parse(localStorage.getItem('taskStorage'));
      if (!listArray) {
        listArray = [];
      }
      const newTask = {
        idContainer: `list-items`,
        idInput: `input-text${listArray.length + 1}`,
        idCheckbox: `input-checkbox${listArray.length + 1}`,
        description: '',
        completed: false,
        index: listArray.length + 1,
      };

      // Act
      listArray.push(newTask);
      listArray.push(newTask);
      const event = document.querySelector('ul');
      const e = document.querySelector('li');
      e.parentNode.removeChild(e);
      for (let i = 0; i < listArray.length; i += 1) {
        if (`${event.className}` === `${listArray[i].idContainer}`) {
          listArray.splice(i, 1);
        }
      }
      const result = document.querySelectorAll('li');
      // Update index after delete
      for (let i = 0; i < listArray.length; i += 1) {
        if (listArray[i].index > i) {
            listArray[i].idContainer = `list-element${i + 1}`;
            listArray[i].idInput = `input-text${i + 1}`;
            listArray[i].idCheckbox = `input-checkbox${i + 1}`;
            listArray[i].index = i + 1;
            // Update local storage
            localStorage.setItem('taskStorage', JSON.stringify(listArray));
        }
      }
      // Assert
      expect(listArray.length).toBe(1);
      expect(result.length).toBe(1);
      expect(listArray[0].index).toBe(1);
      expect(JSON.parse(localStorage.getItem('taskStorage')).length).toBe(1);
    });
  });
});
export default deleteElement;