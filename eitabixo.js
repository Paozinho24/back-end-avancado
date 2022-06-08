console.log("Hello MOTO")


//Declarando variaveis HAHAHAHAHHA
    var x = 10 //Essa variável é do tipo Number
//Formas mais convenientes de declarar 
let y = 24 

const z = ''

const t = z + 10 


y = 20 
console.log(y)

if(true){
    let y = 15
    console.log(y)

}

console.log(y)

//tipos de cornos


const nome = "kevin gay"
console.log(nome)
console.log(typeof nome)

const age = 20
console.log(age)
console.log(typeof age)

const peso = 72.3
console.log(peso)
console.log(typeof peso)

//tipo null

const nada = null
console.log(nada)
console.log(typeof nada)

//tipo undefined

let thiago 
console.log(thiago)
console.log(typeof thiago)

//tipo boll

const vouf = true
console.log(vouf)
console.log(typeof vouf)

//Array

const eitabixovetor = ['java', 'C', 'Comi tua mae', 'Kevin é gay']
console.log(eitabixovetor)
console.log(typeof eitabixovetor)

console.log(eitabixovetor.length)


console.log("--------------------------------------------------------------------")


//object literals

const usuario = {
    email: 'vontadeDeMorrer@gmail.com' ,
    senha: 'morrer123' ,
    nome: 'Renatinho Emo' ,
    idade: 31
}

console.log(usuario.email)

console.log(typeof usuario)

console.log("--------------------------------------------------------------------")

const Teste = 'eita bixo'
console.log(Teste.length)
const stringParavetor = Teste.split(' ')
console.log(stringParavetor)

console.log("--------------------------------------------------------------------")
console.log(Teste.toUpperCase())
console.log(Teste.toLowerCase())
nomeMaiusculo = Teste.toUpperCase()
console.log(nomeMaiusculo)

console.log(nomeMaiusculo.indexOf('BI'))

console.log("-----------------------------------------------------------------------")
console.log(nomeMaiusculo[nomeMaiusculo.length - 1])
console.log(nomeMaiusculo.slice(0 , 4))

console.log("-----------------------------------------------------------------------")

//array, vetores, listas

const lista = [ 'a', 'b','c','d','e']
console.log(lista.length)
console.log(typeof lista)
console.log(lista[2])
lista[5] = 'foda né, linguagem dianamica filhao'
console.log(lista[5])
lista[0] = 'x'
console.log(lista)
lista.push('g')
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
console.log(lista)
lista.unshift('h')
console.log(lista)


//object literals - estruturas que descrevem entidades

const produto = {
    nome : "VIBRADOR",
    preco: 250.0 ,
    estoque: true ,
    size: ['70 cm ' , '120cm' , '30cm ' , '10cm']
}

produto.nome
produto['nome']