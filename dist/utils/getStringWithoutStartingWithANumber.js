"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutStartingWithANumber = void 0;
const data_1 = require("./data");
const getRandomCharFromString_1 = require("./getRandomCharFromString");
const constants_1 = require("../constants");
/**
 * @description Get string without start with a number
 */
const getStringWithoutStartingWithANumber = (str) => {
    var _a;
    return str.replace((_a = str.at(constants_1.FIRST_ELEMENT)) !== null && _a !== void 0 ? _a : '', (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Alphabet.LowersChars));
};
exports.getStringWithoutStartingWithANumber = getStringWithoutStartingWithANumber;
//# sourceMappingURL=getStringWithoutStartingWithANumber.js.map