
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let percentualDesconto = parseFloat(prompt("Digite o desconto:"));

let valorDesconto = (percentualDesconto / 100) * valorProduto;

let valorFinal = valorProduto - valorDesconto;

alert("Valor do produto com desconto: R$" + valorFinal.toFixed(2));
