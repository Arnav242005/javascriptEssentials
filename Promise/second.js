const checkEven = (num) =>
  new Promise((resolve, reject) => {
    console.log("Checking the number");
    if (num % 2 == 0) {
      resolve("Even Number " + num);
    } else {
      reject("Odd Number " + num);
    }
  });

checkEven(60)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

checkEven(10)
  .then((resp) => {
    console.log(resp);
    return checkEven(15);
  })
  .then((resp) => {
    console.log(resp);
    return checkEven(14);
  })
  .then((resp) => {
    console.log(resp);
    return checkEven(8);
  })
  .catch((err) => console.log(err))
  .finally(()=>console.log("Within Finally"));

  //Finally is a function called on promises, it gets executed irrespective of promise execution
