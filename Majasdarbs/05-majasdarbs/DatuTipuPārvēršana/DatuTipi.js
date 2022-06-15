// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros

console.log(String(123))
console.log(123)

String(123)            //"123"
String(-12.3)       //"-12.3"
String(null)         //"null"
String(undefined)       //"undefinied"
String(true)          //"true"
String(false)        //"false"
String(function () {})  //"function () {}"
String({})             //"{}"
String({ key: 42 })     //[object Object]
String([])              //
String([1, 2])          //"1,2"


Number("123")           //123
Number("123.4")        //123.4
Number("123,4")         //123
Number("")              //0
Number(null)            //0
Number(undefined)       //undefined
Number(true)            //1
Number(false)           //0
Number(function () {})  //NaN
Number({})              //NaN
Number([])              //0
Number([1])             //1
Number([1, 2])          //NaN


Boolean("")             //false
Boolean("string")       //true
Boolean("false")        //true
Boolean(0)              //false
Boolean(42)             //true
Boolean(-42)            //true
Boolean(NaN)            //false
Boolean(null)           //false
Boolean(undefined)      //false
Boolean(function () {}) //true
Boolean({})             //true
Boolean({ key: 42 })    //true
Boolean([])             //true
Boolean([1, 2])     //true

/*let userName = '';
let userQuestion = '';
let randomNumber = Math.floor(Math.random() * 8);

if (userName === 'Jane') {
  console.log('Hello, ${userName}!');
} else {
  console.log ('Hello!');
}
console.log(userQuestion);
console.log(Boolean([1, 2])); */
