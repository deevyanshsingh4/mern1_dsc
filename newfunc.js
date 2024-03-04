// map and filter

let arr = [2, 4, 5, 6];
console.log(arr);

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);


// doing this same thing with the filtering logic
console.log("Doing this same above task with the filtering logic");

let arr2 = [2, 4, 5, 6]
console.log(arr2);  


function filteringlogic(n){
  if(n%2==0){
    return true;
  }
    else{
      return false;
    }
}

const ans=arr2.filter(filteringlogic);
console.log(ans);



// map function


let arr3=[2,4,5,6]

const transform = (i)=>{  // crated a transformation  function using arrow function
  return i*2
}

const mul=arr3.map(transform);  // using map function to transform the array.....
console.log(mul)

