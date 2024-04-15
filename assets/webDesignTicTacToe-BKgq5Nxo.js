import"./modulepreload-polyfill-B5Qt9EMX.js";import{c as a,j as e,R as r,r as t,F as o}from"./index-KM1SXsLI.js";import{C as d}from"./circle_button-C5JsPY1w.js";import{B as s,C as l}from"./breakdown_part-D9GugBl9.js";a.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(h,{})}));function h(){const c=t.useRef(null),i=t.useRef(null),n=t.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:"welcome",className:"selectedDiv",children:[e.jsx(o,{}),e.jsx("h1",{className:"title",children:"Tic Tac Toe Project"}),e.jsxs("div",{className:"section",id:"overview",children:[e.jsx("h2",{children:"Project Overview"}),e.jsx("p",{children:"Create a simple website with the ability to play Tic Tac Toe. Create an algorithm to check if a player has won the game, and logic for when the game ends"}),e.jsxs("p",{children:["Heres an examle website: ",e.jsx("a",{href:"./Examples/TicTacToe.html",target:"_blank",children:"Tic Tac Toe Example"})]})]}),e.jsxs("div",{className:"sections",children:[e.jsxs("div",{className:"section html",children:[e.jsx("h2",{children:"HTML Breakdown"}),e.jsxs("div",{className:"Breakdown",children:[e.jsx(s,{text:e.jsx("p",{children:"Create Blank HTML Website"}),snippet:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./TodoE.css" />
    <title>Todo List Example</title>
  </head>
  <body>
  </body>
  </html>`}),e.jsx(s,{text:e.jsxs("p",{children:["Import css stylesheet ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",children:"link"})," in ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head",children:"head"})]}),snippet:'<link rel="stylesheet" href="./ticE.css" />'}),e.jsx(s,{text:e.jsxs("p",{children:["Create a ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",target:"_blank",children:"title"})," to display current turn"]}),snippet:'<h1 class="turn-display">Current Turn: </h1>'}),e.jsx(s,{text:e.jsxs("p",{children:["Create ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div",target:"_blank",children:"div"})," holding 9 cells"]}),snippet:`<div class="board">
  <div class="cell" id="1">

  </div>
  <div class="cell" id="2">

  </div> 
  <div class="cell" id="3">

  </div>

  <div class="cell" id="4">

  </div>
  <div class="cell" id="5">

  </div> 
  <div class="cell" id="6">

  </div>

  <div class="cell" id="7">

  </div>
  <div class="cell" id="8">

  </div> 
  <div class="cell" id="9">

  </div>
</div>`}),e.jsx(s,{text:e.jsxs("p",{children:["Import ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#basic_usage",target:"_blank",children:"script"})," at end of body"]}),snippet:'<script src="./ticE.js"><\/script>'})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{c.current.showModal()},children:"View HTML Code"})]}),e.jsxs("div",{className:"section css",children:[e.jsx("h2",{children:"CSS Breakdown"}),e.jsxs("div",{className:"Breakdown",children:[e.jsx(s,{text:e.jsxs("p",{children:["Style the board as a ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid",target:"_blank",children:"grid"})]}),snippet:`.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid black;
}`,type:"css"}),e.jsx(s,{text:e.jsxs("p",{children:["Style the cells as display ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",target:"_blank",children:"flex"})]}),snippet:`.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: 50px;
  cursor: pointer;
}`,type:"css"})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{i.current.showModal()},children:"View CSS Code"})]}),e.jsxs("div",{className:"section js",children:[e.jsx("h2",{children:"JavaScript Breakdown"}),e.jsxs("div",{className:"Breakdown",children:[e.jsx(s,{text:e.jsxs("p",{children:["Create variables to hold current turn, all the cells using ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll",target:"_blank",children:"querySelectorAll"}),", and the turn display text using ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",target:"_blank",children:"querySelector"})," "]}),snippet:`const cells = document.querySelectorAll('.cell');
const turnDisplay = document.querySelector('.turn-display');
let turn = "x";`,type:"js"}),e.jsx(s,{text:e.jsxs("p",{children:["Add ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_value_of_this_within_the_handler",target:"_blank",children:"click event listener"})," to each cell"]}),snippet:`cells.forEach(cell => {
  cell.addEventListener('click', e => {
    //Code when cell is clicked goes here
  })
})`,type:"js"}),e.jsx(s,{text:e.jsxs("p",{children:["Get the cell that was clicked and it's ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",target:"_blank",children:"id"})," "]}),snippet:`const cell = e.target;
const cellIndex = cell.id;`,type:"js"}),e.jsx(s,{text:e.jsx("p",{children:"Check if cell is empty, get current turn, fill cell with current turn, then change current turn and display new turn"}),snippet:`//If the cell already has an x or o, return
if(cell.classList.contains("x") || cell.classList.contains("o")) return;
//Add the current turn to the cell
cell.classList.add(turn);
//Set the cell's text to the current turn
cell.textContent = turn.toUpperCase();
//Switch the turn
if (turn == "x") {
  turn = "o";
} else {
  turn = "x";
}
//Set the turn display to the current turn
turnDisplay.textContent = "Current Turn: " + turn.toUpperCase();`,type:"js"}),e.jsx(s,{text:e.jsxs("p",{children:["Create algorithm using a stack of ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else",target:"_blank",children:"if statements"})," to check if a player has won"]}),snippet:`function checkWin(){
  //Check for horizontal X wins
  if(cells[0].classList.contains("x") && cells[1].classList.contains("x") && cells[2].classList.contains("x")) return "x";
  if(cells[3].classList.contains("x") && cells[4].classList.contains("x") && cells[5].classList.contains("x")) return "x";
  if(cells[6].classList.contains("x") && cells[7].classList.contains("x") && cells[8].classList.contains("x")) return "x";

  //Check for vertical X wins
  if(cells[0].classList.contains("x") && cells[3].classList.contains("x") && cells[6].classList.contains("x")) return "x";
  if(cells[1].classList.contains("x") && cells[4].classList.contains("x") && cells[7].classList.contains("x")) return "x";
  if(cells[2].classList.contains("x") && cells[5].classList.contains("x") && cells[8].classList.contains("x")) return "x";

  //Check for diagonal X wins
  if(cells[0].classList.contains("x") && cells[4].classList.contains("x") && cells[8].classList.contains("x")) return "x";
  if(cells[2].classList.contains("x") && cells[4].classList.contains("x") && cells[6].classList.contains("x")) return "x";

  //Check for horizontal O wins
  if(cells[0].classList.contains("o") && cells[1].classList.contains("o") && cells[2].classList.contains("o")) return "o";
  if(cells[3].classList.contains("o") && cells[4].classList.contains("o") && cells[5].classList.contains("o")) return "o";
  if(cells[6].classList.contains("o") && cells[7].classList.contains("o") && cells[8].classList.contains("o")) return "o";

  //Check for vertical O wins
  if(cells[0].classList.contains("o") && cells[3].classList.contains("o") && cells[6].classList.contains("o")) return "o";
  if(cells[1].classList.contains("o") && cells[4].classList.contains("o") && cells[7].classList.contains("o")) return "o";
  if(cells[2].classList.contains("o") && cells[5].classList.contains("o") && cells[8].classList.contains("o")) return "o";

  //Check for diagonal O wins
  if(cells[0].classList.contains("o") && cells[4].classList.contains("o") && cells[8].classList.contains("o")) return "o";
  if(cells[2].classList.contains("o") && cells[4].classList.contains("o") && cells[6].classList.contains("o")) return "o";

  //If there are no wins, return null
  return null;
}`,type:"js"}),e.jsx(s,{text:e.jsxs("p",{children:["Create a delay using ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout",target:"_blank",children:"setTimeout"})," to allow for the final cell to show before the winner is decided"]}),snippet:`setTimeout(() => {
  //Code for checking for a win and tie goes here
}, 100);`,type:"js"}),e.jsx(s,{text:e.jsx("p",{children:"Check if player has won using created function, display win to user, and reset the board "}),snippet:`//Check for a win
const winner = checkWin();
//If there is a winner, alert the winner
if(winner){
  alert(\`\${winner.toUpperCase()} wins!\`);
  //Reset the board
  cells.forEach(cell => {
      cell.classList.remove("x");
      cell.classList.remove("o");
      cell.textContent = "";
  })
}`,type:"js"}),e.jsx(s,{text:e.jsx("p",{children:"Create a function to check for a tie by checking if all cells are filled"}),snippet:`function checkTie(){
  //Check if there are any empty cells
  let emptyCells = 0;
  cells.forEach(cell => {
      if(!cell.classList.contains("x") && !cell.classList.contains("o")) emptyCells++;
  })
  //If there are no empty cells, return true
  if(emptyCells === 0) return true;
  //If there are empty cells, return false
  return false;
}`,type:"js"}),e.jsx(s,{text:e.jsx("p",{children:"Check for a tie, display tie to user, and reset the board"}),snippet:`//Check for a tie
const tie = checkTie();
//If there is a tie, alert the tie
if(tie){
  alert("Tie!");
  //Reset the board
  cells.forEach(cell => {
      cell.classList.remove("x");
      cell.classList.remove("o");
      cell.textContent = "";
  })
}`,type:"js"})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{n.current.showModal()},children:"View JS Code"})]})]}),e.jsx("div",{className:"BackCenter",children:e.jsx(d,{text:"Back",onClick:()=>{window.location.href="/WebDesign/Projects/"}})})]}),e.jsx(l,{dialogRef:c,CodeType:"HTML",code:`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tic Tac Toe Example</title>
        <link rel="stylesheet" href="./ticE.css" />
    </head>
    <body>
        <h1 class="turn-display">Current Turn: </h1>
        <div class="board">
            <div class="cell" id="1">

            </div>
            <div class="cell" id="2">
                
            </div> 
            <div class="cell" id="3">

            </div>
        
            <div class="cell" id="4">

            </div>
            <div class="cell" id="5">
                
            </div> 
            <div class="cell" id="6">

            </div>
        
            <div class="cell" id="7">

            </div>
            <div class="cell" id="8">
                
            </div> 
            <div class="cell" id="9">
                
            </div>
        </div>
        <script src="./ticE.js"><\/script>
    </body>
</html>`}),e.jsx(l,{dialogRef:i,CodeType:"CSS",code:`.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border: 1px solid black;
}

.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 50px;
    cursor: pointer;
}
  `}),e.jsx(l,{dialogRef:n,CodeType:"JS",code:`//Get Cells and Turn Display
const cells = document.querySelectorAll('.cell');
const turnDisplay = document.querySelector('.turn-display');
//Store the current turn
let turn = "x";
//Set the turn display to the current turn
turnDisplay.textContent = "Current Turn: " + turn.toUpperCase();

//Loop through each cell
cells.forEach(cell => {
    //Add an event listener to each cell
    cell.addEventListener('click', e => {
        //Get the cell that was clicked and its index
        const cell = e.target;
        const cellIndex = cell.id;

        console.log(cellIndex);
        //If the cell already has an x or o, return
        if(cell.classList.contains("x") || cell.classList.contains("o")) return;
        //Add the current turn to the cell
        cell.classList.add(turn);
        //Set the cell's text to the current turn
        cell.textContent = turn.toUpperCase();
        //Switch the turn
        if (turn === "x") {
            turn = "o";
        } else {
            turn = "x";
        }
        //Set the turn display to the current turn
        turnDisplay.textContent = "Current Turn: " + turn.toUpperCase();
        setTimeout(() => {

            //Check for a win
            const winner = checkWin();
            //If there is a winner, alert the winner
            if(winner){
                alert(\`\${winner.toUpperCase()} wins!\`);
                //Reset the board
                cells.forEach(cell => {
                    cell.classList.remove("x");
                    cell.classList.remove("o");
                    cell.textContent = "";
                })
            }
            //Check for a tie
            const tie = checkTie();
            //If there is a tie, alert the tie
            if(tie){
                alert("Tie!");
                //Reset the board
                cells.forEach(cell => {
                    cell.classList.remove("x");
                    cell.classList.remove("o");
                    cell.textContent = "";
                })
            }
        }, 100);
        
    })
})

function checkWin(){
    //Check for horizontal X wins
    if(cells[0].classList.contains("x") && cells[1].classList.contains("x") && cells[2].classList.contains("x")) return "x";
    if(cells[3].classList.contains("x") && cells[4].classList.contains("x") && cells[5].classList.contains("x")) return "x";
    if(cells[6].classList.contains("x") && cells[7].classList.contains("x") && cells[8].classList.contains("x")) return "x";

    //Check for vertical X wins
    if(cells[0].classList.contains("x") && cells[3].classList.contains("x") && cells[6].classList.contains("x")) return "x";
    if(cells[1].classList.contains("x") && cells[4].classList.contains("x") && cells[7].classList.contains("x")) return "x";
    if(cells[2].classList.contains("x") && cells[5].classList.contains("x") && cells[8].classList.contains("x")) return "x";

    //Check for diagonal X wins
    if(cells[0].classList.contains("x") && cells[4].classList.contains("x") && cells[8].classList.contains("x")) return "x";
    if(cells[2].classList.contains("x") && cells[4].classList.contains("x") && cells[6].classList.contains("x")) return "x";

    //Check for horizontal O wins
    if(cells[0].classList.contains("o") && cells[1].classList.contains("o") && cells[2].classList.contains("o")) return "o";
    if(cells[3].classList.contains("o") && cells[4].classList.contains("o") && cells[5].classList.contains("o")) return "o";
    if(cells[6].classList.contains("o") && cells[7].classList.contains("o") && cells[8].classList.contains("o")) return "o";

    //Check for vertical O wins
    if(cells[0].classList.contains("o") && cells[3].classList.contains("o") && cells[6].classList.contains("o")) return "o";
    if(cells[1].classList.contains("o") && cells[4].classList.contains("o") && cells[7].classList.contains("o")) return "o";
    if(cells[2].classList.contains("o") && cells[5].classList.contains("o") && cells[8].classList.contains("o")) return "o";

    //Check for diagonal O wins
    if(cells[0].classList.contains("o") && cells[4].classList.contains("o") && cells[8].classList.contains("o")) return "o";
    if(cells[2].classList.contains("o") && cells[4].classList.contains("o") && cells[6].classList.contains("o")) return "o";

    //If there are no wins, return null
    return null;
}

function checkTie(){
    //Check if there are any empty cells
    let emptyCells = 0;
    cells.forEach(cell => {
        if(!cell.classList.contains("x") && !cell.classList.contains("o")) emptyCells++;
    })
    //If there are no empty cells, return true
    if(emptyCells === 0) return true;
    //If there are empty cells, return false
    return false;
}`})]})}
