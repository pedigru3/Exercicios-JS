const cliente = {
    nome: "André",
    idade:36,
    cpf: "12345645675",
    email: "andre@gmail.com"

}

const chaves = ["nome", "idade", "cpf", "email"] 

console.log(cliente["nome"])

// Dá erro == console.log(cliente.chaves[0])

//forma correta:
console.log(cliente[chaves[0]])

console.log("==+==+==+==+==+==+==+==+")

//percorrendo o objeto
chaves.forEach(info => console.log (cliente[info]));

console.log("==+==+==+==+==+==+==+==+")

//o que retorna quando n tem o valor (undefined)
console.log(cliente["conta"])