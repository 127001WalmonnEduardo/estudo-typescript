//NULL - UNDEFINED - UNKNOWN

//NULL - tipo nulo
let bnome:string|null;
bnome = null
console.log(bnome);

//UNDEFINED - não definido
let bnome2;
console.log(bnome2);

//UNKNOWN - só pode ser atribuidas a variáveis do tipo UNKNOWN ou do tipo ANY, não é pq ele tem um valor que ele pertence aquele valor. Qualquer valor
let bnome3:unknown;
console.log(bnome3);