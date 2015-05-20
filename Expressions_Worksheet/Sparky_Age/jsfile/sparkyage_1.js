//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
// Calculate how old Sparky the pit bull is in dog years based on his actual age.

var humanyears = prompt("Please enter sparky\'s age "); //user enters sparky's current age
console.log (humanyears);

var dogyears = humanyears*7; //Since dogs age 7 times faster human years is multiplied by 7
console.log (dogyears)

var result = (dogyears); // The expresions is condensed and variable name is changed for alert input
alert("Sparky is " + humanyears + " human years old which is " + result +  " in dog years.");