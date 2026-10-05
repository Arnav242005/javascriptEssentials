const num = [1,2,3,4,5,6,7,8,9]

function square(n) {
    return n*n;
}

const arrow = n => n*n;

const newNum = num.map(square);
console.log(newNum);
