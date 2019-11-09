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

window.addEventListener("keydown", function(e){
   
    if(e.keyCode == 65){
        this.document.getElementById("aButton").click();
    }
    if(e.keyCode == 66){
        this.document.getElementById("bButton").click();
    }
    if(e.keyCode == 67){
        this.document.getElementById("cButton").click();
    }
    if(e.keyCode == 68){
        this.document.getElementById("dButton").click();
    }if(e.keyCode == 69){
        this.document.getElementById("eButton").click();
    }if(e.keyCode == 70){
        this.document.getElementById("fButton").click();
    }if(e.keyCode == 71){
        this.document.getElementById("gButton").click();
    }if(e.keyCode == 72){
        this.document.getElementById("hButton").click();
    }if(e.keyCode == 73){
        this.document.getElementById("iButton").click();
    }if(e.keyCode == 74){
        this.document.getElementById("jButton").click();
    }if(e.keyCode == 75){
        this.document.getElementById("kButton").click();
    }if(e.keyCode == 76){
        this.document.getElementById("lButton").click();
    }if(e.keyCode == 77){
        this.document.getElementById("mButton").click();
    }if(e.keyCode == 78){
        this.document.getElementById("nButton").click();
    }if(e.keyCode == 79){
        this.document.getElementById("oButton").click();
    }if(e.keyCode == 80){
        this.document.getElementById("pButton").click();
    }if(e.keyCode == 81){
        this.document.getElementById("qButton").click();
    }if(e.keyCode == 82){
        this.document.getElementById("rButton").click();
    }if(e.keyCode == 83){
        this.document.getElementById("sButton").click();
    }if(e.keyCode == 84){
        this.document.getElementById("tButton").click();
    }if(e.keyCode == 85){
        this.document.getElementById("uButton").click();
    }if(e.keyCode == 86){
        this.document.getElementById("vButton").click();
    }if(e.keyCode == 87){
        this.document.getElementById("wButton").click();
    }if(e.keyCode == 88){
        this.document.getElementById("xButton").click();
    }if(e.keyCode == 89){
        this.document.getElementById("yButton").click();
    }if(e.keyCode == 90){
        this.document.getElementById("zButton").click();
    }if(e.keyCode == 32){
        this.document.getElementById("newGame").click();
    }
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

