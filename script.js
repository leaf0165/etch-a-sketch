const container = document.querySelector(".container");

//create 16x16 grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < 16; j++) {
        tile = document.createElement("div");
        tile.setAttribute("class", "tile");
        row.appendChild(tile);
    }

    container.appendChild(row);
}

const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => {
    tile.addEventListener("mouseenter", () => {
        tile.classList.toggle("hover");
    });

    tile.addEventListener("mouseleave", () => {
        tile.classList.toggle("hover");
    })
});