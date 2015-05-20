/**
 * Created by Salomon on 5/15/15.
 */
//Assume guests get whole slices, how many whole slices will Sparky feast on?

var pizzaboxes = 200; //Number of pizza pies bought.
console.log (pizzaboxes);

var partypeople = 500; //Amount of people at party.
console.log (partypeople);

var pizzaslices = 8.5; //Amount of slices pizza will be divided in.
console.log (pizzaslices);

var partygoer_slices =  pizzaboxes * pizzaslices/partypeople;
//Total number of slices each partygoer will get.
console.log (partygoer_slices)

var result = (partygoer_slices);

var whole_slice = 3; // Assumption that guests only eat whole slices
console.log (whole_slice);

var left_over_pizza = result - whole_slice; 
//Assuming an individual guest eats only whole slice the rest is subtracted from the amount consumed. 
console.log (left_over_pizza);

var Total_pizza_left = left_over_pizza * partypeople
//Left over pizza is then multiplied by the total amount of guests.
console.log (Total_pizza_left);

alert(" Sparky got " + Total_pizza_left + " slices of pizza");
// Pop up stating the total amount of pizza sparky ate.

