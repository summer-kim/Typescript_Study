//Define the Type in the function's parameter
function sum1(a: number, b: number) {
  return a + b;
}

//Define the Type on the return value
function sum2(): number {
  return 5;
}

//Define the Type of function
function sum3(a: number, b: number): number {
  return a + b;
}
//Limit the number of parameter
//💣💥 Error :  sum3(3,4,5)

//Optional parameter
function sum4(a: number, b?: number) {
  console.log(a + b);
}
sum4(3);
sum4(3 + 5);
