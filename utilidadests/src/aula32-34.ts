namespace Veiculos{
    enum Cores{"Preto","Branco","Vermelho","Amarelo","Azul","Prata"}
    export abstract class Carro{
        private nome:string;
        private motor:Motores.Motor;
        private cor:string;
        constructor(nome:string,motor:Motores.Motor,cor:Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
            this.motor = new Motores.Motor(100,3);
        }
        public ligar(){
            this.motor.liga=true;
        }
        public desligar(){
            this.motor.liga=false;
        }
        get minhaCor(){
            return this.cor;
        }
        get meuNome(){
            return this.nome;
        }
        get estouLigado(){
            return this.motor.lig?"Sim":"Não"
        }
        get minhaPotencia(){
            return this.motor.potencia;
        }
    }
    export class CarroEsportivo extends Carro{
        constructor(nome:string,cor:Cores){
            super(nome,new Motores.Motor(6,300,new Motores.Turbo(100)),cor)
        }
    }
    export class CarroPopular extends Carro{
        constructor(nome:string ,cor:Cores){
            super(nome,new Motores.Motor(3,100),cor)
        }
    }
}
namespace Motores{
    export class Turbo{
        private p:number;
        constructor(p:number){
            this.p = p;
        }
        get potencia():number{
            return this.p;
        }
    }
    export class Motor{
        private pot:number;
        private ligado:boolean;
        private cilindros:number;
        private turbo:number;
        constructor(pot:number,cilindros:number,turbo?:Turbo){
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo?turbo.potencia:0);
            if(turbo){
                this.turbo = turbo.potencia;
            }
            
        }
        set liga(ligado:boolean){
            this.ligado = ligado
        }
        get lig(){
            return this.ligado
        }
        get potencia(){
            return this.pot
        }
        temTurbo():boolean{
            return (this.turbo?true:false)
        }
    }
}
const carro1 = new Veiculos.CarroEsportivo("Raid",2)
const carro2 = new Veiculos.CarroPopular("Raid",0)
console.log(`Nome     : ${carro1.meuNome}`)
console.log(`Cor      : ${carro1.minhaCor}`)
console.log(`Potência : ${carro1.minhaPotencia}`)
console.log(`Ligado   : ${carro1.estouLigado}`)
console.log(`----------------------------------------`)
console.log(`Nome     : ${carro2.meuNome}`)
console.log(`Cor      : ${carro2.minhaCor}`)
console.log(`Potência : ${carro2.minhaPotencia}`)
console.log(`Ligado   : ${carro2.estouLigado}`)