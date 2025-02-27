function f_teste<T>(v:T):T{
    return v;
}

// console.log(f_teste<number>(10));
// console.log(f_teste<string>("Olá mundo"));
class C_teste<T>{
    public valor:T;
    constructor(valor:T){
        this.valor = valor;
    }
}

const ct1=new C_teste<number>(10);
const ct2=new C_teste<string>("Algo");
console.log(ct1.valor);
console.log(ct2.valor);