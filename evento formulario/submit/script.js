const formSub = document.querySelector("fomrSubmit")

formSub.addEventListener("submit", function evento(){
evento.preventDefault()
    console.log("submit", evento)
})