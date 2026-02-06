console.log(!0);
/*
* 0 -> false
* ToBoolean(0) -> false
* !0 -> true
*/

console.log(!(-7))
/*
* -7 -> truthy
* ToBoolean(-7) -> true
* !(-7) -> false
*/

console.log(!(console.log(0)));

console.log("123" === 123);