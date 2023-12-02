import { data }  from './data.js';

//turn string into array of strings 
let myDataArray = data.split('\n');

let result = 0;
let resultP = document.querySelector('p');

function getNumericalNumbers(){
    //loop over array
    for (let i = 0; i < myDataArray.length; i++){
        let currentString = myDataArray[i];

        //find the numbers
        let numbers = currentString.match(/[0-9]/gm);
        // console.log('numbers: ', numbers); //array of number strings

        //get first number 
        let firstNum = numbers[0];
        //get last number
        let lastNum = numbers[numbers.length-1];


        let calibValue = String(firstNum + lastNum);
        // console.log('calibValue: ', calibValue);
        //get result 
        result = result + Number(calibValue);
    }   

return result;
}

function displayProblem1Result(){
    resultP.textContent = `Result of Problem 1: ${getNumericalNumbers()}`;
}
window.addEventListener("DOMContentLoaded", (event) => {
    displayProblem1Result();
});

  

