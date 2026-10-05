const data = [3,5,6,8,2,9];

function getMultiple(num) {
    return num*10;
    
}

const newData = data.map(getMultiple)

console.log(newData);
