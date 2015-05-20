/**
 * Created by Salomon on 5/15/15.
 */
//Store the past five grocery totals as a list in an array.
//Create an expression that will use the items in the array to calculate the average amount spent on groceries.

var Amount_weeks = 5; //Amount of weeks calculating
console.log (Amount_weeks)

var week1 = Number(prompt(" Enter amount spent in week 1. ")); //User enters total amount spent on in week 1.
console.log (week1);

var week2 = Number(prompt(" Enter amount spent in week 2. "));  //User enters total amount spent in week 2.
console.log (week2);

var week3 = Number(prompt(" Enter amount spent on in week 3. ")); //User enters total amount spent on in week 3.
console.log (week3);

var week4 = Number(prompt(" Enter amount spent in week 4. ")); //User enters total amount spent in week 4.
console.log (week4);

var week5 = Number(prompt( " Enter amount spent in week 5. ")); //User enters total amount spent in week 5.
console.log (week5);


var Total_spent = (week1 + week2 + week3 + week4 + week5) ;
//Sum of the values inputed on each week
console.log(Total_spent);

var Weekly_average = Total_spent / Amount_weeks;
// Calculation made to find out the average spent weekly by dividing by number of weeks.
console.log(Weekly_average);

alert(" You have spent a total of " + Total_spent + " over 5 weeks. \n That is an average of " + Weekly_average + " per week." );
//Pop up prompt displaying results


