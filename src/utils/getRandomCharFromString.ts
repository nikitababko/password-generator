import { GetRandomCharFromStringType } from 'index.types';
import { getFactor } from './getFactor';

export const getRandomCharFromString: GetRandomCharFromStringType = (str) => {
    return str.charAt(getFactor<string>(str));
};
