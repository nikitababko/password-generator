"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutSequentialChars = void 0;
const data_1 = require("./data");
const getRandomCharFromString_1 = require("./getRandomCharFromString");
const getStringWithoutSequentialChars = (str) => {
    return str
        .split('')
        .map((char, index, array) => {
        if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + 1]))) {
            if (Number(array[index]) + 1 === Number(array[index + 1])) {
                return (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Include.AllChars());
            }
        }
        return char;
    })
        .join('');
};
exports.getStringWithoutSequentialChars = getStringWithoutSequentialChars;
//# sourceMappingURL=getStringWithoutSequentialChars.js.map