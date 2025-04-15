const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const randomChar = () => {
    const char = alphabet[Math.floor(Math.random() * alphabet.length)];
    return isNaN(char) && Math.random() > 0.5 ? char.toLowerCase() : char;
};

const randomCode = (length = 16) =>
    Array.from({ length }, randomChar).join("");

const generate = (amount = 1) =>
    Array.from({ length: amount }, () => `https://discord.com/gifts/${randomCode()}`).join("\n");
