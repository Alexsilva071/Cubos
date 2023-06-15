const idade = 19

const altura = 180
const patologiaCardiaca = true
const estudante = false

if (idade < 12 || idade > 65 || patologiaCardiaca === true) { console.log("Acesso Negado.") }
else if (estudante === true || idade < 18) { console.log("10 reais") }

else { console.log("20 reais.") }