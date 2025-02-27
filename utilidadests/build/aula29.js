"use strict";
function f_teste(v) {
    return v;
}
// console.log(f_teste<number>(10));
// console.log(f_teste<string>("Olá mundo"));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(10);
const ct2 = new C_teste("Algo");
console.log(ct1.valor);
console.log(ct2.valor);
