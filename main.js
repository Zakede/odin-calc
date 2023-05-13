let operator = "";
let previousVal = "";
let currentVal = "";

document.addEventListener("DOMContentLoaded", function () {
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previousScreen");
    let currentScreen = document.querySelector(".currentScreen");


    numbers.forEach((number) => number.addEventListener("click", function (e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentVal;
    }))

    operators.forEach((op) => op.addEventListener("click", function (e) {
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousVal + " " + operator;
        currentScreen.textContent = currentVal;
    }))

    clear.addEventListener("click", function () {
        let operator = "";
        let previousVal = "";
        let currentVal = "";
        previousScreen.textContent = currentVal;
        currentScreen.textContent = currentVal;
    })

    equal.addEventListener("click", function () {
        calculate();
        previousScreen.textContent = "";
        currentScreen.textContent = previousVal;
    })

    decimal.addEventListener("click", function () {
        addDecimal();
    })
})

function handleNumber(num) {
    if (currentVal.length <= 5) {
        currentVal += num;
    }
}

function handleOperator(op){
    operator = op;
    previousVal = currentVal;
    currentVal = "";
}

function calculate(){
    previousVal = Number(previousVal);
    currentVal = Number(currentVal);

    if(operator === "+"){
        previousVal += currentVal;
    }
    else if(operator === "-"){
        previousVal -= currentVal;
    }
    else if(operator === "x"){
        previousVal *= currentVal;
    }
    else{
        previousVal /= currentVal;
    }

    previousVal = roundNumber(previousVal);
    previousVal = previousVal.toString();
    currentValue = currentVal.toString();

}

function roundNumber(num){
    return Math.round(num* 1000) / 1000;
}

function addDecimal(){
    if(!currentVal.includes(".")){
        currentVal += ".";
    } 
}