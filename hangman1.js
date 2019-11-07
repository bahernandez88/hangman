"use-strict";
/** Author: Brian A. Hernandez
 * Date:    11/6/2019
 * Comment: Implemented single player mode
 */

//Variables
var c = document.getElementById("hangman");
var ctx = c.getContext("2d");
ctx.moveTo(200, 45);
ctx.lineTo(200, -200);
ctx.stroke();
//
var secretWord;
var buttons = document.querySelectorAll(".button"); //Gets all buttons in the button class
var answerString = [];
var blank = [];
var answer = document.getElementById("answer");
var count = 0;
var secretWordsArray = ["LAMP", "DESKTOP", "COMPUTER", "SKELETON", "TRAIN", "LOCOMOTIVE", "PHOTOSYNTHESIS"
, "COFFEE", "CANDY", "DIESEL", "TRUCK", "EXCAVATOR", "CRANE", "MISSISSIPPI", ];

window.addEventListener("load", function(){

    var wordSelector = Math.floor(Math.random() * 14);
    secretWord = secretWordsArray[wordSelector];
    for (var i = 0; i < secretWord.length; i++){
        answer.innerHTML += "_ ";
    }
    blank = answer.innerHTML.split(" ");
    answerString = secretWord.split("");
    
})

/**     Event Listeners       */

//adds event listener for all buttons in the button class
for (var i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", function(){
        if(!secretWord.includes(this.value)){
            console.log("In Button, secret Word: " + secretWord + ", " + this.value);
            this.disabled = true;
            this.style.backgroundColor = "red";
            this.style.color = "black";
            wrong();
        }
        else if(secretWord.includes(this.value)){
            // document.getElementById("answer").innerHTML = this.value;
            correct(this.value);
            this.style.backgroundColor = "green";
            this.disabled = true;
            if(!answer.innerHTML.includes("_")){
                document.getElementById("message").innerHTML ="YOU WIN!!!";
                for(var i = 0; i < buttons.length; ++i){
                    buttons[i].disabled = true;
                    
                }

            }
            
        }
    })
}

//Event listener to reload the page when "New Game" is clicked
document.getElementById("newGame").addEventListener("click", function(){
    document.location.reload();

})

/**     FUNCTIONS        */


//Draws the hanged man on incorrect guess
function wrong(){
    
    ++count;
    if (count == 1){
        ctx.beginPath();
        ctx.arc(200, 75, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }
    else if(count == 2){
        ctx.moveTo(200, 105);
        ctx.lineTo(200, 250);
        ctx.stroke(); 
    }
    else if(count == 3){
         
        ctx.moveTo(200, 105);
        ctx.lineTo(250, 250);
        ctx.stroke(); 
    }
    else if(count == 4){
         
        ctx.moveTo(200, 105);
        ctx.lineTo(150, 250);
        ctx.stroke(); 
    }
    else if(count == 5){
         
        ctx.moveTo(200, 250);
        ctx.lineTo(150, 375);
        ctx.stroke(); 
    }
    else if(count == 6){
         
        ctx.moveTo(200, 250);
        ctx.lineTo(250, 375);
        ctx.stroke();
        //lose statement that locks all buttons except the "New Game Button"
        document.getElementById("message").innerHTML = "YOU LOSE!"; 
        var buttons = document.getElementsByClassName("button");
        for(var i = 0; i < buttons.length; ++i){
            buttons[i].disabled = true;
            console.log(buttons[i]);
        }

    }
}

//function for correct guesses
function correct(guess){

    answer.innerHTML = "";
   
    for(var i = 0; i < answerString.length; ++i){
        if(answerString[i] == guess){
            blank[i] = guess;
        }
        answer.innerHTML += blank[i] + " ";
        
    }
}

