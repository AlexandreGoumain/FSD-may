import { data, formatedNote, writeData } from "../config.js";
import { findString } from "./find_string.js";

export const addNote = (rl, studentName = null) => {
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
                askForNote(student);
            } else {
                console.log("Aucun élève trouvé. Veuillez réessayer.");

                rl.question("Quel est le nom de l'élève ? ", (name) => {
                    studentName = name;
                    askForName();
                });
            }
        } else {
            rl.question("Quel est le nom de l'élève ? ", (name) => {
                const student = findString(name, rl);

                if (student) {
                    askForNote(student);
                } else {
                    console.log("Aucun élève trouvé. Veuillez réessayer.");
                    askForName();
                }
            });
        }
    };

    const askForNote = (student) => {
        rl.question("Quel est la note de l'élève ? ", (note) => {
            const noteNumber = formatedNote(note);

            if (noteNumber !== undefined && noteNumber !== null) {
                student.notes.push(noteNumber);
                writeData(data);
                console.log(`Note ajoutée à ${student.name}`);
                rl.prompt();
            } else {
                console.log("Note invalide. Veuillez réessayer.");
                askForNote(student);
            }
        });
    };

    askForName();
};
