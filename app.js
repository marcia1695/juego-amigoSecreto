const input_amigo = document.getElementById ("amigo");
const ul_listaAmigos = document.getElementById ("listaAmigos");
const listaAmigoSecreto = [];
const ul_resultado = document.getElementById ("resultado");

function agregarAmigo(){
/*if (input_amigo.value ==""){
    alert("Por favor, inserte un nombre");
}*/
const valor = input_amigo.value.trim().toLowerCase();
 const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

    if (!soloLetras.test(valor)) {
        alert("El nombre solo debe contener letras, sin espacios ni números");
        return;
    }
   if (listaAmigoSecreto.includes(valor)) {
        alert("Ese nombre ya fue ingresado!!!");
        return;
    }
listaAmigoSecreto.push(input_amigo.value);
console.log(listaAmigoSecreto);
ul_listaAmigos.innerHTML += `<li>${input_amigo.value}</li>`;
}


function sortearAmigo(){
    const sorteo = Math.floor(Math.random()*listaAmigoSecreto.length);
    const amigoSecreto = listaAmigoSecreto[sorteo];
  ul_resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSecreto}</li>`;
}