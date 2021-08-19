const clear = () => {
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  for (let i = 0; i < listArray.length; i += 1) {
    if (listArray[i].completed === true){
      listArray.splice(i, 1);
      console.log(listArray);
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
    }
  }
  for (let i = 0; i < listArray.length; i += 1) {
    console.log(listArray[i]);
    if(listArray[i].index === i + 2) {
      listArray[i].idInput = `input-text${i + 1}`
      listArray[i].idCheckbox = `input-checkbox${i + 1}`
      listArray[i].index = i + 1;
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
    }
  }
}
export default clear;