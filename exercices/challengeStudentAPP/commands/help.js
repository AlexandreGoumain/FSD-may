import { commands } from "../commands.js";

export const help = (command, rl) => {
    if (command !== "help") console.error("Commande invalide.");
    console.group("Veuillez utiliser une des commandes suivantes :");

    console.table(commands);
    console.groupEnd();
    rl.prompt();
};
