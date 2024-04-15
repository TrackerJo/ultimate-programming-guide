//Get Cells and Turn Display
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
                alert(`${winner.toUpperCase()} wins!`);
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
}
