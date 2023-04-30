Object.defineProperty(exports,"__esModule",{value:!0}),exports.generatePassword=void 0;const t=require("./utils");exports.generatePassword=({length:e=6,quantity:r=1,includeNumbers:i=!0,includeLowerCaseChars:o=!0,includeUpperCaseChars:a=!0,includeSymbols:s=!0,noSimilarChars:n,noSequentialChars:h,dontStartWithANumber:u,dontStartWithASymbol:g,noDuplicatesChars:l,noAmbiguousChars:m})=>{const S=[];for(let C=0;C<r;C++){let r="";for(let n=0;n<e;n++)a&&(r+=(0,t.getRandomCharFromString)(t.Alphabet.UppersChars)),o&&(r+=(0,t.getRandomCharFromString)(t.Alphabet.LowersChars)),i&&(r+=(0,t.getRandomCharFromString)(t.Alphabet.NumbersChars)),s&&(r+=(0,t.getRandomCharFromString)(t.Alphabet.SymbolChars));let C=r.slice(0,e);u&&t.RegExps.WithoutBeginNumber.test(C[0])&&(C=(0,t.getStringWithoutBeginNumber)(C)),g&&t.RegExps.WithoutBeginSymbol.test(C[0])&&(C=(0,t.getStringWithoutBeginSymbol)(C)),h&&(C=(0,t.getStringWithoutSequentialChars)(C)),n&&(C=(0,t.getStringWithoutSimilarChars)(C)),m&&(C=(0,t.getStringWithoutAmbiguousChars)(C)),l&&(C=(0,t.getStringWithoutDuplicates)(C)),S.push(C)}return S};
