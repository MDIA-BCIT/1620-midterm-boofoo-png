// New line to create a diff
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

/* here is my first edit of the code however i believe the one that isn't commented is the correct one. i just wanted to add this in here to show you my work and such

let correct = "Access Granted!";
let incorrect = "Access Denied!";
let forgot = "Here is a hint";
let reset = "Let's reset your account";

function passwordChecker(password, parameters){
    let correct = "Access Granted!";
    console.log(correct);
};

function passwordChecker(password, parameters){
    let incorrect = "Access Denied!";
    console.log(incorrect);
};

function passwordChecker(password, parameters){
    let forgot = "Here is a hint";
    console.log(forgot);
};

function passwordChecker(password, parameters){
    let incorrect = "Let's reset your account";
    console.log(reset);
};
*/

//Here I have the 4 statements for the password checker - only 1 is true because if they type it correctly, it is true..the others are incorrect hence its false
let soundsGood = true;
let notGood = false;
let iForgot = false;
let iReset = false;
//the functions are repetitive, i dont remember the shorter way to do them but i wanted to show my work
function passwordCheck(password, parameters) {
    let soundsGood = "Access Granted!";
    console.log(soundsGood);
}

function passwordCheck(password, parameters) {
    let notGood = "Access Denied!";
    console.log(notGood);
}

function passwordCheck(password, parameters) {
    let iForgot = "Here is a hint";
    console.log(iForgot);
}

function passwordCheck(password, parameters) {
    let notGood = "Let's reset your account";
    console.log(reset);
}

//CHALLENGE
//I forgot how to do the aside from Access Granted part but this is saying, if password is Forgotten or reset , then it will spill out that message
let password = "Hello";

if ((password = iForgot & iReset)) {
    console.log(
        "This password you set should not be used because it glitches the system"
    );
}

//i know this is incorrect but i dont rmb how to do this but my thought process is if the password is less than 5 letters, its wrong
/*if (password = < 5){
    console.log("Your password is too short!");
};
*/
