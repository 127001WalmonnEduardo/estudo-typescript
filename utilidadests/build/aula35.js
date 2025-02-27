"use strict";
//let [aa,bb,cc,dd] = av
const obj = {
    aa: "Verde",
    bb: "Amarelo",
    cc: "Azul",
    dd: "Branco",
};
const fcores = () => {
    return ["Verde", "Amarelo", "Azul", "Branco"];
};
let { aa, bb, cc, dd } = obj;
let [nu1, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let [co1, co2, co3, co4] = fcores();
let texto = "Curso de Typescript";
let [...t] = texto.split(" ");
let av = [10, 20, 30, 40];
console.log(t);
