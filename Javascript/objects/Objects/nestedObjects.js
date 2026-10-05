const student = {
  id: 101,
  name: "Vedant",
  branch: "IT",
  marks: {
    maths: 100,
    phy: 90,
    chem: 89,
  },

  display(){
    console.log("This is a function inside object");
  }
};

console.log(student.name);
console.log(student.marks);
console.log(student.marks.phy);
student.display();



