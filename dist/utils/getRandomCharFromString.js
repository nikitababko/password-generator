"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCharFromString = void 0;
const getRandomNumber_1 = require("./getRandomNumber");
/**
 * @description Get random char from string
 */
const getRandomCharFromString = (str) => {
    return str.charAt((0, getRandomNumber_1.getRandomNumber)(str));
};
exports.getRandomCharFromString = getRandomCharFromString;
//# sourceMappingURL=getRandomCharFromString.js.map