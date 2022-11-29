"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
/**
 * @description Get random number
 */
const getRandomNumber = (value) => {
    const v = Number(typeof value === 'string' ? value.length : value);
    return Math.floor(Math.random() * v);
};
exports.getRandomNumber = getRandomNumber;
//# sourceMappingURL=getRandomNumber.js.map