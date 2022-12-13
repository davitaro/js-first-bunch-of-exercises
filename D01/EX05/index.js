  function moduloEx5(num1,num2) {
  //your code

    //your code
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
  
    console.log(`The ${moduloOrNumber} ${num1} ${comparison} ${num2}${optional}`)
  }
moduloEx5();

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
