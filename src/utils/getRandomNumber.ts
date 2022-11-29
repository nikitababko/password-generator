import { GetRandomNumberType } from '../index.types';

/**
 * @description Get random number
 */
export const getRandomNumber: GetRandomNumberType = (value) => {
    const v = Number(typeof value === 'string' ? value.length : value);

    return Math.floor(Math.random() * v);
};
