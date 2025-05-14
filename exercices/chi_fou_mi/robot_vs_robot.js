import { computer, player, scoreToWin } from "./config/rules.js";
import {
    checkGameWinner,
    determineWinner,
    displayTurnResult,
} from "./game_actions/game_logic.js";
import { makeRandomChoice } from "./game_actions/robots.js";
import {
    createInterface,
    displayGameEnd,
    displayGameStart,
    displayRobotChoices,
} from "./game_actions/user_interface.js";

player.name = "Robot-1";
computer.name = "Robot-2";

const rl = createInterface();

const playTurn = () => {
    player.choice = makeRandomChoice();
    computer.choice = makeRandomChoice();

    displayRobotChoices(player, computer);

    const result = determineWinner(player, computer);

    displayTurnResult(result, player, computer);

    const gameWinner = checkGameWinner(player, computer, scoreToWin);

    if (gameWinner) {
        displayGameEnd(gameWinner);
        rl.close();
        return;
    }

    rl.question(
        "Appuyez sur Entrée pour continuer ou tapez 'q' pour quitter: ",
        (answer) => {
            if (answer.toLowerCase() === "q") {
                console.log("Partie terminée!");
                rl.close();
            } else {
                playTurn();
            }
        }
    );
};

displayGameStart(player, computer, scoreToWin);

rl.question("Appuyez sur Entrée pour commencer: ", () => {
    playTurn();
});
