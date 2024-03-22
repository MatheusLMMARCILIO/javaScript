const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


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


// somar todos os valores
const AllValue = num.reduce(
    function (acumulador, valor) {
       return acumulador + valor
    }, 0
)

// duplicra por 2
const DupleTwo = num.reduce(function(acumulador, valor){
return acumulador * 2
}, [])

// apenas numeros pares
const justPar = num.reduce(function(valor,acumulador ){
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
// apenas numeros impares

console.log(justPar)