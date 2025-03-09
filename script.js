let humanScore = 0;
let computerScore = 0;
let contadorJuegos = 0;
let eleccionHumano = NaN;
let resultado = NaN;
let computador = NaN;


const nombreJugador = 'Jugador: ';
const nombreComputador = 'CPU: ';
const roundWinner = document.querySelector("#round-winner");
const opciones = document.getElementById("options");
const container = document.getElementById("container");




function getComputerChoice() {
    const arrayElecciones = ["piedra", "papel", "tijera"];

    let eleccionJuego = Math.floor(Math.random() * arrayElecciones.length);
    
    return arrayElecciones[eleccionJuego];;
}


function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice){
        
        return -1;
    } else {
        switch(humanChoice) {
            case "tijera":
                if(computerChoice === "papel") {
                    return 1;
                } else {
                    return 0;
                }
                
            case "papel":
                if(computerChoice === "piedra") {
                    return 1;
                } else {
                    return 0;
                }
            case "piedra":
                if(computerChoice === "tijera") {
                    return 1;
                } else {
                    return 0;
                }
            default:
                break;
        }
    }
}

function gameResults(resultado, computador) {
    contadorJuegos +=1;

    let elecJ = document.querySelector("#eJ");
    elecJ.textContent = nombreJugador + eleccionHumano;
    let elecC = document.querySelector("#eC");
    elecC.textContent = nombreComputador + computador;

    

    if (resultado === 1) {
        humanScore += 1;
        roundWinner.textContent = 'Jugador gana la ronda +1 punto';
    } else if (resultado === 0){
        computerScore += 1;
        roundWinner.textContent = 'CPU gana la ronda +1 punto';
    } else {
        roundWinner.textContent = 'EMPATE, ninguno suma puntos';

    }

    document.getElementById("player-score").textContent = "Puntos Jugador: " + humanScore;
    document.getElementById("cpu-score").textContent = "Puntos CPU: " + computerScore;
    document.querySelector("#round").textContent = "Ronda: " + contadorJuegos;
    
    if(contadorJuegos === 5) {
        let mensajeGanador = document.createElement("span");
        mensajeGanador.id = 'winner-msg';
        

        if(humanScore > computerScore) {
            mensajeGanador.textContent = 'JUGADOR HA GANADO EN 5 JUEGOS';

        } else if(humanScore === computerScore) {
            mensajeGanador.textContent = 'HAY EMPATE EN 5 JUEGOS';
        } else {mensajeGanador.textContent = 'LA CPU HA GANADO EN 5 JUEGOS, HAZ PERDIDO'}
        container.appendChild(mensajeGanador);

        // let botonResetear = document.createElement("button");
        // botonResetear.textContent = 'Nuevo juego';
        // botonResetear.id = 'boton-reset';

    }
    
}


function playGame() {

    let botonPiedra = document.createElement("button");
    botonPiedra.textContent = 'Piedra 🪨';
    botonPiedra.id = 'boton'
    let botonPapel = document.createElement("button");
    botonPapel.textContent = 'Papel 🧻';
    botonPapel.id = 'boton'
    let botonTijera = document.createElement("button");
    botonTijera.textContent = 'Tijera ✂️';
    botonTijera.id = 'boton'

    botonPiedra.addEventListener("click", () => {
        computador = getComputerChoice();
        resultado = playRound('piedra', computador)
        eleccionHumano = 'piedra';
        gameResults(resultado, computador);
        
    });

    botonPapel.addEventListener("click", () => {
        computador = getComputerChoice();
        resultado = playRound('papel', computador)
        eleccionHumano = 'papel';
        gameResults(resultado, computador);
        
    });

    botonTijera.addEventListener("click", () => {
        computador = getComputerChoice();
        resultado = playRound('tijera', computador)
        eleccionHumano = 'tijera';
        gameResults(resultado, computador);
        
    });

    

    let divResultados = document.createElement("div");
    divResultados.id = 'results';

    let scoreJugador = document.createElement("span");
    scoreJugador.textContent = "Puntos Jugador: 0";
    scoreJugador.id = 'player-score'
    let scoreComputador = document.createElement("span");
    scoreComputador.textContent = "Puntos CPU: 0";
    scoreComputador.id = 'cpu-score'



    divResultados.appendChild(scoreJugador);
    divResultados.appendChild(scoreComputador);

    container.appendChild(divResultados);

    opciones.appendChild(botonPiedra);
    opciones.appendChild(botonPapel);
    opciones.appendChild(botonTijera);

    
}



playGame();
