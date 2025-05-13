import readline from "readline";
import * as commands from "./commands/index.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt("Student APP >> ");
rl.prompt();

rl.on("line", (line) => {
    const command = line.toString().trim();
    const commandParts = command.split(" ");
    const commandName = commandParts[0];
    const commandArgs = commandParts.slice(1);

    switch (commandName) {
        case "list":
            commands.list();
            break;
        case "find":
            commands.findString(commandArgs.join(" "));
            break;
        case "more":
            commands.moreNumber(commandArgs.join(" "));
            break;
        case "less":
            commands.lessNumber(commandArgs.join(" "));
            break;
        case "exit":
            console.log("Fermeture de l'application...");
            rl.close();
            break;
        case "add":
            if (commandArgs[0] === "note" && commandArgs.length >= 3) {
                commands.addNote(commandArgs[1], commandArgs[2]);
            } else {
                console.log(
                    "Commande invalide. Utilisez 'add note [nom] [note]'"
                );
            }
            break;
        default:
            commands.help(commandName);
            break;
    }
    rl.prompt();
});
