"use strict";
class Curso {
    bcanal = null;
    bcurso = null;
    constructor(bcanal, bcurso) {
        this.bcanal = bcanal;
        this.bcurso = bcurso;
    }
}
let c1 = new Curso("Waledubarramsil", "TypeScript");
console.log(c1.bcanal);
console.log(c1.bcurso);
