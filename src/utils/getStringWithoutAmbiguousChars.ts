import { Alphabet } from './data';
import { getRandomNumber } from './getRandomNumber';
import { GetStringWithoutAmbiguousCharsType } from '../index.types';

/**
 * @description Get string without ambiguous chars
 */
export const getStringWithoutAmbiguousChars: GetStringWithoutAmbiguousCharsType = (str) => {
    return str.replaceAll(
        /[{}\[\]()/'"`~,;:.<>]/g,
        () => Alphabet.NoAmbiguousChars[getRandomNumber<string>(Alphabet.NoAmbiguousChars)],
    );
};
