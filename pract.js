/*
1.) Write a function called add7 that takes one number and returns that number + 7

2.) Write a function called multiply that takes 2 numbers and returns their product

3.) Write a function called capitalize that takes a string and returns that string with only the first letter 
    capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
4.) Write a function called lastLetter that takes a string and returns the very last letter of that string:
    ^lastLetter("abcd") should return "d"
*/

/* 1.)
function add7(){
    let number = parseInt(prompt('pick a number that you would like 7 added to: '));
    let newNumber = number + 7;
    console.log(newNumber)
};

add7();
*/


/* 2.)
function multiply(){
    let number = parseInt(prompt('Pick a number:'));
    let number2 = parseInt(prompt('Pick another number:'));
    console.log(number * number2);
}
multiply();



 3.)
function capitalize(){
    let sentence = prompt('Type a word: ');
    let sentenceCap = sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase();
    console.log(sentenceCap);
}

capitalize();
*/

// 4.)
function lastLetter(){
    let choice = prompt('type ANYTHING!');
    let choiceNew = choice.slice(-1);
    console.log(choiceNew)
}

lastLetter();