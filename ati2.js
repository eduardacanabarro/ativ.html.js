let peso= Number(prompt("insira seu peso em kg: "))
alert(`peso: ${peso}`)

let altura= Number(prompt("insira sua altura em metros: "))
alert(`altura: ${altura}}`)

let imc = peso/ (altura * altura);

if(peso < 18.5) {
    alert(`voce esta abaixo do peso`)
}else if(peso >= 18.5 && peso < 24.9)
    alert(`voce esta no peso ideal`)
    else(peso >= 25 && peso < 29.9); {
        alert(`voce esta acima do peso`)
    }
    