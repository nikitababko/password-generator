"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutBeginNumber = void 0;
var data_1 = require("./data");
var getRandomCharFromString_1 = require("./getRandomCharFromString");
var getStringWithoutBeginNumber = function (str) {
    return str.replace(str[0], (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Include.LowersChars));
};
exports.getStringWithoutBeginNumber = getStringWithoutBeginNumber;
//# sourceMappingURL=getStringWithoutBeginNumber.js.map