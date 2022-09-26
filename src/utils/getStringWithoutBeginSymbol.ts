import { Include } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { GetStringWithoutBeginSymbolType } from '../index.types';

export const getStringWithoutBeginSymbol: GetStringWithoutBeginSymbolType = (str) => {
    return str.replace(str[0], getRandomCharFromString(Include.LowersChars));
};
