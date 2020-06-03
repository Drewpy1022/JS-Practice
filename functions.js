// <-- --> main topic | [-- --] sub topic

//<---------- Functions ---------->

//[----- Invoking functions -----]
//To use a function after it is defined you need to run it
function myFunction(){
    alert('Hello.')
}

myFunction(); //Calls the function

//[----- Anonymous Functions -----]
//normal function
function myFunction(){
    alert('Hello.')
}

myFunction();

//Anonymous Function
functions(){
    alert('Hello');
}

//Generally only want to use anonymous functions whenever you use an event handler
const myButton = document.querySelector('button');

myButton.onclick = function(){
    alert('Hello');
}

//You can also assign an anonymous fuction to be the value of a variable
const myGreeting = function(){
    alert('Hello')
}
//This function ^ can now be called by using
myGreeting();

//This effectively gives the function a name; you can also assign the function to be the value of multiple variables
let anotherGreeting = myGreeting;

//This function now be called using either of these functions
myGreeting();
anotherGreeting();

//But too confusing so just stick to this form
function myGreeting(){
    alert('Hello');
}

//You will mainly only use anonymous functions to just run a bunch of code in response to an event firing - like a button press
myButton.onclick = function(){
    alert('hello');
    // I can put as much code
    //inside here as i want
}

//[----- Function Parameters -----]

//Some functions require parameters to be specified when you are invoking them
//the browser's built-in Math.random() doesn't require any parameters.
let myNumber = Math.random();

//The browsers built in string replace() function however, needs two parameters - 
//the substring to find the main string and the substring to replace that string with.
let myText = 'This is a string';
let newString = myText.replace('string', 'sausage');

//Sometime parameters are optional - if you don't specify them it will adopt a default behaivor. As an example, the array join()
//function's parameter is optional
let myArray = ['i', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join('');
//returns "i love chocolate frogs"
let madeAString = myArray.join();
//returns "i,love,chocolate,frogs"

//[----- Function Scope and conflicts-----]








