let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

const nomesAtualizados = nomes.map( nome => nome.toUpperCase())

console.log(nomesAtualizados)

const nomesSobrenomes = nomes.map( nome => nome.toUpperCase() + " Ferreira".toUpperCase())

console.log(nomesSobrenomes)