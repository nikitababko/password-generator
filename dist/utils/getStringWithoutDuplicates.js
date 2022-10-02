"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutDuplicates = void 0;
var data_1 = require("./data");
var getFactor_1 = require("./getFactor");
var getStringWithoutDuplicates = function (str) {
    return str.replaceAll(data_1.RegExps.WithoutDuplicates, function () {
        return data_1.Include.AllChars()[(0, getFactor_1.getFactor)(data_1.Include.AllChars().length)] +
            data_1.Include.AllChars()[(0, getFactor_1.getFactor)(data_1.Include.AllChars().length)];
    });
};
exports.getStringWithoutDuplicates = getStringWithoutDuplicates;
//# sourceMappingURL=getStringWithoutDuplicates.js.map