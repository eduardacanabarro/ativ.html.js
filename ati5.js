
let nota1 = Number+(prompt("Digite a nota da primeira prova:"));
let peso1 = Number(prompt("Digite o peso da primeira prova:"));

let nota2 = Number(prompt("Digite a nota da segunda prova:"));
let peso2 = Number(prompt("Digite o peso da segunda prova:"));

let nota3 = Number(prompt("Digite a nota da terceira prova:"));
let peso3 = Number(prompt("Digite o peso da terceira prova:"));

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

alert("A média ponderada das provas é: " + mediaPonderada);
