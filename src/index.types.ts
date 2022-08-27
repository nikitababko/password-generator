export type ArgsType = Partial<{
    length: number;
    quantity: number;
    includeNumbers: boolean;
    dontBeginWithANumberOrSymbol: boolean;
    includeLowerCaseChars: boolean;
    includeUpperCaseChars: boolean;
    includeSymbols: boolean;
    noSimilarChars: boolean;
    noSequentialChars: boolean;
}>;

export type IncludeType = {
    UppersChars: string;
    LowersChars: string;
    NumbersChars: string;
    SymbolChars: string;
    SimilarChars: string;
    NoSimilarChars: string;
    AllChars: () => string;
};
