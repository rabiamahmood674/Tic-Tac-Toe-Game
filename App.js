console.log("Welcome to tic tac toe")
let turn = "X"
let gameOver = false;

//  Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2,2,5,0],
        [3, 4, 5,2,15,0],
        [6, 7, 8,2,25,0],
        [0, 3, 6,5,1,90],
        [1, 4, 7,15,0,90],
        [2, 5, 8,25,0,90],
        [0, 4, 8,6,6,45],
        [2, 4, 6,25,5,135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            gameOver = true
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
    document.querySelector(".line").style.width="100%"
    document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
}
    })
}



// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})

var reset=document.getElementById("reset")
//  add onclick listener to rest button 
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0%"
        gameOver = false
        document.querySelector('.info').innerText = "Turn for X"
        document.querySelector(".line").style.width="0"
    })
})