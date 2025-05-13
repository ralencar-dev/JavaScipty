// Descrição: Crie um programa que leia dois números inteiros: um valor inicial e um valor final. O programa deve então imprimir todos os números do valor inicial até o valor final, inclusive.


let valorInicial = parseInt(prompt("Digite o valor inicial:"));
let valorFinal = parseInt(prompt("Digite o valor final:"));
if (valorInicial > valorFinal) {
    console.log("Erro: O valor inicial deve ser menor que o valor final.");
}
else {
    console.log(`Números de ${valorInicial} até ${valorFinal}:`);
    for (let i = valorInicial; i <= valorFinal; i++) {
        console.log(i);
    }
}


