/******
 *Functions used for validating form entries
 */
function validation_Req(val) {
    return (val);
}

function validation_Req_2(val) {
    return (isNaN(val));
}

function v_Num(val) {
    return (!isNaN(val));
}

function valLen(val, len) {
    val = val+'';
    return (parseInt(val.length)==parseInt(len));
}


/******
 *Prompt the user for the vehicle brand until they enter a valid response
 */

var V_Name, valid=false;
while(!valid) {
    V_Name = prompt("Please enter make your vehicle" , "");
    valid = (validation_Req(V_Name) && validation_Req_2(V_Name));
    //user has to enter text in the prompt otherwise it restarts the prompt
}

/******
 *Prompt the user for their VIN until they enter a valid response
 */

var Vehicle_VIN, valid=false;
while(!valid) {
    Vehicle_VIN = prompt("Please enter the vehicle's 17 digit VIN number" , "");
    valid = (validation_Req(Vehicle_VIN) && v_Num(Vehicle_VIN) && valLen(Vehicle_VIN, 17));
    // user has to enter 17 digit number otherwise it'll restart the prompt
}

/******
 *Output user responses
 */

alert("Your Vehicle: " +V_Name+ ".");
console.log("The User's Vehicle: " +V_Name + ".");
alert(" Your VIN number is: " +Vehicle_VIN+ ".");
console.log(" The User's Vin number is: " +Vehicle_VIN+ ".");

//------------------------------------------------------------------//

//Calculating horse power
alert("Now we will calculate the Horsepower of a gas fueled vehicle");




var V_torque, valid=false;
while(!valid) {
    V_torque = prompt("Please enter the vehicle's amount of torque", "");
    valid = (validation_Req(V_torque) && v_Num(V_torque) && valLen(V_torque, 3))

    //user enters value for torque 100-999 otherwise it restarts the prompt
}


var V_RPM, valid=false;
while(!valid) {
    V_RPM = prompt("Please enter the vehicle's amount of RPMs", "");
    valid = (validation_Req(V_RPM) && v_Num(V_RPM) && valLen(V_RPM, 4))

    //user enters value for rpms 1000-9999 otherwise it restarts the prompt
};

V_HP_total = V_HP(V_torque, V_RPM);

function V_HP( t, r ){

    var Uni_reading = 5252;
    // because the equation to calculate HP is torque*rpms/5252 which is just a universal reading to calculate it.


    var v_calc = (t * r/ Uni_reading);
    console.log( "The vehicle's horsepower is " + v_calc + ".");

    return (v_calc);


}

V_HP(999, 9999 );

// alternate calculation made in the console

alert("Your vehicle's horsepower is " + V_HP_total + ".");

//-----------------//

//Calculating Horsepower for electric vehicle

alert("Now we will be calculating the horsepower for electric vehicle");

var V_volts, valid=false;
while(!valid) {
    V_volts = prompt("Please enter the vehicle's voltage output", "");
    valid = (validation_Req(V_volts) && v_Num(V_volts) && valLen(V_volts, 3))

    //user enters value for volts 100-999 otherwise it restarts the prompt
};


var V_amps, valid=false;
while(!valid) {
    V_amps = prompt("Please enter the vehicle's amount of amperage or 'amps' output", "");
    valid = (validation_Req(V_amps) && v_Num(V_amps) && valLen(V_amps, 3))

    //user enters value for amps 10-99 otherwise it restarts the prompt
};

var V_efficency, valid=false;
while(!valid) {
    V_efficency = prompt("Please enter the vehicle's efficiency percentage", "");
    valid = (validation_Req(V_efficency) && v_Num(V_efficency) && valLen(V_efficency, 2))

    //user enters value for amps 10-99 otherwise it restarts the prompt
};

//****

var E_HP = function e_HP( v, a, e ){

    var Uni_reading = 746;
    // because the equation to calculate HP is volts * amps * efficiency/746 which is just a universal reading to calculate it.

    var conv = e/100
    console.log(e + " is " + conv + " in Decimal form")
    //does a calculation to transform the percentage input into decimal to be able to input that into the next equation.


    var v_calc_2 = (v * a * conv/ Uni_reading);
    console.log( "The vehicle's horsepower is " + v_calc_2 + ".");
    //calculation for electric horsepower

    return (v_calc_2);
};

 var E_HP_total = E_HP(V_volts, V_amps, V_efficency);
console.log(E_HP_total);

E_HP(999, 999, 99 )



alert("Your vehicle's electric horsepower is " + E_HP_total + ".");






//-----------------//

// BMW was entered in the vehicle brand prompt
// 78645312098465132 was entered in the VIN prompt
// 450 was entered in the torque prompt
// 4500 was entered in the rpms prompt
// The vehicle's horsepower is 385.56740289413557.

// 240 was entered in the volts prompt
// 100 was entered in the amps prompt
// 80 was entered in the Efficiency prompt
// 80 was converted to 0.8 for proper calculation
// The vehicle's horsepower is 25.737265415549597.

//Alternate calculations

// 78645312098465132 was entered in the VIN prompt
// 999 was entered in the torque prompt
// 9999 was entered in the rpms prompt
// The vehicle's horsepower is 1901.9423076923076 .

// 999 was entered in the volts prompt
// 999 was entered in the amps prompt
// 99 was entered in the Efficiency prompt
// 99 was converted to 0.99 for proper calculation
// The vehicle's horsepower is 1324.4249195710456.

