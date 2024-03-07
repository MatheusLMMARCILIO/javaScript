// // filter sempre retorna array com a mesma quantidade de elementos 
// ou menos

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numFilter = num.filter(valor => valor > 50)
// console.log(numFilter)











const person = [
{ nome: 'luiz', idade: 62 },
{ nome: 'maria', idade: 23 },
{ nome: 'Eduardo', idade: 55 },
{ nome: 'Leticia', idade: 19 },
{ nome: 'Rosana', idade: 32 },
{ nome: 'Wallace', idade: 47 }
]

// const personComNomeGrande = person.filter(obj => obj.nome.length >= 5) 
//  console.log(personComNomeGrande)

const personAge50 = person.filter(obj => Obj.idade > 50 )
console.log(personAge50)