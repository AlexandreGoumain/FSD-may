import * as commands from "./commands/index.js";

process.stdout.write("Que voulez-vous faire ? ");

process.stdin.on("data", (data) => {
    const command = data.toString().trim();
    const commandParts = command.split(" ");
    const commandName = commandParts[0];
    const commandArgs = commandParts.slice(1);

    if (commandName === "list") {
        commands.list();
    } else if (commandName === "find") {
        commands.findString(commandArgs.join(" "));
    } else if (commandName === "more") {
        commands.moreNumber(commandArgs.join(" "));
    } else if (commandName === "less") {
        commands.lessNumber(commandArgs.join(" "));
    } else if (commandName === "exit") {
        process.exit(0);
    } else {
        commands.help();
    }
});
