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
    nome : "BONECO Hulk Esmaga",
    preco: 250.0 ,
    emEstoque: true ,
    size: ['70 cm ' , '120cm' , '30cm ' , '10cm'],
    'cor' : 'verde' 
}

console.log(produto['cor'])

//destructuring - recurso para objetos para extrair contéudo de dentro deles

const {preco, emEstoque} = produto 
console.log(preco)
console.log(emEstoque)


const [char1, char2 ] = lista 
console.log(char1)
console.log(char2)


//JSON - JavaScript Object Notation
    const cachorroDoKevin = {
        nome : 'Duke',
        idade : 20,

    }

const json = JSON.stringify(cachorroDoKevin)
console.log(json)
console.log(typeof json)
const json2 = JSON.parse(json)
console.log(json2)
console.log(typeof json2)
const jsonErrado = JSON.stringify('{"nome":"Duke","idade":20}')
console.log(jsonErrado)


console.log("-----------------------------------------------------------------------")
console.log("+DESAFIO+")

//Desafio 1

//criando o vetor

const vetorDesafio = [24, 48, 19 , 30 , 29]

//criando o objeto 

const objectDesafio = {

    n1 : vetorDesafio [0] , 
    n2 : vetorDesafio [1] ,
    n3 : vetorDesafio [2] , 
    n4 : vetorDesafio [3] ,
    n5 : vetorDesafio [4] ,
}

//utilizando o destruction 
const {n1 , n2 , n3 , n4 , n5} = vetorDesafio

//criando o JSON

const jsonDesafio = JSON.stringify(objectDesafio)

//imprimento o resultado
console.log(jsonDesafio)
console.log(vetorDesafio)
console.log(objectDesafio)