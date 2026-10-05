const head = document.getElementById("heading");
console.log(head);

const element = document.getElementsByTagName("p");
for (let i in element) {
  console.log(element[i]);
}

const content = document.getElementsByClassName("container");
console.log(content[0]);

function greet() {
  const name = document.getElementsByClassName("input");

  alert("Welcome to DOM " + name[0].value);
}
