const fs = require("node:fs");

try {
    const data = fs.readFileSync("./data/titanic.txt", { encoding: "utf-8" });
    console.log("sync version ==> ", data);
} catch (error) {
    console.error(error);
}

fs.writeFile(
    "./data/test.txt",
    "test ca marche !",
    { encoding: "utf-8" },
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);
