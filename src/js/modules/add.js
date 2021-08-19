const add = () => {
  let listArray = JSON.parse(localStorage.getItem('taskStorage'));
  if (!listArray) {
    listArray = [];
  }
  const newInput = document.getElementById('new-item');
  const newTask = {
    id: `input-checkbox${listArray.length + 1}`,
    description: `${newInput.value}`,
    completed: false,
    index: listArray.length + 1,
  };
  listArray.push(newTask);
  localStorage.setItem('taskStorage', JSON.stringify(listArray));
};
export default add;