moduloEx7();

function getRandomInt(max) {
  //your code
  max = 100; 
  num1 = Math.floor(Math.random() * max) + 1; //range 1-100 
  num2 = Math.floor(Math.random() * max) + 1; //range 1-100
  console.log(num1);
  console.log(num2);
  return num1, num2 
  
}

function moduloEx7() {
  getRandomInt();
 
let comparison; 
let optional;
let moduloOrNumber;

if (num1 > num2) {
  let remainder = num1 % num2;

  if (remainder != 0) {
    moduloOrNumber = `number`;
    comparison = `is bigger than`;
    optional = `. But the modulo of ${num1} % ${num2} is ${remainder}`;
  }

  else {
    moduloOrNumber = `number`;
    comparison = `is bigger than`;
    optional = ``;
    
  }
}

else if (num1 < num2) {

  moduloOrNumber = `number`;
  comparison = `is less than`;
  optional = ``;
}

else {

  moduloOrNumber = `number`;
  comparison = `is equal to`;
  optional = ``;
}

let h3 = document.getElementById("output");

h3.innerText =`The ${moduloOrNumber} ${num1} ${comparison} ${num2}${optional}`
}



