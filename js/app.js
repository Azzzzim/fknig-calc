let num1 = +prompt("write first num");
let op = prompt("write your opirator");
let num2 = +prompt("write your second num");

let output = document.getElementById("output");

if (op === "+") {
  output.innerHTML = num1 + num2;
} else if (op === "^") {
  output.innerHTML = num1 ** num2;
} else if (op === "/") {
  output.innerHTML = num1 / num2;
} else if (op === "-") {
  output.innerHTML = num1 - num2;
} else if (op === "*") {
  output.innerHTML = num1 * num2;
} else if (op === "%") {
  output.innerHTML = num1 % num2;
} else {
  console.log("idi otsuda");
}
