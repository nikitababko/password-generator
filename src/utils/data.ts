import { AlphabetType, RegExpsType } from '../index.types';

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
    NoSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
    NoAmbiguousChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&*+-=?@^_|',
    AllChars: function () {
        return (
            (this as any).UppersChars +
            (this as any).LowersChars +
            (this as any).NumbersChars +
            (this as any).SymbolChars
        );
    },
};

/**
 * @description Regular expressions
 */
export const RegExps: RegExpsType = {
    WithoutBeginNumber: /^\d/,
    WithoutBeginSymbol: /^(?:.*[!";#$%&'()*+,-./:;<=>?@^_{|}~])/,
    WithoutDuplicates: /(\w)\1{1}/g,
};
