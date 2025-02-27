"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
            this.motor = new Motores.Motor(100, 3);
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return this.motor.lig ? "Sim" : "Não";
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    Veiculos.Carro = Carro;
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        p;
        constructor(p) {
            this.p = p;
        }
        get potencia() {
            return this.p;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        pot;
        ligado;
        cilindros;
        turbo;
        constructor(pot, cilindros, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
            if (turbo) {
                this.turbo = turbo.potencia;
            }
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get lig() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
        temTurbo() {
            return (this.turbo ? true : false);
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Raid", 2);
const carro2 = new Veiculos.CarroPopular("Raid", 0);
console.log(`Nome     : ${carro1.meuNome}`);
console.log(`Cor      : ${carro1.minhaCor}`);
console.log(`Potência : ${carro1.minhaPotencia}`);
console.log(`Ligado   : ${carro1.estouLigado}`);
console.log(`----------------------------------------`);
console.log(`Nome     : ${carro2.meuNome}`);
console.log(`Cor      : ${carro2.minhaCor}`);
console.log(`Potência : ${carro2.minhaPotencia}`);
console.log(`Ligado   : ${carro2.estouLigado}`);
