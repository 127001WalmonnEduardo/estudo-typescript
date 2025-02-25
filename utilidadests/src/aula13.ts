function soma(n1:number=0,n2:number=0):number{
    return n1+n2;
}

console.log(soma());

function novoUser(user:string,pass:string,nome?:string):void{
    console.log(`User: ${user}`)
    console.log(`Pass: ${pass}`)
    console.log(`Nome: ${nome}`)
}

novoUser("walmonn_eduardo","15082007");