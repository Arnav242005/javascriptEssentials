let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newarr = [];

console.log(arr);

function even(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// const newArray = array.filter(helperFn_returningBoolean)
//const filtered_arr = arr.filter(even);
const filtered_arr = arr.filter((num) => num % 2 == 0);
console.log(filtered_arr);

//function that takes another fn as a paramter is called as higher order fn. eg. filter(fn), map(fn). reduce(fn)

