import fs from "node:fs";
import path from "node:path";

const pathToStudentFile = path.join(process.cwd(), "data", "student.json");

const data = JSON.parse(
    fs.readFileSync(pathToStudentFile, { encoding: "utf-8" })
);

const writeData = (data) => {
    fs.writeFileSync(pathToStudentFile, JSON.stringify(data, null, 2), "utf-8");
};

const formatedNote = (note) => {
    const value = Number(note);

    if (isNaN(value)) {
        console.log("Veuillez entrer une valeur numérique");
        return;
    }

    if (value < 0 || value > 20) {
        console.log("La valeur doit être comprise entre 0 et 20");
        return;
    }

    return value;
};

export { data, formatedNote, pathToStudentFile, writeData };
