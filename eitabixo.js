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
    nome : "VIBRADOR Hulk Esmaga",
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

//imprimir o resultado
console.log(jsonDesafio)
console.log(vetorDesafio)
console.log(objectDesafio)


//Desafio 2

const RSO   = n1 + n4
const RMULT = n1 * n2
const RDIVI = n3 / n4
const RSUB  = n4 - n1

const ObjectCalculadora = {
    multiplicacao : RSO ,
    divisao       : RSUB ,
    soma          : RDIVI , 
    subtracao     : RMULT , 

}

const jsonCalculadora = JSON.stringify(ObjectCalculadora)

// imprimir o resultado 
console.log(ObjectCalculadora)
console.log(jsonCalculadora)
console.log(typeof n2)


//Solução do professor 

const vetor = [1,2,3,4,5]
const objeto = {

    n1a : vetor[0], 
    n2a : vetor[1],
    n3a : vetor[2],
    n4a : vetor[3],
    n5a : vetor[4],
}

const {n1a , n2a, n3a , n4a, n5a} = objeto

const jsonVetor = JSON.stringify({n1a,n2a,n3a,n4a,n5a})

console.log(jsonVetor)
console.log(objeto)


//seguindo o básico do professor

const n = 24
if (n == 24) {
    console.log('É GAY')
}else{
    console.log('É HETERO')
}

const texto = "PICANHA"

if(texto == "SEXO"){
    console.log("EITA BIXO TÃO FALANDO DE SEXO")
}else{ 
    console.log("Droga não era sexo")
}


//operador ternario 

const resultado = n > 20 ? true :  false 
console.log(resultado)
console.log(typeof resultado)

//repetição : precisa de 3 partes - variável de controle e a inicialização dela ; condição/critério de parada; alteração do valor da variaável de controle


let contador = 0 
while (contador <= 10){
    console.log(contador)
    contador++ // contador = contador + 1 

}

const lista2 = [1, 2, 3, 4, 5, 6]
while (contador < lista2.length){
    console.log('AAAAAAAAAAAAAA'+ lista[contador] + ' PORA')
  //  console.log(lista2[contador])
    contador++ 


}

const outralista = ['a' , 'b' , 'c' , 'd' , 'e' , 'f']
for (let contador = 0 ; contador < outralista.length ; contador ++){
    console.log(`teste ${outralista[contador]}`) //template literais
}


//SEILA TO PERDIDO
const nomes = ['Kaua' , 'Cleyciane' , 'Kevin' , 'Victor']
nomes.forEach(function(nome){
    console.log(nome)
})

const nomesModificados = nomes.map(function(nome){
    if(nome === 'Kevin'){
        return (nome = "GAY")
    }else {
        return nome
    }

})

nomesModificados.forEach(function(nome){

    console.log(nome)

})

const numerosGrandes = ['6' , '1' , '9', '17' , '99' , '94'].filter(function(numero){
    return (numero > 10)
})

numerosGrandes.forEach(function(numero){
    console.log(numero)
})

console.log(numerosGrandes.reduce(function(total,numero){
    return parseInt(total) + parseInt(numero)
}))


