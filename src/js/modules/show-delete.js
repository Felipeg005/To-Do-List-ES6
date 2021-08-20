const showDeleteBtn = (event) => {
  // console.log(event);
  const deleteOption = document.querySelector(`.${event}`);
  const showDelete = document.querySelector('.delete-button');
  if (!showDelete){
    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-button');
    deleteOption.appendChild(deleteButton);
    deleteButton.innerHTML = 'Delete';
  } else {   
    showDelete.parentNode.removeChild(showDelete);
    console.log(showDelete);
}
};
export default showDeleteBtn;