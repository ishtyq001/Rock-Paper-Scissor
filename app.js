let userscore=0;
let compscore=0;

const resetButton = document.querySelector("#reset-btn");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const genCompChoice = () => {
  //rock, paper, scissor
  const options=["rock","paper","scissor"]
  //random index
  const randomIndex= Math.floor(Math.random()*3);
  return options[randomIndex];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText="Game was Draw"
  msg.style.backgroundColor= "#081b31";
}; 

const resetGame = () => {
  userscore = 0;
  compscore = 0;
  userScorePara.innerText = userscore;
  compScorePara.innerText = compscore;
  msg.innerText = "Play your move";  /* Reset the message */
  msg.style.backgroundColor = "#003566"; /* Reset the background color of the message */
};

resetButton.addEventListener("click", resetGame);

const showWinner= (userWin,userChoice,compchoice) => {
    if(userWin){
      userscore++;
      userScorePara.innerText=userscore;
      msg.innerText=`You Win!! Your ${userChoice} beats ${compchoice}`;
      msg.style.backgroundColor="#127026";
    }
    else{
      compscore++;
      compScorePara.innerText=compscore;
      msg.innerText=`You Lose. ${compchoice} beats your ${userChoice}`;
      msg.style.backgroundColor="#e84855";
    }
};



const playGame = (userChoice) => {
  console.log("user choice = ",userChoice);
  //generate computer choice
  //JS me random string generate ni kr skte
  //lekin math.random se ek random number generate kr skte hain
  //jo ki array ka index banega
  //jisse options select honge
 const compchoice= genCompChoice();
 console.log("comp choice = ",compchoice);

 if(userChoice==compchoice){
  //drawgame
  drawGame();
 }
 else{
  let userWin= true;
  if(userChoice=="rock"){
    userWin= compchoice==="paper"? false:true;
  }
  else if (userChoice=="paper"){
    userWin= compchoice==="rock"? true:false;

  }
  else{
    userWin= compchoice==="rock"? false:true;
  }
  showWinner(userWin, userChoice,compchoice);
 }
}

choices.forEach((choice) =>{
  //to track the choice which has been clicked
  choice.addEventListener("click", () => {
      const userChoice=choice.getAttribute("id");

      playGame(userChoice);
  });
});