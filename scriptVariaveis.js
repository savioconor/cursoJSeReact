//1 - Definição de Variaveis

let a = 10;
let b = 13.5;
let c = 'Sávio';
let d = false;

d = 15;

console.log(d);

a = function(){ };//pode salvar uma finção em uma variavel

const pi = 3.14; // declarar valores constantes tentar redefinir não consigo 



//2 - Condicionais 


let estaSol = false;

if(estaSol == true){
    console.log('vou para a praia')
} else{
    console.log('não vou para a praia')
}   

 

let numero = 3;
let paridade = numero % 2 == 0 ? 'par' : 'impar'; // concatenção ternaria tudo em uma linha só

console.log(paridade);


// 3 - laçõs de repetição

let count = 1;

while (count<=100){
    console.log(count);

    count++
}

for (let i = 0; i < 100; i++) {
    console.log(i)
}


// vetores

let vetor = [10,20,30,40,50]; // vetore são dinamicos 
vetor[2]='30';
console.log(vetor[2]);

for (let i=0; i< vetor.length; i++){
    console.log (vetor[i]);
}


let vet = [];

for ( let i=0; i<10; i++){
    vet.push(i); // adicionar valor no ultimo indice do vetor
}
console.log(vet);


// percorrer vetor de forma correta for of
for (let num of vetor){
    console.log(num) 
}

// percorrer vetor de forma correta for in usa as posiçõe
for (let indice in vetor){
    console.log(indice)
    console.log(vetor)
}






// matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matriz);

for(let linha of matriz){
    for (const elemento of linha) {
        console.log (elemento)
    }
}


// funções 

function escreva (){
    console.log('olá');
}

escreva();


function escrevaTexto(text){
    console.log(text);
}

escrevaTexto('olá sávio')
escrevaTexto('meu segundo paramentro')



function somar(a,b){
    return a+b;
}

let resultadoo = somar (1,3);

console.log (resultadoo);


const somarF = (a,b) => a+b; //função sem nome ou arrow function 

console.log (somarF(6,5))


// funções de alta ordem 1 

const subtrair = (a,b) => a-b;

const aplicarOp =  (a,b,operacao) => operacao (a,b)

let resultado = aplicarOp(4,2, subtrair)

console.log (resultado)

// função de alta ordens 2

const somarx = (x) => (y) => x+y;

const somar2 = somarx(2);

console.log(somar2(5))


// função MAP 


const vetorr = ["10" , "20" , "30"]

const stringToInt = (x) => parseInt(x);

const vetor2 = vetorr.map(stringToInt);

console.log(vetor2)


const vetor3 = vetor2.map(x => x*x);

console.log(vetor3)

// filter 

 const vetorfil = [1,2,3,4,5,6,7,8,9,10]



 const pares = vetorfil.filter (x => x%2 == 0)

 console.log(pares)



 // reduce
 
 const vertorReduce = [1,2,3,4,5,6];


const soma = vertorReduce.reduce((estado,item) => estado+item);

console.log(soma);



