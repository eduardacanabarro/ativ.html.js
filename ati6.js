
let listaCompras = prompt("Digite os itens da lista de compras separados por vírgula:");

let itens = listaCompras.split(",");

console.log("Lista de Compras:");
for (var i = 0; i < itens.length; i++) {
    
   alert(itens[i]) 
}
