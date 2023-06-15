const palavra = "O feijao da casa de mainha é o melhor da cidade de Salvador."

let index = 0

for (let letra of palavra) {
    if (letra === "a") { console.log(++index + letra) }
}