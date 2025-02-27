"use strict";
class Conta {
    numero;
    saldo;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.saldo = 0;
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`Titular : ${this.titular}`);
        console.log(`Número  : ${this.numero}`);
    }
    get getSaldo() {
        return this.saldo;
    }
    set setSaldo(saldoconta) {
        this.saldo = saldoconta;
    }
    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            this.saldo += 0;
        }
    }
    saque(valor) {
        if (valor >= 0) {
            valor <= this.saldo ? this.saldo -= valor : console.log("Saldo insuficiente!");
        }
    }
}
class ContaPF extends Conta {
    taxaCalculo = 10;
    cpf;
    constructor(numero, titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        super.info();
        console.log(`CPF     : ${this.cpf}`);
        console.log(`Tipo    : Físico`);
    }
    CalcularTrib(valor) {
        return valor * this.taxaCalculo;
    }
    deposito(valor) {
        valor <= 1000 ? super.deposito(valor) : console.log("Não pode depositar valor maior que R$1.000,00 para pessoa física!");
    }
    saque(valor) {
        if (valor <= 1000) {
            super.saque(valor);
        }
        else {
            console.log("Não pode sacar valor maior que R$1.000,00 para pessoa física!");
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(numero, titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        super.info();
        console.log(`CNPJ    : ${this.cnpj}`);
        console.log(`Tipo    : Jurídico`);
    }
    deposito(valor) {
        valor <= 10000 ? super.deposito(valor) : console.log("Não pode depositar valor maior que R$10.000,00 para pessoa jurídica!");
    }
    saque(valor) {
        if (valor <= 10000) {
            super.saque(valor);
        }
        else {
            console.log("Não pode sacar valor maior que R$10.000,00 para pessoa jurídica!");
        }
    }
}
const cont1 = new ContaPF(123456789, "Walmonn", 9783339931);
const cont2 = new ContaPJ(112233440, "Waledubarramsil", 955151);
cont1.deposito(1000);
cont1.deposito(1000);
cont1.saque(500);
cont1.deposito(1000);
cont1.setSaldo = 150000;
cont1.info();
