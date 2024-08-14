function setListeners () {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
    column.addEventListener("mouseover", changeColor);
    })

    const btn_reset = document.querySelector(".reset");
    btn_reset.addEventListener("click", resetGrid);
}

function createGrid(parent,x=4){
    const father = document.createElement("div");
    father.classList.add("grid")
    parent.appendChild(father);
    let sqr = x
    let size = 700
    let tam = size/sqr
    for (let i = 0; i < sqr; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.classList.add("hovered");
        row.style.height = '${tam}px';
        father.appendChild(row);
        for (let j = 0; j < sqr; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.style.height = `${tam}px`;
            column.style.width = `${tam}px`;
            column.style.boxSizing = "border-box";
            row.appendChild(column);
        };
    }
    setListeners()
}

function createDiv(parent) {
    const DIV = document.createElement("div");
    DIV.classList.add("cockpit");
    DIV.style.height = "100px";
    DIV.style.display = "flex";
    DIV.style.justifyContent = "center";
    DIV.style.alignItems = "center";
    parent.appendChild(DIV);
}

function createButton(parent,texto,cls) {
    const btn = document.createElement("button");
    btn.classList.add(cls)
    btn.textContent = texto;
    btn.style.alignItems= "center";
    btn.style.height= "30px";
    btn.style.margin = "20px"
    parent.appendChild(btn);
}

function createForm(parent,texto) {
    const form = document.createElement("form");
    form.style.display = "flex";
    form.style.justifyContent = "center";
    form.style.alignItems = "center";
    const label = document.createElement("label");
    label.textContent = texto;
    label.style.color = "white"
    label.style.margin ="10px"
    const input = document.createElement("input");
    input.id = "size";
    form.appendChild(label)
    form.appendChild(input)
    form.style.alignItems= "center";
    
    form.style.height= "30px";
    form.style.margin = "20px";
    parent.appendChild(form);
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function resetGrid(){
    let number = prompt("algo");
    document.querySelector(".grid").remove();
    createGrid(container,number)
}

const body = document.querySelector("body");
const container = document.querySelector(".container");

createDiv(body);

const cockpit = document.querySelector(".cockpit");

createButton(cockpit, "Resetear grilla", "reset");
createGrid(container);


function changeColor(e) {
    e.target.style.background = "white";
}


