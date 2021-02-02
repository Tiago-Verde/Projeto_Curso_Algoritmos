/*Var
// Seção de Declarações das variáveis 

   resultado, subtracao, multiplicacao, divisao, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreval("Informe o primeiro valor: ")
   leia(valor1)
   escreval("Informe o segundo valor: ")
   leia(valor2)
   escreval("Informe o terceiro valor: ")
   leia(valor3)
               resultado <- (valor1 + valor2) * valor3
   escreval("A soma dos dois primeiros valores vezes o terceiro valor é: ",resultado)
   
   escreval("Informe o quarto valor: ")
   leia(valor4)
   escreval("Informe o quinto valor: ")
   leia(valor5)
               subtracao <- valor4 - valor5
   escreval("A subtração dos valores é: ",subtracao)
   
   escreval("Informe o sexto valor: ")
   leia(valor6)
   escreval("Informe o setimo valor: ")
   leia(valor7)
               multiplicacao <- valor6 * valor7
   escreval("A multiplicação dos valores é: ",multiplicacao)
   
   escreval("Informe o oitavo valor: ")
   leia(valor8)
   escreval("Informe o nono valor: ")
   leia(valor9)
               divisao <- valor8 / valor9
   escreval("A divisao dos valores é: ",divisao)
   */

   // declaração de variaveis
var resultado, subtracao, multiplicacao, divisao, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9;

    // soma dos dois primeiros valores dividido pelo terceiro valor
valor1 = prompt("Informe o primeiro valor:");
valor2 = prompt("Informe o segundo valor:");
valor3 = prompt("Informe o terceiro valor:");

    resultado = (valor1 + valor2) * valor3;

alert("A soma dos dois primeiros valores vezes o terceiro valor é: "+ resultado);

    // subtração de dois valores informados pelo usuario

valor4 = prompt("Informe o quarto valor:");
valor5 = prompt("Informe o quinto valor:");

    subtracao = valor4 - valor5;
alert("A subtração dos valores é: "+subtracao);

    // multiplicação de dois valores informados pelo usuario

valor6 = prompt("Informe o sexto valor:");
valor7 = prompt("Informe o setimo valor:");

    multiplicacao = (valor6 * valor7);

alert("A multiplicação dos valores é: " +multiplicacao);

    // divisão de dois valores informados pelo usuario

valor8 = prompt("Informe o oitavo valor:");
valor9 = prompt("Informe o nono valor:");

    divisao = valor8 / valor9;

alert("A divisao dos valores é: " +divisao);




