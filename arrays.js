var integer= [.1,.2,.4,.3]
var decimal= [.01, -1, .0001]

// this returns the greatest number in the array
function higherInteger(highest, lowest){
  return integer.sort(highest-lowest)
}
integer[integer.length - 1]

// this returns the least number in the array
function lowerInteger(highest, lowest){
  return integer.sort(lowest-highest)
}
integer[integer.length - 1]

// this finds least number of the decimal array
decimal.sort(function (highest, lowest){
  return lowest-highest
})
decimal[decimal.length - 1]

// // Negative positive sort
// // function returns array in ascending order
// function higher (highest, lowest) {
//    return decimal.sort(highest-lowest)
// }
//
// // returns array in descending order
// function lower(arr) {
//   arr.sort(function(high, low){
//     return high - low
//   })
//   return arr
// }
//
// //function finds positive numbers in the array
// function positive(after) {
//   return after > 0
// }
//
// //function finds negative numbers in the array
// function negative(after) {
//   return after < 0
// }
//
// //finds negative numbers then sorts it in ascending order
// decimal.filter(negative, higher)
//
// //this finds the closest positive number to 0
// decimal.filter(positive, higher)

var a = [0.1,0.01,-0.001]

//finds number closest to zero
function smallestNumber(arr) {
  var small = Infinity
  arr.forEach(function(ele){
    if(Math.abs(ele) < small) {
      small = ele
    }
  })
  return small
}

//sums the array
var a = [1,2,3]
function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    console.log(a.reduce(getSum));
}

//finds mean of array
function mean(){
  return (a.reduce(getSum) / (a.length))
}

//index of highest number
function indexHighestNumber(arr) {
  var big = -Infinity
  arr.forEach(function(ele){
    if(ele > big) {
      big = ele
    }
  })
  return a.lastIndexOf("big")
}

//siblings alphabetized
var siblings = ["Keith", "Ben", "Isabel"]
siblings.sort()

//parents reverse alphabetized
var parents = ["Kimla", "Cliff", "Manny", "Marissa"]
parents.sort().reverse()

//all names alphabetized
var both = siblings.concat(parents)
both.sort()

//all names reverse alphabetized
both.sort().reverse()

//is name part of array?
both.lastIndexOf("desiredname")

//function that returns only even elements of array
for(var index=0;index < a.length;index++){
  if(a[index] % 2 == 0) {console.log(a[index])}
}

//function that returns only odd elements of array
for(var index=0;index < a.length;index++){
  if(a[index] % 2 !== 0) {console.log(a[index])}
}

//run an array through a function and record it in a new array
var returnArray= []
a.forEach(function(element){
  returnArray=returnArray.concat(2 * element)
})
returnArray

//run an array through a function and record only those valid elements in a new array
var returnArray= []
a.forEach(function(element){
  if (element > 20){returnArray=returnArray.concat(element)
}})
returnArray

//Next 5 are for the Magic 8 Ball
//answer array
var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do", "then do the opposite", "Your answer here"]

//question prompt
var question = prompt("What's your question?")

//random answer
answers = answers [Math.floor(Math.random() * 6)]

//Output the question with the random answer.
function eightBall(){
  var question = prompt("What's your question?")
  alert(answers[Math.floor(Math.random() * 6)])
}

//Put the question and answer into a loop that stops when the user enters STOP.
function eightBall(){
  while (question !== "stop"){
    var question = prompt('What is your question? Write "stop" if you wish to quit.')
    if(question == "stop"){alert ("Thank you for playing!")}
    else {
    alert(answers)
    }
}
}


//change for loop to a while loop
var i=0
while (i<10) {
  console.log(i)
  i++
}
