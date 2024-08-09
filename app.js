//Setting user and computer score to 0
let userScore=0;
let compScore=0;

//Selecting the class .choice
const choices=document.querySelectorAll(".choice");
const btn= document.querySelector("#message");

const userScorePara=document.querySelector("#your-score")
const compScorePara=document.querySelector("#comp-score")



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const Idx=Math.floor(Math.random()*3);
    return options[Idx];
}


const drawGame=()=>{
    
    btn.innerText="Game was draw. Play again";
    btn.style.backgroundColor="rgb(18, 12, 74)";


}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        btn.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        btn.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        btn.innerText=`You lost!  ${compChoice} beats your  ${userChoice}`;
        btn.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
        
        //Generating Computer Choice
        const compChoice=genCompChoice();

        if (userChoice===compChoice){
            //Draw function
            drawGame();
        }else{
            let userWin = true;
            if(userChoice==="rock"){
                //First case
                //Means if comp generates scissors or paper then
                userWin=compChoice==="paper"? false : true;
            }else if(userChoice==="paper"){
                //Second case
                //Means if comp generates rock or scissors then
                userWin=compChoice==="scissors" ? false: true;
            }else{
                //Third case
                //Means if comp generates rock or paper then
                userWin=compChoice==="rock" ? false: true; 
            }

            showWinner(userWin,userChoice,compChoice);
        }

}

//Selecting the class .options and id for adding Event Listener

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});