// #76
// function caseInSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }
//     // Only change code above this line
//     return answer;
//   }
  
//   caseInSwitch(1);
// #77
// function switchOfStuff(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break
//     case "c":
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//       break;
//   }
//     // Only change code above this line
//     return answer;
//   }
  
//   switchOfStuff(1);
// #78
// function sequentialSizes(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {
//       case 1:
//       case 2:
//       case 3:
//         answer = "Low";
//         break;
//       case 4:
//       case 5:
//       case 6:
//         answer = "Mid";
//         break;
//       case 7:
//       case 8:
//       case 9:
//         answer = "High";
//         break;
//     }
//     // Only change code above this line
//     return answer;
//   }
  
//   sequentialSizes(1);
// #79
// function chainToSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {
//       case "bob":
//         answer = "Marley";
//         break;
//       case 42:
//         answer = "The Answer";
//         break;
//       case 1:
//         answer = "There is no #1";
//         break;
//       case 99:
//         answer = "Missed me by this much!";
//         break;
//       case 7:
//         answer = "Ate Nine";
//         break;
//       case 42:
//         answer = "The Answer";
//         break;
//     }
  
//     // Only change code above this line
//     return answer;
//   }
  
//   chainToSwitch(7);
// #80
// function isLess(a, b) {
//     // Only change code below this line
//     return a < b;
//     // Only change code above this line
//   }
  
//   isLess(10, 15);
// #81
// function abTest(a, b) {
//     if((a < 0) || (b < 0)){
//       return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }
// abTest(2,2);
// #82
// let count = 0;
// function cc(card) {
//   if((card == 2) || (card == 3) || (card == 4) || (card == 5) || (card == 6)){
//     count += 1;
//   }else if((card == 7) || (card == 8) || (card == 9)){
//     count += 0;
//   }else if((card == 10) || (card == "J") || (card == "Q") || (card == "K") || (card == "A")){
//     count -= 1;
//   }if(count > 0){
//     return `${count} Bet`;
//   }else{
//     return `${count} Hold`;
//   }
// }
// cc(2); cc(3); cc(7); cc('K'); cc('A');
// #83
// const myDog = {
//     name: "Rex",
//     legs: 4,
//     tails: 1,
//     friends: ["Nika","Gerda"],
// };
// #84
// const testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };
//   const hatValue = testObj.hat;
//   const shirtValue = testObj.shirt;
// #85
// const testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };
//   const entreeValue = testObj["an entree"];
//   const drinkValue = testObj["the drink"];
// #86
// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
//   const playerNumber = 16;
//   const player = testObj[playerNumber];
// #87
// const myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.name = "Happy Coder";
// #88
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.bark = "woof";
// #89
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
//   delete myDog.tails;
// #90
// function phoneticLookup(val) {
//     let result = "";
//     const lookup = {
//       "alpha":"Adams",
//       "bravo":"Boston",
//       "charlie":"Chicago",
//       "delta":"Denver",
//       "echo":"Easy",
//       "foxtrot":"Frank",
//     }
//     result = lookup[val];
//     return result;
//   }
//   phoneticLookup("charlie");
// #91
// function checkObj(obj, checkProp) {
//     if(obj.hasOwnProperty(checkProp)){
//       return obj[checkProp];
//     }else{
//       return "Not Found"; 
//     }
//   }
// #92
// const myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     },
//     {
//       "artist": "Queen",
//       "title": "Love of my life",
//       "release_year": 1975,
//       "formats": [
//         "Vinyl",
//         "Limited Edition",
//         "LP",
//       ],
//     }
// ];
// #93
// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
// const gloveBoxContents = myStorage.car.inside["glove box"];
// #94
// const myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];
// const secondTree = myPlants[1].list[1];

// #95 Record Collection ?

// №96
// const myArray = [];
// let i = 5;
// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }

// #97
// const myArray = [];
// for (let i = 1; i < 6; i++) {
//   myArray.push(i);
// }

