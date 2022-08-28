import { Include } from './data';
import { getFactor } from './getFactor';

export const getStringWithoutSimilarChars = (str: string): string => {
    return str.replaceAll(/[ilI1LoO0]/g, () => Include.NoSimilarChars[getFactor(Include.NoSimilarChars)]);
};
