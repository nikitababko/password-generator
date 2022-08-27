import { getFactor } from './getFactor';

export const getStringWithoutSequentialChars = (str: string) => {
    return str
        .split('')
        .map((ch, index, array) => {
            if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + 1]))) {
                if (Number(array[index]) + 1 === Number(array[index + 1])) {
                    return getFactor(24);
                }
            }

            return ch;
        })
        .join('');
};
