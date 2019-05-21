// My age
const myAge = 26;

// First two dog years are calculated differntly than later years
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2;
laterYears = laterYears * 4;

// Calculate my age
let myAgeInDogYears = earlyYears + laterYears;

// Add my name, capitalize if lowercase
let myName = 'marko';
myName = myName.charAt(0).toUpperCase() + myName.slice(1)

// Print out the result
console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);