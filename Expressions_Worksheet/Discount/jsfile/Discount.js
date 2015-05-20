//Calculate the discounted price for an item. 
//Create an expression that will calculate the discounted price with and without sales tax

var total_percentage = 100;

var Name_item = prompt( " Please Enter name of item"); //User inputs name of item
console.log(Name_item);

var original = prompt(" Enter original price of item. "); //User enters original price of item
console.log (original);

var discount_percentage = prompt(" Enter amount of discount. ");  //User enters discount amount.
console.log (discount_percentage);

var tax_rate = prompt(" Enter sales tax charged in your state. "); //User enters total sales tax
console.log (tax_rate);

//--------------------------------------------------------------------------------------------------------

var discount_amount = original * discount_percentage/total_percentage;
// operation to find out discount amount off original price
console.log(discount_amount);

var originalw_discount = original - discount_amount;
// operation to find out total price with discount
console.log (originalw_discount);

var tax_add = originalw_discount * tax_rate/total_percentage;
// operation to find the total cost of the discounted item with sales tax
console.log(tax_add);

var discountw_tax = originalw_discount + tax_add
//operation to find total price after sales tax

var Pricew_tax = (discountw_tax);
//Discounted price with tax included
console.log(Pricew_tax);

var Pricew0_tax = (originalw_discount);
// Discounted price without tax.
console.log(Pricew0_tax);

alert(" Your " + Name_item + " was originally " + original + "$, but after a " + discount_percentage + "% discount, it is now " + Pricew0_tax + "$ without tax, and " + Pricew_tax + "$ with tax");


/**
 * Created by Salomon on 5/15/15.
 */
