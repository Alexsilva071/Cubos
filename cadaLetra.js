const palavra = "Brasil"

let encontrado = false
for (let letras of palavra) {
    if (letras === "h") { console.log(" Tem a letra H"); encontrado = true; break; }

}

if (!encontrado) { console.log("não tem H") }