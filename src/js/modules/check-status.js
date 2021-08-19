// Check task function
export let checkTask = (checkedId) => {
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  const checkBox = document.querySelector(`.${checkedId}`);
  checkBox.classList.toggle('checked-description');
  for (let i = 0; i < listArray.length; i += 1) {
    if ((`${listArray[i].id}` === `${checkedId}`)) {
      if (listArray[i].completed === false) {
        listArray[i].completed = true;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      } else if (listArray[i].completed === true) {
        listArray[i].completed = false;
        localStorage.setItem('taskStorage', JSON.stringify(listArray));
      }
    }
  }
}