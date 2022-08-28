import { Include, RegExps } from './data';
import { getFactor } from './getFactor';

export const getStringWithoutDuplicates = (str: string): string => {
    return str.replaceAll(
        RegExps.WithoutDuplicates,
        () =>
            Include.AllChars()[getFactor(Include.AllChars().length)] +
            Include.AllChars()[getFactor(Include.AllChars().length)],
    );
};
