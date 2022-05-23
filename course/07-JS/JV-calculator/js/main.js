// variables
const output    = document.getElementsByClassName('output')[0];
let   equation  = ''; // вырожение 
let   number    = '';
let   value     = '';
let   type      = '';
let   mathCount = 0;


//button click
let buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click" , function() {
        value = buttons[i].getAttribute('data-value');
        type = buttons[i].getAttribute('data-type');
    
        switch (type) {
            case "clear":
                clear();
                break;

            case "operator":
                operator();
                break;

            case "number":
                btnNumber();
                break;

            case "equal":
                equal();
                break;

            case "symbol":
                symbol()
                break;
            
            default:
                //function
                break;
        }
    }, false)
}

function clear() {
    output.innerHTML = '0';
}

function btnNumber() {
    number += value;
    equation += value;
    output.innerHTML += number;
}

function operator() {
    equation += value;
    output.innerHTML = `${number}${value}`
    number = "";
}

function equal() {
    localStorage.setItem(mathCount , equation);
    mathCount = mathCount +1;

    number = eval(equation);
    equation = number;
    output.innerHTML = number;


    if (localStorage.length > 0) {
        for(let i = 0; i < localStorage.length; i++) {
            document.getElementById('history').innerHTML += localStorage.getItem(i);
        }
    }
}

function symbol() {
    number += value;
    equation += value;
    output.innerHTML = number;
}

document.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        document.getElementById('equal').click();
    } else {
        for(let i = 0; i < buttons.length; i++) {
            let value = buttons[i].getAttribute('data-value');
    
            if (value == event.key) {
                buttons[i].click();
            } 
        }
    }

}, false)