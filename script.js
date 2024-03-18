// criar uma lógica para que: quando eu clica em ''criptografar'', a imagem do lado direito suma, e a mensagem criptografada/descriptografada apareça.
// criar um objeto nos botões criptografar/descriptografar -> coloca um addEventListener em ambos para que, ao clicar neles eles sejam ''chamados'' para fazer a ação: 
// a ação: imagem ficará com display: none, e o campo texto abaixo da imagem receberá um ''innerHtml'' que mostrará o valor do campo textarea.




let campoTexto = document.getElementById('campo_texto')
let botaoDo = document.getElementById('do_button');
let botaoUndo = document.getElementById('undo_button');
let imagemLupa = document.getElementById('img_lupa');
let campoMensagem = document.getElementById('msg_cripto');
let campoMensagem2 = document.getElementById('msg_cripto_2');
var arr = ['a','e','i','o','u'];


botaoDo.addEventListener('click', TranscreverMsg)

function TranscreverMsg() {

    imagemLupa.style.display = 'none';
    campoMensagem.style.display = 'none';
    campoMensagem2.style.display = 'none';

    let newDiv = document.createElement('div');
    let newParagraph = document.createElement('div');
    newDiv.appendChild(newParagraph);
    newDiv.innerText = campoTexto.value;
    document.getElementById('texto_criptografado').appendChild(newDiv);

    console.log(arr.includes('a'))

    if (arr.includes('a') == true) {

        console.log ('ai')
    }
    
    
}











// Criar uma função
// Ligar a função ao botão correspondente no html
// criar um novo p
// add value campoTexto ao novo p criado
// capturar texto escrito no campo de input do html
//Desenvolver a lógica da criptografia
//retornar na tela o resultado do texto criptografado


//criar uma função onde quando apertar a tecla 'e' é convertida para 'enter'


