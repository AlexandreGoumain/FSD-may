import { data } from "../config.js";

export const findString = (string) => {
    const search = string.slice(string.indexOf(" ") + 1).trim();

    if (!search) {
        console.log("Veuillez préciser un nom à chercher.");
        return;
    }

    const student = data.find(
        (student) =>
            student.name &&
            student.name.toLowerCase().includes(search.toLowerCase())
    );

    if (student) {
        console.log(student);
    } else {
        console.log("Aucun élève trouvé.");
    }
};
