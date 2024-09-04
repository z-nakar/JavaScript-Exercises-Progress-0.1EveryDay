
/* Write a JavaScript program that takes a random number, and try guessing the numbers between 1 to 10.*/

function guessNumberGame(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessNumber = parseInt(prompt("Guess a number between 1 to 10"));

    if(guessNumber < 11){
        if(guessNumber === randomNumber){
        alert("You have been blessed by the gods.");
            }else alert("You have been cursed with a very bad luck, the correct number is " + randomNumber + ".");
    }else alert("You have to guess number between 1 to 10");
}