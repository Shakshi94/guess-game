const max=prompt("Enter the max value!!");
const random= Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");

while(true){
   
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("You guessed right,congrats,your random number was",random);
        break;
    }else if(guess<random){
         guess=  prompt("hint:your guess was too small! try again");
    } else{
         guess=  prompt("hint:your guess was too large! try again");
    } 
}