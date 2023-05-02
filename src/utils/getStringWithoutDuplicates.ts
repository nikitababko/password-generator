import { Alphabet, RegExps } from './data';
import { getRandomNumber } from './getRandomNumber';
import type { GetStringWithoutDuplicatesType } from '../index.types';

/**
 * @description Get string without duplicates
 */
export const getStringWithoutDuplicates: GetStringWithoutDuplicatesType = (str) => {
    return str.replaceAll(
        RegExps.Duplicates,
        () =>
            Alphabet.AllChars()[getRandomNumber<number>(Alphabet.AllChars().length)] +
            Alphabet.AllChars()[getRandomNumber<number>(Alphabet.AllChars().length)],
    );
};
