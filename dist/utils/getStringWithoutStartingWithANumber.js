import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { FIRST_ELEMENT } from '../constants';
/**
 * @description Get string without start with a number
 */
export const getStringWithoutStartingWithANumber = (str) => {
    var _a;
    return str.replace((_a = str.at(FIRST_ELEMENT)) !== null && _a !== void 0 ? _a : '', getRandomCharFromString(`${Alphabet.LowerChars}${Alphabet.UpperChars}`));
};
//# sourceMappingURL=getStringWithoutStartingWithANumber.js.map