const arrayNums = [1, 2, 3, 4, 5]

function multiplaDez(num) {
    return num*10
}

const novaLista = arrayNums.map(multiplaDez)

console.log(novaLista)

const somaLista = arrayNums.map( num => num * 10)
console.log(somaLista)