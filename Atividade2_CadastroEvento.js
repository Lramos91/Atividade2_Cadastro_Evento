console.log("Começar inscrição")

let listadeeventos = ["evento1", "evento2", "evento3"] //vetor ou array
if (listadeeventos.includes("evento3")) {
    console.log ("Evento existente")
} else {
    console.log ("Evento não encontrado")
}
let date = new Date("2022/02/22")
if (date >= new Date("2022/02/15")) {
    console.log ("Data permitida, prosseguir")
} else { 
    console.log("Data invalida")
}
let idade = 30
if (idade >= 18) {
    console.log ("Cadastro permitido")
} else {
    console.log ("Cadastro inválido, idade inferior á 18 anos")
}
let numerodeinscritos = 135
if (numerodeinscritos <=100){
    console.log ("Cadastro aprovado")
} else {
    console.log ("Cadastro invalido, excedeu numero de participantes")
}

