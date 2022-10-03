import { GetFactorType } from '../index.types';

export const getFactor: GetFactorType = (value) => {
    const v = Number(typeof value === 'string' ? value.length : value);

    return Math.floor(Math.random() * v);
};
