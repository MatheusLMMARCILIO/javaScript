const formTitulo = document.createElement("h1")
formTitulo.innerHTML = "Increva-se"

 document.body.append(formTitulo)

const form = document.createElement("form")

const formLabel = document.createElement("label")
formLabel.innerHTML = "Nome"
const formInput = document.createElement("input")
formLabel.style.display = "flex"
formInput.style.display = "flex"
formInput.style.marginBottom = "20px"

form.append(formLabel)
form.append(formInput)

document.body.append(formLabel)
document.body.append(formInput)

const formLabel2 = document.createElement("Label")
formLabel2.innerHTML = "E-mail"
const formInput2 = document.createElement("input")
formInput2.type = "email"
formLabel2.style.display = "flex"
formInput2.style.display = "flex"
formInput2.style.marginBottom = "20px"


document.body.append(formLabel2)
document.body.append(formInput2)

const formLabel3 = document.createElement("label")
formLabel3.innerHTML = "Senha"
const formInput3 = document.createElement("input")
formInput3.type = "password"
formLabel3.style.marginTop = "20px"
formInput3.style.marginBottom = "20px"
formInput3.style.display = "flex"
formLabel3.style.display = "flex"
 
document.body.append(formLabel3)
document.body.append(formInput3)

const formLabel4 = document.createElement("label")
formLabel4.innerHTML = "CEP"
const formInput4 = document.createElement("input")
formLabel4.style.display = "flex"
formInput4.style.width = "40px"

document.body.append(formLabel4)
document.body.append(formInput4)

const formLabel5 = document.createElement("label")
formLabel5.innerHTML = "Numero"
const formInput5 = document.createElement("input")
formInput5.style.width = "40px"
formLabel5.style.display
formLabel5.style.flexDirection = ""

document.body.append(formLabel5)
document.body.append(formInput5)
