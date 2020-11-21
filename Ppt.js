const botonpiedra = document.querySelector("#piedrabtn");
var botonpapel  = document.querySelector("#papelbtn");
const botontijeras= document.querySelector("#tijerasbtn");
var spamjs = document.getElementById("spam");
var spamjs2 = document.getElementById("spam2");
var pcmov;

botonpiedra.addEventListener("click", piedra);
botontijeras.addEventListener("click", tijeras);
botonpapel.addEventListener("click", papel);


function papel(evento){
    humov = "Papel";


    

    items = ['piedra', 'papel', 'tijeras'];
    item = items[Math.floor(Math.random() * items.length)];

    if(humov == "Papel" && item == "papel")
    {
        result = "¡Empate!";
    }
    if(humov == "Papel" && item == "piedra")
    {
        result = "¡Ganaste!"
    }
    if(humov == "Papel" && item == "tijeras")
    {
        result = "¡Perdiste!"
    }

    spamjs2.innerHTML = "Tú juegas " + humov + ", El pc juega " + item + " el resultado es.. " + result;

    console.log(evento);
}
function piedra(evento){
    humov = "Piedra";

    items = ['piedra', 'papel', 'tijeras'];
    item = items[Math.floor(Math.random() * items.length)];

    if(humov == "Piedra" && item == "piedra")
    {
        result = "¡Empate!";
    }
    if(humov == "Piedra" && item == "tijeras")
    {
        result = "¡Ganaste!"
    }
    if(humov == "Piedra" && item == "papel")
    {
        result = "¡Perdiste!"
    }

    spamjs2.innerHTML = "Tú juegas " + humov + ", El pc juega " + item + " el resultado es.. " + result;
    console.log(evento);
}

function tijeras(event){
    humov = "Tijeras";
    var result;
    
    items = ['piedra', 'papel', 'tijeras'];
    item = items[Math.floor(Math.random() * items.length)];

    if(humov == "Tijeras" && item == "tijeras")
    {
        result = "¡Empate!";
    }
    if(humov == "Tijeras" && item == "papel")
    {
        result = "¡Ganaste!"
    }
    if(humov == "Tijeras" && item == "piedra")
    {
        result = "¡Perdiste!"
    }

    spamjs2.innerHTML = "Tú juegas " + humov + ", el pc juega " + item + " el resultado es.. " + result;
    console.log(event);

}

/* manera alternativa:
botontijeras.addEventListener("click", function(evento){
alert("funciona");
}); 
*/