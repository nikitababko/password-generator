export declare type ArgsType = Partial<{
    length: number;
    quantity: number;
    includeNumbers: boolean;
    dontStartWithANumber: boolean;
    dontStartWithASymbol: boolean;
    includeLowerCaseChars: boolean;
    includeUpperCaseChars: boolean;
    includeSymbols: boolean;
    noSimilarChars: boolean;
    noAmbiguousChars: boolean;
    noSequentialChars: boolean;
    noDuplicatesChars: boolean;
}>;
export declare type GeneratePasswordType = (args: ArgsType) => string[];
export declare type AlphabetType = {
    UppersChars: string;
    LowersChars: string;
    NumbersChars: string;
    SymbolChars: string;
    SimilarChars: string;
    AmbiguousChars: string;
    NoSimilarChars: string;
    NoAmbiguousChars: string;
    AllChars: () => string;
};
export declare type RegExpsType = Record<string, RegExp>;
export declare type GetRandomNumberType = <T>(value: T) => number;
export declare type GetRandomCharFromStringType = (str: string) => string;
export declare type GetStringWithoutBeginNumberType = (str: string) => string;
export declare type GetStringWithoutBeginSymbolType = (str: string) => string;
export declare type GetStringWithoutDuplicatesType = (str: string) => string;
export declare type GetStringWithoutSequentialCharsType = (str: string) => string;
export declare type GetStringWithoutSimilarCharsType = (str: string) => string;
export declare type GetStringWithoutAmbiguousCharsType = (str: string) => string;
//# sourceMappingURL=index.types.d.ts.map