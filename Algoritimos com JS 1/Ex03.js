// depósito bancário para as pessoas

const pessoa = [ {
    nome: "Felipe",
    idade: 28,
    saldo: 0,
    depositar: function(valor){
        this.saldo += valor
    }
},
{
    nome: "Diego",
    idade: 22,
    saldo: 0
},
{
    nome: "Maria",
    idade: 15,
    saldo: 0
},
{
    nome: "José",
    idade: 17,
    saldo: 0
}
]

function encontrar(nomebuscado){
    const indice = pessoa.findIndex(pessoa => pessoa.nome===nomebuscado)
    return pessoa[indice]
}

const indice = pessoa.findIndex(pessoa => pessoa.nome==="Felipe")

encontrar("Felipe").depositar(100)
console.log(encontrar("Felipe"))