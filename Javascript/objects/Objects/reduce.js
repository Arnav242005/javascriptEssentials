const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = num.reduce((a,b) => a + b);
console.log(sum);


const n = [2,4,6,8,10];
const largest = n.reduce((a,b)=>a>b?a:b);
console.log(largest);

const m =[1,2,3,4,5,6];
const mul = m.map(x=>x**2);
console.log(mul);
console.log(mul.reverse());

const a = [4,25,2,62,6];
psort =a.sort((a,b)=>a-b)
console.log(psort);




