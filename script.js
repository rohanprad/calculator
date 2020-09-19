let displayText = "";
let number1 = null;
let number2 = null;
let operator = "";
let carriedOperator = "";

function operate(a, b, operator){
    if(operator === "add"){
        return a+b;
    }else if(operator === "subtract"){
        return a-b;
    }else if(operator === "multiply"){
        return a*b;
    }else if(operator === "divide"){
        return a/b;
    }
}

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const displayDiv = document.querySelector('.display');
const clear = document.querySelector('.clear');

function handleNumClick(e){
    displayText += e.target.classList[1];
    displayDiv.innerHTML = `<p>${displayText}</p>`
}

function handleOprClick(e){
    console.log(e.target.classList[1]);
    if(operator != "" && e.target.classList[1] != "equals"){
        if(number1 != null){
                console.log("Reached here!");
                operator = carriedOperator;
                carriedOperator = e.target.classList[1];
                number2 = parseInt(displayText);
                number1 = operate(number1, number2, operator);
                displayText = number1;
                console.log(number1, number2, displayText, e.target.classList[1]);
                displayDiv.innerHTML = `<p>${displayText}</p>` 
                number2 = null;
                displayText = "";
                return;
        
            }
        return;
    }
    if(e.target.classList[1] != "equals"){
        if(number1 == null){
            number1 = parseInt(displayText);
        }else{
            number2 = parseInt(displayText);
        }
        // 
        operator = e.target.classList[1];
        carriedOperator = e.target.classList[1];
        displayText = "";
    
    }else{
        if(number1 === null)
        {
            return;
        }
        number2 = parseInt(displayText);
        displayText = operate(number1, number2, carriedOperator);
        displayDiv.innerHTML = `<p>${displayText}</p>` 
        number1 = parseInt(displayText);
        number2 = null;
        operator = "";
        displayText = "";
    }
}

function handleClear(){
    number1 = number2 = null;
    operator = carriedOperator = "";
    displayText = "";
    displayDiv.innerHTML = `<p>0</p>` ;
}

for(const num of numbers){
    num.addEventListener('click', handleNumClick);
}

for(const opr of operators){
    opr.addEventListener('click', handleOprClick);
}

clear.addEventListener('click', handleClear);