Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./utils"),e=require("./constants");exports.default=({length:r=e.PASSWORD_LENGTH,quantity:i=e.PASSWORD_QUANTITY,includeNumbers:a=!0,includeLowerCaseChars:s=!0,includeUpperCaseChars:u=!0,includeSymbols:l=!0,excludeSimilarChars:n,excludeSequentialChars:o,excludeDuplicatesChars:h,excludeAmbiguousChars:S,dontStartingWithANumber:g,dontStartingWithASymbol:m})=>{var d,C;const b=[];for(let p=0;p<i;p++){let i="";for(let e=0;e<r;e++)u&&(i+=(0,t.getRandomCharFromString)(t.Alphabet.UppersChars)),s&&(i+=(0,t.getRandomCharFromString)(t.Alphabet.LowersChars)),a&&(i+=(0,t.getRandomCharFromString)(t.Alphabet.NumbersChars)),l&&(i+=(0,t.getRandomCharFromString)(t.Alphabet.SymbolChars));let p=i.slice(e.FIRST_ELEMENT,r);g&&t.RegExps.StartWithANumber.test(null!==(d=p.at(e.FIRST_ELEMENT))&&void 0!==d?d:"")&&(p=(0,t.getStringWithoutStartingWithANumber)(p)),m&&t.RegExps.StartWithASymbol.test(null!==(C=p.at(e.FIRST_ELEMENT))&&void 0!==C?C:"")&&(p=(0,t.getStringWithoutStartingWithASymbol)(p)),o&&(p=(0,t.getStringWithoutSequentialChars)(p)),n&&(p=(0,t.getStringWithoutSimilarChars)(p)),S&&(p=(0,t.getStringWithoutAmbiguousChars)(p)),h&&(p=(0,t.getStringWithoutDuplicates)(p)),b.push(p)}return b};
