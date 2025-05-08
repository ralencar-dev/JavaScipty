let valor = Number(prompt("Digite um valor: "))

let desconto = 0.10

valor > 100 
  ? (console.log("Valor com desconto: ", valor - (valor * desconto)), 
     console.log("Desconto aplicado:", desconto * 100, "% ou", desconto * valor, "reais"))
  : console.log("Valor sem desconto: ", valor)