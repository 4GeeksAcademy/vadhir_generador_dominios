let pronoun = ["the", "our"];
let adj = ["great", "precious"];
let noun = ["times", "people"];
let extensiones = [".com", ".net", ".us", ".org", ".mx"];

function generadorDeDominios(pronoun, adj, noun, extensiones) {
  let dominios = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensiones) {
          dominios.push(p + a + n + ext);
        }
      }
    }
  }

  return dominios;
}

let listaDeDominios = generadorDeDominios(pronoun, adj, noun, extensiones);
listaDeDominios.forEach((dominios) => console.log(dominios));