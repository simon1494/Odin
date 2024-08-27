const ICONO = document.querySelector(".material-icons");
const ITEMS = document.querySelectorAll(".item");



ITEMS.forEach((item) => {
    item.addEventListener("mouseover", desaparecer())
})