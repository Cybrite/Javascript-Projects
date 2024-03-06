let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgCon = document.querySelector(".msgcontain");
let msg = document.querySelector("#msg");

let turnO = true; //p1,p2
let count=0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCon.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){ //p1
            box.innerText = "O";
            turnO = false;
        }else{ //p2
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }

    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

const gameDraw = () => {
    msg.innerText = "Game is a Draw!"
    msgCon.classList.remove("hide");
    disableBoxes();
}


const showWinner = (winner) => {
    msg.innerText =`Congratulations , Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;
    

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
    }
  }
};

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);