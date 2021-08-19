const clear = () => {
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  let trueValues = listArray.filter((e) => {
    return e.completed === false;
  });
  localStorage.setItem('taskStorage', JSON.stringify(trueValues));
  location.reload();
}
  
export default clear;