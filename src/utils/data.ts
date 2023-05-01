import type { AlphabetType, RegExpsType } from '../index.types';

/**
 * @description Characters alphabet
 */
export const Alphabet: AlphabetType = {
    UppersChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowersChars: 'abcdefghijklmnopqrstuvwxyz',
    NumbersChars: '1234567890',
    SymbolChars: `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`,
    SimilarChars: 'ilI1LoO0',
    AmbiguousChars: '{}[]()/\'"`~,;:.<>',
    WithoutSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
    WithoutAmbiguousChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&*+-=?@^_|',
    AllChars() {
        return this.UppersChars + this.LowersChars + this.NumbersChars + this.SymbolChars;
    },
};

/**
 * @description Regular expressions
 */
export const RegExps: RegExpsType = {
    StartWithANumber: /^\d/,
    StartWithASymbol: /^(?:.*[!";#$%&'()*+,-./:;<=>?@^_{|}~])/,
    Duplicates: /(\w)\1{1}/g,
    SimilarChars: /[ilI1LoO0]/g,
    AmbiguousChars: /[{}[\]()/\\'"`~,;:.<>]/g,
};
