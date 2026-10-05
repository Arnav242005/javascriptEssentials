const stu = {
    name:"Jyoti",
    age:32,
    college:"Chetana"
};

const stu1 = stu;

const stu3 = {...stu};

console.log(stu.name);
stu.name = "Taqdess";
console.log(stu.name);

console.log(stu3.name);



