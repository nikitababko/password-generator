"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutBeginSymbol = void 0;
const data_1 = require("./data");
const getRandomCharFromString_1 = require("./getRandomCharFromString");
const getStringWithoutBeginSymbol = (str) => {
    return str.replace(str[0], (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Include.LowersChars));
};
exports.getStringWithoutBeginSymbol = getStringWithoutBeginSymbol;
//# sourceMappingURL=getStringWithoutBeginSymbol.js.map