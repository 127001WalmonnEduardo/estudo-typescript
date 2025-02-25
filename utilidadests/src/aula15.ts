function asoma(...n:number[]):number{
    let s:number = 0;
    n.forEach((e)=>{
        s += e;
    })
    return s;
}
console.log(asoma(10,20,30,40,50,60));