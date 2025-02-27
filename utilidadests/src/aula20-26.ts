abstract class Conta{
    private readonly numero:number;
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
    get getSaldo():number{
        return this.saldo;
    }
    set setSaldo(saldoconta:number){
        this.saldo = saldoconta;
    }
    protected deposito(valor:number){
        if(valor > 0){
            this.saldo += valor;
        }
        else{
            this.saldo += 0;
        }
    }
    protected saque(valor:number):void{
        if(valor >= 0){
            valor<=this.saldo?this.saldo -= valor:console.log("Saldo insuficiente!");
        }        
    }
}

interface Tributos{
    taxaCalculo:number;
    CalcularTrib(valor:number):number;
}

class ContaPF extends Conta implements Tributos{
    taxaCalculo:number=10;
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
    CalcularTrib(valor:number):number{
        return valor*this.taxaCalculo ;
    }
    public deposito(valor:number){
        valor <= 1000 ? super.deposito(valor) : console.log("Não pode depositar valor maior que R$1.000,00 para pessoa física!");
    }
    public saque(valor:number):void{
        if(valor <= 1000 ){
            super.saque(valor)
        }
        else{
            console.log("Não pode sacar valor maior que R$1.000,00 para pessoa física!");
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
    public saque(valor:number):void{
        if(valor <= 10000 ){
            super.saque(valor)
        }
        else{
            console.log("Não pode sacar valor maior que R$10.000,00 para pessoa jurídica!");
        }
    }
}

const cont1 = new ContaPF(123456789,"Walmonn",9783339931);
const cont2 = new ContaPJ(112233440,"Waledubarramsil",955151);

cont1.deposito(1000);
cont1.deposito(1000);
cont1.saque(500);
cont1.deposito(1000);
cont1.setSaldo=150000;

cont1.info();