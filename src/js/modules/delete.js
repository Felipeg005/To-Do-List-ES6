const deleteElement = (event) => {
  console.log('works');
  event.parentNode.removeChild(event);
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  for (let i = 0; i < listArray.length; i += 1) {
    if(`${event.className}` === `${listArray[i].idContainer}`){
      listArray.splice(i, 1);
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
    }
  }
  location.reload();
}
export default deleteElement;