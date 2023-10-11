
let Login = "usuario";
let Senha = "senha";

let loginUsuario = prompt("Digite o seu login:");
let senhaUsuario = prompt("Digite a sua senha:");

if (loginUsuario === Login && senhaUsuario === Senha) {
    alert("Login correto, Bem-vindo, " + loginUsuario + "!");
} else {
    alert("Verifique seu login e senha e tente novamente.");
}
