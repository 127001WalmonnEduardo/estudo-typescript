"use strict";
const teste = (txt) => {
    console.log(txt);
};
const fsoma = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("Hello World");
let numer = [10, 20, 30, 40, 50];
console.log(fsoma(numer));
