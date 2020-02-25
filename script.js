
const calculatorscreen=document.querySelector('.calculator-screen')
const updatescreen = (number) => {
   // console.log(calculatorscreen.value);
    calculatorscreen.value=number
}



const numbers=document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updatescreen(currentInput)
    })

}) 
let  prevInput ='0'
let calculationOperator = ''
let currentInput= '0'
const inputNumber =(number) => {
    if(currentInput === '0'){
    
       currentInput = number
    }
    else{
        currentInput +=number
    }
}

//operator

const operators=document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
       // updatescreen(currentInput)
    })

}) 
const inputOperator = (operator) => {
    preInput =currentInput
    calculationOperator = operator
    currentInput ='0'
}
const equalSign =document.querySelector('.equal-sign')
equalSign.addEventListener('click', () =>{
    console.log("equal pressed");
})
const calculate =() =>{
    let result =0
    
}