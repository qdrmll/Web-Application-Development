var chunk = function(arr, size) {
  if (size <= 0) {
    return [];
  }

  const chunkedArr = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArr.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArr;
};
