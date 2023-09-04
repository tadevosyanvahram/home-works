"use strict";

//1

/*function findSign(a, b, c) {

 //1   solution
   if (a === 0 || b === 0 || c === 0){
  return "unsigned";
  }
  
  let count = 0;
  
  if (a < 0 ) count ++;
  if (b < 0 ) count ++;
  if (c < 0 ) count ++;
  
  if(count % 2 === 0) {
    return "+";
  }
  return "-"; 
  
  //2   solution
  let obj =  {
      "1" : "+",
      "-1" : "-",
      "NaN" : "unsigned"
    }
    let product = a * b * c;
    let rest = product/Math.abs(product);
    return obj[rest];
}

console.log(findSign(4,19,-2)); */

//2

//2.1
/* function fib(num) {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    }
  
    let prev = 0;
    let current = 1;
  
    for (let i = 2; i <= num; i++) {
      const fibNext = prev + current;
      prev = current;
      current = fibNext;
    }
  
    return current;
 }
  
 console.log(fib(20))
  */
/*

 //2.2

  function fib(n){
  return n <= 1 ? n : fib(n - 1) + fib (n - 2);
 } */

//3

/* function createNewArray(inputArray) {
  const maxValue = Math.max(...inputArray);
  const newArray = [];
 
  for (let i = 0; i <= maxValue; i++) {
    if (inputArray.includes(i)) {
      newArray.push(i);
    } else {
      newArray.push(undefined);
    }
  }
 
  return newArray;
 }
 
 const input = [4, 3, 0, 9];
 const output = createNewArray(input);
 console.log(output);
 */

//4

/* function sumOfRows(array) {
   const result = [];

   for (let row of array) {
     const sum = row.reduce((acc, num) => acc + num, 0);
     result.push(sum);
   }

   return result;
 }

 const input = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
 const output = sumOfRows(input);
 console.log(output);
  */

//5
/* 
 function binaryToDecimal(binary) {
    return parseInt(binary, 2);
 }
 
 console.log(binaryToDecimal("010"));       
 console.log(binaryToDecimal("10010"));    
 console.log(binaryToDecimal("0101011")); */

//6
/* 
 function insertArrayInMiddle(arr1, arr2) {
     const middleIndex = Math.floor(arr1.length / 2);
     const result = [...arr1.slice(0, middleIndex), ...arr2, ...arr1.slice(middleIndex)];
     return result;
 }
 const input5 = [[1, 2], [5, 6]];
 const input6 = [[3, 4]];
 const output3 = insertArrayInMiddle(input5, input6);
 console.log(output3); */

//7

/* const number = parseInt(prompt("Enter a positive number:"));
 let factorial = 1;

 for (let i = 1; i <= number; i++) {
   factorial *= i;
 }

 console.log(`${number}! = ${factorial}`);
  */

//8
/* function validatePassword(password) {
   if (password.length < 6 || password.length > 16) {
     return "Invalid";
   }
   
   const lowercaseRegex = /[a-z]/;
   const uppercaseRegex = /[A-Z]/;
   const digitRegex = /[0-9]/;
   const specialCharRegex = /[$#@]/;

   if (
     lowercaseRegex.test(password) &&
     uppercaseRegex.test(password) &&
     digitRegex.test(password) &&
     specialCharRegex.test(password)
   ) {
     return "Valid";
   } else {
     return "Invalid";
   }
 }


 console.log(validatePassword("12asdf"));          
 console.log(validatePassword("Aaza1234566#"));   

  */

//9

/*  function cleanPhoneNumber(phoneNumber) {
   phoneNumber = phoneNumber.replace(/\s/g, '');
 
   if (phoneNumber.length < 10 || phoneNumber.length > 10) {
     return "Bad number";
   }
 
   if (phoneNumber.startsWith('+')) {
 
     if (phoneNumber.indexOf('+', 1) !== -1) {
       return "Bad number";
     }
     return phoneNumber.substring(1);
   }
 
   return phoneNumber;
 }
 
 
 console.log(cleanPhoneNumber("455678"));
 console.log(cleanPhoneNumber("339 5656888"));
 console.log(cleanPhoneNumber("+0008989562"));
 console.log(cleanPhoneNumber("45231489562"));
 console.log(cleanPhoneNumber("123+2356897452"));
 */

