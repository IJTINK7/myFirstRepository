import React from "react";
export const TrainingJS =()=>{
	//#1
// function helloWorld(){
//     let str = "Hello World!";
//     console.log(str);
// }
// #2
// let v1 = 50,v2 = 100,v3 = 150,v4 = 200,v5 = 2,v6 = 250;
// function equal1(){
//   let a = v1,
//       b = v1;
//   return a + b;
// }
// function equal2(){
//   let a = v4,
//       b = v2;
//   return a - b;
// }
// function equal3(){
//   let a = v1,
//       b = v5;
//   return a * b;
// }
// function equal4(){
//   let a = v4,
//       b = v5;
//   return a / b;
// }
// function equal5(){
//   let a = v2,
//       b = v4;
//   return a % b;
// }
// #3
// let a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
//   return d1+a2+d2;
// }
// function Bee(){
//   return b1+e2+e2;
// }
// function banana(){
//   return b2+a2+n2+a2+n2+a2;
// }
// function answer1(){
//   return "no";
// }
// function answer2(){
//   return "no";
// }
// function answer3(){
//   return "yes";
// }
// #4
// function getLength(arr){
//     return arr.length;
//   }
//   function getFirst(arr){
//     return arr[0];
//   }
//   function getLast(arr){
//     return arr[arr.length-1];
//   }
//   function pushElement(arr){
//     let el = 1;
//     arr.push(el);
//     return arr
//   }
//   function popElement(arr){
//     arr.pop();
//     return arr;
// }
// #5
// function animal(obj){
//     let name = obj.name;
//     let numberOfLegs = obj.legs;
//     let color = obj.color;
//     return `This ${color} ${name} has ${numberOfLegs} legs.`;
// }
// #6
// function trueOrFalse(val){
//     if((val == false) || (Boolean(val) == false)){
//       return 'false';
//     }else{
//       return 'true';
//     }
// }
// #7
// function saleHotdogs(n){
//     if(n < 5){
//       return n * 100;
//     }else if(n>=5 && n<10){
//       return n * 95;
//     }else if(n >= 10){
//       return n * 90;
//     }
// }
// #8 Best Practice
// function howManydays(month){
//     switch (month){
//        case 2: return 28
//        case 4:
//        case 6:
//        case 9:
//        case 11: return 30
//     }
//     return 31
// }
// #9
// function padIt(str,n){
//     while(n>0){
//       return result = "*".repeat((n+1)/2) + str + "*".repeat(n/2);
//    }
//  }
// #10
// function pickIt(arr){
//     var odd=[],even=[];
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2){
//         odd.push(arr[i]);
//       }else{
//         even.push(arr[i]);
//       }
//     }
//     return [odd,even];
// }
// #11
// function grabDoll(dolls){
//     var bag=[];
//     for(let i = 0; i < dolls.length; i++){
//       if( (dolls[i] === "Hello Kitty") || (dolls[i] === "Barbie doll") ){
//         bag.push(dolls[i]);
//       }else{
//         continue;
//       }
//       if(bag.length >= 3) break;
//     }
//     return bag;
// }

// #12
// function giveMeFive(obj){
//     let arr = [];
//     for (let key in obj){
//       if(key.length == 5){
//         arr.push(key);
//       }
//       if(obj[key].length == 5){
//         arr.push(obj[key]);
//       }
//     }
//     return arr;
// }

// #13
// function whatNumberIsIt(n){
//     if(n === Number.MAX_VALUE){
//       return "Input number is Number.MAX_VALUE";
//     }else
//     if(n === Number.MIN_VALUE){
//       return "Input number is Number.MIN_VALUE";
//     }else
//     if(isNaN(n)){
//       return "Input number is Number.NaN";
//     }else
//     if(n === Number.NEGATIVE_INFINITY){
//       return "Input number is Number.NEGATIVE_INFINITY";
//     }else
//     if(n === Number.POSITIVE_INFINITY){
//       return "Input number is Number.POSITIVE_INFINITY";
//     }else{
//       return "Input number is " + n;
//     }
// }
	let human = {
		name: "Roma",
		age: 27,
		address: {
			city:{
				title: "Minsk"
			}
		}
	}
	let arr1 = ["Donald", "Alex", "Bob", "Megan" ]
	console.log(arr1.sort())
	let arr2 = ["aLex", "ALex", "ALEX", "Donald", "Alex", "Bob", "Megan" ]
	console.log(arr2.sort())
	console.log(arr1)
	console.log(arr1.sort() === arr1)
	let numbers = [1000, 4, 22, 6780, 123,346346, -346346, 0]
	console.log(numbers.sort())
	const compareFunction = (a: number, b: number) => {
		return a - b;
	};
	console.log(numbers.sort(compareFunction))
	console.log(numbers.reverse())

	const students = [
		{
			name: "ALex",
			age: 22
		},
		{
			name: "John",
			age: 19
		},
		{
			name: "alex",
			age: 23
		},
	]
	const sortByName = (a:any, b:any) => {
		if(a.name.toLowerCase() > b.name.toLowerCase()){
			return 1
		} else {
			return -1
		}
	}
	console.log(students.sort(sortByName))
	console.log(students.sort((a,b)=>a.name.localeCompare(b.name)))
	console.log(students.sort((a,b)=> a.age - b.age))


	console.log(human["address"]["city"]["title"]);
	let array = [1,2,3,4,5]
	console.log(array[2])
	return(
		<div>TrainingJS</div>
	);
}