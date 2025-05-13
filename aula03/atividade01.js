// Descrição: Crie um programa que leia o ano de nascimento do usuário e o ano atual. Com base nesses dados, calcule a idade e exiba uma mensagem informando:

// Quantos anos o usuário completa no ano atual
// E se ele pode ou não tirar a habilitação, considerando que a idade mínima é 18 anos.

let anoNascimento = Number(prompt("Digite o ano de nascimento: "))
let anoAtual = Number(prompt("Digite o ano atual: "))
let idade = anoAtual - anoNascimento
console.log(`Você tem ${idade} anos.`)
if (idade >= 18) {
    console.log("Você pode tirar a habilitação.")
    } else {
        console.log("Você não pode tirar a habilitação.")
        }
    