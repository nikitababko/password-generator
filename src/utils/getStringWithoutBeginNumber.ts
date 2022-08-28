import { Include } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';

export const getStringWithoutBeginNumber = (str: string): string => {
    return str.replace(str[0], getRandomCharFromString(Include.LowersChars));
};
