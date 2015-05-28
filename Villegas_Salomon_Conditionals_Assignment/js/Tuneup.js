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

    alert("Perfect, The tire pressure on the rear end of your car is optimal.")
    console.log( "user successfully filled and measured tire pressure for the rear axle")

}else if(Rear_axle_User > no_input){

    // if the tire pressure is lower than the optimal the user is asked to recheck and submit again the values.

    var New_reading_2 = prompt(" Hmm... It seems your rear axle tire pressure is not set. Please check" +
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
//greeting to MPG

var Gallons_A = prompt("Now that you have filled up enter the number of gallons that it took to occupy the tank below.");
    console.log("The gallons that took the user to fill up the tank were", Gallons_A);

    // user enters mileage for trip a

var Mileage_A = prompt("Before you even leave the gas station, Record the current mileage you have on the odometer.");
    console.log("user has entered " + Mileage_A + " miles for Mileage A");

    // user enters mileage for trip a

var Gallons_B = prompt("Now that you have driven and have almost emptied the tank" +
                        " record the number of gallons that it took to occupy the tank this time.");
    console.log("The gallons that took the user to fill up the tank on trip B were", Gallons_B);

    // user enters gallons for trip b

var Mileage_B = prompt("Again, Before you even leave the gas station, Record the new mileage you have on the odometer.");
    console.log("user has entered " + Mileage_B + " miles for Mileage B")

    // user enters mileage for trip b


if (Mileage_A < Mileage_B){

    console.log ("User has entered the mileage readings in the correct format");

}else{

     var New_Reading_3 = prompt(" Oops, seems like you entered the trip mileage in the incorrect format. " +
           " Please, Subtract Mileage B from Mileage B and enter that reading below.")

     //this variable is set when the user does not follow the prompt correctly

        console.log("user has entered corrected mileage")
}

// Here the MPG is calculated accrodint to the results above.

var MPG = (Mileage_B - Mileage_A)/Gallons_B;
console.log(" the MPG for the user is ", MPG, " MPG." );

// Readings are subtracted to obtain The length of the actual trip

var optimal_mpg = 20
console.log ("optimal mpg is 20")

// this is the variable that sets the optimal MPG rating


if(MPG >= optimal_mpg){

    alert(" Your Mpg is optimal! it has a rating of " + MPG + " MPG.")
    console.log ("User has entered the mileage readings in the correct format")

    // this alert tells the user that his mpg rating is optimal and also displays it

}else{

    alert("Since your fuel efficiency rating is of " + MPG + " MPG, it is suggested that you check" +
        " you oxygen sensors, fuel filter and air filters to increase your vehicle's rating")
    console.log("user is made suggestion")

    // this alert suggests to the user what he should do to increase his fuel efficiency rating

}

// this block of code will tell us if the inspection was passed or not by comparing all of the above results.

var Passed_inspection =


([((Rear_axle_User >= Rear_axle_optimal && Front_axle_User >= Front_axle_optimal) ||
(New_reading >= Front_axle_optimal && New_reading_2 >= Rear_axle_optimal))] && (MPG >= optimal_mpg)) ?
    " You have passed Inspection" : "You have Failed Inspection"

alert(Passed_inspection);
console.log(Passed_inspection);

// this alert prints out whther the user passed inspection or not?

// The optimal tire pressure for the Right front wheel is 28
//Tuneup.js:13 The optimal tire pressure for the Left front wheel is 28
//Tuneup.js:18 The optimal tire pressure for the Right rear wheel is 30
//Tuneup.js:21 The optimal tire pressure for the Left rear wheel is 30
//Tuneup.js:26 The total optimal tire pressure for the Front axle is 56
//Tuneup.js:31 The total optimal tire pressure for the Rear axle is 60
//Tuneup.js:36 The name of the user is Salomon
//Tuneup.js:78 user has continued
//Tuneup.js:86 0
//Tuneup.js:90  the total user's tire pressure is  Array[1]
//Tuneup.js:100 user successfully filled and measured tire pressure for the front axle
//Tuneup.js:124 user continued to Rear axle calculation
//Tuneup.js:135 0
//Tuneup.js:139  the total user's tire pressure is  Array[1]
//Tuneup.js:147 user successfully filled and measured tire pressure for the rear axle
//Tuneup.js:178 tires are optimal
//Tuneup.js:195 The gallons that took the user to fill up the tank were 10
//Tuneup.js:200 user has entered 1000 miles for Mileage A
//Tuneup.js:206 The gallons that took the user to fill up the tank on trip B were 9
//Tuneup.js:211 user has entered 1500 miles for Mileage B
//Tuneup.js:218 User has entered the mileage readings in the correct format
//Tuneup.js:233  the MPG for the user is  55.55555555555556  MPG.
//Tuneup.js:238 optimal mpg is 20
//Tuneup.js:246 User has entered the mileage readings in the correct format
//Tuneup.js:270  You have passed Inspection 



















