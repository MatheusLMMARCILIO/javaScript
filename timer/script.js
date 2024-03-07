function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}



const relogio = document.querySelector('.Relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let seconds = 0
let timer

function startWatch() {
    timer = setInterval(function () {
        seconds++
        relogio.innerHTML = getTimeFromSeconds(seconds)
    }, 1000)
}
iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado')
    startWatch()
})

pausar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    seconds = 0
})