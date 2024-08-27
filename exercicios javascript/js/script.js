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
const dia = data.getDay();
console.log(`${data}`)
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

//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:

//Calcule a média do aluno e verifique se ele foi aprovado

// Crie uma variável para armazenar um array com seus hobbies

/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.

*/

/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/

/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */
