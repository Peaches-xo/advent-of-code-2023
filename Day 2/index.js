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


//game object to keep track of which numbers are possible

import { testData } from './data.js';


let para = document.querySelector('p');
let gameArray = testData.split(/\r\n|\n/); //array of strings 




    for (let i = 0; i < gameArray.length; i++){

        let currentGame = gameArray[i];
            console.log('currentGame: ', currentGame);
            //currentGame:  Game 3: 3 red, 1 blue, 4 green; 6 red, 3 green, 2 blue; 6 red, 16 blue, 1 green.

        //get title out 
        let gameTitle = currentGame.slice(0,(currentGame.indexOf(':')+1));
            console.log('gameTitle: ', gameTitle);
            //gameTitle:  Game 3

        //split into subgames
        let subGameArray = currentGame.split(';');
            console.log('subGameArray: ', subGameArray); //array of strings 
            //['Game 3: 3 red, 1 blue, 4 green', ' 6 red, 3 green, 2 blue', ' 6 red, 16 blue, 1 green.']

        let index = currentGame.indexOf(':');
            //remove title from first string
            subGameArray[0] = subGameArray[0].replace(gameTitle,"");
            console.log('subGameArray after replace: ', subGameArray);
            //[' 3 red, 1 blue, 4 green', ' 6 red, 3 green, 2 blue', ' 6 red, 16 blue, 1 green.']

        //remove padding from start of strings
subGameArray.forEach(string => string.trimStart());  
console.log('subGameArray after stringTrim: ', subGameArray);
 }



// para.textContent = gameArray;







