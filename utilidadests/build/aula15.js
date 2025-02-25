"use strict";
function asoma(...n) {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
}
console.log(asoma(10, 20, 30, 40, 50, 60));
