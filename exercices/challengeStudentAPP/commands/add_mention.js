import { data, writeData } from "../config.js";

export const addMention = (rl, studentName = null) => {
    const availableMentions = [
        process.env.MENTIONS_PASSABLE,
        process.env.MENTIONS_ASSEZ_BIEN,
        process.env.MENTIONS_BIEN,
        process.env.MENTIONS_TRES_BIEN,
    ].filter((mention) => mention);

    const askForName = () => {
        if (studentName) {
            const student = data.find(
                (student) =>
                    student.name &&
                    student.name
                        .toLowerCase()
                        .includes(studentName.toLowerCase())
            );

            if (student) {
                askForMention(student);
            } else {
                console.log("Aucun élève trouvé. Veuillez réessayer.");
                rl.question("Quel est le nom de l'élève ? ", (name) => {
                    studentName = name;
                    askForName();
                });
            }
        } else {
            rl.question("Quel est le nom de l'élève ? ", (name) => {
                const student = data.find(
                    (s) =>
                        s.name &&
                        s.name.toLowerCase().includes(name.toLowerCase())
                );

                if (student) {
                    askForMention(student);
                } else {
                    console.log("Aucun élève trouvé. Veuillez réessayer.");
                    askForName();
                }
            });
        }
    };

    const askForMention = (student) => {
        console.log("Mentions disponibles :");
        availableMentions.forEach((mention, index) => {
            console.log(`${index + 1}. ${mention}`);
        });

        rl.question("Entrez le numéro de la mention : ", (choice) => {
            const index = parseInt(choice, 10) - 1;

            if (index >= 0 && index < availableMentions.length) {
                student.mention = availableMentions[index];
                writeData(data);
                console.log(
                    `Mention "${student.mention}" ajoutée à ${student.name}`
                );
                rl.prompt();
            } else {
                console.log("Choix invalide. Veuillez réessayer.");
                askForMention(student);
            }
        });
    };

    askForName();
};
