import { data }  from './data.js';

let resultP = document.querySelector('p');

//turn string into array of strings 
let myDataArray = data.split('\n');
let result = 0;

function getNumbers(){
    //loop over array of strings
    for (let i = 0; i < myDataArray.length; i++){
        let currentString = myDataArray[i];

        //find the numbers
        let numbers = currentString.match(/[0-9]|one|two|three|four|five|six|seven|eight|nine/gm);

        //loop over array of numbers, convert word numbers to numbers
        for (let j = 0; j < numbers.length; j++){
            let currentNum = numbers[j];

            function swapNumber(numToSwap){
                let letterNumbers = {
                    'one': 1, 
                    'two' : 2,
                    'three' : 3,
                    'four' : 4,
                    'five': 5,
                    'six' : 6,
                    'seven' : 7,
                    'eight' : 8,
                    'nine' : 9,
                    1:1,
                    2:2,
                    3:3,
                    4:4,
                    5:5,
                    6:6,
                    7:7,
                    8:8,
                    9:9
                };
                currentNum = letterNumbers[numToSwap];
                return currentNum;
            }
        numbers[j] =  swapNumber(currentNum);  
        }

        //get first number 
        let firstNum = numbers[0].toString();

        //get last number
        let lastNum = numbers[numbers.length-1].toString();

       //get calibBalue as str
        let calibValue = String(firstNum + lastNum);

        //get result 
        result = result + Number(calibValue);
    }   
    return result;
}

function displayProblem1Result(){
    resultP.textContent = `Result of Problem 1: ${getNumbers()}`;
}
window.addEventListener("DOMContentLoaded", (event) => {
    displayProblem1Result();
});










  

