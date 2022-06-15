/*let darbaDiena="Otrdiena";
if (darbaDiena === 'Pirmdiena') {
    console.log('1');
} else if (darbaDiena === 'Otrdiena') {
    console.log('2');
} else if (darbaDiena === 'Trešdiena') {
    console.log('3');
} else if (darbaDiena === 'Ceturtdiena') {
    console.log('4');
} else if (darbaDiena === 'Piektdiena') {
    console.log('5');
} else if (darbaDiena === 'Sestdiena') {
    console.log('6');
} else if (darbaDiena === 'Svētdiena') {
    console.log('7');
} else {
    console.log('Error');
} */

//Switch syntax 

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
console.log(day);

switch (day) {
    case 'Monday':
        console.log('1');
        break;
    case 'Tuesday':
        console.log('2');
        break;
    case 'Wednesday':
        console.log('3');
        break;
    case 'Thursday':
        console.log('4');
        break;
    case 'Friday':
        console.log('5');
        break;
    case 'Saturday':
        console.log('6');
        break;
    case 'Sunday':
        console.log('7');
        break;
    default:
        console.log('Error');
        break;
}