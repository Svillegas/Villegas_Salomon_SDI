//Conditionals Assignment Created by Salomon on 5/21/15.

/* In this source code we will be validating that the user has his tires properly inflated. */

//------------------------------------------Variables---------------------------------------------------//
// Whole Car Tire Pressure optimal


var Fwheel_R = 28;
console.log("The optimal tire pressure for the Right front wheel is", Fwheel_R);

var Fwheel_L = 28;
console.log("The optimal tire pressure for the Left front wheel is", Fwheel_L);

//These Values represent the optimal individual tire pressure for the front wheels

var Rwheel_R = 30;
console.log("The optimal tire pressure for the Right rear wheel is", Rwheel_R);

var Rwheel_L = 30;
console.log("The optimal tire pressure for the Left rear wheel is", Rwheel_R);

// The following values represent the optimal individual tire pressure for the both rear wheels.

var Front_axle_optimal = (Fwheel_R + Fwheel_L );
console.log("The total optimal tire pressure for the Front axle is", Front_axle_optimal);

// The optimal tire pressure for the front axle according to the calculation made in the log is

var Rear_axle_optimal = (Rwheel_R + Rwheel_L );
console.log("The total optimal tire pressure for the Rear axle is", Rear_axle_optimal);

// The total optimal tire pressure for the rear axle according to the calculation made in the log is

var User_Name = prompt("Hello! Please enter your name.");
console.log("The name of the user is", User_Name);





// This prompt collects the user's whole name

//---------------------------------------------------------------------------------------------------------//

/* This block of code collects name from user through prompt window that allows him to continue or to cancel request*/

if(User_Name = User_Name){

    var r = confirm(("Thank you ") + (User_Name) + (", for using this handy tool that will help you check if you can pass inspection."));
    if (r == true) {
        x = "You cancelled the request";
    } else {
        x = alert("You Cancelled the request!")

        console.log ("user cancelled");

        document("syntax error to stop script") //-------> made up function to stop the script if user cancels request

        //this block greets the user after entering name 

    }}else{

    prompt("We cant address you properly without your name, please enter it below to continue or hit cancel your request")

    if (r == true) {
        x = "You cancelled the request";
    }else{
        x = alert("You Cancelled the request!") //-----> this alerts user that the request has been cancelled

        console.log("user cancelled");

        document("syntax error to stop script") //-------> made up function to stop the script if user cancels request

        //this block reminds the user that he did not enter his name
    }
};
console.log("user has continued");

//----------------------------------------------------------------------------------------------------------//

/*This block of code will ask the user to enter the information for their current tire pressure in the front axle
and compare it to the optimal value */

var no_input = 0;
    console.log(no_input);

var Front_axle_User = [Number(prompt(" Enter pressure reading for Front Right wheel. ")) +
                        Number(prompt(" Enter pressure reading for Front Left wheel. "))];
    console.log(" the total user's tire pressure is ", Front_axle_User);



//This prompt array allows User to enter Reading for both tires on the front axle...


if(Front_axle_User >= Front_axle_optimal){

    alert("Perfect, The tire pressure on the front end of your car is optimal.")
        console.log( "user successfully filled and measured tire pressure for the front axle")

    }else if(Front_axle_User > no_input){

    // if the tire pressure is lower than the optimal the user is asked to recheck and submit again the values.

    var New_reading = prompt(" Hmm... It seems your Front axle tire pressure is not set. Please check" +
    " your reading one more time for both tires, add them up and enter the new reading below. ");

console.log("User has corrected the tire pressure readings for the front axle and its now", New_reading)

}else{

    //if nothing is entered even with the warning the script is stopped

    alert(" You still haven't entered anything Restarting tool")

    console.log("User didn't enter anything. Script was stopped")

    document("syntax error to stop script")


}

console.log("user continued to Rear axle calculation");

//---------------------------------------------------------------------------------//



/* This block of code will ask the user to enter the information for their current tire pressure in the rear axle
and compare it to the optimal value */


var no_input = 0;
    console.log(no_input);

var Rear_axle_User = [Number(prompt(" Enter pressure reading for Rear Right wheel. ")) +
                        Number(prompt(" Enter pressure reading for Rear Left wheel. "))];
    console.log(" the total user's tire pressure is ", Rear_axle_User);

