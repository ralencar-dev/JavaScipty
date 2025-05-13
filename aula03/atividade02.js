// Descrição: Crie um programa que solicite ao usuário sua idade e, com base na idade fornecida, imprima uma mensagem indicando a faixa etária correspondente:

// Idade maior ou igual a 65: Você é um idoso.
// Idade maior ou igual a 18: Você é um adulto.
// Idade maior ou igual a 13: Você é um adolescente.
// Senão a saída deve ser: Você é uma criança.

let idade = parseInt(prompt("Digite sua idade:"))
if (idade >= 65) {
    console.log("Você é um idoso.")
}
else if (idade >= 18) {
    console.log("Você é um adulto.")
}
else if (idade >= 13) {
    console.log("Você é um adolescente.")
}
else if (idade < 13) {
    console.log("Você é uma criança.")
}
else{
    console.log("Idade inválida")
}