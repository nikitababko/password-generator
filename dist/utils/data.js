"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExps = exports.Alphabet = void 0;
/**
 * @description Characters alphabet
 */
exports.Alphabet = {
    UppersChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowersChars: 'abcdefghijklmnopqrstuvwxyz',
    NumbersChars: '1234567890',
    SymbolChars: `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`,
    SimilarChars: 'ilI1LoO0',
    AmbiguousChars: '{}[]()/\'"`~,;:.<>',
    NoSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
    NoAmbiguousChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&*+-=?@^_|',
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