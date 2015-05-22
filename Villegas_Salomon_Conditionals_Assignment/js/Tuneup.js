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

var User_Name = prompt("Hello! Please enter your name.")
console.log("The name of the user is", User_Name);





// This prompt collects the user's whole name

//---------------------------------------------------------------------------------------------------------//

/* This block of code collects name from user through prompt window that allows him to continue or to cancel request*/

if(User_Name = User_Name){

    var r = confirm(("Thank you ") + (User_Name) + (" for using this handy tool that will help you check for optimal tire pressure."));
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

var no_input = 0
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

    var New_reading = prompt(" Hmm... It seems your Front axle tire pressure is not set. Please check \n" +
    " your reading one more time and enter the new reading below. ");

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


var no_input = 0
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

    var New_reading_2 = prompt(" Hmm... It seems your Front axle tire pressure is not set. Please check \n" +
        " your reading one more time and enter the new reading below. ");

    console.log("User has corrected the tire pressure readings for the rear axle and its now", New_reading_2)

}else{

    //if nothing is entered even with the warning the script is stopped

    alert(" You still haven't entered anything. Restarting tool")

    console.log("User didn't enter anything. Script was stopped")

    document("syntax error to stop script")
}

///--------------/--/-//










