/**
 * @description Characters alphabet
 */
export const Alphabet = {
    UpperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowerChars: 'abcdefghijklmnopqrstuvwxyz',
    NumberChars: '1234567890',
    SymbolChars: `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`,
    SimilarChars: 'ilI1LoO0',
    AmbiguousChars: '{}[]()/\'"`~,;:.<>',
    WithoutSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
    WithoutAmbiguousChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&*+-=?@^_|',
    AllChars() {
        return this.UpperChars + this.LowerChars + this.NumberChars + this.SymbolChars;
    },
};
/**
 * @description Regular expressions
 */
export const RegExps = {
    StartWithANumber: /^\d/,
    StartWithASymbol: /^[!";#$%&'()*+,-./:;<=>?@^_{|}~]/,
    Duplicates: /(\w)\1{1}/g,
    SimilarChars: /[ilI1LoO0]/g,
    AmbiguousChars: /[{}[\]()/\\'"`~,;:.<>]/g,
};
//# sourceMappingURL=data.js.map