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