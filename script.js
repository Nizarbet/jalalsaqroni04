const gridSize = 5;
const numBones = 5;
const bones = new Set();
let gameOver = false;

// Initialize the game grid
function createGrid() {
    const gameContainer = document.getElementById("game");
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const button = document.createElement("button");
            button.id = `cell_${row}_${col}`;
            button.addEventListener("click", () => revealCell(row, col));
            gameContainer.appendChild(button);
        }
    }
}

// Place bones randomly in the grid
function placeBones() {
    while (bones.size < numBones) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        bones.add(`${row}_${col}`);
    }
}

// Reveal the cell when clicked
function revealCell(row, col) {
    if (gameOver) return;

    const button = document.getElementById(`cell_${row}_${col}`);
    if (bones.has(`${row}_${col}`)) {
        button.textContent = "💀";
        button.classList.add("bone");
        document.getElementById("message").textContent = "You hit a bone! Game Over.  set new bet and reload this page!";
        gameOver = true;
    } else {
        button.textContent = "🐔";
        button.classList.add("chicken");
    }
}

// Initialize the game
createGrid();
placeBones();
