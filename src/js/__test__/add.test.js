import { add } from '../modules/add';
jest.mock('../modules/add');

describe('test add function', () => {

  describe('add', () => {
    test('must add localStorage element', () => {
      // Arrange
    
      // Act

      // Assert
      expect(add()).toBe(1);
    })
  ;})

}) 

export default add;