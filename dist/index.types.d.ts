export declare type ArgsType = Partial<{
    length: number;
    quantity: number;
    includeNumbers: boolean;
    dontBeginWithANumber: boolean;
    dontBeginWithASymbol: boolean;
    includeLowerCaseChars: boolean;
    includeUpperCaseChars: boolean;
    includeSymbols: boolean;
    noSimilarChars: boolean;
    noSequentialChars: boolean;
    noDuplicatesChars: boolean;
}>;
export declare type GeneratePasswordType = (args: ArgsType) => string[];
export declare type IncludeType = {
    UppersChars: string;
    LowersChars: string;
    NumbersChars: string;
    SymbolChars: string;
    SimilarChars: string;
    NoSimilarChars: string;
    AllChars: () => string;
};
export declare type RegExpsType = Record<string, RegExp>;
export declare type GetFactorType = <T>(value: T) => number;
export declare type GetRandomCharFromStringType = (str: string) => string;
export declare type GetStringWithoutBeginNumberType = (str: string) => string;
export declare type GetStringWithoutBeginSymbolType = (str: string) => string;
export declare type GetStringWithoutDuplicatesType = (str: string) => string;
export declare type GetStringWithoutSequentialCharsType = (str: string) => string;
export declare type GetStringWithoutSimilarCharsType = (str: string) => string;
//# sourceMappingURL=index.types.d.ts.map