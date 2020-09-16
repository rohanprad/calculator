function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(num1, num2 ,operator){
    switch(operator){

        case '+':
        return add(num1, num2);
        break;

        case '-':
        return subtract(num1,num2);
        break;

        case '*':
        return multiply(num1,num2);
        break;

        case '/':
        return divide(num1, num2);
        break;

        default:
        return "error";
        break;
    }
}

let displayValue = "";
let num1;
let num2;
let operator;

const display = document.querySelector('p');


const nine = document.querySelector('#nine');
nine.addEventListener('click',function(){
    displayValue += "9";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 9;
    else
        num1 = 9;
})

const eight = document.querySelector('#eight');
eight.addEventListener('click',function(){
    displayValue += "8";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 8;
    else
        num1 = 8;
})

const seven = document.querySelector('#seven');
seven.addEventListener('click',function(){
    displayValue += "7";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 7;
    else
        num1 = 7;
})

const six = document.querySelector('#six');
six.addEventListener('click',function(){
    displayValue += "6";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 6;
    else
        num1 = 6;
})

const five = document.querySelector('#five');
five.addEventListener('click',function(){
    displayValue += "5";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 5;
    else
        num1 = 5;
})

const four = document.querySelector('#four');
four.addEventListener('click',function(){
    displayValue += "4";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 4;
    else
        num1 = 4;
})

const three = document.querySelector('#three');
three.addEventListener('click',function(){
    displayValue += "3";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 3;
    else
        num1 = 3;
})

const two = document.querySelector('#two');
two.addEventListener('click',function(){
    displayValue += "2";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 2;
    else
        num1 = 2;
})

const one = document.querySelector('#one');
one.addEventListener('click',function(){
    displayValue += "1";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 1;
    else
        num1 = 1;
})

const zero = document.querySelector('#zero');
zero.addEventListener('click',function(){
    displayValue += "0";
    display.textContent = displayValue;
    if(operator!= "")
        num2 = 0;
    else
        num1 = 0;
})

const clear = document.querySelector("#clear");
clear.addEventListener('click', function(){
    displayValue = "";
    display.textContent = "0";
    num1 = num2 = NaN;
    operator = "";
})

const addButton = document.querySelector("#add");
addButton.addEventListener('click', function(){
    if(operator == ""){
        num1 = parseInt(displayValue);
    }
    else{
        num1 = parseInt(displayValue);
        num1 = operate(num1,num2,operator);
    }
    
    console.log(num1);
    operator = "+";
    displayValue = "";
})

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener('click', function(){
    if(operator == ""){
        num1 = parseInt(displayValue);
    }
    else{
        num1 = parseInt(displayValue);
        num1 = operate(num1,num2,operator);
    }
    
    operator = "-";
    displayValue = "";
})

const divideButton = document.querySelector("#divide");
divideButton.addEventListener('click', function(){
    if(operator == ""){
        num1 = parseInt(displayValue);
    }
    else{
        num1 = parseInt(displayValue);
        num1 = operate(num1,num2,operator);
    }
    
    operator = "/";
    displayValue = "";
})

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener('click', function(){
    if(operator == ""){
        num1 = parseInt(displayValue);
    }
    else{
        num1 = parseInt(displayValue);
        num1 = operate(num1,num2,operator);
    }
    
    operator = "*";
    displayValue = "";
})

const equals = document.querySelector('#equals');
equals.addEventListener('click',function(){
    num2 = parseInt(displayValue);
    console.log("Num 1: "+num1+" Num2 :"+num2+" Operator: "+operator);
    displayValue = operate(num1,num2,operator);
    num1 = parseInt(displayValue);
    display.textContent = displayValue;
    displayValue = "";
    num1 = num2 = NaN;
    operator = "";
})


