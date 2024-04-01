//Function to create an array of num between two values 
function numRange(num1,num2) {
let resultArray = [];
for(let i= num1;i<=num2;i++){
resultArray.push(i);
//if  num2 is greater than num1 create array in ascending order
} 
return resultArray;
}
//output result of generating an array between -1 and 7
console.log(numRange(-1,7));