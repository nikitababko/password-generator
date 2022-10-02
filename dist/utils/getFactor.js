"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFactor = void 0;
var getFactor = function (value) {
    var v = Number(typeof value === 'string' ? value.length : value);
    return Math.floor(Math.random() * v);
};
exports.getFactor = getFactor;
//# sourceMappingURL=getFactor.js.map