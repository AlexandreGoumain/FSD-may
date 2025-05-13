import { data } from "../config.js";

export const list = (rl) => {
    console.table(data);
    rl.prompt();
};
