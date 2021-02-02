/*escreval("Informe o nome do aluno: ")
   leia(nome)
   escreval("Informe a nota da primeira avaliação: ")
   leia(nota01)
   escreval("Informe a nota da segunda avaliação: ")
   leia(nota02)
               media <- (nota01 + nota02) /2
   se media >= 5 entao
      escreval("O Aluno ", nome,  " foi Aprovado")
   senao
      escreval("Aluno ", nome, " foi Reprovado")
   fimse  */

   var nome, nota01, nota02, media;
   nome = prompt("Informe o nome do aluno");
   nota01 = prompt("Informe a nota da primeira avaliação: ");
   nota02 = prompt("Informe a nota da segunda avaliação: ");
      media = (parseInt(nota01) + parseInt(nota02)) / 2;

   if(media >=5)
      alert("O aluno " + nome +" foi Aprovado");
   else
   alert("O aluno " + nome +" foi Reprovado");

   

   