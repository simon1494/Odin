function retrieveElement(selector){
    const element = document.querySelector(`${selector}`);
    return element
}

function placeMainContainer () {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("container")
    container.style.background = "rgb(245, 222, 160)"
    container.style.display= "flex",
    container.style.flex = "1";
    body.appendChild(container)    
}


function placeContainers(parent, howMany=2, clase="algo") {
   
    for (let i = 1; i < howMany+1; i++) {
        const container = document.createElement("div");
        container.classList.add(clase)
        container.id = `${clase}_${i}`;
        parent.appendChild(container);
    }
       
}

function placeForms(parent, howMany=2, clase="algo") {
   
    for (let i = 1; i < howMany+1; i++) {
        const container = document.createElement("form");
        container.action = "https://httpbin.org/post" 
        container.method = "POST"
        container.classList.add(clase)
        container.id = `${clase}_${i}`;
        parent.appendChild(container);
    }
       
}

function placeImage(parent,url) {
    const image = document.createElement("img");
    image.classList.add("imagen")
    parent.style.backgroundImage = `url(${url})` ;
}

function placeIguano() {
    const iguano = document.querySelector("#sub_banner_2");
    iguano.textContent = "IGUANO LOVE"
}

function placeForm(parent) {
    const form = document.createElement("form")
    form.id = "formulario"
    form.action = "https://httpbin.org/post" 
    form.method = "POST"
    setForm(form)
    parent.appendChild(form)
}

function createInput (parent, elemento) {
    parent.style.flexDirection = "column"
    parent.style.flex = 1
    const input = document.createElement("input")
    input.id = `${elemento}`
    input.placeholder = `Ingrese su ${elemento}`
    const inputL = document.createElement("label") 
    inputL.for = `${elemento}`
    inputL.textContent = `${elemento}`
    parent.appendChild(inputL)
    parent.appendChild(input)
}

function setForm() {
    const row1 = document.querySelector("#ingresos_1") 

    const nombre = document.querySelector("#info_nombre_1")
    const apellido = document.querySelector("#info_nombre_2")
    const email = document.querySelector("#info_contacto_1")
    const telefono = document.querySelector("#info_contacto_2")
    const pass1 = document.querySelector("#info_pass_1")
    const pass2 = document.querySelector("#info_pass_2")    

    row1.textContent = "Cree una cuenta en Iguano Love"

    createInput(nombre, "Nombre")
    createInput(apellido, "Apellido")
    createInput(email, "Email")
    createInput(telefono, "Telefono")
    createInput(pass1, "Contraseña 1")
    createInput(pass2, "Contraseña 2")
}

placeMainContainer()
placeContainers(retrieveElement(".container"), howMany=3, clase="prueba")
placeContainers(retrieveElement("#prueba_2"), howMany=2, clase="sub_prueba")

placeForms(retrieveElement("#sub_prueba_2"), howMany=3, clase="form")
placeImage(retrieveElement("#sub_prueba_1"),"forest.avif")

placeContainers(retrieveElement("#sub_prueba_1"), howMany=1, clase="banner")
placeContainers(retrieveElement(".banner"), howMany=2, clase="sub_banner")
placeImage(retrieveElement("#sub_banner_1"),"gecko.svg")
placeIguano()
placeContainers(retrieveElement("#form_1"), howMany=2, clase="sub_form")
placeContainers(retrieveElement("#form_2"), howMany=4, clase="ingresos")
placeContainers(retrieveElement("#form_3"), howMany=2, clase="sub_form")

placeContainers(retrieveElement("#ingresos_2"), howMany=3, clase="info_nombre")
placeContainers(retrieveElement("#ingresos_3"), howMany=3, clase="info_contacto")
placeContainers(retrieveElement("#ingresos_4"), howMany=3, clase="info_pass")

setForm()

const form_1 = document.querySelector("#sub_form_2")
form_1.textContent = "Iguano Love es tu plataforma favorita para encontrar tu iguano amor. Crea tu cuenta, nosotros nos encargamos del resto."

function botoncito(){
    const algo = document.querySelector("#form_3 > #sub_form_1")
    boton = document.createElement("button")
    boton.id = "botoncito"
    boton.textContent = "Crear cuenta"
    boton.form = "form_2"
    console.log(boton)
    algo.appendChild(boton)

    document.getElementById('botoncito').addEventListener('click', function() {
        document.getElementById('form_2').submit();
      });
}



leyenda = document.createElement("h2")
leyenda.id = "botoncito"
leyenda.textContent = "Ya tenes cuenta?"

botoncito()