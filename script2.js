const age = 51;
const isFemale = false;
const driverStatus = 'bob';
const firstName = 'Jan';
const totalAmount = 17;

if(age >= 18)
{
    console.log("you're allowed in");
}
else
{
    console.log("you're too young and is kindly requested to stay outside.");
}

if(age >= 18 && age <= 25 )
{
    console.log("You get 50% off!");
}
else
{
    console.log("you pay full price");
}

if (firstName == 'Bram') {
    console.log("You get a free beer on this festive day");
}

if(totalAmount >= 100){
    console.log("You get a free bottle of champange");
}
else if(totalAmount >= 50){
    console.log("You get free nacho's");
}
else if (totalAmount >=25) {
    console.log("You get free bitterballen");
}
else
{
    let tilldiscount = 25 - totalAmount;
    console.log(tilldiscount + " euro's until you get free bitterballen")
}

if (isFemale == true) {
    console.log("You're allowed to buy tickets");
}
else
{
    console.log("You're not allowed to buy tickets since its ladies night");
}

if (driverStatus == 'bob') {
    console.log("You're allowed to drive");
}
else
{
    console.log("You do not have the bob status and is therefore not allowed to drive.");
}
