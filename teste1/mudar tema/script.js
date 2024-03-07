const lightDark = document.getElementById("trilho")
const body = document.querySelector("body")
const btnTeste = document.getElementById("btnTeste1")

lightDark.addEventListener("click", ()=> {
    lightDark.classList.toggle("dark")
    body.classList.toggle("dark")
    btnTeste.classList.toggle("dark")
} )

