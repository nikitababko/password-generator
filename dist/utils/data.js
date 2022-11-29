"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExps = exports.Include = void 0;
/**
 * @description Chars dictionary
 */
exports.Include = {
    UppersChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowersChars: 'abcdefghijklmnopqrstuvwxyz',
    NumbersChars: '1234567890',
    SymbolChars: `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`,
    SimilarChars: 'ilI1LoO0',
    NoSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
    AllChars: function () {
        return (this.UppersChars +
            this.LowersChars +
            this.NumbersChars +
            this.SymbolChars);
    },
};
/**
 * @description Regular expressions
 */
exports.RegExps = {
    WithoutBeginNumber: /^\d/,
    WithoutBeginSymbol: /^(?:.*[!";#$%&'()*+,-./:;<=>?@^_{|}~])/,
    WithoutDuplicates: /(\w)\1{1}/g,
};
//# sourceMappingURL=data.js.map