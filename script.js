let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let arrayElecciones = ["piedra", "papel", "tijera"];

    let eleccionJuego = Math.floor(Math.random() * arrayElecciones.length);

    let opcionJuego = arrayElecciones[eleccionJuego];
    
    return opcionJuego;
}


function getHumanChoice() {
    let eleccionHumano = prompt("Ingresa la opcion para jugar (piedra - papel - tijera)");
    let pepe = 0
    console.log(pepe)
    return eleccionHumano.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice){
        console.log("EMPATE");
        return -1;
    } else {
        switch(humanChoice) {
            case "tijera":
                if(computerChoice === "papel") {
                    console.log("GANASTE");
                    return 1;
                } else {
                    console.log("PERDISTE");
                    return 0;
                }
                
            case "papel":
                if(computerChoice === "piedra") {
                    console.log("GANASTE");
                    return 1;
                } else {
                    console.log("PERDISTE");
                    return 0;
                }
            case "piedra":
                if(computerChoice === "tijera") {
                    console.log("GANASTE");
                    return 1;
                } else {
                    console.log("PERDISTE");
                    return 0;
                }
            default:
                break;
        }
    }
}


function playGame() {

    for(let i = 1 ; i <= 5 ; i++) {
        console.log("Ronda ",i);
        let computador = getComputerChoice();
        let humano = getHumanChoice();

        console.log("Eleccion Jugador =",humano);
        console.log("Eleccion Computador =",computador);
        
        
        let resultado = playRound(humano,computador);

        if (resultado === 1) {
            humanScore += 1;
        } else if (resultado === 0){
            computerScore += 1;
        }
        
        console.log("");
        console.log("Human Score =",humanScore);
        console.log("Computer Score =",computerScore);
        console.log("");
    }

    if(humanScore > computerScore) {
        console.log("JUGADOR GANA");
    } else if(humanScore === computerScore) {
        console.log("HAY EMPATE");
    } else {console.log("HAZ PERDIDO")}
}



playGame();
