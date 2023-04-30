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
    WithoutSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
    WithoutAmbiguousChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&*+-=?@^_|',
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
    StartWithANumber: /^\d/,
    StartWithASymbol: /^(?:.*[!";#$%&'()*+,-./:;<=>?@^_{|}~])/,
    Duplicates: /(\w)\1{1}/g,
    SimilarChars: /[ilI1LoO0]/g,
    AmbiguousChars: /[{}\[\]()/'"`~,;:.<>]/g,
};
//# sourceMappingURL=data.js.map