/**
 * @description Get random number
 */
export const getRandomNumber = (value) => {
    const v = Number(typeof value === 'string' ? value.length : value);
    return Math.floor(Math.random() * v);
};
//# sourceMappingURL=getRandomNumber.js.map