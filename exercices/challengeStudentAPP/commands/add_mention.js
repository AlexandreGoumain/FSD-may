import { data, writeData } from "../config.js";

export const addMention = (rl, studentName = null) => {
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
                calculateAndAddMention(student);
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
                    calculateAndAddMention(student);
                } else {
                    console.log("Aucun élève trouvé. Veuillez réessayer.");
                    askForName();
                }
            });
        }
    };

    const calculateAndAddMention = (student) => {
        if (!student.notes || student.notes.length === 0) {
            console.log(
                "L'étudiant n'a pas de notes. Impossible de calculer une mention."
            );
            rl.prompt();
            return;
        }

        const sum = student.notes.reduce((acc, note) => acc + note, 0);
        const average = sum / student.notes.length;

        let mention;
        if (average >= 16) {
            mention = process.env.MENTIONS_TRES_BIEN;
        } else if (average >= 14) {
            mention = process.env.MENTIONS_BIEN;
        } else if (average >= 12) {
            mention = process.env.MENTIONS_ASSEZ_BIEN;
        } else if (average >= 10) {
            mention = process.env.MENTIONS_PASSABLE;
        } else {
            console.log(
                `Moyenne insuffisante (${average.toFixed(
                    2
                )}) pour obtenir une mention.`
            );
            rl.prompt();
            return;
        }

        student.mention = mention;
        writeData(data);
        console.log(`Moyenne: ${average.toFixed(2)}`);
        console.log(`Mention "${student.mention}" ajoutée à ${student.name}`);
        rl.prompt();
    };

    askForName();
};
