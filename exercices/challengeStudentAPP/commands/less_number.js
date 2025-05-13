import { data, formatedNote } from "../config.js";

export const lessNumber = (string, rl) => {
    const value = formatedNote(string);

    const students = data.filter(
        (student) =>
            Array.isArray(student.notes) &&
            student.notes.some((note) => note < value)
    );

    if (students.length > 0) {
        console.table(students);

        rl.question(
            "Voulez-vous voir les notes détaillées pour ces étudiants ? (oui/non) ",
            (answer) => {
                if (answer.toLowerCase() === "oui") {
                    students.forEach((student) => {
                        console.log(
                            `${student.name}: ${student.notes.join(", ")}`
                        );
                        const lowNotes = student.notes.filter(
                            (note) => note < value
                        );
                        console.log(
                            `Notes inférieures à ${value}: ${lowNotes.join(
                                ", "
                            )}`
                        );
                        console.log("-----------------");
                    });
                }

                rl.prompt();
            }
        );
    } else {
        console.log("Aucun élève trouvé.");
        rl.prompt();
    }
};
