let mynum; 

function isBiggerThan(mynum) {
  if (mynum > 4){
console.log(`The number ${mynum} is bigger than 4`); 
}

else if (mynum < 4){
console.log(`The number ${mynum} is less than 4`); 
}

else {
console.log(`The number ${mynum} is equal to 4`);
}
}

isBiggerThan(); 

// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
