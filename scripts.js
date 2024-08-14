const GRID = 4
const CONTAINER_SIZE = 600

const container = document.querySelector(".container");


const tam = CONTAINER_SIZE / GRID; 

for (let i = 0; i < GRID; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("hovered");
    row.style.height = '${tam}px';
    container.appendChild(row);
    for (let j = 0; j < GRID; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.style.height = `${tam}px`;
        column.style.width = `${tam}px`;
        column.style.boxSizing = "border-box";
        row.appendChild(column);
    };
}


