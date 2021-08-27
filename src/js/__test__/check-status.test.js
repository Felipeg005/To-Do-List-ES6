import checkTask from '../modules/check-status';
import storageMock from '../modules/localStorage';

jest.mock('../modules/check-status');
jest.mock('../modules/localStorage');

describe('test check task function', () => {
  describe('check task', () => {
    test('must check task localStorage and li elements', () => {
      // Arrange
      window.localStorage = storageMock();
      let listArray = [
        {
          idContainer: 'list-element move-button',
          idInput: 'input-text1',
          idCheckbox: 'input-checkbox1',
          description: 'test',
          completed: false,
          index: 'test',
        },
        {
          idContainer: 'list-element move-button',
          idInput: 'input-text2',
          idCheckbox: 'input-checkbox2',
          description: 'test',
          completed: false,
          index: 'test',
        },
        {
          idContainer: 'list-element move-button',
          idInput: 'input-text3',
          idCheckbox: 'input-checkbox3',
          description: 'test',
          completed: false,
          index: 'test',
        },
      ];
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
      listArray = JSON.parse(localStorage.getItem('taskStorage'));
      document.body.innerHTML = `<li class="list-element move-button3">
      <div class="form-check">
      <input type="checkbox" id="input-checkbox3"></div>
      <input id="input-text3" class="description input-checkbox3" placeholder="somedescription">
      <img src="https://felipeg005.github.io/To-Do-List-ES6/e043b97ee41f37846a5a.png" class="move-button" id="move-button3"></li>`;
      const checkBox = document.querySelector('.input-checkbox3');
      // Act
      checkBox.classList.toggle('checked-description');
      for (let i = 0; i < listArray.length; i += 1) {
        if (`${listArray[i].idCheckbox}` === 'input-checkbox3') {
          if (listArray[i].completed === false) {
            listArray[i].completed = true;
            localStorage.setItem('taskStorage', JSON.stringify(listArray));
          } else if (listArray[i].completed === true) {
            listArray[i].completed = false;
            localStorage.setItem('taskStorage', JSON.stringify(listArray));
          }
        }
      }
      listArray = JSON.parse(localStorage.getItem('taskStorage'));

      // Assert
      expect(listArray[2].completed).toBe(true);
      expect(checkBox.className).toBe(
        'description input-checkbox3 checked-description',
      );
    });
  });
});
export default checkTask;
