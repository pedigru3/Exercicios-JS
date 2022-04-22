// Criar uma lista de objetos, contendo nome e idade. Filtrar apenas os maiores de 18 anos.

const pessoas = [ {
    nome: "Felipe",
    idade: 28
},
{
    nome: "Diego",
    idade: 22
},
{
    nome: "Maria",
    idade: 15
},
{
    nome: "José",
    idade: 17
}
]

const menoresDeIdade = pessoas.filter(pessoa => pessoa.idade <= 18)
menoresDeIdade.forEach(pessoa => console.log(pessoa.nome))