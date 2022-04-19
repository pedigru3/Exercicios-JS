const salaDeEscritores = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaDePintores = [6, 5, 8, 9, 5, 6]
const SalaDosNoia = [3, 3.5, 4, 9.5]

function mediaSala(sala) {
    const somaNotas = sala.reduce((acum,atual) => atual + acum, 0)
    return somaNotas/sala.length
}

console.log(mediaSala(salaDePintores))
console.log(mediaSala(salaDeEscritores))
console.log(mediaSala(SalaDosNoia))