let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const compChoices = ["paper", "rock", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return compChoices[randIdx];
}

const drawGame = () => {
    msg.innerHTML =  ` <button> Game was Draw. Play again. </button>`
    msg.style.Color = "pink";
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = genCompChoice();
        console.log("Choice clicked by user:", userChoice);
        console.log("Choice clicked by computer:", compChoice);

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;

            if (userChoice === "rock") {
                userWin = compChoice === "scissors";
            } else if (userChoice === "paper") {
                userWin = compChoice === "rock";
            } else if (userChoice === "scissors") {
                userWin = compChoice === "paper";
            }

            const showWinner = (userWin) => {
                if (userWin) {
                    msg.innerHTML = `<button>You Win ! Your ${userChoice} beats ${compChoice} </button>`;
                    
                    userScore++;
                    user_score.innerText=userScore;
                } else {
                    msg.innerHTML = `<button>You Lose Your ${compChoice} beats ${userChoice}</button>`;
                   
                    compScore++;
                    comp_score.innerText=compScore;
                }
            }

            showWinner(userWin);
        }
    });
});
