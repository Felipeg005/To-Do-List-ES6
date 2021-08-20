const clear = () => {
  const listArray = JSON.parse(localStorage.getItem('taskStorage'));
  /* eslint-disable-line */const trueValues = listArray.filter((e) => {
    return e.completed === false;
  });
  localStorage.setItem('taskStorage', JSON.stringify(trueValues));
  /* eslint-disable-line */location.reload();
};
export default clear;