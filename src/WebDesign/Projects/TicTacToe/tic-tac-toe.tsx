

import './tic-tac-toe.css'

import FallingCode from '../../../Components/FallingCode/falling_code'


import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'

import '../../../index.css'
import CircleButton from '../../../Components/circle_button'
import BreakdownPart from '../../../Components/breakdown_part'
import CodeWindow from '../../../Components/code_window'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TicTacToeProject />
  </React.StrictMode>,
)


function TicTacToeProject() {
  const htmlCodeWindowRef = useRef<HTMLDialogElement>(null)
  const cssCodeWindowRef = useRef<HTMLDialogElement>(null)
  const jsCodeWindowRef = useRef<HTMLDialogElement>(null)

  const htmlCode: string = `<!DOCTYPE html>
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
        <script src="./ticE.js"></script>
    </body>
</html>`
    const cssCode: string = `.board {
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
  `
    const jsCode: string = `//Get Cells and Turn Display
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
}`
    



  return (
  
      <>
        <div id="welcome" className="selectedDiv">
          <FallingCode/>
          <h1 className="title">Tic Tac Toe Project</h1>
          <div className="section" id="overview">
                  <h2>Project Overview</h2>
                  <p>Create a simple website with the ability to play Tic Tac Toe. Create an algorithm to check if a player has won the game, and logic for when the game ends</p>
                  <p>Heres an examle website: <a href={"./Examples/TicTacToe.html"} target="_blank">Tic Tac Toe Example</a></p>
              </div>
              <div className="sections">
                  <div className="section html">
                      <h2>HTML Breakdown</h2>
                      <div className='Breakdown'>
                          <BreakdownPart text={<p>Create Blank HTML Website</p>} snippet={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./TodoE.css" />
    <title>Todo List Example</title>
  </head>
  <body>
  </body>
  </html>`}/>
                          <BreakdownPart text={<p>Import css stylesheet <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link">link</a> in <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head">head</a></p>} snippet={`<link rel="stylesheet" href="./ticE.css" />`}/>
                          <BreakdownPart text={<p>Create a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" target='_blank'>title</a> to display current turn</p>} snippet={`<h1 class="turn-display">Current Turn: </h1>`}/>
                          <BreakdownPart text={<p>Create <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div" target='_blank'>div</a> holding 9 cells</p>} snippet={`<div class="board">
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
</div>`}/>
                        <BreakdownPart text={<p>Import <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#basic_usage" target='_blank'>script</a> at end of body</p>} snippet={`<script src="./ticE.js"></script>`}/>

                          
                      </div>
                      <br />
                      <button onClick={() => {
                        

                        htmlCodeWindowRef.current!.showModal()

                        }}>View HTML Code</button>
                      
                  </div>
                  <div className="section css">
                      <h2>CSS Breakdown</h2>
                      <div className='Breakdown'>
                          <BreakdownPart text={<p>Style the board as a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid" target='_blank'>grid</a></p>} snippet={`.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid black;
}`} type='css'/>
                          <BreakdownPart text={<p>Style the cells as display <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout" target='_blank'>flex</a></p>} snippet={`.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: 50px;
  cursor: pointer;
}`} type='css'/>
                      </div>
                      <br />
                      <button onClick={() => {
                        

                        cssCodeWindowRef.current!.showModal()

                        }}>View CSS Code</button>
                          
                      
                  </div>
                  <div className="section js">
                      <h2>JavaScript Breakdown</h2>
                      <div className='Breakdown'>
                          <BreakdownPart text={<p>Create variables to hold current turn, all the cells using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll" target='_blank'>querySelectorAll</a>, and the turn display text using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target='_blank'>querySelector</a> </p>} snippet={`const cells = document.querySelectorAll('.cell');
const turnDisplay = document.querySelector('.turn-display');
let turn = "x";`} type='js'/>
                      <BreakdownPart text={<p>Add <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_value_of_this_within_the_handler" target='_blank'>click event listener</a> to each cell</p>} snippet={`cells.forEach(cell => {
  cell.addEventListener('click', e => {
    //Code when cell is clicked goes here
  })
})`} type='js'/>
                          <BreakdownPart text={<p>Get the cell that was clicked and it's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id" target='_blank'>id</a> </p>} snippet={`const cell = e.target;
const cellIndex = cell.id;`} type='js'/>
                          <BreakdownPart text={<p>Check if cell is empty, get current turn, fill cell with current turn, then change current turn and display new turn</p>} snippet={`//If the cell already has an x or o, return
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
turnDisplay.textContent = "Current Turn: " + turn.toUpperCase();`} type='js'/>
                          <BreakdownPart text={<p>Create algorithm using a stack of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" target='_blank'>if statements</a> to check if a player has won</p>} snippet={`function checkWin(){
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
}`} type='js'/>
                          <BreakdownPart text={<p>Create a delay using <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout" target='_blank'>setTimeout</a> to allow for the final cell to show before the winner is decided</p>} snippet={`setTimeout(() => {
  //Code for checking for a win and tie goes here
}, 100);`} type='js'/>
                          <BreakdownPart text={<p>Check if player has won using created function, display win to user, and reset the board </p>} snippet={`//Check for a win
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
}`} type='js'/>
                          <BreakdownPart text={<p>Create a function to check for a tie by checking if all cells are filled</p>} snippet={`function checkTie(){
  //Check if there are any empty cells
  let emptyCells = 0;
  cells.forEach(cell => {
      if(!cell.classList.contains("x") && !cell.classList.contains("o")) emptyCells++;
  })
  //If there are no empty cells, return true
  if(emptyCells === 0) return true;
  //If there are empty cells, return false
  return false;
}`} type='js'/>
                          <BreakdownPart text={<p>Check for a tie, display tie to user, and reset the board</p>} snippet={`//Check for a tie
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
}`} type='js'/>
                      </div>
                      <br />
                      <button onClick={() => {
                        

                        jsCodeWindowRef.current!.showModal()

                        }}>View JS Code</button>
                  </div>

                
              </div>
          
              <div className='BackCenter'>
                <CircleButton text='Back' onClick={() => {window.location.href = "/ultimate-programming-guide/WebDesign/Projects/"}}/>
              </div>
                  
        </div>
        <CodeWindow dialogRef={htmlCodeWindowRef} CodeType="HTML" code={htmlCode}/>
        <CodeWindow dialogRef={cssCodeWindowRef} CodeType="CSS" code={cssCode}/>
        <CodeWindow dialogRef={jsCodeWindowRef} CodeType="JS" code={jsCode}/>
      </>
       
    
  )
}

export default TicTacToeProject
