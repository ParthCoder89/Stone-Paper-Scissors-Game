let playerScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".select");
let display = document.querySelector(".display");
let display_div = document.querySelector(".display-div");
let yourScoredis = document.querySelector(".score1");
let compScoredis = document.querySelector(".score2");

let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

let showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin === true){
        display.innerText = `You Win. Your ${userchoice} beats ${compchoice}`
        display_div.style.backgroundColor = "green";
        playerScore++;
        yourScoredis.innerText = playerScore;
    }else{
        display.innerText = `You lose. ${compchoice} beats your ${userchoice}`
        display_div.style.backgroundColor = "red";
        compScore++;
        compScoredis.innerText = compScore;
    }
}

let playgame = (userchoice) => {

    let compchoice = genCompChoice();
    if (userchoice === compchoice) {
        display.innerText = "Match Draw"; 
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        }
        else if(userchoice === "scissors") {
            userWin = compchoice === "rock" ? false : true;
        }

        showWinner(userWin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})