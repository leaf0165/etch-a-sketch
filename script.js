const container = document.querySelector(".container");
let opacityTable = []

function resizeGrid(size) {
    clearGrid();

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        opacityTable[i] = [];
    
        for (let j = 0; j < size; j++) {
            tile = document.createElement("div");
            tile.setAttribute("class", "tile");
            opacityTable[i][j] = 0;

            tile.addEventListener("click", (e) => {
                opacityTable[i][j] += 0.1;
                const opacity = opacityTable[i][j];
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
            });

            row.appendChild(tile);
        }
    
        container.appendChild(row);
    }

    setTileHover();
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    opacityTable = []
}

function setTileHover() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
        tile.addEventListener("mouseenter", () => {
            tile.classList.toggle("hover");
        });

        tile.addEventListener("mouseleave", () => {
            tile.classList.toggle("hover");
        });
    });
}

const resizeGridButton = document.querySelector(".resize-grid");
resizeGridButton.addEventListener("click", () => {
    size = Number(prompt("Enter a whole number between 1 and 100"));

    if (size < 1) {
        size = 1;
    } else if (size > 100) {
        size = 100;
    } else if (String(size) === "NaN") {
        size = 16;
    } else {
        size = Math.round(size);
    }

    resizeGrid(size);
});

const clearGridButton = document.querySelector(".clear-grid");
clearGridButton.addEventListener("click", () => {
    resizeGrid(opacityTable.length);
})

//start page with a 16x16 grid
resizeGrid(16);