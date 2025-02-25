"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log("Novo", nome, "criado!");
    }
    info() {
        console.log('=================================');
        console.log(`Nome   : ${this.nome}`);
        console.log(`RAM    : ${this.ram}`);
        console.log(`CPU    : ${this.cpu}`);
        console.log(`Ligado : ${this.ligado ? "Sim" : "Não"}`);
        console.log('=================================');
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setCpu(cpu) {
        cpu > 0 ? this.cpu = cpu : console.log("Valor inválido!");
    }
    getCpu() {
        return this.cpu;
    }
    setRam(ram) {
        ram > 0 ? this.ram = ram : console.log("Valor inválido!");
    }
    getRam() {
        return this.ram;
    }
    setLigaDesliga() {
        this.ligado ? this.ligado = false : this.ligado = true;
    }
}
//Instanciar
const comp1 = new Computador("Computador 1", 64, 10);
const comp2 = new Computador("Computador 2", 32, 5);
const comp3 = new Computador("Computador 3", 128, 20);
comp1.setLigaDesliga();
comp2.setLigaDesliga();
comp3.setLigaDesliga();
comp1.info();
comp2.info();
comp3.info();
