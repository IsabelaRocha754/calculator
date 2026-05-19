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
        return add(num1, num2);
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

//EVENT LISTENERS FOR THE OPERATORS
const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {operator = '+'});

const subBtn = document.querySelector('.subBtn');
subBtn.addEventListener('click', () => {operator = '-'});

const mulBtn = document.querySelector('.mulBtn');
mulBtn.addEventListener('click', () => {operator = '*'});

const divBtn = document.querySelector('.divBtn');
divBtn.addEventListener('click', () => {operator = '/'});

const eqBtn = document.querySelector('.eqBtn');
eqBtn.addEventListener('click', () => {
    const result = operate(num1, num2, operator);
    display.textContent = result;
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    isChoosingFirst = true;
    display.textContent = '';
})

let isChoosingFirst = true;

//EVENT LISTENERS FOR THE NUMBERS
const one = document.querySelector('.one');
one.addEventListener('click', () => {chooseNumber(1)});

const two = document.querySelector('.two');
two.addEventListener('click', () => {chooseNumber(2)});

const three = document.querySelector('.three');
three.addEventListener('click', () => {chooseNumber(3)});

const four = document.querySelector('.four');
four.addEventListener('click', () => {chooseNumber(4)});

const five = document.querySelector('.five');
five.addEventListener('click', () => {chooseNumber(5)});

const six = document.querySelector('.six');
six.addEventListener('click', () => {chooseNumber(6)});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {chooseNumber(7)});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {chooseNumber(8)});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {chooseNumber(9)});

function chooseNumber(number){
    if (isChoosingFirst){
        num1 = number;
        isChoosingFirst = false;
        display.textContent = num1;
        console.log(num1);
    }
    else{
        num2 = number;
        isChoosingFirst = true;
        display.textContent = num2;
    };
};

