"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutSequentialChars = void 0;
const data_1 = require("./data");
const getRandomCharFromString_1 = require("./getRandomCharFromString");
const constants_1 = require("../constants");
/**
 * @description Get string without sequential chars
 */
const getStringWithoutSequentialChars = (str) => {
    return str
        .split('')
        .map((char, index, array) => {
        if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + constants_1.NEXT_CHAR]))) {
            if (Number(array[index]) + constants_1.NEXT_CHAR === Number(array[index + constants_1.NEXT_CHAR])) {
                return (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Alphabet.AllChars());
            }
        }
        return char;
    })
        .join('');
};
exports.getStringWithoutSequentialChars = getStringWithoutSequentialChars;
//# sourceMappingURL=getStringWithoutSequentialChars.js.map