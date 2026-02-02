console.log(true - false); // ToNumber(true) return 1 and ToNumber(false) return 0
console.log(undefined - 3); // ToNumber(undefined) returns Nan and Nan - anyNumber = NaN

console.log(null - 5); // ToNumber(null) returns 0

console.log("123" - 10); // ToNumber("123") returns 123 and 123 - 10 = 113

console.log("abcd" - 5); // ToNumber("abcd") returns Nan because this string cannot be parsed a number

// console.log(Symbol("123") - 30); // gives typeError

console.log("0xaf" - 1); // 0xaf, is a string but in the starting we have 0x which denotes start of hexadecimal number, so if we can convert this string to a valid hexadecimal, we will do it
// ToNumber("0xaf") -> 175

console.log("0xz" - 1); // returns Nan because z is not a valid hexadecimal number

console.log(Symbol('$') - 5); // ToNumber(Symbol('$')) returns TypeError








