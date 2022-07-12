// classe

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Sávio', 27);
pessoa1.nome = 'Sávio Cunha'
const pessoa2 = new Pessoa('Adilia', 37);
console.log(pessoa1,pessoa2);



class Quadrado {
    constructor (base, altura){
        if(isNaN(base) || isNaN(altura)) throw "informe m valor numerico"
        this.base = base
        this.altura = altura
    }
    calculaArea (){
        return this.base * this.altura;
    }
    imprirmir(){
        return `<div style=" width:${this.base}px; height:${this.altura}px; background-color:blue"> test </div>`;
    }
}

const quadrado = new Quadrado(4 , 20);
console.log(quadrado.calculaArea())
console.log(quadrado.imprirmir())