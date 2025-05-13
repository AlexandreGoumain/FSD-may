import dotenv from "dotenv";
import readline from "readline";
import * as commands from "./commands/index.js";

dotenv.config({
    path: "exercices/challengeStudentAPP/.env",
});

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
            commands.list(rl);
            break;
        case "find":
            commands.findString(commandArgs.join(" "), rl);
            break;
        case "more":
            commands.moreNumber(commandArgs.join(" "), rl);
            break;
        case "less":
            commands.lessNumber(commandArgs.join(" "), rl);
            break;
        case "exit":
            console.log("Fermeture de l'application...");
            rl.close();
            break;
        case "add":
            if (commandArgs[0] === "note") {
                commands.addNote(rl);
            } else if (commandArgs[0] === "mention") {
                commands.addMention(rl);
            } else {
                console.log(
                    "Commande invalide. Utilisez 'add note' ou 'add mention'"
                );
            }
            break;
        default:
            commands.help(commandName, rl);
            break;
    }
    rl.prompt();
});
