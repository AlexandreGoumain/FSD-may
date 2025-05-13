import { data } from "../config.js";

export const findString = (string, rl) => {
    if (!string || string.trim() === "") {
        askForName(rl);
    } else {
        processSearch(string.toLowerCase().trim(), rl);
    }
};

const askForName = (rl) => {
    rl.question("Quel est le nom de l'élève à chercher ? ", (name) => {
        processSearch(name.toLowerCase().trim(), rl);
    });
};

const processSearch = (search, rl) => {
    if (!search) {
        console.log("Veuillez préciser un nom à chercher.");
        rl.question(
            "Voulez-vous essayer une autre recherche ? (oui/non) ",
            (answer) => {
                if (answer.toLowerCase() === "oui") {
                    askForName(rl);
                } else {
                    console.log("Retour au menu principal.");
                    rl.prompt();
                }
            }
        );
        return null;
    }

    const student = data.find(
        (student) => student.name && student.name.toLowerCase().includes(search)
    );

    if (student) {
        console.log(student);
        rl.prompt();
        return student;
    } else {
        console.log("Aucun élève trouvé.");
        rl.question(
            "Voulez-vous essayer une autre recherche ? (oui/non) ",
            (answer) => {
                if (answer.toLowerCase() === "oui") {
                    askForName(rl);
                } else {
                    console.log("Retour au menu principal.");
                    rl.prompt();
                }
            }
        );
        return null;
    }
};
