"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutStartingWithANumber = void 0;
const data_1 = require("./data");
const getRandomCharFromString_1 = require("./getRandomCharFromString");
/**
 * @description Get string without start with a number
 */
const getStringWithoutStartingWithANumber = (str) => {
    return str.replace(str[0], (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Alphabet.LowersChars));
};
exports.getStringWithoutStartingWithANumber = getStringWithoutStartingWithANumber;
//# sourceMappingURL=getStringWithoutStartingWithANumber.js.map