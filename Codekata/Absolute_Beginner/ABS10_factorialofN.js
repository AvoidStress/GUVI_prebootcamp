/* Codekata-ABS10


You are provided with a number, "N". Find its factorial.

Input Description:
A positive integer is provided as an input.

Output Description:
Print the factorial of the integer.

Sample Input :
2

Sample Output :
2

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
  var N=parseFloat(userInput[0]);
  
  function factorial(X){
      let answer=1;
      
      if(X==1||X===0)
      {
          return answer;
      }
      else
      {
          for(var i=X;i>=1;i--)
          {
            answer=answer*i; 
          }
          return answer;
      }
  }
 
  var result=factorial(N);
 
  console.log(result);
 
  //end-here
});