//10

/* function generateAcronym(phrase) {
  const words = phrase.split(' ');
  let acronym = '';
 
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      acronym += word[0].toUpperCase();
    }
  }
 
  return acronym;
 }
 
 const input1 = 'Prisoner of War';
 const input2 = 'Have a good night';
 
 const output1 = generateAcronym(input1); 
 const output2 = generateAcronym(input2); 
 
 console.log(output1);
 console.log(output2); */

//11

/* function findProductOfBiggestNegative(arrays) {
  if (!Array.isArray(arrays)) {
    return 'Invalid Argument';
  }

  let product = 1;
  let foundNegatives = false;

  for (const subArray of arrays) {
    if (!Array.isArray(subArray)) {
      return 'Invalid Argument';
    }

    let maxNegative = -Infinity;
    let hasNegative = false;

    for (const num of subArray) {
      if (num < 0 && num > maxNegative) {
        maxNegative = num;
        hasNegative = true;
      }
    }

    if (hasNegative) {
      product *= maxNegative;
      foundNegatives = true;
    }
  }

  if (!foundNegatives) {
    return 'No negatives';
  }

  return product;
}

const input1 = [[2, -9, -3, 0], [1, 2], [-4 , -11, 0]];
const input2 = [[3, 4], [11, 0], [5, 6, 7, 8]];
const input3 = [1, 2, 3];

console.log(findProductOfBiggestNegative(input1)); 
console.log(findProductOfBiggestNegative(input2)); 
console.log(findProductOfBiggestNegative(input3)); */

//12

/* function invertObject(obj) {
  const inverted = {};

  for (const key in obj) {
    const value = obj[key];

    if (inverted[value] === undefined) {
      inverted[value] = key;
    } else {
      if (Array.isArray(inverted[value])) {
        inverted[value].push(key);
      } else {
        inverted[value] = [inverted[value], key];
      }
    }
  }

  return inverted;
}

const input1 = { a: '1', b: '2' };
const input2 = { a: '1', b: '2', c: '2' };
const input3 = { a: '1', b: '2', c: '2', d: '2' };

console.log(invertObject(input1));
console.log(invertObject(input2));
console.log(invertObject(input3)); */

//13

/* const readers = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

const filteredReaders = readers.filter(reader => reader.readStatus === true);

const sortedReaders = filteredReaders.sort((a, b) => b.percent - a.percent);

console.log(sortedReaders); */

//14

/* function shallowCompare(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}


let a = { a: '1' };
let b = { a: '1' };
console.log(shallowCompare(a, b)); 

let c = { a: '1' };
let d = { a: '1', b: '2' };
console.log(shallowCompare(c, d)); 

let e = {};
let f = {};
console.log(shallowCompare(e, f));  */

//15

/* const users = [
  {
    name: "John Doe",
    age: 30,
    isAdmin: false,
  },
  {
    name: "Jane Smith",
    age: 25,
    isAdmin: true,
  },
  {
    name: "Bob Johnson",
    age: 40,
    isAdmin: false,
  },
];

function getAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

const averageAge = getAverageAge(users);
console.log(averageAge); 
 */

//16

/* const cars = [
 {
   make: "Toyota",
   model: "Corolla",
   year: 2022,
 },
 {
   make: "Honda",
   model: "Civic",
   year: 2023,
 },
 {
   make: "Ford",
   model: "Mustang",
   year: 2021,
 },
 {
   make: "Toyota",
   model: "Camry",
   year: 2023,
 },
 {
   make: "Chevrolet",
   model: "Silverado",
   year: 2022,
 },
 {
   make: "Toyota",
   model: "Rav4",
   year: 2023,
 },
];

const inputMake = "Toyota";

for (const car of cars) {
  if (car.make === inputMake) {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
  }
}
 */

//17

/* function areRectanglesSameArea(rectangle1, rectangle2) {
    return rectangle1.width * rectangle1.height === rectangle2.width * rectangle2.height;
}

const rectangle1 = {
    width: 5,
    height: 10,
};
const rectangle2 = {
    width: 10,
    height: 5,
};
const rectangle3 = {
    width: 6,
    height: 8,
};

console.log(areRectanglesSameArea(rectangle1, rectangle2)); 
console.log(areRectanglesSameArea(rectangle1, rectangle3));  */