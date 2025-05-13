import { data } from "../config.js";

export const findString = (string) => {
    const search = string.toLowerCase().trim();

    if (!search) {
        console.log("Veuillez préciser un nom à chercher.");
        return null;
    }

    const student = data.find(
        (student) => student.name && student.name.toLowerCase().includes(search)
    );

    if (student) {
        console.log(student);
        return student;
    } else {
        console.log("Aucun élève trouvé.");
        return null;
    }
};
