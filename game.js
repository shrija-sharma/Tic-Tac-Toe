let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");
let resetboard=document.querySelector("#reset-board");

let turnX=true;     //playerX or playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let scoreX = 0;
let scoreO = 0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnX==true){
        box.innerText="X";
        turnX=false;
    }
    else{
        box.innerText="O";
        turnX=true;
    }
    box.disabled=true;

    checkWinner();
    });
});


const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    updateScore(winner);
    disableboxes();
}

const updateScore = (winner) => {
    if (winner === "X") {
        scoreX++;
        document.getElementById("playerX").innerText = `Player X: ${scoreX}`;
    } else if (winner === "O") {
        scoreO++;
        document.getElementById("playerO").innerText = `Player O: ${scoreO}`;
    }
}

const checkWinner=()=>{

    for(let pattern of winpatterns){
       // console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val ==pos3val){
             //  console.log("Winner",pos1val);
                showWinner(pos1val);
                return;
            }   
        }
    }
};

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


// Function to reset leaderboard scores
const resetLeaderboard = () => {
    scoreX = 0;
    scoreO = 0;
    updateLeaderboardDisplay();
};

// Function to update the displayed scores
const updateLeaderboardDisplay = () => {
    document.getElementById("playerX").innerText = `Player X: ${scoreX}`;
    document.getElementById("playerO").innerText = `Player O: ${scoreO}`;
};

// Event listener for the reset button
resetboard.addEventListener("click", resetLeaderboard);


newBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

//Initialize leaderboard
// document.getElementById("playerX").innerText = `Player X: ${scoreX}`;
// document.getElementById("playerO").innerText = `Player O: ${scoreO}`;