export declare type ArgsType = Partial<{
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
export declare type GeneratePasswordType = (args: ArgsType) => string[];
export declare type AlphabetType = {
    UppersChars: string;
    LowersChars: string;
    NumbersChars: string;
    SymbolChars: string;
    SimilarChars: string;
    AmbiguousChars: string;
    WithoutSimilarChars: string;
    WithoutAmbiguousChars: string;
    AllChars: () => string;
};
export declare type RegExpsType = Record<'StartWithANumber' | 'StartWithASymbol' | 'Duplicates' | 'SimilarChars' | 'AmbiguousChars', RegExp>;
export declare type GetRandomNumberType = <T>(value: T) => number;
export declare type GetRandomCharFromStringType = (str: string) => string;
export declare type GetStringWithoutStartingWithANumberType = (str: string) => string;
export declare type GetStringWithoutStartWithASymbolType = (str: string) => string;
export declare type GetStringWithoutDuplicatesType = (str: string) => string;
export declare type GetStringWithoutSequentialCharsType = (str: string) => string;
export declare type GetStringWithoutSimilarCharsType = (str: string) => string;
export declare type GetStringWithoutAmbiguousCharsType = (str: string) => string;
//# sourceMappingURL=index.types.d.ts.map