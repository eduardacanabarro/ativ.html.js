
let valorEmReais = Number(prompt("Digite o valor em reais: "));
alert(`valorEmReais: ${valorEmReais}`)
let taxaDeCambio = 0.18;

let valorEmDolares = valorEmReais * taxaDeCambio;

alert(`O valor em dólares é: $` + valorEmDolares.toFixed(2));
