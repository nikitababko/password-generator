import { Include } from './data';
import { getFactor } from './getFactor';
import { GetStringWithoutSimilarCharsType } from '../index.types';

export const getStringWithoutSimilarChars: GetStringWithoutSimilarCharsType = (str) => {
    return str.replaceAll(/[ilI1LoO0]/g, () => Include.NoSimilarChars[getFactor<string>(Include.NoSimilarChars)]);
};
