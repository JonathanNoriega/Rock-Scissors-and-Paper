const span = document.querySelector("#spam");
const botonpiedra = document.querySelector("#piedra").addEventListener("click",  main.bind(null, "rock"));
const botonpapel  = document.querySelector("#papel").addEventListener("click",   main.bind(null, "paper"));
const botontijeras= document.querySelector("#tijeras").addEventListener("click", main.bind(null, "scissors"));
var message;
function main(humov){
    var hmm = ["rock", "paper", "scissors"];
    var pcmov = hmm[Math.floor(Math.random()*hmm.length)];
    message= `You picked ${humov}, the pc picked ${pcmov} <br>`;
    switch (humov) {
        case "rock":
                switch(pcmov) {
                    case "rock":
                            message = message + "the game is tied.";

                        break;
                    case "paper":
                            message = message + "you lose.";
                        break;
                    case "scissors": 
                            message = message + "you win.";
                        break;
                }
            break;
        case "paper":
                switch(pcmov) {
                    case "rock":
                            message = message + "you win."
                        break;
                    case "paper":
                            message = message + "the game is tied."
                        break;
                    case "scissors": 
                            message = message + "you lose."
                        break;
                }
            break;
        case "scissors":
            switch(pcmov) {
                case "rock":
                        message = message + "you lose."
                    break;
                case "paper":
                        message = message + "you win."
                    break;
                case "scissors": 
                        message = message + "the game is tied."
                    break;
                }
            break;
    }
    span.innerHTML = message;

}
