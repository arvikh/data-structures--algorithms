function count(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ch) {
      count += 1;
    }
  }
  return count;
}

console.log(count("hello", "h"));

//second approach with inbuild functions

const count2 = (str, ch) => str.split(ch).length - 1;
console.log(count2("helllo", "h"));

console.log("helllo".split("l"));
