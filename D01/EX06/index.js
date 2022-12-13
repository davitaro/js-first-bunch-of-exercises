
function moduloEx6(num1,num2) {
      //your code
      num1 = 8;
      num2 = 3;
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
moduloEx6();

// Do not remove or change this line, or the tests won't work
