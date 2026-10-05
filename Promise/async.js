const checkEven = num => new Promise((resolve, reject) => {
  console.log("Checking the number");
  if (num % 2 == 0) {
    resolve("Even Number "+num);
  } else {
    reject("Odd Number "+num);
  }
});



async function main() {
    try {
        const resp1 = await checkEven(16);
        console.log(resp1);

        const resp2 = await checkEven(30);
        console.log(resp2);

        const resp3 = await checkEven(20);
        console.log(resp3);
        
    } catch (err) {
        console.log(err);
    }
}

main()
