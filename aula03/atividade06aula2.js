// Descrição: Crie um programa em JavaScript que solicite ao usuário seu nome, peso (em kg) e altura (em metros). Em seguida, calcule o IMC (Índice de Massa Corporal) utilizando a fórmula:

// IMC = peso / (altura * altura)
// Depois, utilize a função confirm() para exibir uma mensagem de confirmação com os dados inseridos.

// Se o usuário confirmar que os dados estão corretos, exiba uma mensagem no formato: "Nome, seu IMC é X", onde Nome é o nome informado e X é o IMC calculado.

// Caso o usuário cancele, exiba a mensagem: "Você saiu do programa."

let nome = prompt("Digite seu nome:")
let peso = parseFloat(prompt("Digite seu peso (em kg):"))
let altura = parseFloat(prompt("Digite sua altura (em metros):"))
let imc = peso / (altura * altura)

if (confirm(`Nome: ${nome}\nPeso: ${peso} kg\nAltura: ${altura} m\nIMC: ${imc.toFixed(2)}\nOs dados estão corretos?`)) {
    alert(`${nome}, seu IMC é ${imc.toFixed(2)}`)
}
else {
    alert("Você saiu do programa.")
}