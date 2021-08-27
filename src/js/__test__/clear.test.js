import clear from '../modules/clear';
jest.mock('../modules/clear');
import {storageMock} from '../modules/localStorage';
jest.mock('../modules/localStorage');

describe('test clear function', () => {
  describe('clear', () => {
    test('must clear localStorage and li elements', () => {
      // Arrange
      let listArray = [{
        idContainer: `list-element move-button`,
        idInput: `input-text`,
        idCheckbox: `input-checkbox`,
        description: `test`,
        completed: false,
        index: 'test',
      },
      {
        idContainer: `list-element move-button`,
        idInput: `input-text`,
        idCheckbox: `input-checkbox`,
        description: `test`,
        completed: false,
        index: 'test',
      },
      {
        idContainer: `list-element move-button`,
        idInput: `input-text`,
        idCheckbox: `input-checkbox`,
        description: `test`,
        completed: true,
        index: 'test',
      }];

      localStorage.setItem('taskStorage', JSON.stringify(listArray));
      listArray = JSON.parse(localStorage.getItem('taskStorage'));
     
      window.localStorage = storageMock();
      
      // Act
      /* eslint-disable-line */const trueValues = listArray.filter((e) => {
        return e.completed === false;
      });
      localStorage.setItem('taskStorage', JSON.stringify(trueValues));

      // Assert
      expect(JSON.parse(localStorage.getItem('taskStorage')).length).toBe(2);

    });
  });
});
export default clear;