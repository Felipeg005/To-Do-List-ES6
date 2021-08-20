const editDescription = (event) => {
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  const inputValue = document.getElementById(`${event}`);
  for (let i = 0; i < listArray.length; i += 1) {
    if (event === listArray[i].idInput) {
      listArray[i].description = inputValue.value;
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
    }
/* eslint-disable-line */  }
};
export default editDescription;