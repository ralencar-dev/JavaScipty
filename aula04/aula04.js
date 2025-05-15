function somar(a, b) {
    return a + b;
}

let soma = somar(5, 3);
console.log("A soma é: " + soma);

let n1 = 4; n2 = 3;
soma = somar(n1, n2);
console.log("A soma é: " + soma);

const obterAnoAtual = () => {
    return new Date().getFullYear();

}

const multiplicar = (a, b) => {
    return a * b;
}

console.log(obterAnoAtual());
console.log(multiplicar(3, 4));

