let userName = "";
let randomNumber = Math.floor(Math.random() * 100);
let attempts = 0;
let maxAttempts = 10;
let gameStarted = false;

process.stdout.write("Quel est votre nom ? ");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();

    if (!gameStarted) {
        userName = input;
        gameStarted = true;
        process.stdout.write(
            `${userName}, devinez le nombre aléatoire entre 0 et 100, vous avez ${maxAttempts} essais : `
        );
        return;
    }

    const userGuess = Number(input);

    if (isNaN(userGuess)) {
        process.stdout.write(
            `Veuillez entrer un nombre (cet essai n'est pas comptabilisé), ${userName} : `
        );
        return;
    }

    if (userGuess < 0 || userGuess > 100) {
        process.stdout.write(
            `Veuillez entrer un nombre entre 0 et 100 (cet essai n'est pas comptabilisé), ${userName} : `
        );
        return;
    }

    attempts++;

    if (userGuess < randomNumber) {
        process.stdout.write(
            `Le nombre est plus grand ! (${
                maxAttempts - attempts
            } essais restant) Essayez encore : `
        );
    } else if (userGuess > randomNumber) {
        process.stdout.write(
            `Le nombre est plus petit ! (${
                maxAttempts - attempts
            } essais restant) Essayez encore : `
        );
    } else {
        process.stdout.write(
            `Bravo ${userName}, vous avez gagné en ${attempts} essais !\n`
        );
        process.exit();
    }

    if (attempts === maxAttempts) {
        process.stdout.write(
            `Vous avez perdu, ${userName}. Le nombre était ${randomNumber}.\n`
        );
        process.exit();
    }
});
