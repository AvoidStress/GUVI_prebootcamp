/* Codekata-ABS08


You are given three numbers A, B & C. Print the largest amongst these three numbers.

Input Description:
Three numbers are provided to you.

Output Description:
Find and print the largest among the three

Sample Input :
1
2
3

Sample Output :
3

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
  var A=parseFloat(userInput[0]);
  var B=parseFloat(userInput[1]);
  var C=parseFloat(userInput[2]);
  var greatest;
  if(A>B)
  {
      if(A>C)
      {
          greatest=A;
      }
      
  }
  else if(B>C)
      {
          greatest=B;
      }
  else
      {
          greatest=C;
      }
  console.log(greatest);
  //end-here
});
