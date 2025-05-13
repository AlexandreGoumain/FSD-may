import { data, formatedNote } from "../config.js";

export const lessNumber = (string) => {
    const value = formatedNote(string);

    const students = data.filter(
        (student) =>
            Array.isArray(student.notes) &&
            student.notes.some((note) => note < value)
    );

    if (students.length > 0) {
        console.table(students);
    } else {
        console.log("Aucun élève trouvé.");
    }
};
