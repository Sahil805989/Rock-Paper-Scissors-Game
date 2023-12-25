let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choices div");
const msg= document.querySelector("#text");
const userScorePara= document.querySelector("#userScore");
const compScorePara= document.querySelector("#compScore");


const genCompChoice=()=>{
    const options=["rock", "paper", "scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
    
}
const showWinner=(userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        
        msg.innerHTML=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerHTML=compScore;
        
        msg.innerHTML=`You lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("userChoice= ", userChoice)
    const compChoice= genCompChoice();
    console.log("Comp choice= ", compChoice);
    if(userChoice==compChoice){
        console.log("Game Draw :)");
        msg.innerHTML="Game Draw";
        msg.style.backgroundColor="rgb(51, 68, 68)";
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=compChoice=="rock"?true:false;
        }else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    

}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})