

function modulo(num1,num2) {

  if (num1>num2){
    let remainder = num1 % num2;

  if (remainder!= 0){
    console.log(`The modulo of ${num1} % ${num2} is ${remainder}`);
    
  }

  //else {
    console.log(`The number ${num1} is bigger than ${num2}`);
  }
  }

else if (num1<num2){
  console.log(`The number ${num1} is less than ${num2}`);
}

else {
  console.log(`The number ${num1} is equal to ${num2}`)
}
}

modulo();

// Do not remove or change this line, or the tests won't work
export { modulo };
