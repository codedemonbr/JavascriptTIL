var a, b, rest;
[a, b] = [1, 2];
console.log(a);
console.log(b);

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 1, b: 2 });
console.log(a);
console.log(b);

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y);
console.log(z);

var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one);
console.log(two);
console.log(three);

var a, b;

[a = 5, b = 7] = [1];
console.log(a);
console.log(b);