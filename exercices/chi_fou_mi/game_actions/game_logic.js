import { ciseaux, feuille, pierre } from "../config/rules.js";

const determineWinner = (robot1, robot2) => {
    if (robot1.choice === robot2.choice) {
        return "Egalité";
    }

    if (robot1.choice === pierre && robot2.choice === ciseaux) {
        robot1.score++;
        return robot1.name;
    }

    if (robot1.choice === feuille && robot2.choice === pierre) {
        robot1.score++;
        return robot1.name;
    }

    if (robot1.choice === ciseaux && robot2.choice === feuille) {
        robot1.score++;
        return robot1.name;
    }

    if (robot1.choice === pierre && robot2.choice === feuille) {
        robot2.score++;
        return robot2.name;
    }

    if (robot1.choice === feuille && robot2.choice === ciseaux) {
        robot2.score++;
        return robot2.name;
    }

    if (robot1.choice === ciseaux && robot2.choice === pierre) {
        robot2.score++;
        return robot2.name;
    }
};

const checkGameWinner = (robot1, robot2, scoreToWin) => {
    if (robot1.score >= scoreToWin) {
        return robot1.name;
    } else if (robot2.score >= scoreToWin) {
        return robot2.name;
    }
    return null;
};

const displayTurnResult = (result, robot1, robot2) => {
    if (result === "Egalité") {
        console.log("Égalité sur ce tour!");
    } else {
        console.log(`${result} gagne ce tour!`);
        console.log(
            `Score: ${robot1.name}: ${robot1.score} | ${robot2.name}: ${robot2.score}`
        );
    }
};

export { checkGameWinner, determineWinner, displayTurnResult };
