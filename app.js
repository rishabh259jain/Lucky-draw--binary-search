let target = Math.floor(Math.random()*10 + 1);
let guess = parseInt(prompt("enter a number"));
while(guess !== target){
    if(Number.isNaN(guess)){
        guess=parseInt(prompt("please enter a VALID NUMBER !!"));
        continue;
    }
    if (guess<target){
        guess = parseInt(prompt("IS TOO LOW !! \n please try again"));
    }
    else {
        guess = parseInt(prompt("IS TOO HIGH !! \n please try again"));
    }
}
alert("CONGRATS, YOU WIN!!");
