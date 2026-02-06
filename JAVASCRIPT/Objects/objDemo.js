const obj = {
    x : 10,
    y : 20,
}

const obj1 = {
  x: 10,
  y: 20,
};


Object.freeze(obj); // neither created add new property nor change old one
obj.x = 20;
obj.z = 10;
console.log(obj);
Object.seal(obj1); // cannot create add new property but can modify old ones

obj1.x = 20;
console.log(obj1);




