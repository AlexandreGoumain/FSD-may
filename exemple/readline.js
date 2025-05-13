import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question("Quel est votre nom ?", (name) => {
//     console.log(`Bonjour ${name}`);
//     rl.close();
// });

rl.setPrompt("Mon processus >> ");
rl.prompt();

rl.on("line", (line) => {
    switch (line.trim()) {
        case "salut":
            console.log("les amis");
            break;
        case "exit":
            console.log("Fermeture de l'application...");
            rl.close();
            break;
        case "name":
            rl.question("Quel est votre nom ?", (name) => {
                rl.question("Quel est votre prénom ?", (prenom) => {
                    console.log(`Bonjour ${name} ${prenom}`);
                    rl.prompt();
                });
            });
        default:
            console.log("Je ne comprends pas");
            break;
    }
    rl.prompt();
});
