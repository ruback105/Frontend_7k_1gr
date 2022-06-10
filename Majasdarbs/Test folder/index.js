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

// email[0].trim().toLocaleLowerCase();
// email[1].trim().toLocaleLowerCase();
// email[2].trim().toLocaleLowerCase();
// email[3].trim().toLocaleLowerCase();

// const newEmail = [];

// let artursIndex = 0;

// for (let i = 0; i < emails.length; i++) {
//   if (String(emails[i]) === emails[i]) {
//     artursIndex += 1;
//   }
// }

// console.log(artursIndex);

// emails.forEach((email) => {
//   newEmail.push(email.trim().toLocaleLowerCase());
// });

// console.log(newEmail);

let array = ["a", "b", "c", "d", "a", "c", "r", "a", "h", "r", "t", "a"];

let arrayId = prompt("Lūdzu ievadiet skaitli");
let output = document.getElementById("main");
function printValue() {
  output.innerHTML = letters[arrayId];
}
function getValue() {
  if (arrayId >= 0 && arrayId <= 25) {
    printValue();
  } else {
    alert("NEPAREIZI");
  }
}
getValue() /
  document.addEventListener("keypress", function onEvent(event) {
    if (event.key === letters[arrayId]) {
      alert("PAREIZI");
      getValue();
    } else {
      alert("NEPAREIZI");
    }
  });
