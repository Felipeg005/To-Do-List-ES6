const deleteElement = (event) => {
  event.parentNode.removeChild(event);
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  for (let i = 0; i < listArray.length; i += 1) {
    if (`${event.className}` === `${listArray[i].idContainer}`) {
      listArray.splice(i, 1);
      localStorage.setItem('taskStorage', JSON.stringify(listArray));
    }
  }
  /* eslint-disable-line */location.reload();
};
export default deleteElement;