import add from "../modules/add";


describe('test add function', () => {

  describe('add', () => {
    add();
    // Arrange
    test('must add li element', () => {
      expect(document.querySelectorAll('li')).toBe(1);
    })
  ;})

}) 

export default add;