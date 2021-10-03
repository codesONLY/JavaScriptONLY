// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?


// add readlineSync package
var readlineSync = require('readline-sync');
 
// array of questions
var questions = ["Enter your name " , "Enter unit test marks " , "Enter preFinal marks " , "Enter final marks "]

var highest = 0;
var ranker = ""


// for loop 
for(var i=0; i< 5; i++){
  
 var userName = readlineSync.question(questions[0]);
 var unitMarks = readlineSync.question(questions[1]);
 var preFinal = readlineSync.question(questions[2]);
 var final = readlineSync.question(questions[3]);
 
 var sum = Number(unitMarks) + Number(preFinal) + Number(final)

 var avg = (sum) / 3

 console.log(userName + " your Average marks from all three test is " + avg)

if(sum > highest){
  highest = sum
  ranker = userName
} 
}

console.log("Highest scorer is: " + ranker + " whose total is: " + highest)

