//mostrar quem está reprovado em uma lista de alunos

const listaDeAlunos = ["Ana", "Marcos", "Maria", "Mauro"]
const listaDeNotas = [7, 4.5, 8, 7.5];

 const reprovados = listaDeAlunos.filter( (_, indice) => listaDeNotas[indice] <5) 
 console.log(reprovados)