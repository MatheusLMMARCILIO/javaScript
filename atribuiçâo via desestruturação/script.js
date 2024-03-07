const pessoa = {
    nome: 'Luiz',
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
}

// // posso mudar a variavel assim:
// const { nome: n = 'Luiza' } = pessoa

// pegando o endereco completo 
// const {endereco: {rua, numero}} = pessoa


// const {nome, ...resto } = pessoa
console.log(nome, resto)