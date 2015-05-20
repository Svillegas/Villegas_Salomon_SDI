// Expressions Assignment Created by Salomon Villegas on 5/20/15.

// This calculator will calculate the MPG rating over a Month period.

var Weeks = 4;
console.log("The number of weeks in a month is", Weeks);
//Number of weeks in a month.

var Miles_Array = [Number(prompt(" Enter Odometer trip reading for week 1. ")),
    Number(prompt(" Enter Odometer trip reading for week 2. ")),
    Number(prompt(" Enter Odometer trip reading for week 3. ")),
    Number(prompt(" Enter Odometer trip reading for week4. "))];
// This prompt array allows User to enter weekly readings in the automobile's odometer in the prompts.

var Miles = (Miles_Array [0] + Miles_Array [1] + Miles_Array [2] + Miles_Array [3])/Weeks;
console.log ("The average miles the user traveled is ", Miles);
// This operation adds up what the user inputs in the prompts and divides it
// by the number of weeks to obtain Trip miles traveled average

//------------------------------------------------------------------------------------//

var Cost_Array = [Number(prompt("Enter cost of fuel, per gallon for week 1. ")),
    Number(prompt(" Enter cost of fuel, per gallon for week 2. ")),
    Number(prompt(" Enter cost of fuel, per gallon for week 3. ")),
    Number(prompt(" Enter cost of fuel, per gallon for week 4. "))];
//This array is where the user inputs the cost of fuel, per gallon for each week
//to calculate what has been the month's average per gallon cost.

var Cost = (Cost_Array [0] + Cost_Array [1] + Cost_Array [2] + Cost_Array [3])/Weeks;
console.log("The average cost of fuel for the month is  ", Cost);
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

//------------------------------------------------------------------------------------//

// Here in this calculation we multiply the average amount of gallons times the average cost per gallon divided by
//  the number of weeks to obtain the average spent on fuel for the month

var Expenses = Gallons * Cost/Weeks;
console.log(" The total average cost for gas monthly is", Expenses);


// Finally, in this operation we divide the average miles traveled by the average gallons used to obtain average MPG.

var MPG_Average =  Miles / Gallons;
console.log("The MPG Average for the month is", MPG_Average);

//------------------------------------------------------------------------------------//



