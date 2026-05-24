let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");


const genCompChoice = () => {
    const options = ["rock" ,"paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = `Game was draw, play again`;
    msg.style.background = "black";

}

const showWinner = (userwin, userchoice,compChoice) => {
    if(userwin){
        console.log("you win");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win with ${userchoice} against comp ${compChoice}`;
        msg.style.background = "green";
    }else{
        console.log("you lose");
        compscore++
        compscorepara.innerText = compscore;
        msg.innerText = `comp win with ${compChoice} against you ${userchoice}`;
        msg.style.background = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    //generate comp choice -> modular way of program (its reusable)
    const compChoice = genCompChoice();
    console.log("genCompChoice = ",compChoice);

    if(userchoice === compChoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissorss ,paper
           userwin = compChoice === "paper"? false : true;
        }else if(userchoice === "paper"){
            //rock,scissors
            userwin = compChoice === "scissors"? false : true;
        }else {
            //rock,paper
            userwin = compChoice === "rock"? false : true;

        }
        showWinner(userwin,userchoice,compChoice);
    }

    
}

choices.forEach((choice) => {
   
    choice.addEventListener("click", () => {
       const  userchoice = choice.getAttribute("Id")
       
        playgame(userchoice);
    });
    
});


