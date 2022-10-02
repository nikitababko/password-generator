"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCharFromString = void 0;
var getFactor_1 = require("./getFactor");
var getRandomCharFromString = function (str) {
    return str.charAt((0, getFactor_1.getFactor)(str));
};
exports.getRandomCharFromString = getRandomCharFromString;
//# sourceMappingURL=getRandomCharFromString.js.map