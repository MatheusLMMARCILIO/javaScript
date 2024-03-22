const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const FilterMapReduce = num.filter(
    function (valor) {
        return valor % 2 == 0
    }
).map(function(valor){
    return valor * 2
}).reduce(
    function(acumulador, valor) {
        acumulador += valor
        return acumulador
    }
)



 console.log(FilterMapReduce)