// Expressions Assignment Created by Salomon Villegas on 5/20/15.

// This calculator will calculate the MPG rating over a Month period.

var Weeks = 4;
console.log("The number of weeks in a month is", Weeks);
//Number of weeks in a month.

var Miles_Array = [Number(prompt(" Enter Odometer trip reading for week 1. ")),
    Number(prompt(" Enter Odometer trip reading for week 2. ")),
    Number(prompt(" Enter Odometer trip reading for week 3. ")),
    Number(prompt(" Enter Odometer trip reading for week4. "))];
// This prompt array allows User to enter weekly readings in the automobile's odometer in prompts.

var Miles = (Miles_Array [0] + Miles_Array [1] + Miles_Array [2] + Miles_Array [3])/Weeks;
console.log ("The average miles the user traveled is ", Miles);
// This operation adds up what the user inputs in the prompts and divides it
// by the number of weeks to obtain Trip miles traveled average

//------------------------------------------------------------------------------------//

var Expenses_Array = [Number(prompt(" Enter cost of fuel, per gallon, for week 1. ")),
    Number(prompt(" Enter cost of fuel, per gallon, for week 2. ")),
    Number(prompt(" Enter cost of fuel, per gallon, for week 3. ")),
    Number(prompt(" Enter cost of fuel, per gallon, for week 4. "))];
//This array is where the user inputs the cost of fuel per gallon each week 
//to calculate what has been the month's total cost.

var Expenses = (Expenses_Array [0] + Expenses_Array [1] + Expenses_Array [2] + Expenses_Array [3])/Weeks;
console.log("The average cost of fuel for the month is  ", Expenses);
//Here the total cost of fuel in the month is divided by the number of weeks 
//to obtain the average spent.

//------------------------------------------------------------------------------------//

var Gallons_Array = [Number(prompt(" Enter amount of fuel, in gallons, used in week 1. ")),
    Number(prompt(" Enter amount of fuel, in gallons, used in week 2. ")),
    Number(prompt(" Enter amount of fuel, in gallons, used in week 3. ")),
    Number(prompt(" Enter amount of fuel, in gallons, used in week 4. "))];
//This array is where the user, through prompts, enters the amount of fuel in gallons per week
//that he has filled up his automobile with.

var Gallons = (Gallons_Array [0] + Gallons_Array [1] + Gallons_Array [2] + Gallons_Array [3])/Weeks;
console.log("The average gallons used in the month is ", Gallons);
//With this operation the values entered by the user in gallons are added and divided by
//the number of weeks to obtain the average for gallons used.



