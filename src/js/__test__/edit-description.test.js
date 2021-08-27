import editDescription from '../modules/edit-description';
jest.mock('../modules/edit-description');
import {storageMock} from '../modules/localStorage';
jest.mock('../modules/localStorage');

describe('test edit description function', () => {
  describe('edit description', () => {
    test('must edit description localStorage and li elements', () => {
      // Arrange
      window.localStorage = storageMock();
      let listArray = [{
        idContainer: `list-element move-button`,
        idInput: `input-text1`,
        idCheckbox: `input-checkbox`,
        description: `test`,
        completed: false,
        index: 'test',
      },
      {
        idContainer: `list-element move-button`,
        idInput: `input-text2`,
        idCheckbox: `input-checkbox`,
        description: `test`,
        completed: false,
        index: 'test',
      },
      {
        idContainer: `list-element move-button`,
        idInput: `input-text3`,
        idCheckbox: `input-checkbox`,
        description: `test`,
        completed: true,
        index: 'test',
      }];
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
      
      listArray = JSON.parse(localStorage.getItem('taskStorage'));
      const inputValue = 'change description';
      const event = listArray[1].idInput;
      for (let i = 0; i < listArray.length; i += 1) {
        if (event === 'input-text2') {
          listArray[i].description = inputValue;
          localStorage.setItem('taskStorage', JSON.stringify(listArray));
        }
      }
      listArray = JSON.parse(localStorage.getItem('taskStorage'));
      // Act


      // Assert
      expect(listArray[1].description).toBe('change description')
    });
  });
});
export default editDescription;