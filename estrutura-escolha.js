/*
Var
// Seção de Declarações das variáveis

 valor1, valor2, resultado: real
 sinal: caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("O objetivo do programa é simular uma calculadora")

   Escreval("Informe o primeiro valor: ")
   leia(valor1)
   Escreval("Informe o segundo valor: ")
   leia(valor2)

   Escreval("Informe qual a operação. ( + ) ( - ) ( / ) ( * ):  ")
   leia(sinal)
   
   escolha sinal
           caso "+"
           resultado <- valor1 + valor2
           caso "-"
           resultado <- valor1 - valor2
           caso "/"
           resultado <- valor1 / valor2
           caso "*"
           resultado <- valor1 * valor2
   fimescolha

   escreval("O valor da operacao é: " ,resultado)
   
Fimalgoritmo
*/

function acaoBotao2(params){

    var valor1, valor2, resultado, sinal;

valor1 = prompt("Informe o primeiro valor:");
valor2 = prompt("Informe o segundo valor:");
sinal = prompt("Informe qual a operação. ( + ) ( - ) ( / ) ( * ):  ");
switch (sinal) {
    case "+":
        resultado = parseInt(valor1) + parseInt(valor2);
        break;
    case "-": 
        resultado = parseInt(valor1) - parseInt(valor2);
        break;
    case "/":
        resultado = parseInt(valor1) / parseInt(valor2);
        break
    case "*":
        resultado = parseInt(valor1) * parseInt(valor2);  
        break
 
    default:
        break;
}



document.getElementById("escolha").innerText = resultado;

}