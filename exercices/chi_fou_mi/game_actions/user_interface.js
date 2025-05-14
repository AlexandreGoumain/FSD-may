import readline from "readline";

const createInterface = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
};

const displayGameStart = (robot1, robot2, scoreToWin) => {
    console.log("Bienvenue au jeu Chi-Fou-Mi entre deux robots!");
    console.log(`Le premier à atteindre ${scoreToWin} points gagne.`);
    console.log(`${robot1.name} VS ${robot2.name}`);
};

const displayRobotChoices = (robot1, robot2) => {
    console.log(`${robot1.name} choisit ${robot1.choice}`);
    console.log(`${robot2.name} choisit ${robot2.choice}`);
};

const displayGameEnd = (winnerName) => {
    console.log(`${winnerName} remporte la partie!`);
};

export {
    createInterface,
    displayGameEnd,
    displayGameStart,
    displayRobotChoices,
};
