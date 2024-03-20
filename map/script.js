const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const person = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'Wallace', idade: 18 },
    { nome: 'Wallace', idade: 67 },

]

// mudra nomes

const mudaNome = person.map(
    function (obj) {
obj.nome = 'Lucas'

return obj
    }
)

console.log(mudaNome)
// tirar idade e colocar cidade 
const delNamePutCity = person.map(
    function (obj, indice) {

        obj.city = indice
        delete obj.nome
        delete obj.idade

        return obj

    }
)


// colcando id 
const nameIdadeId = person.map(function (obj) {
    obj.City = 'lorena'
    return obj
})

// tirando o 'nome'
const semNome = person.map(Object => Object.nome)

// dobrando os numeros
const dobra2 = numeros.map(numeros => numeros / 2)



