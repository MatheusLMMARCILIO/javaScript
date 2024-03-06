// fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Erro ao buscar os Dados:', error))

let x = 0
let mudaTexto = document.getElementById('listaVideos')
let contadorexibe = document.getElementById("contaor")
let contador = 0


function manipulaHtml() {

    if (x == 0) {
        mudaTexto.innerHTML = 'Óla, mnupulamos os dados'
        x = 1
        contador = contador + 1
        contadorexibe.innerHTML = contador

    } else {
        mudaTexto.inner = 'dados'
        x = 0
        contador = contador - 1
        contadorexibe.innerHTML = contador
    }

}

