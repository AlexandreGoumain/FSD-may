import fs from "node:fs";
import path from "node:path";

const pathToStudentFile = path.join(process.cwd(), "data", "student.json");

const data = JSON.parse(
    fs.readFileSync(pathToStudentFile, { encoding: "utf-8" })
);

export { data, pathToStudentFile };
