enum dias{
    domingo=0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
};
const d=new Date();

console.log(dias[d.getDay()]);

enum cores{
    branco="#fff",
    preto="#000",
    vermelho="#f00",
    verde="#0f0",
    azul="#00f",
}

console.log(cores.branco);

enum tipoUsuario{
    USER,
    ADMIN,
    SUPER
}
console.log(tipoUsuario.SUPER);

const tipo:(tipoUsuario|string)=tipoUsuario[2];
console.log(tipo);