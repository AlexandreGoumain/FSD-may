let { pierre, feuille, ciseaux } = {
    pierre: "Pierre",
    feuille: "Feuille",
    ciseaux: "Ciseaux",
};

const player = {
    name: null,
    choice: null,
    score: 0,
};

const computer = {
    name: "Computer",
    choice: null,
    score: 0,
};

const scoreToWin = 10;

export { ciseaux, computer, feuille, pierre, player, scoreToWin };
