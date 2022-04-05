var nome, peso, altura, imc, res

nome = prompt("Informe o seu nome")
peso = prompt("Informe o seu peso")
altura = prompt("informe a sua altura")
imc = peso / Math.pow(altura, 2)
document.write("Boa noite, " + nome + ". <br><br>")
document.write("Seu IMC é " + +imc.toFixed(2) + "<br>")


if (imc < 18) {
    res = "Abaixo do peso."
} else if (imc < 25) {
    res = "Peso ideal."
} else if (imc < 3) {
    res = "Acima do peso."
} else if (imc < 40) {
    res = "Obesidade."
} else {
    res = "Obesidade Mórida."
}

document.write("<br>Conclusão:" + res)