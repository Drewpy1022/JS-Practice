//<---------- Strings - The Basics ---------->

//This is a good, working string
let string="The revolution wil not be televised";
string;

//These are bad, non-working strings
let badString = This is a test;
let badString = 'This is a test;
let badString = This is a test';

//This shifts "badstring" into "string"
let badstring = string;
badstring;

//You can use single or double quotes, they work the same
let sgl = 'Single Quotes.';
let dbl - "Double Quotes.";
sgl;
dbl;

//Quotes have to match i.e. 
let badQuotes = 'This wont work.";

//You can use quotation marks inside of quotation marks but they have to be different
let sglDbl = 'woudl you like the "fish chips"?';
let dblSgl = "I'm going to succeed."
sglDbl;
dblSgl;

//Using the same quotation marks in the same string, will result in an error
let bigMouth = 'I'm going to succeed';

//Escaping characters to be able to use the same quotation marks by using a backslash
let bigMouth = 'I\'m going to become succesful';
bigMouth;

//<---------- Concatenating Strings ---------->

//Concatenating basically means join two or more strings together into one
let one = "hello, ";
let two = "how are you?";
let joined = one + two;
joined;

//Joining more than two strings together is very simple it just needs a "+" joining the different strings
let multiple = one + one + two + two;
multiple;

//You can also use a mix of variables and strings
let response = one + 'I am fine -' + two;
response;

//<---------- Concatenation in Context ---------->

//Example of concatenation being used in action, here we use the prompt command which asks the user to answer a question via popup
//then stores that information in into a given variable
const button = document.querySelector('button');

button.onclick = function(); {
    let name = prompt('What is your name');
    alert('Hello ' + name + 'nice to see you.');
}

//If you have a number that you want to convert into a string but not change otherwise you can use these two methods
//Number object converts anything passed to it into a number, if it can.
let myString = '123';
let myNum = Number(myString);
typeof myNum;

//Conversely, every number has a method called toString() that converts it to the equivalent string. 
let myNum = 123;
let myString = myNum.toString();
typeof myString;

//<---------- Template literals ----------> (Newer syntax, easier to read)

//To turn a standard string into a template literal you need to use backtick "`" instead of quotation marks
let song = 'fight the youth'; //not template literal
song = `Fight the youth`; //template literal

//If we want to concatenate strings, or include expression results inside them
let score = 9;
let highestScore = 10;
let output = 'I like the song"' + song + '". I gave it a score of' + (score/highestScore * 100) + '%.';

//Template literals simplify this enormously
output = `I like the song" ${song} ". I gave it a score of ${score/highestScore * 100}%.`

//you can include complex expressions inside template literals
let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${examScore}/${examHighestScore} (${math.round((examScore/examHighestScore * 100)) }%). ${examScore >= 49 ? 'Well, you passed' : 'Bad luck, you didn\'t pass this time.'}`;

//If you want to make a string go over two lines then you have to make the new line character "\n"
output = 'I like the song"' + song + '" .\nI give it a score of ' + (score/highestScore *100) + '%.';

//Template literals respect the line breaks in the source code, so newline characters are no longer needed. This would achieve the same result
output = `I like the song" ${song}
i gave 

