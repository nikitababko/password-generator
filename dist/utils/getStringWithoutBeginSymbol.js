"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutBeginSymbol = void 0;
var data_1 = require("./data");
var getRandomCharFromString_1 = require("./getRandomCharFromString");
var getStringWithoutBeginSymbol = function (str) {
    return str.replace(str[0], (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Include.LowersChars));
};
exports.getStringWithoutBeginSymbol = getStringWithoutBeginSymbol;
//# sourceMappingURL=getStringWithoutBeginSymbol.js.map