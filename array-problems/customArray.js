class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(element) {
    this.data[this.length] = element;
    this.length += 1;
  }
  get(index) {
    return this.data[index.toString()];
  }
  pop() {
    delete this.data[this.length - 1];
    this.length -= 1;
  }
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
      // console.log(this.data);
    }
    delete this.data[this.length - 1];
    this.length -= 1;
    return firstItem;
  }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
    return item;
  }
}

const myArray = new CustomArray();
myArray.push("apple");
myArray.push("banana");
myArray.push("papaya"); // to be deleted
myArray.push("guava");
myArray.push("muskmelon");

//console.log(myArray.get(0));

//myArray.pop();
console.log(myArray);
//myArray.shift();
console.log(myArray);
myArray.deleteByIndex(2);
console.log(myArray);
