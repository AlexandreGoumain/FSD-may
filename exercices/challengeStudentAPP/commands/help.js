import { commands } from "../commands.js";

export const help = () => {
    console.error("Commande invalide.");
    console.group("Veuillez utiliser une des commandes suivantes :");

    console.table(commands);
    console.groupEnd();
};
