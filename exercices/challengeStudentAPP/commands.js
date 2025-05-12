export const commands = [
    {
        name: "list",
        description: "Liste tout les élèves.",
    },
    {
        name: "find <string>",
        description:
            "Cherche puis affiche les infos d'un élève (par son nom) si il existe.(ex: find khan)",
    },
    {
        name: "more <number>",
        description:
            "Filtre les élèves en fonction de leur moyenne (ex: more 15)",
    },
    {
        name: "less <number>",
        description:
            "Filtre les élèves en fonction de leur moyenne (ex: less 15)",
    },
    {
        name: "exit",
        description: "Quitte le programme.",
    },
];
