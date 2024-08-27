// Crie uma variável para armazenar seu nome completo
const nomecompleto = "Vitor Gomes de Jesus"
console.log(nomecompleto)
// Crie uma variável para armazenar se você gosta de programar (true ou false)
const gostodeprogramar = true;
console.log(gostodeprogramar)
// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

//2 + (3 x 4) - 5
const a = 2;
const b = 3;
const c = 4;
const d = 5;
console.log(a+(b*c) - d)
//2 x (3 + 4) - 5 ÷ 5
console.log(a*(b+c)-d/d)
//{[(10 - 4) / 2] * 3} + 1
const e = 10
const f = 1
console.log((((e-c)/a)*b)+f) //{} servem para criar e acessar prioridades de um objeto, agora [] servem para criar e acessar elementos de um array. Para calculo podemos separar somente por ().
//3 * 4 / 2 + 1 - 5
console.log(b*c/a+f-d)
//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
const silencio = "silêncio";
const brilho = "brilho";
const luz = "luz";
console.log (`No ${silencio} da noite calma,\nBrilha a lua com a sua ${luz} serena,\nSobre o mar, um ${brilho} que acalma,\nDança nas ondas, doce e plena.\n\n\nO amor é como a lua ao entardecer,\nEterno, suave, um ${brilho} de paz,\nRefletindo em nós, faz-nos viver,\nE nos sonhos, o amor sempre se faz.`)
//Crie um programa que exiba a data atual formatada utilizando interpolação
const data = new Date();
const dia = data.getDate().toString().padStart(2, '0');
const mes = (data.getMonth() + 1).toString().padStart(2, '0');
const ano = data.getFullYear();
console.log(`A data atualizada de hoje é ${dia}/${mes}/${ano}`)
//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação
const base = 5;
const altura = 8;
const area = (base*altura)/2;
console.log(`A área do triângulo de base ${base} e altura ${altura} é ${area}.`)
//Crie uma condicional para verificar se o caractere é uma vogal
const letra = "f";
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    console.log(`A letra '${letra}' é uma vogal.`)
} else {
    console.log(`A letra '${letra}' não é uma vogal.`)
}
//Crie uma condicional para verificar se o número é par ou é impar
const numero = 12;
if (numero % 2 == 0){
    console.log(`O número ${numero} é par.`)
} else {
    console.log(`O número ${numero} é ímpar.`)
}
//Crie uma condicional if else if else para verificar se um triângulo é equilátero , isósceles ou escaleno:
const l1 = 7; 
const l2 = 5;
const l3 = 7;
if (l1 === l2 && l2 === l3){
    console.log("Este triângulo é equilátero, pois as 3 medidas são iguais.")
} else if (l1 === l2 || l2 === l3 || l1 === l3){
    console.log("Este triângulo é isósceles, pois duas das três medidas são iguais.")
} else {
    console.log("Este triângulo é escaleno, pois as três medidas são diferentes.")
}
//Calcule a média do aluno e verifique se ele foi aprovado
const n1 = 3.5;
const n2 = 6;
const n3 = 6;
const resultado = ((n1 + n2 + n3) / 3).toFixed(1);
if (resultado < 6){
    console.log(`O aluno ficou com a média de ${resultado}, então está reprovado.`)
} else{
    console.log(`O aluno ficou com a média de ${resultado}, então está aprovado.`)
}
// Crie uma variável para armazenar um array com seus hobbies
const hobbies = [
    "Academia",
    "Futebol",
    "Video-game",
];

// Crie um array chamado frutas com os nomes de 5 frutas diferentes.
const frutas = [
    "Morango",
    "Banana",
    "Maçã",
    "Melão",
    "Manga",
];
// Acesse e imprima o segundo elemento do array.
let fruta = frutas[1];
console.log(`O segundo elemento da array é ${fruta}`)
// Adicione mais duas frutas ao final do array.
frutas.push("Melancia", "Mamão");
console.log(frutas);
// Remova a primeira fruta do array.
frutas.shift();
console.log(frutas);
/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/
const valor = "texto";
const tipovalor = typeof valor;
console.log(`O tipo da variável "${valor}" é ${tipovalor}`);

/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */
const numero1 = parseFloat(prompt("Digite o primeiro número: ")); 
const numero2 = parseFloat(prompt("Digite o segundo número: "));
const operador = prompt("Digite um operador (+, -, * ou /): ");
let resultadofinal;

switch (operador){
    case "+":
        resultadofinal = numero1 + numero2;
        console.log(`O resultado de ${numero1} + ${numero2} é ${resultadofinal}`);
        break;
    case "-":
        resultadofinal = numero1 - numero2;
        console.log(`O resultado de ${numero1} - ${numero2} é ${resultadofinal}`);
        break;
    case "*":
        resultadofinal = numero1 * numero2;
        console.log(`O resultado de ${numero1} * ${numero2} é ${resultadofinal}`);
        break;
    case "/":
        if (numero2 !== 0){
            resultadofinal = numero1 / numero2;
            console.log(`O resultado de ${numero1} / ${numero2} é ${resultadofinal}`)
        } else {
            resultadofinal = "Erro em operação, um número não pode ser divisível por zero."
            console.log(`${resultadofinal}`)
        }
        break;
    default:
        console.log("Operador digitado inválido.");

}
