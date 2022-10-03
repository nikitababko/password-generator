"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCharFromString = void 0;
const getFactor_1 = require("./getFactor");
const getRandomCharFromString = (str) => {
    return str.charAt((0, getFactor_1.getFactor)(str));
};
exports.getRandomCharFromString = getRandomCharFromString;
//# sourceMappingURL=getRandomCharFromString.js.map