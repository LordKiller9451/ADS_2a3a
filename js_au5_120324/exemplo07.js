calcularIMC(100, 1.80)

function calcularIMC(argPeso, argAltura){// arg define que é local somente dessa função, portanto posso usar o nome altura e peso de novo
let imc
imc = argPeso / (argAltura ** 2 )
console.log(imc)
}
