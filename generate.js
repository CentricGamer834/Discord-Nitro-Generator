const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const truefalse = () => (Math.random() > 0.5 ? true : false);

const randomFromAlphabet = (amount) => {
    let winners = "";
    for (let i = 0; i < amount; i++) {
        let winner = alphabet[Math.floor(Math.random() * alphabet.length)];

        if (truefalse() && isNaN(winner)) winner = winner.toLowerCase();

        winners += winner;
    }

    return winners;
};

const generate = (amount = 1) => {
    const winners = [];

    for (let i = 0; i < amount; i++) {
        const winner = "https://discord.com/gifts/" + randomFromAlphabet(16);
        winners.push(winner);
    }

    return winners.join("\n");
};
