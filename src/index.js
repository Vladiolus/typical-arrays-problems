
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0){
    return 0;
  }
  let mini = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < mini) mini = array[i];
  }
  return mini;
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length == 0){
    return 0;
  }
  let maxi = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxi) maxi = array[i];
  }
  return maxi;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length == 0){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum /= array.length;
}
