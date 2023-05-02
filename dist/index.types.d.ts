export type ArgsType = Partial<{
    length: number;
    quantity: number;
    includeNumbers: boolean;
    dontStartingWithANumber: boolean;
    dontStartingWithASymbol: boolean;
    includeLowerCaseChars: boolean;
    includeUpperCaseChars: boolean;
    includeSymbols: boolean;
    excludeSimilarChars: boolean;
    excludeAmbiguousChars: boolean;
    excludeSequentialChars: boolean;
    excludeDuplicatesChars: boolean;
}>;
export type GeneratePasswordType = (args: ArgsType) => string[];
export type AlphabetType = {
    UpperChars: string;
    LowerChars: string;
    NumberChars: string;
    SymbolChars: string;
    SimilarChars: string;
    AmbiguousChars: string;
    WithoutSimilarChars: string;
    WithoutAmbiguousChars: string;
    AllChars: () => string;
};
export type RegExpsType = Record<'StartWithANumber' | 'StartWithASymbol' | 'Duplicates' | 'SimilarChars' | 'AmbiguousChars', RegExp>;
export type GetRandomNumberType = <T>(value: T) => number;
export type GetRandomCharFromStringType = (str: string) => string;
export type GetStringWithoutStartingWithANumberType = (str: string) => string;
export type GetStringWithoutStartingWithASymbolType = (str: string) => string;
export type GetStringWithoutDuplicatesType = (str: string) => string;
export type GetStringWithoutSequentialCharsType = (str: string) => string;
export type GetStringWithoutSimilarCharsType = (str: string) => string;
export type GetStringWithoutAmbiguousCharsType = (str: string) => string;
export type GetShuffledStringType = (str: string) => string;
//# sourceMappingURL=index.types.d.ts.map