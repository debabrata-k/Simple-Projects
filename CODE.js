let cells = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");

let turnX = true;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (turnX && cell.innerText === "") {
            cell.innerText = "X";
            turnX = false;
        } else if (!turnX && cell.innerText === "") {
            cell.innerText = "O";
            turnX = true;}
        checkWinner();
        });
   });
    
   const checkWinner = () => {
     for (let combo of winningCombos) { 
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText)
        {
            alert(`${cells[a].innerText} wins!`);
            resetGame();
            return;
        }
   }
   }        

