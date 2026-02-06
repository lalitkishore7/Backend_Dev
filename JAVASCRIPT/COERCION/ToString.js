console.log("Lalit" + "Kishor");
// Both of them are already a string,
// so ToPrimitive conversion will also be a sting
// and we concatenate them

console.log(undefined + "node");
// ToPrimitive conversion converts undefined into a string

console.log("5" + null);
// null will converts into a string

console.log(true + "Lalit");
// true or false converts into a string