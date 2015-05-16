/**
 * Created by Salomon on 5/15/15.
 */
//A bunch of students are having a party and somebody ordered pizza.
// How much pizza will each partygoer will get at the party?

var pizzaboxes = prompt("Please enter amount of pizza pies bought. "); //User enters number of pizza pies bought.
console.log (pizzaboxes);

var partypeople = prompt("Please enter amount of people attending party. "); //User enters amount of people at party.
console.log (partypeople);

var pizzaslices = prompt("Please enter number of slices that each pie will be divided in. ");
//User enters amount of slices pizza will be divided in.
console.log (pizzaslices);

var partygoer_slices =  pizzaboxes * pizzaslices/partypeople;
//Total number of slices each partygoer will get.
console.log (partygoer_slices)


var result = (partygoer_slices);

// Variable name  is titled to "Individual_amount_of_slices" to input in alert expression

alert("Each person ate " + result + " slices of pizza at the party. ");