function countVowels(str) {
  const formattedString = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formattedString.length; i++) {
    let char = formattedString[i];
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("hello"));