//This prompt array allows User to enter Reading for both tires on the front axle...


if(Rear_axle_User >= Rear_axle_optimal){

    alert("Perfect, The tire pressure on the front end of your car is optimal.")
    console.log( "user successfully filled and measured tire pressure for the rear axle")

}else if(Rear_axle_User > no_input){

    // if the tire pressure is lower than the optimal the user is asked to recheck and submit again the values.

    var New_reading_2 = prompt(" Hmm... It seems your Front axle tire pressure is not set. Please check" +
        " your reading one more time for both tires, add them up and enter the new reading below. ");

    console.log("User has corrected the tire pressure readings for the rear axle and its now", New_reading_2)

}else {

    //if nothing is entered even with the warning the script is stopped

    alert(" You still haven't entered anything. Restarting tool")

    console.log("User didn't enter anything. Script was stopped")

    document("syntax error to stop script")
}

///--------------/--/-//

/* Here if the front axles and rear axle readings are optimal,
 either on the main prompts or secondary prompts, then the users gets a good message. If not, he is forced to rerun the program.
  */

if((Rear_axle_User >= Rear_axle_optimal && Front_axle_User >= Front_axle_optimal) || (New_reading >= Front_axle_optimal && New_reading_2 >= Rear_axle_optimal)){

    alert("Your vehicles tire pressure is optimal.")
    console.log ("tires are optimal")
}else{

    alert( "Please, recheck your tire's pressure and refresh this page to restart this script")
    console.log (" User has to recheck tire pressure.")
    //this advises user to restart script
}

//----------------------------------------------------------------------------//

//Variables for MPG rating

alert("Ok, so now we will be checking your Fuel efficiency (MPG). " +
    "First step is to fill up tank because it is key to getting an accurate reading.");
//greeting to mpg

var Gallons_A = prompt("Now that you have filled up enter the number of gallons that it took to occupy the tank below.");
    console.log("The gallons that took the user to fill up the tank were", Gallons_A);

var Mileage_A = prompt("Before you even leave the gas station, Record the current mileage you have on the odometer.");
    console.log("user has entered " + Mileage_A + " miles for Mileage A");

var Gallons_B = prompt("Now that you have driven and have almost emptied the tank" +
                        " record the number of gallons that it took to occupy the tank this time.");
    console.log("The gallons that took the user to fill up the tank on trip B were", Gallons_B);

var Mileage_B = prompt("Again, Before you even leave the gas station, Record the new mileage you have on the odometer.");
    console.log("user has entered " + Mileage_B + " miles for Mileage B")


// Readings are subtracted to obtain The length of the actual trip

if (Mileage_A < Mileage_B){

    console.log ("User has entered the mileage readings in the correct format");

}else{

     var New_Reading_3 = prompt(" Oops, seems like you entered the trip mileage in the incorrect format. " +
           " Please, Subtract Mileage B from Mileage B and enter that reading below.")

        console.log("user has entered corrected mileage")
}

// Here the MPG is calculated accrodint to the results above.

var MPG = (Mileage_B - Mileage_A)/Gallons_B;
console.log(" the MPG for the user is ", MPG, " MPG." );

var optimal_mpg = 20
console.log ("optimal mpg is 20")


if(MPG >= optimal_mpg){

    alert(" Your Mpg is optimal! it has a rating of " + MPG + " MPG.")
    console.log ("User has entered the mileage readings in the correct format")

}else{

    alert("Since your fuel efficiency rating is of " + MPG + " MPG, it is suggested that you check" +
        " you oxygen sensors, fuel filter and air filters to increase your vehicle's rating")
    console.log("user is made suggestion")

}

// this block of code will tell us if the inspection was passed or not by comparing all of the above results.

var Passed_inspection =


([((Rear_axle_User >= Rear_axle_optimal && Front_axle_User >= Front_axle_optimal) ||
(New_reading >= Front_axle_optimal && New_reading_2 >= Rear_axle_optimal))] && (MPG >= optimal_mpg)) ?
    " You have passed Inspection" : "You have Failed Inspection"

alert(Passed_inspection);
console.log(Passed_inspection);



















