const rand = (min, max) => {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function EsperaAi(msg, tempo) {



    setTimeout(() => {
        console.log(msg)
    }, tempo)
}


