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

var Rwheel_L = 30
console.log("The optimal tire pressure for the Left rear wheel is", Rwheel_R);

// The following values represent the optimal individual tire pressure for the both rear wheels.

var Front_axle_optimal = (Fwheel_R + Fwheel_L );
console.log("The total optimal tire pressure for the Front axle is", Front_axle_optimal);

// The optimal tire pressure for the front axle according to the calculation made in the log is

var Rear_axle_optimal = (Rwheel_R + Rwheel_L );
console.log("The total optimal tire pressure for the Rear axle is", Rear_axle_optimal);

// The total optimal tire pressure for the front axle according to the calculation made in the log is

var User_Name = prompt("Hello! Please enter your name.")
console.log("The name of the user is", User_Name);

// This prompt collects the user's whole name

//---------------------------------------------------------------------------------------------------------//
//Collecting Name from user through prompt window that allows him to conti

if(User_Name = User_Name){

    var r = confirm(("Thank you ") + (User_Name) + (" for using this handy tool \n that will help you check for optimal tire pressure"));
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
        x = alert("You Cancelled the request!")

        console.log("user cancelled");

        document("syntax error to stop script") //-------> made up function to stop the script if user cancels request

        //this block greets the user after entering name 
    }
};
console.log("user has continued")






