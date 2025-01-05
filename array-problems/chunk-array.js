function chunkArray(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

// Example usage
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // Output: [[1, 2], [3, 4], [5]]
