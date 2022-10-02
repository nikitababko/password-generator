"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutSequentialChars = void 0;
var data_1 = require("./data");
var getRandomCharFromString_1 = require("./getRandomCharFromString");
var getStringWithoutSequentialChars = function (str) {
    return str
        .split('')
        .map(function (char, index, array) {
        if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + 1]))) {
            if (Number(array[index]) + 1 === Number(array[index + 1])) {
                return (0, getRandomCharFromString_1.getRandomCharFromString)(data_1.Include.AllChars());
            }
        }
        return char;
    })
        .join('');
};
exports.getStringWithoutSequentialChars = getStringWithoutSequentialChars;
//# sourceMappingURL=getStringWithoutSequentialChars.js.map