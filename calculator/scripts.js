function createAll() {
    createRows()
    createButtons()
}

function createRows(){
    const container = document.querySelector(".container");

    for (let i = 0; i < 6; i++) {
        const fila = document.createElement("div");
        fila.classList.add("fila");
        fila.id = `f${i}`;
        container.appendChild(fila)
    }
    setDisplay()
}

function setDisplay() {
    const display = document.querySelector("#f0");
    console.log(display)
    const screen = document.createElement("div");
    screen.classList.add("screen")
    screen.textContent = "";
    display.appendChild(screen)
}

function createButtons(){
    const filas = document.querySelectorAll(".fila");

    filas.forEach((fila) => {
        if (["f2","f3","f4"].includes(fila.id)) {
            for (let i = 0; i < 3; i++) {
                const boton = document.createElement("div");
                boton.classList.add("boton");
                boton.style.background = "rgb(139, 230, 169)"
                boton.classList.add("number");
                fila.appendChild(boton)
            } 
            const boton = document.createElement("div");
            boton.classList.add("boton");
            boton.classList.add("operator")
            boton.style.background = "rgb(0, 219, 73)"
            fila.appendChild(boton)
        }

        if (["f1"].includes(fila.id)) {
            for (let i = 0; i < 1; i++) {
                const boton = document.createElement("div");
                boton.classList.add("boton");
                boton.classList.add("clear");
                boton.textContent = "CLEAR"
                fila.appendChild(boton)
            } 
        }

        if (["f5"].includes(fila.id)) {
            const boton0 = document.createElement("div");
            boton0.classList.add("boton");
            boton0.classList.add("number");
            boton0.style.background = "rgb(139, 230, 169)"
            boton0.textContent = "0"
            fila.appendChild(boton0)


            const boton = document.createElement("div");
            boton.classList.add("boton");
            boton.classList.add("equal");
            boton.textContent = "="
            fila.appendChild(boton)

            const boton1 = document.createElement("div");
            boton1.classList.add("boton");
            boton1.classList.add("operator");
            fila.appendChild(boton1)
        }
    
        const numbers = document.querySelectorAll(".number");
        numbers.forEach((value, index) => {
            if ((index + 1) < 10) {
            value.textContent = index + 1;
            }
            else {
                value.textContent = 0;  
            }
        })

        let operator_symbols = ["+", "-", "x", "/"]
        const operators = document.querySelectorAll(".operator");
        operators.forEach((operator) => {
            op = operator_symbols.pop()
            operator.textContent = op
            switch (op) {
                case "-":
                    operator.id = "resta"
                    break
                case "+":
                    operator.id = "suma"
                    break
                case "x":
                    operator.id = "mult"
                    break
                case "/":
                    operator.id = "divi"
                    break
            }
            
        })

    })  
    setNumberListeners()
    setOperatorListeners()
    setClearListener()
    setDarkenButtons()
    setEqualListener()
}

function setDarkenButtons() {
    const botones = document.querySelectorAll(".boton");
    botones.forEach((boton) => {
        boton.addEventListener("mouseover", darkenButton);
    })
    botones.forEach((boton) => {
        boton.addEventListener("mouseout", resetButton);
    })
}

function setNumberListeners(){
    const numeros = document.querySelectorAll(".number");
    numeros.forEach((numero) => {
        numero.addEventListener("click", loadNumber);
    })
}

function setClearListener(){
    const numeros = document.querySelectorAll(".clear");
    numeros.forEach((numero) => {
        numero.addEventListener("click", clearDisplay);
    })
}

function setOperatorListeners(){
    const numeros = document.querySelectorAll(".operator");
    numeros.forEach((numero) => {
        numero.addEventListener("click", loadOperator);
    })
}

function setEqualListener(){
    const igual = document.querySelector(".equal");
    igual.addEventListener("click", operateOnDisplay);
}

function loadNumber(e){
    const screen = document.querySelector(".screen")
    if (screen.textContent.length <17){
        screen.textContent += e.target.textContent
    }
}

function clearDisplay(e){
    const screen = document.querySelector(".screen")
    screen.textContent = ""
}

function loadOperator(e){
    const screen = document.querySelector(".screen")
    if (screen.textContent.length <14){
        screen.textContent += " " + e.target.textContent + " "
    }
}

function operateOnDisplay(){
    const screen = document.querySelector(".screen")
    screen.textContent = operate()
}

function getColor(e){
    let rgb = e.target.style.background
    let items = rgb.replace("rgb(", "").replace(")", "");
    let nuevo = items.split(", ")
    return nuevo;
}

function darkenButton(e) {
    nuevos = getColor(e)
    let newR = parseInt(nuevos[0]) - 70
    let newG = parseInt(nuevos[1]) - 70
    let newB = parseInt(nuevos[2]) - 70
    e.target.style.background = `rgb(${newR}, ${newG}, ${newB})`;
    
}

function resetButton(e) {
    if (e.target.className != "boton number"){
        e.target.style.background = "rgb(0, 219, 73)";
    }
    else if (e.target.className == "boton number"){
        e.target.style.background = "rgb(139, 230, 169)";
    }
}

function operate() {
    const screen = document.querySelector(".screen")
    desc = screen.textContent.split(" ")
    while (desc.length > 2) {
        op1 = desc.shift()
        oper = desc.shift()
        op2 = desc.shift()
        result = calculate(op1, op2, oper)
        if (result == "Can't divide by 0") {break}
        desc.unshift(result)
    }
        
    return `${result}`
}

function calculate(op1, op2, oper) {
    switch (oper) {
        case "+":
           return (parseInt(op1)+parseInt(op2))
        case "-":
           return (parseInt(op1)-parseInt(op2))
        case "/":
            if (op2 == "0") {return "Can't divide by 0"}
           return (parseInt(op1)/parseInt(op2))
        case "x":
           return (parseInt(op1)*parseInt(op2))
    }
}


createAll()




