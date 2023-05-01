import type { GetRandomCharFromStringType } from '../index.types';
import { getRandomNumber } from './getRandomNumber';

/**
 * @description Get random char from string
 */
export const getRandomCharFromString: GetRandomCharFromStringType = (str) => {
    return str.charAt(getRandomNumber<string>(str));
};
