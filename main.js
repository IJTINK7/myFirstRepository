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
// function whatday(num) { 
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