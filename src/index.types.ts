export type ArgsType = Partial<{
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

export type GeneratePasswordType = (args: ArgsType) => string[];

export type AlphabetType = {
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

export type RegExpsType = Record<string, RegExp>;

export type GetRandomNumberType = <T>(value: T) => number;

export type GetRandomCharFromStringType = (str: string) => string;

export type GetStringWithoutBeginNumberType = (str: string) => string;

export type GetStringWithoutBeginSymbolType = (str: string) => string;

export type GetStringWithoutDuplicatesType = (str: string) => string;

export type GetStringWithoutSequentialCharsType = (str: string) => string;

export type GetStringWithoutSimilarCharsType = (str: string) => string;

export type GetStringWithoutAmbiguousCharsType = (str: string) => string;
