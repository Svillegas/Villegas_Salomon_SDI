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
 *Prompt the user for their name until they enter a valid response
 */

var V_Name, valid=false;
while(!valid) {
    V_Name = prompt("Please enter make your vehicle" , "");
    valid = (validation_Req(V_Name) && validation_Req_2(V_Name));
}

/******
 *Prompt the user for their employee number until they enter a valid response
 */

var Vehicle_VIN, valid=false;
while(!valid) {
    Vehicle_VIN = prompt("Please enter the vehicle's 17 digit VIN number" , "");
    valid = (validation_Req(Vehicle_VIN) && v_Num(Vehicle_VIN) && valLen(Vehicle_VIN, 17));
}

/******
 *Output user responses
 */

alert("Your Vehicle: " +V_Name+ ".");
console.log("The User's Vehicle: " +V_Name + ".");
alert(" Your VIN number is: " +Vehicle_VIN+ ".");
console.log(" The User's Vin number is: " +Vehicle_VIN+ ".");

//------------------------------------------------------------------//

