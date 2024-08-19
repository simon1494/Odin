function placeMainContainer () {
    const body = document.querySelector("body");
     const container = document.createElement("div");
    container.classList.add("cont")
    container.style.height = "50rem";
    container.style.width =  "40rem";
    container.style.background = "rgb(245, 222, 160)"
    body.appendChild(container)    
}

function placeRowContainers () {
    const cont = document.querySelector(".cont");
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("div");
        row.classList.add("row")
        row.style.height = "auto";
        row.style.width =  "auto";
        row.style.background = "rgb(100, 100, 160)"
        cont.appendChild(row)
}
}

placeMainContainer()
placeRowContainers()