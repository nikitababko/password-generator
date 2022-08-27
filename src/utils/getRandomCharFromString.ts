import { getFactor } from './getFactor';

export const getRandomCharFromString = (str: string): string => {
    return str.charAt(getFactor(str));
};
