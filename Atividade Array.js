const paísesAmericaDoSul = ["Argentina", "Chile", "Uruguai", "Brasil", "Paraguai"];
console.log(paísesAmericaDoSul)
paísesAmericaDoSul.push = "México"
console.log(paísesAmericaDoSul);
paísesAmericaDoSul.pop()
console.log(paísesAmericaDoSul);
paísesAmericaDoSul.shift()
console.log(paísesAmericaDoSul);
paísesAmericaDoSul.unshift = "Guiana"
console.log(paísesAmericaDoSul);
console.log(paísesAmericaDoSul[2])
const ultimo = paísesAmericaDoSul[paísesAmericaDoSul.length - 2]
console.log(ultimo)