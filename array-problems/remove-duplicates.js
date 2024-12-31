function removDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    //check the element is in uniqueArray
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] == uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(removDuplicates([1, 2, 3, 4, 4, 5, 7, 8, 9, 9]));
