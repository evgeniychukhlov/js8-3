"use strict";



// завдання 1 (JS8: Продвинута робота з масивами та об'єкт Date)

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initialsSorted = userNames.sort(); 

// const initials = initialsSorted.map(name => {
//   const nameParts = name.split(' '); 
//   const initialsParts = nameParts.map(part => part.charAt(0));
//   return initialsParts.join('. '); 
// });

// console.log(initials);
// ----------------------------
// завдання 2.1
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let vowelLetters = ['У', 'Ю', 'Я', 'І', 'О', 'А', 'Е'];

// let filteredNames = userNames.filter( name=>{
//   let firstLetter = name.charAt(0); 
//   return vowelLetters.includes(firstLetter);

// } 
// )
// console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// завдання 2.2
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let vowelLetters = ['У', 'Ю', 'Я', 'І', 'О', 'А', 'Е'];

// let filteredNames = []; 

// for (let i = 0; i < userNames.length; i++) {
//   const name = userNames[i];
//   const firstLetter = name.charAt(0);

//   if (vowelLetters.includes(firstLetter)) {
//     filteredNames.push(name); 
//   }

// }

// console.log(filteredNames);

// завдання 3

// const resultsArray =  [1, 2, [3, [4]]];
// let productOfArray = resultsArray.flat(Infinity) ; 

// const multiArray = productOfArray.reduce((accumulator, currentValue)=> accumulator * currentValue, 1) ;

// console.log(multiArray);
// завдання 4

// const priceData = {
//   Apples: '23.4',
//   BANANAS: '48',
//   oRAngGEs: '48.7584',
// };

// function optimizer(data) {
//   const updatedData = {};
//   for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//       const lowercaseKey = key.toLowerCase();
//       const roundedValue = parseFloat(data[key]).toFixed(2); 
//       updatedData[lowercaseKey] = roundedValue;
//     }
//   }
//   return updatedData;
// }

// let updatedPriceData = optimizer(priceData);

// console.log(updatedPriceData);
// завдання 5

// function durationBetweenDates (startDate, finishDate, time) { 
// const timeStampStartDate = Date.parse(startDate);
// const timeStampFinishDate = Date.parse(finishDate); 

// const result =  timeStampFinishDate - timeStampStartDate;
  
// switch (time){
//       case 'seconds':
//       console.log (result/1000, "seconds");
//       break; 
//       case 'minutes':
        
//       console.log (result/1000/60, "minutes");
//       break;
//       case 'hours':
//         console.log (result/1000/60/60, "hours");
//         break; 
//         case 'days': 
//         console.log(result/1000/60/60/24, "days") 
//         break; 
//         default:
//             console.log("введіть значення");
//   }
  
// return result; 
// }

 

// console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'minutes'));
