import { Include, RegExps } from './data';
import { getFactor } from './getFactor';
import { GetStringWithoutDuplicatesType } from '../index.types';

export const getStringWithoutDuplicates: GetStringWithoutDuplicatesType = (str) => {
    return str.replaceAll(
        RegExps.WithoutDuplicates,
        () =>
            Include.AllChars()[getFactor<number>(Include.AllChars().length)] +
            Include.AllChars()[getFactor<number>(Include.AllChars().length)],
    );
};
