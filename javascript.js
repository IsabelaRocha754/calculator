const add = function(num1, num2){
    return num1 + num2;
};

const subtract = function(num1, num2){
    return num1 - num2;
};

const multiply = function(num1, num2){
    return num1 * num2;
};

const divide = function(num1, num2){
    return num1 / num2;
};

const operate = function(num1, num2, operator){
    if (operator == '+'){
        display.textContent = add(num1, num2);
    }
    else if (operator == '-'){
        return subtract(num1,num2);
    }
    else if (operator == '*'){
        return multiply(num1, num2);
    }
    else{
        return divide(num1, num2);
    };
};

const display = document.querySelector('.display');

let operator;
let num1;
let num2;

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {operator = '+'});

const subBtn = document.querySelector('.subBtn');
subBtn.addEventListener('click', () => {operator = '-'});

const mulBtn = document.querySelector('.multBtn');
mulBtn.addEventListener('click', () => {operator = '*'});

const divBtn = document.querySelector('.divBtn');
divBtn.addEventListener('click', () => {operator = '/'});

let isChoosingFirst = true;

const one = document.querySelector('.one');
one.addEventListener('click', () => {chooseNumber(1)});

const two = document.querySelector('.two');
two.addEventListener('click', () => {chooseNumber(2)});

function chooseNumber(number){
    if (isChoosingFirst){
        num1 = number;
        isChoosingFirst = false;
        alert(`num1: ${num1}`);
    }
    else{
        num2 = number;
        isChoosingFirst = true;
        alert(`num2: ${num2}`);
    }
}