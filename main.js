//set the letter for each player
//make sure the letter goes into right cell
//make a loop that looks to see if it a win or tie
//
//create a rule that checks for valid moves

const playerOne = "X";
const playerTwo_CPU = "O";
const currentPlayer = "";
const board = [["null","null","null","null","null","null","null","null","null"]];
const gameBoard = document.getElementById("container");
const restart = document.getElementById('restart')
let winner = false;
gameBoard.addEventListener("click", yourTurn);
let playerOneName = "";
let playerTWO_CPUName = "";
let playerCount = 0;


function displayBoardGame(){
 playerOneName = document.getElementById('Player1').value.toString();
 playerTwo_CPUName = document.getElementById('Player2').value.toString();
 document.getElementById("playerOne").innerHTML = `${playerOneName} won`;
 document.getElementById("playerTWO_CPU").innerHTML = `${playerTwo_CPUName} won`;
  document.getElementById('buttons').style.display = "flex";
document.querySelectorAll(".board").forEach(a=>a.style.display = "flex");
 console.log(playerOneName);
}


function yourTurn(currentPlayer) {
    if (event.target.innerText === "") {
      playerCount++
      if(playerCount % 2 === 1){
        event.target.innerText = "X";
      }   
    }if(playerCount % 2 === 0){
        event.target.innerText = "O";
    }
  updateGameArray();
  checkRowOne();
  checkRowTwo();
  checkRowThree();
  checkRowOneVert();
  checkRowTwoVert();
  checkRowThreeVert();
  checkDiagonalOne();
  checkDiagonalTwo();
  endGame();
 console.log(board);
}

const cellList = document.querySelectorAll('.cell')

function updateGameArray(){
  for (let i = 0; i < cellList.length; i++){
    board[i]= cellList[i].innerText
  }
  
}

//Winning Situations
function checkRowOne(){    
if (board[0] === playerOne && board[1]=== playerOne && board[2] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[0] === playerTwo_CPU && board[1]=== playerTwo_CPU && board[2] === playerTwo_CPU){
  document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}

function checkRowTwo(){    
if (board[3] === playerOne && board[4]=== playerOne && board[5] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[3] === playerTwo_CPU && board[4]=== playerTwo_CPU && board[5] === playerTwo_CPU){
   document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}
  
function checkRowThree(){    
if (board[6] === playerOne && board[7]=== playerOne && board[8] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[6] === playerTwo_CPU && board[7]=== playerTwo_CPU && board[8] === playerTwo_CPU){
  document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}

function checkRowOneVert(){    
if (board[0] === playerOne && board[3]=== playerOne && board[6] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[0] === playerTwo_CPU && board[3]=== playerTwo_CPU && board[6] === playerTwo_CPU){
  document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}

function checkRowTwoVert(){    
if (board[1] === playerOne && board[4]=== playerOne && board[7] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[1] === playerTwo_CPU && board[4]=== playerTwo_CPU && board[7] === playerTwo_CPU){
  document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}

function checkRowThreeVert(){    
if (board[2] === playerOne && board[5]=== playerOne && board[8] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[2] === playerTwo_CPU && board[5]=== playerTwo_CPU && board[8] === playerTwo_CPU){
  document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}

function checkDiagonalOne(){    
if (board[0] === playerOne && board[4]=== playerOne && board[8] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[0] === playerTwo_CPU && board[4]=== playerTwo_CPU && board[8] === playerTwo_CPU){
  document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}

function checkDiagonalTwo(){    
if (board[2] === playerOne && board[4]=== playerOne && board[6] === playerOne){
  document.getElementById('playerOne').style.display = "block";
  winner = true;
  console.log('Player One Wins')
  
}if (board[2] === playerTwo_CPU && board[4]=== playerTwo_CPU && board[6] === playerTwo_CPU){
  document.getElementById('playerTWO_CPU').style.display = "block";
  winner = true;
  console.log('Player Two Wins')
}
}


function endGame(draw){
 let  roundDraw = !board.includes("");
  if(roundDraw){
   document.getElementById('draw').style.display = "block";
  }
}

function reset(){
  for (let i = 0; i< cellList.length; i++){
    board[i]= "";
    cellList[i].innerText= "";    
    console.log(board);
    document.getElementById('playerOne').style.display = "none";
    document.getElementById('playerTWO_CPU').style.display = "none";
    document.getElementById('draw').style.display = "none";
    document.getElementById('buttons').style.display = "none";
    document.querySelectorAll(".board").forEach(a=>a.style.display = "none");
  document.getElementById("Player1").value = "";
  document.getElementById("Player2").value = "";
}
}
restart.addEventListener("click", reset); 
