// Descrição: Crie um programa que solicite ao usuário o seu peso (em kg) e sua altura (em metros). Em seguida, o programa deve calcular o IMC do usuário utilizando a fórmula:

// IMC = peso / (altura * altura)
// Após o cálculo, exiba o valor do IMC e, de acordo com o valor obtido, informe a classificação do IMC:

// Abaixo de 18.5: Abaixo do peso
// Entre 18.5 e 24.9: Peso normal
// Entre 25 e 29.9: Sobrepeso
// Entre 30 e 34.9: Obesidade grau 1
// Entre 35 e 39.9: Obesidade grau 2
// Acima de 40: Obesidade grau 3

let peso = parseFloat(prompt("Digite seu peso (em kg):"))
let altura = parseFloat(prompt("Digite sua altura (em metros):"))
let imc = peso / (altura * altura)
let classificacao = ""

if (imc < 18.5) {
    classificacao = "Abaixo do peso"
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal"
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso"
} else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade grau 1"
} else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade grau 2"
}
else {
    classificacao = "Obesidade grau 3"
}

alert(`Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${classificacao}`)
