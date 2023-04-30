"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutDuplicates = void 0;
const data_1 = require("./data");
const getRandomNumber_1 = require("./getRandomNumber");
/**
 * @description Get string without duplicates
 */
const getStringWithoutDuplicates = (str) => {
    return str.replaceAll(data_1.RegExps.Duplicates, () => data_1.Alphabet.AllChars()[(0, getRandomNumber_1.getRandomNumber)(data_1.Alphabet.AllChars().length)] +
        data_1.Alphabet.AllChars()[(0, getRandomNumber_1.getRandomNumber)(data_1.Alphabet.AllChars().length)]);
};
exports.getStringWithoutDuplicates = getStringWithoutDuplicates;
//# sourceMappingURL=getStringWithoutDuplicates.js.map