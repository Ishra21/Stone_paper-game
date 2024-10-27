let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll('.choice')
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissors
}


const drawGame = ()=>{
    console.log("Game was draw")
    console.log("Game was draw , play Again")
     msg.style.backgroundcolor = "#081b31"
}



showWinner = (userWin) =>{
    if(userWin){
        // console.log("you Win")
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win!"
        // msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose")
         msg.innerText = "you lost!"
        //  msg.innerText = `You Lost! ${compChoice} beats yours ${userChoice}`;
          msg.style.backgroundColor = "red"
    }
}



const playGame = (userChoice) =>{
console.log("user Choice = ", userChoice);
//Generate Computer Choice
const compChoice =  genComputerChoice();
console.log("Computer Choice = ", compChoice);



if(userChoice === compChoice){
    //draw Game
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors , paper
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice==="paper"){
        //rock, scissors
        userWin =  compChoice === "scissors" ? false : true;
    } else{
        //rock paper
        compChoice === "rock" ?false :true;
    }
    showWinner(userWin,compChoice,userChoice);
}
}




choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
// console.log("Choice was clicked",userChoice);
playGame(userChoice);
    })
})










