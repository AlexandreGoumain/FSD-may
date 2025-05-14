// Module pour gérer les choix des robots
import { ciseaux, feuille, pierre } from "../config/rules.js";

// Choix aléatoire pour les robots
const makeRandomChoice = () => {
    const choices = [pierre, feuille, ciseaux];
    return choices[Math.floor(Math.random() * choices.length)];
};

export { makeRandomChoice };
