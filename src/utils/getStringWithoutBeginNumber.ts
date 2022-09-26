import { Include } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { GetStringWithoutBeginNumberType } from '../index.types';

export const getStringWithoutBeginNumber: GetStringWithoutBeginNumberType = (str) => {
    return str.replace(str[0], getRandomCharFromString(Include.LowersChars));
};
