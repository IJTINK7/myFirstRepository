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
	return(
		<div>MainJS</div>
	);
}
