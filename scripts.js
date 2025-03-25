/*

    JavaScript Não é Java

    Variáveis
É um pedacinho de memória do computador que eu posso guardar o que eu quiser

colocar as "" duplas para nome(strings)

não colocar as "" para números


    Função
É um pedacinho de código que, só é executado quando é chamado


    - Algoritmo (Recita-de-Bolo)
        [x] Descobrir quando o usuário clicou no botão
        [x] Assim que o botão for clicado...
        [x] Trocar a cor de fundo
        [x] Trocar a imagem principal
        [x] Publicar na Internet

        document = HTML
        querySelector = paga algo que eu quero no HTML

*/


/*   

Variáveis 

let nome = "Gleice"
let sobrenome = "Keli"

console.log(sobrenome) 


Função


function faleMeuNome() {
    console.log(nome)
}

faleMeuNome()

*/


let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".starbucks")

function trocarCor(cor){
    circulo.style.background = cor
}

function trocaImagem(img){
    imagem.src = img
}



















