var readlinesync = require("readline-sync");
var score = 0;

var username = readlinesync.question("What is Your Name")

console.log("hello"+" "+username)

function play(question,answer){
  var userAnswer = readlinesync.question(question);
  if(userAnswer === answer ){
    console.log("Correct")
    score = score +1
    //console.log(score)
  }
  else{
    console.log("Wrong")
    //console.log(score)
  }
  
}

question1 = {
  question:"What do Ritesh live\n",
  answer : "Guwahati"
}

question2 = {
  question:"What is the Age of Ritesh\n",
  answer:"25"
}

question3 = {
  question:"Ritesh is doctor or Engineer",
  answer:"Engineer"
}

var questionSet = [question1,question2,question3]
for(var i=0;i<questionSet.length;i++){
  var currentquestion = questionSet[i]
  play(currentquestion.question,currentquestion.answer)
}
console.log("Your score is"+" "+score)
