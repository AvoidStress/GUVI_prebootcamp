/*Codekata- ABS-18

You are given the coefficients of a quadratic equation in order A, B & C.

Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.

Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.

Write a program to find all of the roots of the quadratic.

Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.

Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

Input Description:
Three numbers corresponding to the coefficients of x(squared), x and constant are given as an input in that particular order

Output Description:
Print the two values of X after rounding off to 2 decimal places if required.

Sample Input :
1 5 6

Sample Output :
-2.00
-3.00
*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var x=userInput[0].split(" ");
var a=parseFloat(x[0]);
var b=parseFloat(x[1]);
var c=parseFloat(x[2]);

let root1, root2;

let discriminant = b * b - 4 * a * c;

if (discriminant > 0)
{
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(root1.toFixed(2));
    console.log(root2.toFixed(2));
}

else if (discriminant === 0) 
{
    root1 = root2 = -b / (2 * a);
    console.log(root1.toFixed(2));
    console.log(root2.toFixed(2));
}
else {
    let rp = (-b / (2 * a)).toFixed(2);
    let ip = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(rp+"+"+ip+"i")
    console.log(rp+"-"+ip+"i")
}

  //end-here
});
