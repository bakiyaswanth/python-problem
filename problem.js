// Javascript program that calculates the number of upper case letters and lower case letters.

let myString = "Hello world, I'm a Javascript program";

let countLower = 0;
let countUpper = 0;

let lower_case = function (letter) {
  lowers = "abcdefghijklmnopqrstuvwxyz";
  return letter === letter.toLowerCase() && lowers.indexOf(letter) >= 0;
};

let upper_case = function (letter) {
  uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letter === letter.toUpperCase() && uppers.indexOf(letter) >= 0;
};

for(let i=0;i<myString.length;i++){
    if(lower_case(myString[i]))
        countLower++;
    else if(upper_case(myString[i]))
        countUpper++;

}

console.log(`count of lowecase letters : ${countLower}, count of uppercase letters : ${countUpper}`)