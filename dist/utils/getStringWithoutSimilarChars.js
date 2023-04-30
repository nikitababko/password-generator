"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutSimilarChars = void 0;
const data_1 = require("./data");
const getRandomNumber_1 = require("./getRandomNumber");
/**
 * @description Get string without similar chars
 */
const getStringWithoutSimilarChars = (str) => {
    return str.replaceAll(/[ilI1LoO0]/g, () => data_1.Alphabet.NoSimilarChars[(0, getRandomNumber_1.getRandomNumber)(data_1.Alphabet.NoSimilarChars)]);
};
exports.getStringWithoutSimilarChars = getStringWithoutSimilarChars;
//# sourceMappingURL=getStringWithoutSimilarChars.js.map