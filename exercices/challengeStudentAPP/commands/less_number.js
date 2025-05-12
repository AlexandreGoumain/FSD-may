import { data } from "../config.js";

export const lessNumber = (string) => {
    const value = Number(string);

    if (isNaN(value)) {
        console.log("Veuillez entrer une valeur numérique après 'less'");
        return;
    }

    if (value < 0 || value > 20) {
        console.log("La valeur doit être comprise entre 0 et 20");
        return;
    }

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
