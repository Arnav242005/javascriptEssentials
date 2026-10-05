let str = "mada";
let rev = "";
let i = str.length - 1;

while (i >= 0) {
  rev = rev + str[i];
  i--;
}

if (str === rev) {
  console.log("Yes");
} else {
  console.log("No");
}