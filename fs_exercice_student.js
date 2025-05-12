const fs = require("node:fs");
const path = require("node:path");
const filePath = path.join(__dirname, "data", "student.txt");

function WriteInStudentFile(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log("data written in student.txt");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

try {
    fs.readFileSync(filePath, { encoding: "utf-8" });
} catch (error) {
    console.error(error);
}

const data = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));

let studentAverageSupTo17 = [];

const studentWithAverage = data.students.map((student) => {
    if (!student.notes || student.notes.length === 0) {
        student.moyenne = 0;
    } else {
        student.moyenne = parseFloat(
            (
                student.notes.reduce((acc, note) => acc + note, 0) /
                student.notes.length
            ).toFixed(2)
        );
    }
    return student;
});

const getStudentAverageSupTo17 = () => {
    studentWithAverage.forEach((student) => {
        if (student.moyenne > 17) {
            studentAverageSupTo17.push(student);
        }
    });
    return studentAverageSupTo17;
};

const bestStudent = getStudentAverageSupTo17().reduce((acc, student) => {
    if (student.moyenne > acc.moyenne) {
        return student;
    }
    return acc;
}, getStudentAverageSupTo17()[0]);

const students = studentWithAverage.sort((a, b) => b.moyenne - a.moyenne);

console.log("--------------------------------");
console.log("best student ==> ", bestStudent);

class Student {
    constructor(name, address, notes, moyenne) {
        this.name = name;
        this.address = address;
        this.notes = notes || [];
        this.moyenne = moyenne || 0;
    }
}

const newStudents = [
    new Student("Clarisse", "Marseille"),
    new Student("Sonia", "Paris"),
];

const dataToWrite = {
    students: [...students, ...newStudents],
};

console.table(students);
// WriteInStudentFile(dataToWrite);
