"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithoutSimilarChars = void 0;
var data_1 = require("./data");
var getFactor_1 = require("./getFactor");
var getStringWithoutSimilarChars = function (str) {
    return str.replaceAll(/[ilI1LoO0]/g, function () { return data_1.Include.NoSimilarChars[(0, getFactor_1.getFactor)(data_1.Include.NoSimilarChars)]; });
};
exports.getStringWithoutSimilarChars = getStringWithoutSimilarChars;
//# sourceMappingURL=getStringWithoutSimilarChars.js.map