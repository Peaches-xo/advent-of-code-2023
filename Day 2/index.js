// pseudo 
//split games by newline into games [x]
//split games into subgames by semicolon
//split by comma into colours&numbers
//split by space 

//get highest number of each colour of each game, compare with rules
//if higher, game is impossible, move to next game
//if lower, add game to game object, OR add game id to result 


//RULES
//only 12 red, 13 green, and 14 blue


import { data } from './data.js';

const para = document.querySelector('p');
const arrOfPossibleGames  = [];


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
   

        let subGameCounter = 0; 
        for (let j = 0; j < subGameArray.length; j++){
            let currentSubGame = subGameArray[j];
            currentSubGame = currentSubGame.split(',').map((string) => string.trimStart());
         
            console.log('currentSubGame: ', currentSubGame); //array of strings with each string being one num/col
              //   currentSubGame:  (3) ['1 green', '1 blue', '1 red']

            let handCounter= 0;
            for (let k = 0; k < currentSubGame.length; k++){
                  console.log('currentSubGame[k]:', currentSubGame[k]);
              
                //   currentSubGame[k]: 1 green
                //   currentSubGame[k]: 1 blue
                //   currentSubGame[k]: 1 red

                //check if number is one or two digit
                let firstNum = currentSubGame[k].charAt(0);
                let secondNum = Number(currentSubGame[k].charAt(1));

                //if number is one digit, (if second char is a space, or not a number) add 1 to counter
                if (testWhite(String(secondNum))){
                    // console.log("secondNum is white space");

                    //add counter to count possible games and compare to  how wmany subgames
                    handCounter = handCounter + 1;
                    console.log('handCounter after single digit: ', handCounter);
                } else {
                    let num = Number(currentSubGame[k].charAt(0)+ secondNum);

                    let colour = currentSubGame[k].slice(2).trimStart();
                    //if colour contains . remove it
                    if (colour.charAt(colour.length-1) == "."){
                        colour = colour.slice(0,colour.length-1);

                    }
                    compareCubes(colour, num);
                }

                //at end of loop if counter = currentsubgame.length, add to subGameCounter

                if (handCounter == currentSubGame.length){
                    subGameCounter = subGameCounter + 1;
                    console.log('subGameCounter: ', subGameCounter);
                }

                function testWhite(x){
                    let white = new RegExp(/^\s$/);
                    return white.test(currentSubGame[k].charAt(1));
                };

                function compareCubes(colour, num){
                    if ((colour == 'red' && num <= 12) || (colour == 'green' && num <= 13) || (colour == 'blue' && num <= 14)){
                        handCounter = handCounter + 1;
                            console.log('handCounter after double digit: ', handCounter);
                    } else {
                       console.log("game not possible");
                        return;
                    }
                };
                
            }
            if (subGameCounter == subGameArray.length){
                    arrOfPossibleGames.push(gameID);
                    console.log('arrOfPossibleGames: ',arrOfPossibleGames);
            }
        }
    }

    //go through array and add all values
    const sum = arrOfPossibleGames.reduce((partialSum, a) => partialSum + a, 0);
    console.log('sum: ', sum);
  











