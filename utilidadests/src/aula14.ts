const teste = (txt:string):void=>{
    console.log(txt);
}

const fsoma = (n:number[]):number=>{
    let s:number = 0;
    n.forEach((e)=>{
        s += e;
    })
    return s;
}

teste("Hello World");
let numer:number[] = [10,20,30,40,50];
console.log(fsoma(numer));