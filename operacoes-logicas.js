/*
Var
// Seção de Declarações das variáveis
   nota01, nota02, media: real
   nome: caractere
   passou: logico


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou <- falso
   escreval("Informe o nome do aluno: ")
   leia(nome)
   escreval("Informe a nota da primeira avaliação: ")
   leia(nota01)
   escreval("Informe a nota da segunda avaliação: ")
   leia(nota02)
               media <- (nota01 + nota02) /2
               
   se media >= 5 entao
      passou <- verdadeiro
   fimse

   se ((passou) && (media >=5) || (media <= 7)) entao
      escreval("O Aluno ", nome,  " foi Aprovado")
   senao
      escreval("Aluno ", nome, " foi Reprovado")
   fimse

Fimalgoritmo 
*/

var nota, nota, media, nome, passou;
passou = false;
nome = prompt("Informe o nome do aluno: ");
nota01 = prompt("Informe a nota da primeira avaliação: ");
nota02 = prompt("Informe a nota da segunda avaliação: ");

    media = (parseInt(nota01) + parseInt(nota02))/2;

    if (media >=5){
        passou = true;
    }

    if(passou && media >=9 || nome == "Jorge")
        alert("Aprovado");
    else
        alert("Reprovado");
    

