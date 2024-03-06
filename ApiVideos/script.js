fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db') //
.then(response => response.json())
.then(data => {
    const lista = printVideos(data)
    const listaContainer = document.getElementById('ListaVideo')
    listaContainer.innerHTML = lista.join("")
})
.catch(error => console.error('ERRO ao buscar os Dados: ', error))

function printVideos(data) {
    if (data && data.videos) {
        return data.videos.map(videos => `<div>${videos.titulo}</div>`)
    } else {
        console.error('Não foram encontrados  vídeos na respota')
    return[]
    }
}