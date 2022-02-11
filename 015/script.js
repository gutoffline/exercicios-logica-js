/*
Estrutura de decisão

se teste lógico
    resposta verdadeira
senao
    resposta falsa
fim se

se idade >= 18 então
inicio_se
    escreva("você é maior de idade")
fim_se
senao
inicio_senao
    escreva("você ainda não pode dirigir")
fim_senao

>= --> maior ou igual
<= --> menor ou igual
> --> maior
< --> menor
!= --> diferente
== --> igualdade
*/

let idade
console.log("Informe sua idade")
// depois teremos a interação e entrada de dados
idade = 22
if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você não pode dirigir")
}