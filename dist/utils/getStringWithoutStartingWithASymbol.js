import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { FIRST_ELEMENT } from '../constants';
/**
 * @description Get string without begin symbol
 */
export const getStringWithoutStartingWithASymbol = (str) => {
    var _a;
    return str.replace((_a = str.at(FIRST_ELEMENT)) !== null && _a !== void 0 ? _a : '', getRandomCharFromString(`${Alphabet.LowerChars}${Alphabet.UpperChars}`));
};
//# sourceMappingURL=getStringWithoutStartingWithASymbol.js.map