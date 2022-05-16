/* Set variable inside a function */

// const x = 2;
// const y = 3;

// let result; // undefined

// console.log(result);

// const sum = (param1, param2) => {
//   result = param1 + param2; // 5
// };

// sum(x, y);

// console.log(result);

/* Function with return */

// const x = 4;
// const y = 9;

// const sum = (param1, param2) => {
//   const result = `Result of sum is: ${param1 + param2}`;
//   return result;
// };

// const result = sum(x, y); // 13

// console.log(result);

/* Try catch block */
// const emails = [
//   "  artuRs@dev.lv  ",
//   " rnj3i@inbox.lv",
//   "  tesT@gMail.com",
//   0,
//   "arturs@gmail.com",
//   NaN,
//   " elon@musk.coM",
//   123,
// ];

// const parseEmail = (email) => {
//   try {
//     return email.trim().toLocaleLowerCase();
//   } catch (e) {
//     console.warn(e);
//   }
// };

// const parsedEmails = [];

// emails.forEach((email) => {
//   const parsedEmail = parseEmail(email);

//   if (parsedEmail) {
//     parsedEmails.push(parsedEmail);
//   }
// });

// console.log(parsedEmails);

const array = [1, 2, 3, "test", 4, NaN, 5, false];

const numberArray = [];

// create funciton to validate if is number
const checkIfNumber = (elem) => {
  if (typeof elem === "number" && !isNaN(elem)) {
    return elem;
  }
  return null;
};

array.forEach((arrayElem) => {
  const elem = checkIfNumber(arrayElem);
  if (elem) {
    numberArray.push(elem);
  }
});

console.log(numberArray); // [1,2,3,4,5]
