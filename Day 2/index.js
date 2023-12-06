// Day 2 - Problem 1 pseudocode 
//split games by newline into games
//split games into subgames by semicolon
//split by comma into colours&numbers
//split by space 

//get highest number of each colour of each game, compare with rules
//if higher, game is impossible, move to next game
//if lower, add game to game object, OR add game id to result 

//RULES
//only 12 red, 13 green, and 14 blue


//Day 2 - Problem 2 pseudocode

// HIGHEST OF EACH COLOUR OF EACH SUBGAME
    // in first subgame, assign number and colour, then compare to next subgame 
        //if number is higher, set maxRed, maxBlue, maxGreen
        //at the end of the game, find the power of the 3 max colours (eg 4 red, 2 green, 6 blue = 4x2x6 = 48)
        //find the power of each game, then add them together to get the sum 


import { data } from './data.js';

const para = document.querySelector('p');
const arrOfPossibleGames  = [];
const arrOfPowers = [];


//split the testData string into an array of strings, with each string containing a Game. 
let arrayOfAllGames = data.split(/\r\n|\n/); 

    //loop through the array of game strings 
    for (let i = 0; i < arrayOfAllGames.length; i++){

        //get current game string
        let currentGame = arrayOfAllGames[i];
            //currentGame:  Game 3: 3 red, 1 blue, 4 green; 6 red, 3 green, 2 blue; 6 red, 16 blue, 1 green.

        //get title  
        let gameTitle = currentGame.slice(0,(currentGame.indexOf(':')+1)); // Game 3:
        console.log('gameTitle: ', gameTitle);
       
        //get game ID
        let gameID = Number(currentGame.slice(4,(currentGame.indexOf(':')))); // 3
   
        //split game string into array of strings of subgames/hand
        let subGameArray = currentGame.split(';');

        //remove Game title from first hand
        subGameArray[0] = subGameArray[0].replace(gameTitle,"");

        //remove padding from start of strings
        subGameArray = subGameArray.map((string) => string.trimStart());
        console.log('subGameArray: ', subGameArray); //array of subgame strings 
        //['3 red, 1 blue, 4 green', '6 red, 3 green, 2 blue', '6 red, 16 blue, 1 green.']
   
        let maxRed = 0;
        let maxGreen = 0;
        let maxBlue = 0;

        let subGameCounter = 0; 
        for (let j = 0; j < subGameArray.length; j++){
            let currentSubGame = subGameArray[j];
            currentSubGame = currentSubGame.split(',').map((string) => string.trimStart());
         
            console.log('currentSubGame: ', currentSubGame); //array of strings with each string being one num/col
              //   currentSubGame:  (3) ['1 green', '1 blue', '1 red']

            let handCounter= 0;
      

            //loops through each hand
            for (let k = 0; k < currentSubGame.length; k++){
                //   console.log('currentSubGame[k]:', currentSubGame[k]);
              
                //   currentSubGame[k]: 1 green
                //   currentSubGame[k]: 1 blue
                //   currentSubGame[k]: 1 red

                //check if number is one or two digit
                let firstNum = currentSubGame[k].charAt(0);
                let secondNum = Number(currentSubGame[k].charAt(1));
                let num, colour;

                //if number is one digit, (if second char is a space, or not a number) add 1 to counter
                if (testWhite(String(secondNum))){

                    handCounter = handCounter + 1;
                    // console.log('handCounter after single digit: ', handCounter);

                    //get firstnum and get colour
                    num = Number(currentSubGame[k].charAt(0));
                    colour = currentSubGame[k].slice(2).trimStart();
                       
                        //if colour contains . remove it
                        if (colour.charAt(colour.length-1) == "."){
                            colour = colour.slice(0,colour.length-1);
                        }
                     
                    findMax(colour, num);
                    
                } else {

                    num = Number(currentSubGame[k].charAt(0)+ secondNum);
                    colour = currentSubGame[k].slice(2).trimStart();

                    console.log('num from double digit: ', num);
                    console.log('colour from double digit: ', colour);
                    
                    //if colour contains . remove it
                    if (colour.charAt(colour.length-1) == "."){
                        colour = colour.slice(0,colour.length-1);

                    }
                    // compareCubes(colour, num);
                    findMax(colour, num);
                }

                //at end of loop if counter = currentsubgame.length, add to subGameCounter
                if (handCounter == currentSubGame.length){
                    subGameCounter = subGameCounter + 1;
                   
                }

                function testWhite(x){
                    let white = new RegExp(/^\s$/);
                    return white.test(currentSubGame[k].charAt(1));
                };

                function compareCubes(colour, num){
                    if ((colour == 'red' && num <= 12) || (colour == 'green' && num <= 13) || (colour == 'blue' && num <= 14)){
                        handCounter = handCounter + 1;
                            // console.log('handCounter after double digit: ', handCounter);
                    } else {
                    //    console.log("game not possible");
                        return;
                    }
                };

                function findMax(colour,num){
                    //compare variable with same colour to value of num, if num is higher, set new max 
                    //if not, return 
                    switch (colour){
                        case 'red': 
                        if (num >= maxRed){
                            maxRed = num;
                        }
                        console.log('maxRed: ', maxRed);
                        break;
                        case 'blue': 
                        if (num >= maxBlue){
                            maxBlue = num;
                        }
                        console.log('maxBlue: ', maxBlue);
                        break;
                        case 'green': 
                        if (num >= maxGreen){
                            maxGreen = num;
                        }
                        console.log('maxGreen: ', maxGreen);
                        break;
                    }
                }
                
            }
            if (subGameCounter == subGameArray.length){
                    arrOfPossibleGames.push(gameID);
                    // console.log('arrOfPossibleGames: ',arrOfPossibleGames);
            }





        }

        getPowerOfGame(maxRed, maxGreen,maxBlue);
        function getPowerOfGame(maxRed,maxGreen,maxBlue){
            console.log(`AT END OF GAME STRING: maxRed: ${maxRed}, maxGreen: ${maxGreen}, maxBlue: ${maxBlue}`);



            let power = maxRed * maxGreen * maxBlue;
            console.log('power: ', power);
            arrOfPowers.push(power);
        }
    }

    //go through array and add all values
    const sum = arrOfPossibleGames.reduce((partialSum, a) => partialSum + a, 0);
    // console.log('sum: ', sum);

    const powerSum = arrOfPowers.reduce((partialSum, a) => partialSum + a, 0);
    console.log('powerSum: ', powerSum);
  











