import { Include } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';

export const getStringWithoutSequentialChars = (str: string): any => {
    return str
        .split('')
        .map((char, index, array) => {
            if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + 1]))) {
                if (Number(array[index]) + 1 === Number(array[index + 1])) {
                    return getRandomCharFromString(Include.AllChars());
                }
            }

            return char;
        })
        .join('');
};
