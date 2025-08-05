const input_amigo = document.getElementById ("amigo");
const ul_listaAmigos = document.getElementById ("listaAmigos");
const listaAmigoSecreto = [];
const ul_resultado = document.getElementById ("resultado");

function agregarAmigo(){
listaAmigoSecreto.push(input_amigo.value);
console.log(listaAmigoSecreto);
ul_listaAmigos.innerHTML += `<li>${input_amigo.value}</li>`;
}
