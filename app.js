console.log("hello from the js file");
let target = Math.floor(Math.random()*10 +1);
let guess = parseInt(prompt("enter a number"));
while(guess != target){
    if (guess<target){
        guess = prompt("IS TOO LOW !! \n please try again");
    }
    else {
        guess = prompt("IS TOO HIGH !! \n please try again");
    }
}
alert("CONGRATS, YOU WIN!!");