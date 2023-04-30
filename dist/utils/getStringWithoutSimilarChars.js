"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutSimilarChars = void 0;
const data_1 = require("./data");
const getRandomNumber_1 = require("./getRandomNumber");
/**
 * @description Get string without similar chars
 */
const getStringWithoutSimilarChars = (str) => {
    return str.replaceAll(data_1.RegExps.SimilarChars, () => data_1.Alphabet.WithoutSimilarChars[(0, getRandomNumber_1.getRandomNumber)(data_1.Alphabet.WithoutSimilarChars)]);
};
exports.getStringWithoutSimilarChars = getStringWithoutSimilarChars;
//# sourceMappingURL=getStringWithoutSimilarChars.js.map