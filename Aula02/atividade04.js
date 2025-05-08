let estoque = parseFloat(prompt("Qual o estoque atual? "))

let remover = parseFloat(prompt("Quantos produtos deseja remover? "))

let estoqueFinal

remover < 0 || estoque < 0 ? console.log("valor invalido") : estoqueFinal = estoque - remover, console.log("Estoque final: ", estoqueFinal)