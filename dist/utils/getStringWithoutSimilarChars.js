"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutSimilarChars = void 0;
const data_1 = require("./data");
const getFactor_1 = require("./getFactor");
const getStringWithoutSimilarChars = (str) => {
    return str.replaceAll(/[ilI1LoO0]/g, () => data_1.Include.NoSimilarChars[(0, getFactor_1.getFactor)(data_1.Include.NoSimilarChars)]);
};
exports.getStringWithoutSimilarChars = getStringWithoutSimilarChars;
//# sourceMappingURL=getStringWithoutSimilarChars.js.map