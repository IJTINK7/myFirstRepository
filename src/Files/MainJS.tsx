import React from "react";

export const MainJS =()=>{
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

	return(
		<div>MainJS</div>
	);
}
