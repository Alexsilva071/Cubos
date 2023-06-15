//Criando array de 5 numeros
const numeros = [1, 2, 3, 4, 5]

//for (let i = 0; i < numeros.length; i++) { console.log(numeros[i]) }

let somaDoArray = numeros;
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma += numeros[i]

    console.log(soma)
}