"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutAmbiguousChars = void 0;
const data_1 = require("./data");
const getRandomNumber_1 = require("./getRandomNumber");
/**
 * @description Get string without ambiguous chars
 */
const getStringWithoutAmbiguousChars = (str) => {
    return str.replaceAll(data_1.RegExps.AmbiguousChars, () => data_1.Alphabet.WithoutAmbiguousChars[(0, getRandomNumber_1.getRandomNumber)(data_1.Alphabet.WithoutAmbiguousChars)]);
};
exports.getStringWithoutAmbiguousChars = getStringWithoutAmbiguousChars;
//# sourceMappingURL=getStringWithoutAmbiguousChars.js.map