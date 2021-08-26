import { deleteElement } from '../modules/delete';
jest.mock('../modules/delete');
describe('test add function', () => {
  describe('delete', () => {
    test('must delete localStorage and li element', () => {
      // Arrange
      document.body.innerHTML = '<ul class="list-items"><li>listElement</li></ul>';
      let listArray = JSON.parse(localStorage.getItem('taskStorage'));
      if (!listArray) {
        listArray = [];
      }
        const newTask = {
        idContainer: `list-items`,
        idInput: `input-text${listArray.length + 1}`,
        idCheckbox: `input-checkbox${listArray.length + 1}`,
        description: '`${newInput}`',
        completed: false,
        index: listArray.length + 1,
      };
      listArray.push(newTask);
      const event = document.querySelector('ul');
      event.parentNode.removeChild(event);
      for (let i = 0; i < listArray.length; i += 1) {
        if (`${event.className}` === `${listArray[i].idContainer}`) {
          listArray.splice(i, 1);
        }
      }
      let result = document.querySelectorAll('li');
      // Act
      // Assert
      expect(listArray.length).toBe(0);
      expect(result.length).toBe(0);
    })
  ;})
})
export default deleteElement;