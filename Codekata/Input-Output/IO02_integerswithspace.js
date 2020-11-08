/* Codekata-IO02


Write a code to get the input in the given format and print the output in the given format

Input Description:
A single line contains integers separated by space

Output Description:
Print the integer list of integers separated by space

Sample Input :
2 3 4 5 6 7 8

Sample Output :
2 3 4 5 6 7 8

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

  var list=userInput[0].split(" ");
  var intlist=[];
  for(var i=0;i<list.length;i++)
  {
      intlist.push(parseInt(list[i]));
  }
  var joinedlist=intlist.join(" ");
  console.log(joinedlist);
  //end-here
});
