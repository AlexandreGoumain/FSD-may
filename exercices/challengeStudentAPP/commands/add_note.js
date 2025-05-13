import { data, formatedNote, writeData } from "../config.js";
import { findString } from "./find_string.js";

export const addNote = (name, note) => {
    const student = findString(name);

    if (student) {
        const noteNumber = formatedNote(note);

        if (noteNumber !== undefined || null) {
            student.notes.push(noteNumber);
            writeData(data);
            console.log(`Note ajoutée à ${student.name}`);
        }
    } else {
        console.log("Aucun élève trouvé.");
    }
};
