// wanting even no in an array ugly way of doing this

let arr = [2, 4, 5, 6];
console.log(arr)

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}

console.log(newArr)