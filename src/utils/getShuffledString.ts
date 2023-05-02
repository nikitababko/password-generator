import type { GetShuffledStringType } from '../index.types';

export const getShuffledString: GetShuffledStringType = (str) => {
    const splitStr = str.split('');
    const strLength = splitStr.length;

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    for (let i = strLength - 1; i > 0; i--) {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = splitStr[i];
        splitStr[i] = splitStr[j];
        splitStr[j] = tmp;
    }
    return splitStr.join('');
};
