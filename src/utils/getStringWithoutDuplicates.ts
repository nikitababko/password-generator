import { Include, RegExps } from './data';
import { getRandomNumber } from './getRandomNumber';
import { GetStringWithoutDuplicatesType } from '../index.types';

/**
 * @description Get string without duplicates
 */
export const getStringWithoutDuplicates: GetStringWithoutDuplicatesType = (str) => {
    return str.replaceAll(
        RegExps.WithoutDuplicates,
        () =>
            Include.AllChars()[getRandomNumber<number>(Include.AllChars().length)] +
            Include.AllChars()[getRandomNumber<number>(Include.AllChars().length)],
    );
};
