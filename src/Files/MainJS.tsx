import React from "react";

export const MainJS = () => {
	//Hello, World
// Task 1
//function greet(name){
// return `Hello, ${name} how are you doing today?`;
//}
// console.log(greet('Sarah'));
//Task 2
// String.prototype.isUpperCase = function() {
//   if (this.toUpperCase() == this) {
//     return true;
//   } else {
//     return false;
//   }
// }
//Task 3
// function solution(str){
//  return str.split('').reverse().join('');
// }
// Task 4
// let countSheep = function (num){
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// }
// Task 5 Count by X
// function countBy(x, n) {
//    let z = [];
//    for (let i = 1; i <= n; i++) {
//      z.push(x * i);
//    }
//    return z;
//  }
// 6 Multiply
// function multiply(a, b){
//     return a * b;
// }
// 7  Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {
//   let myArray = numbers.sort((a, b) => a - b);
//   return myArray[0] + myArray[1];
// }
// 8 Hex to decimal
// function hexToDec(hexString){
//   return  parseInt(hexString, 16);
// }
// 9 boolean to String
// function booleanToString(b){
//   return String(b);
// }
// 10 number to String
// function numberToString(num) {
//     return String(num);
// }
// 11 Get Nth Even Number
// function nthEven(n){
//     return n*2-2
// }
// 12 Is this my tail?
// function correctTail(bod, tail){
//     return bod.endsWith(tail) ? true : false
// }
// 13 Find the smallest integer in the array
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       args.sort((a, b) => a - b);
//       return args[0];
//     }
//   }
// 14 String ends with?
// function solution(str, ending){
//   return str.endsWith(ending);
// }
// 15 Return the Day
// function whatDay(num) {
//     switch(num) {
//       case 1:
//         return 'Sunday';
//         break;
//       case 2:
//         return 'Monday';
//         break;
//       case 3:
//         return 'Tuesday';
//         break;
//       case 4:
//         return 'Wednesday';
//         break;
//       case 5:
//         return 'Thursday';
//         break;
//       case 6:
//         return 'Friday';
//         break;
//       case 7:
//         return 'Saturday';
//         break;
//       default:
//         return  "Wrong, please enter a number between 1 and 7"
//     }
// }
// 16 Sum of positive
// function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             sum +=arr[i];
//         }
//     }
//     return sum;
// }
// 17 Convert a string to an array
// function stringToArray(string){
//     return string.split(' ');
// }

// 18 Find Maximum and Minimum Values of a List
// let min = function(list){
//     return Math.min(...list);
// }
//
// let max = function(list){
//     return Math.max(...list);
// }
// 19 Find Multiples of a Number
// function findMultiples(integer, limit) {
//     let arr = [];
//     for(let i = integer; i <= limit; ++i){
//         if(i % integer == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// 20 Invert values
//
// function invert(array) {
//     return array.map(el=>-el);
// }
//21 Is it a palindrome?
// function isPalindrome(x) {
//     return (x.toLowerCase().split("").reverse().join("") == x.toLowerCase());
// }
// 22 Cat years, Dog years
// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYear = 15;
//     let dogYear = 15;
//     if (humanYears === 1){
//         return [humanYears,catYear,dogYear]
//     }else
//     if(humanYears === 2){
//         return [humanYears,catYear + 9,dogYear + 9]
//     }else
//     if(humanYears > 2){
//         for(let i = 0; i < humanYears; i++){
//             catYear += 4;
//             dogYear += 5;
//         }
//     }
//     return [humanYears,catYear + 1,dogYear -1];
// }
// 23 Return to Sanity
// const mystery =()=>{
//     var results = {sanity: 'Hello'};
//     return results;
// }

// 24 Switch it Up!
// function switchItUp(number){
//     switch (number) {
//         case 0:
//             return 'Zero';
//             break;
//         case 1:
//             return 'One';
//             break;
//         case 2:
//             return 'Two';
//             break;
//         case 3:
//             return 'Three';
//             break;
//         case 4:
//             return 'Four';
//             break;
//         case 5:
//             return 'Five';
//             break;
//         case 6:
//             return 'Six';
//             break;
//         case 7:
//             return 'Seven';
//             break;
//         case 8:
//             return 'Eight';
//             break;
//         case 9:
//             return 'Nine';
//             break;
//     }
// }

// 25 Function 1 - hello world
// const greet =()=>{
//     return "hello world!"
// }
	// 26
// Function 2 - squaring an argument
// const square=(number)=> {
// 	return number*number
// }
// 27 Remove exclamation marks
// function removeExclamationMarks(s) {
// 	return s.replace(/!/g, '');
// }
// 	28 Sum The Strings
// 	function sumStr(a,b) {
// 		return String(Number(a) + Number(b))
// 	}
// 	29 Simple multiplication
// 	function simpleMultiplication(number) {
// 		if(number % 2 === 0){
// 			return number * 8
// 		}else{
// 			return number * 9
// 		}
// 	}
// 	30 Quarter of the year
// 	const quarterOf = (month) => {
// 		return Math.ceil(month/3)
// 	}
// 	31 Convert a String to a Number!
// 	const stringToNumber = function(str){
// 		return Number(str);
// 	}
// 	32 Reversed Words
// 	function reverseWords(str){
// 		return str.split(' ').reverse().join(" "); // reverse those words
// 	}
// 	33 Abbreviate a Two Word Name
// 	function abbrevName(name){
// 		return name.split(" ").map((el) => el[0].toUpperCase()).join(".")
// 	}
// 	34 The 'if' function
// 	function _if(bool, func1, func2) {
// 		if(bool){
// 			func1()
// 		}else{
// 			func2()
// 		}
// 	}
// 	35 How many lightsabers do you own?
// 	function howManyLightsabersDoYouOwn(name) {
// 		if(name === "Zach"){
// 			return 18
// 		}else{
// 			return 0
// 		}
// 	}
// 	36 Keep Hydrated!
// 	function litres(time) {
// 		return Math.floor(time/2);
// 	}
// 	37 Will you make it?
// 	const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// 		return (mpg * fuelLeft) >= distanceToPump
// 	};
// 	38 altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// 	String.prototype.toAlternatingCase = function () {
// 		return this.split("").map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('');
// 	}
// 	39 Keep up the hoop
// 	function hoopCount (n) {
// 		return n>=10 ? "Great, now move on to tricks" : "Keep at it until you get it";
// 	}
// 	40 Basic variable assignment
// 	var a = "code";
// 	var b = "wa.rs";
// 	var name = a + b;
// 	41 Remove First and Last Character
//
// 	function removeChar(str){
// 		const newStr = str.split("");
// 		newStr.shift();
// 		newStr.pop();
// 		return newStr.join("");
// 	};
// 	42 Super Duper Easy
// 	function problem(x){
// 		if(typeof x === "string"){
// 			return "Error"
// 		}else return x * 50 + 6
// 	}
// 	43 You only need one - Beginner
// 	function check(a, x) {
// 		return a.includes(x)
// 	}
// 	44 Be Concise I - The Ternary Operator
// 	function describeAge(age) {
// 		return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
// 	}
// 	45 Be Concise II - I Need Squares
// 	function squaresOnly(array) {
// 		return array.filter(el=>Number.isInteger(Math.sqrt(el)))
// 	}
// 	46 Be Concise III - Sum Squares
// 	function sumSquares(array) {
// 		return array.reduce( (a,b) => a + b ** 2,0 )
// 	}
// 	47 Be Concise IV - Index of an element in an array
// 	function find(array, element) {
// 		return array.includes(element) ? array.indexOf(element) : "Not found"
// 	}
// 	48 Find out whether the shape is a cube
// 	let cubeChecker = function(volume, side){
// 		return volume ===  side * side *side && volume > 0
// 	};
// 	49 Filter out the geese
// 	function gooseFilter (birds) {
// 		let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// 		return birds.filter(el => ! geese.includes(el));
// 	};
// 	50 Vowel remover
// 	function shortcut (string) {
// 		return string.replace(/[aeiou]/g,'')
// 	}
// 	51 Beginner - Reduce but Grow
// 	function grow(x){
// 		return x.reduce( (a,b) => a * b );
// 	}
// 	52 Find Nearest square number
// 	function nearestSq(n){
// 		return Math.round(n ** 0.5) ** 2
// 	}
// 	53 Opposites Attract
// 	function lovefunc(flower1, flower2){
// 		return flower1 % 2 !== flower2 % 2;
// 	}
// 	54 Count Odd Numbers below n
// 	function oddCount(n){
// 		return Math.floor( n / 2 )
// 	}
// 	55 Is n divisible by x and y?
// 	function isDivisible(n, x, y) {
// 		return n % x === 0 && n % y === 0
// 	}
// 	56 You Can't Code Under Pressure #1
// 	function doubleInteger(i) {
// 		return i*2;
// 	}
// 	57 Beginner Series #2 Clock
// 	function past(h, m, s){
// 		return ( (h * 3600) + ( m * 60 ) + s ) * 1000;
// 	}
// 	58 Twice as old
// 	function twiceAsOld(dadYearsOld, sonYearsOld) {
// 		return Math.abs(dadYearsOld - 2 * sonYearsOld);
// 	}
// 	59 Opposite number
// 	function opposite(number) {
// 		return(-number);
// 	}
// 	60 All Star Code Challenge #18
// 	function strCount(str, letter){
// 		return str.split(letter).length-1
// 	}
// 	61 Counting sheep...
// 	function countSheeps(arrayOfSheeps) {
// 		return arrayOfSheeps.filter(Boolean).length;
// 	}
// 	62 Switch/Case - Bug Fixing #6
// 	function evalObject(value){
// 		switch(value.operation){
// 			case'+': return value.a + value.b;
// 			case'-': return value.a - value.b;
// 			case'/': return value.a / value.b;
// 			case'*': return value.a * value.b;
// 			case'%': return value.a % value.b;
// 			case'^': return Math.pow(value.a, value.b);
// 		}
// 	}
// 	63 Unexpected parsing
// 	function getStatus(isBusy) {
// 		return { status: isBusy ? 'busy' : 'available' }
// 	}
//  64	Unfinished Loop - Bug Fixing #1
// 	function createArray(number){
// 		let newArray = [];
// 		for(let counter = 1; counter <= number; counter++){
// 			newArray.push(counter);
// 		}
// 		return newArray;
// 	}
// 	65 Third Angle of a Triangle
// 	function otherAngle(a, b) {
// 		return 180-a-b;
// 	}
// 	66 Are You Playing Banjo?
// 	function areYouPlayingBanjo(name) {
// 		if (name.slice(0, 1) === "R" || name.slice(0, 1) === "r") {
// 			return name + " plays banjo"
// 		} else return name + " does not play banjo"
// 	}
// 	67 pick a set of first elements
// 	function first(arr, n) {
// 		return n === undefined ? arr.slice(0,1) : arr.slice(0,n)
// 	}
// 	68 Count the Monkeys!
// 	function monkeyCount(n) {
// 		let result =[]
// 		for (let i = 1; i <= n; i++) {
// 			result.push(i)
// 		}
// 		return result
// 	}
// 	69 Convert to Binary
// 	function toBinary(n){
// 		return +n.toString(2)
// 	}
// 	70 My head is at the wrong end!
// 	function fixTheMeerkat(arr) {
// 		return arr.reverse();
// 	}
// 	71 Find the Remainder
// 	function remainder(n, m){
// 		return ( n > m ? n % m : m % n)
// 	}
// 	72 Type of sum
// 	function typeOfSum(a, b) {
// 		return typeof (a + b)
// 	}
// 	73 Beginner - Lost Without a Map
// 	function maps(x){
// 		return x.map(n => n * 2);
// 	}
// 	74 Multiple of index
// 	function multipleOfIndex(array) {
// 		return array.filter((el, i) => el % i === 0);
// 	}
// 	75 Simple Change Machine
// 	function changeMe(moneyIn){
// 		if (moneyIn === '£5') return `${'20p '.repeat(5 * 5).trimRight()}`
// 		if (moneyIn === '£2') return `${'20p '.repeat(5 * 2).trimRight()}`
// 		if (moneyIn === '£1') return `${'20p '.repeat(5 * 1).trimRight()}`
// 		if (moneyIn === '50p') return `${'20p '.repeat(2).trimRight()} 10p`
// 		if (moneyIn === '20p') return `${'10p '.repeat(2).trimRight()}`
//
// 		return moneyIn
// 	}
// 	76 Chuck Norris	VII - True or False ? (Beginner)
// 		function ifChuckSaysSo() {
// 			return !true
// 		}
// 	77 Remove String Spaces
// 	function noSpace(x){
// 		return x.replace(/\s/g, '');
// 	}
// 	78 String cleaning
// 	function stringClean(s){
// 		return s.replace(/\d/g, "");
// 	}
// 	79 ES6 string addition
// 	function joinStrings(string1, string2){
// 		return `${string1} ${string2}`;
// 	}
// 	80 Is it even?
// 	function testEven(n) {
// 		return n % 2 === 0;
// 	}

	// 81 Beginner Series #4 Cockroach
	// function cockroachSpeed(s) {
	// 	return Math.floor(s / 0.036);
	// }
//
// 	82 Beginner Series #1 School Paperwork
// 	function paperwork(n, m) {
// 		return n > 0 && m > 0 ? n * m : 0;
// 	}

	// 83 Array plus array
	// function arrayPlusArray(arr1, arr2) {
	// 	return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
	// }

	// 84 No Loops 2 - You only need one
	// function check(a,x){
	// 	return a.includes(x);
	// };

	// 85	For Twins: 1. Types
	// function typeValidation(variable, type) {
	// 	return (typeof variable) === type
	// }
	// 86 What is between?
	// 	function between(a, b) {
	// 		let arr = [];
	// 		for (let i = a; i <= b; i++){
	// 			arr.push(i)
	// 		}
	// 		return arr;
	// 	}
	// 87 Do I get a bonus?
	// 	function bonusTime(salary, bonus) {
	// 		return bonus ? `£${10 * salary}` : `£${salary}`;
	// 	}
	// 88 isReallyNaN
	// const isReallyNaN = (val) => {
	// 	return Number.isNaN(val)
	// };
	// 89 Contamination #1 -String-
	// function contamination(text, char){
	// 	return char.repeat(text.length)
	// }
	// 90 Thinkful - Logic Drills: Traffic light
	// function updateLight(current) {
	// 	return current === 'green' ? 'yellow' : current === 'red' ? 'green' : 'red';
	// }
	// 91 Mr. Freeze
	// Object.freeze(MrFreeze)
	// 92 Jenny's secret message
	// function greet(name){
	// 	return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
	// }
	// 93 Holiday VII - Duty Free
	// function dutyFree(normPrice, discount, hol){
	// 	return(Math.floor(hol / normPrice / discount * 100))
	// }
	// 94 Name Shuffler
	// function nameShuffler(str){
	// 	return str.split(" ").reverse().join(" ");
	// }
	// 95 Is he gonna survive?
	// 	function hero(bullets, dragons){
	// 		return bullets >= dragons * 2
	// 	}
	// 96 Rock Paper Scissors!
	// const rps = (p1, p2) => {
	// 	if (p1 === 'rock' && p2 === 'scissors') return "Player 1 won!";
	// 	if (p1 === 'scissors' && p2 === 'paper') return "Player 1 won!";
	// 	if (p1 === 'paper' && p2 === 'rock') return "Player 1 won!";
	// 	if (p1 === 'rock' && p2 === 'paper') return "Player 2 won!";
	// 	if (p1 === 'scissors' && p2 === 'rock') return "Player 2 won!";
	// 	if (p1 === 'paper' && p2 === 'scissors') return "Player 2 won!";
	// 	if (p1 === 'rock' && p2 === 'rock') return "Draw!";
	// 	if (p1 === 'scissors' && p2 === 'scissors') return "Draw!";
	// 	if (p1 === 'paper' && p2 === 'paper') return "Draw!";
	// };
	// 97 Welcome to the City
	// function sayHello( name, city, state ) {
	// 	return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
	// }
	// 98 L1: Set Alarm
	// function setAlarm(employed, vacation){
	// 	return employed && !vacation;
	// }
	// 99 Remove the time
	// function shortenToDate(longDate) {
	// 	return longDate.split(',')[0]
	// }
	// 100 Area or Perimeter
	// const areaOrPerimeter = function(l , w) {
	// 	if ( l === w ){
	// 		return l * w
	// 	}
	// 	return 2 * ( l + w )
	// };
	// 101 Kata Example Twist
	// let websites = []
	// while (websites.length < 1000){
	// 	websites.push("codewars")
	// }
	// 102 Convert number to reversed array of digits
	// function digitize(n){
	// 	return (n + '').split('').map(Number).reverse();
	// }
	// 103 Remove First and Last Character Part Two
	// function array(string) {
	// 	return string.split(',').slice(1,-1).join(' ')|| null
	// }
	// 104 Expressions Matter
	// 	function expressionMatter(a, b, c) {
	// 		return Math.max( a + b + c, (a + b) * c, a * (b + c), a * b * c ) ;
	// 	}
	// 105 Get Planet Name By ID
	// function getPlanetName(id){
	// 	switch(id){
	// 		case 1:
	// 			return 'Mercury'
	// 		case 2:
	// 			return 'Venus'
	// 		case 3:
	// 			return 'Earth'
	// 		case 4:
	// 			return 'Mars'
	// 		case 5:
	// 			return 'Jupiter'
	// 		case 6:
	// 			return 'Saturn'
	// 		case 7:
	// 			return 'Uranus'
	// 		case 8:
	// 			return 'Neptune'
	// 	}
	// }
	// 106 Grasshopper - Order of operations
	// function orderOperations () {
	// 	return (2 + 2) * (2 + 2) * 2
	// }
	// 107 BASIC: Making Six Toast.
	// 	function sixToast(num) {
	// 		return Math.abs(num-6);
	// 	}
	// 108 Grasshopper - Debug sayHello
	// function sayHello(name) {
	// 	return `Hello, ${name}`
	// }
	// 109 Who ate the cookie ?
	// 	function cookie(x){
	// 		return typeof(x) === "string" ? "Who ate the last cookie? It was Zach!"
	// 			: typeof(x) === "number" ? "Who ate the last cookie? It was Monica!"
	// 				: "Who ate the last cookie? It was the dog!"
	// 	}
	// 110 Reverse List Order
	// function reverseList(list) {
	// 	return list.reverse();
	// }
	// 111	Capitalization and Mutability
	// function capitalizeWord(word) {
	// 	return word[0].toUpperCase() + word.slice(1);
	// }
	// 112 Will there be enough space?
	// 	function enough(cap, on, wait) {
	// 		return (on + wait > cap) ? on + wait - cap : 0;
	// 	}
	// 113 Drink about
	// function peopleWithAgeDrink(old) {
	// 	if (old < 14) return "drink toddy"
	// 	if (old < 18) return "drink coke"
	// 	if (old < 21) return "drink beer"
	// 	if (old >= 21) return "drink whisky"
	// };
	// 114 Determine offspring sex based on genes XX and XY chromosomes
	// function chromosomeCheck(sperm) {
	// 	let result = sperm === "XY" ? "son" : "daughter"
	// 	return `Congratulations! You're going to have a ${result}.`
	// }
	// 115 Double Char
	// function doubleChar(str) {
	// 	return str.split("").map((letter) => `${letter}`.repeat(2)).join("");
	// }
	// 116 UEFA EURO 2016
	// function uefaEuro2016(teams, scores){
	// 	if (scores[0]==scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
	// 	if (scores[1]>scores[0]) return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
	// 	if (scores[1]<scores[0]) return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
	// }
	// 117 Template Strings
	// var TempleStrings = function(obj, feature) {
	// 	return`${obj} are ${feature}`
	// }
	// 118 Find numbers which are divisible by given number
	// function divisibleBy(numbers, divisor){
	// 	return [...numbers].filter(el => el % divisor === 0);
	// }
	// 119 Simple Fun #261: Whose Move
	// function whoseMove(lastPlayer, win) {
	//   if (lastPlayer === 'black' && win === true) {
	//     return 'black';
	//   } else if (lastPlayer === 'black' && win === false) {
	//     return 'white';
	//   } else if (lastPlayer === 'white' && win === true) {
	//     return 'white';
	//   } else {
	//     return 'black';
	//   }
	// }
	// 120 L1: Bartender, drinks!
	// function getDrinkByProfession(param){
	// 	param = param.toLowerCase();
	// 	switch(param) {
	// 		case "jabroni": return "Patron Tequila";
	// 		case "school counselor": return "Anything with Alcohol";
	// 		case "programmer": return "Hipster Craft Beer";
	// 		case "bike gang member": return "Moonshine";
	// 		case "politician": return  "Your tax dollars";
	// 		case "rapper": return "Cristal";
	// 		default: return "Beer";
	// 	}
	// }
	// 121 Dollars and Cents
	//function formatMoney(amount){
	//  return `$${amount.toFixed(2)}`
	// }
	// 122 Student's Final Grade
	//function finalGrade (exam, projects) {
	//   if(exam > 90 || projects > 10) return 100;
	//   if(exam > 75 & projects >= 5) return 90;
	//   if(exam > 50 & projects >= 2) return 75;
	//   return 0;
	// }
	// 123 Coding 3min : Jumping Dutch act
	// function sc(floor){
	// 	if(floor <= 1) return "";
	//
	// 	return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
	// }
	// 124 Classy Classes
	// class Person {
	// 	constructor(name, age){
	// 		this.name = name;
	// 		this.age = age;
	// 	}
	// 	get info(){ return`${this.name}s age is ${this.age}`}
	// }
	// 125 Remove duplicates from list
	// function distinct(a) {
	// 	return a.filter((el, index) => a.indexOf(el) === index);
	// }
	// 126 Be Concise IV - Index of an element in an array
	// function find(arr, el) {
	// 	return arr.includes(el) ? arr.indexOf(el) : "Not found"
	// }
	// 127	The Feast of Many Beasts
	// function feast(beast, dish) {
	// 	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
	// }
	// 128 Plural
	// function plural(n) {
	// 	return n !== 1;
	// }
	// 129 Even numbers in an array
	// function evenNumbers(array, number) {
	// 	return array.filter(el => el % 2 == 0).slice(-number)
	// }
	// 130 Evens and Odds
	// function evensAndOdds(num){
	// 	return num % 2 === 0 ? num.toString(2) : num.toString(16)
	// }
	// 131 Dalmatians - squash the bugs, not the dogs!
	// function howManyDalmatians(number){
	// 	if (number <= 10) {
	// 		return "Hardly any"
	// 	} else if (number <= 50) {
	// 		return "More than a handful!"
	// 	} else if (number === 101) {
	// 		return "101 DALMATIANS!!!"
	// 	} else {
	// 		return "Woah that's a lot of dogs!"
	// 	}
	// }
	// 132 Holiday VI - Shark Pontoon
	// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
	// 	if(dolphin){
	// 		sharkSpeed /= 2;
	// 	}
	// 	return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
	// }
	// 133 Online RPG: player to qualifying stage?
	// function playerRankUp (points) {
	// 	if (points >= 100){
	// 		return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
	// 	}
	// 	return false
	// }
	return (
		<div>MainJS</div>
	);
}
