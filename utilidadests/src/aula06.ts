let numeros:number[]=[10,20,30,40];

numeros.push(50);
numeros.unshift(0);
numeros.pop();
numeros.shift();

console.log(numeros)

let numero_ro:ReadonlyArray<number> = [100,200,300]//Não posso modificar os elementos do Array