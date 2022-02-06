console.log('unKnown.ts');

const kansu = (): number => 43;

let numberAny: any = kansu();
console.log(numberAny);

let numberUnKnown: unknown = kansu();
console.log(numberUnKnown);

let sumAny = numberAny + 10;
//unknownは計算できない
//let sumUnKnown = numberUnKnown + 10;
console.log(typeof numberUnKnown);

//let sumUnKnown = numberUnKnown + 10;
