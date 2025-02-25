class Conta{
    protected numero:number;
    protected saldo:number;
    protected titular:string;
    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.saldo = 0;
        this.titular = titular;
    }
    protected gerarNumeroConta():number{
        return Math.floor(Math.random()*10000)+1;
    }
    protected info():void{
        console.log(`Titular : ${this.titular}`);
        console.log(`Número  : ${this.numero}`);
    }
    public getSaldo():number{
        return this.saldo;
    }
    protected deposito(valor:number){
        if(valor > 0){
            this.saldo += valor;
        }
        else{
            this.saldo += 0;
        }
    }
    protected saque(valor:number):number{
        if(valor >= 0){
            valor<=this.saldo?this.saldo -= valor:console.log("Saldo insuficiente!");
            return valor;
        }
        else{
            return 0;
        }
    }
}

class ContaPF extends Conta{
    private cpf:number;
    constructor(numero:number,titular:string,cpf:number){
        super(titular);
        this.cpf = cpf;
    }
    info():void{
        super.info();
        console.log(`CPF     : ${this.cpf}`);
        console.log(`Tipo    : Físico`);
    }
    public deposito(valor:number){
        valor <= 1000 ? super.deposito(valor) : console.log("Não pode depositar valor maior que R$1.000,00 para pessoa física!");
    }
    public saque(valor:number):number{
        if(valor <= 1000 ){
            return super.saque(valor)
        }
        else{
            console.log("Não pode sacar valor maior que R$1.000,00 para pessoa física!");
            return 0;
        }
    }
}

class ContaPJ extends Conta{
    private cnpj:number;
    constructor(numero:number,titular:string,cnpj:number){
        super(titular);
        this.cnpj = cnpj;
    }
    info():void{
        super.info();
        console.log(`CNPJ    : ${this.cnpj}`);
        console.log(`Tipo    : Jurídico`);
    }
    public deposito(valor:number){
        valor <= 10000 ? super.deposito(valor) : console.log("Não pode depositar valor maior que R$10.000,00 para pessoa jurídica!");
    }
    public saque(valor:number){
        if(valor <= 10000 ){
            return super.saque(valor)
        }
        else{
            console.log("Não pode sacar valor maior que R$10.000,00 para pessoa jurídica!");
            return 0;
        }
    }
}

const cont1 = new ContaPF(123456789,"Walmonn",9783339931);
const cont2 = new ContaPJ(112233440,"Waledubarramsil",955151);

cont1.deposito(1000);
cont1.deposito(1000);
cont1.deposito(1000);

console.log(cont1.getSaldo());
