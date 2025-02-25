class Computador{
    private nome:string;
    private ram:number;
    private cpu:number;
    private ligado:boolean;

    constructor(nome:string,ram:number,cpu:number){
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log("Novo",nome,"criado!");
    }
    info():void{
        console.log('=================================');
        console.log(`Nome   : ${this.nome}`);
        console.log(`RAM    : ${this.ram}`);
        console.log(`CPU    : ${this.cpu}`);
        console.log(`Ligado : ${this.ligado?"Sim":"Não"}`);
        console.log('=================================');
    }
    setNome(nome:string):void{
        this.nome = nome;
    }
    getNome():string{
        return this.nome;
    }
    setCpu(cpu:number):void{
        cpu > 0 ? this.cpu = cpu : console.log("Valor inválido!");
    }
    getCpu():number{
        return this.cpu;
    }
    setRam(ram:number):void{
        ram > 0 ? this.ram = ram: console.log("Valor inválido!");
    }
    getRam():number{
        return this.ram;
    }
    setLigaDesliga():void{
        this.ligado?this.ligado = false:this.ligado=true;
    }
}

//Instanciar
const comp1 = new Computador("Computador 1",64,10);
const comp2 = new Computador("Computador 2",32,5);
const comp3 = new Computador("Computador 3",128,20);

comp1.setLigaDesliga();
comp2.setLigaDesliga();
comp3.setLigaDesliga();

comp1.info()
comp2.info()
comp3.info()