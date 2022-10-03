"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutDuplicates = void 0;
const data_1 = require("./data");
const getFactor_1 = require("./getFactor");
const getStringWithoutDuplicates = (str) => {
    return str.replaceAll(data_1.RegExps.WithoutDuplicates, () => data_1.Include.AllChars()[(0, getFactor_1.getFactor)(data_1.Include.AllChars().length)] +
        data_1.Include.AllChars()[(0, getFactor_1.getFactor)(data_1.Include.AllChars().length)]);
};
exports.getStringWithoutDuplicates = getStringWithoutDuplicates;
//# sourceMappingURL=getStringWithoutDuplicates.js.map