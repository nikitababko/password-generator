const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`;

const random = (args: any) => {
    const { only } = args;
    const value = only ? 10 : 16;
    const randomIndex = Number(String(Math.random())[2]);

    return (
        numbers[randomIndex] + alphabetLowerCase[randomIndex] + alphabetUpperCase[randomIndex] + symbols[randomIndex]
    );
};

const passGen = (args: any): string => {
    const { length, only, quantity } = args;

    const pattern = Array(length).fill('#');
    const password = pattern.join('').replaceAll(/#/g, () => random({ only }));

    return password.slice(0, 16);
};

console.log(passGen({ length: 16, only: true, quantity: 3 }));
