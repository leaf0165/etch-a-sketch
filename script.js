const container = document.querySelector(".container");

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