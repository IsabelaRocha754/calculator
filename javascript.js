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
let num1 = [];
let num2 = [];

//EVENT LISTENERS FOR THE OPERATORS
const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {setOperator('+')});

const subBtn = document.querySelector('.subBtn');
subBtn.addEventListener('click', () => {setOperator('-')});

const mulBtn = document.querySelector('.mulBtn');
mulBtn.addEventListener('click', () => {setOperator('*')});

const divBtn = document.querySelector('.divBtn');
divBtn.addEventListener('click', () => {setOperator('/')});

const eqBtn = document.querySelector('.eqBtn');
eqBtn.addEventListener('click', calculate);

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    num1 = [];
    num2 = [];
    operator = undefined;
    isChoosingFirst = true;
    display.textContent = '';
});

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
    if (operator){
        num2.push(number);
        display.textContent = num2.join('');
    }
    else{
        num1.push(number);
        display.textContent = num1.join('');
    };
};

function calculate(){
    const firstNum = Number(num1.join(''));
    const secondNum = Number(num2.join(''));
    const result = operate(firstNum, secondNum, operator);
    display.textContent = result;
    num1 = result.toString().split('');
    num2 = [];
    operator = undefined;
};

function setOperator(newOperator){
    if (operator && num2.length > 0){
        calculate();
    };
    operator = newOperator;
};