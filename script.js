// criar uma lógica para que: quando eu clica em ''criptografar'', a imagem do lado direito suma, e a mensagem criptografada/descriptografada apareça.
// criar um objeto nos botões criptografar/descriptografar -> coloca um addEventListener em ambos para que, ao clicar neles eles sejam ''chamados'' para fazer a ação: 
// a ação: imagem ficará com display: none, e o campo texto abaixo da imagem receberá um ''innerHtml'' que mostrará o valor do campo textarea.


const campoTexto = document.getElementById('campo_texto')
const botaoDo = document.getElementById('do_button');
const botaoUndo = document.getElementById('undo_button');
const imagemLupa = document.getElementById('img_lupa');
const campoMensagem = document.getElementById('msg_cripto');
const campoMensagem2 =  document.getElementById('msg_cripto_2');


botaoDo.addEventListener('click', criptografarMsg)

function criptografarMsg() {
   
  
    imagemLupa.style.display = 'none';
    campoMensagem.style.display = 'none';
    campoMensagem2.style.display = 'none';

    const newDiv = document.createElement('div');
    const newParagraph =  document.createElement('div');
    newDiv.appendChild(newParagraph)
    newDiv.innerText = campoTexto.value
    document.getElementById('texto_criptografado').appendChild(newDiv)

    
}

// Criar uma função 
// Ligar a função ao botão correspondente no html
// criar um novo p 
// add value campoTexto ao novo p criado 
// capturar texto escrito no campo de input do html
//Desenvolver a lógica da criptografia
//retornar na tela o resultado do texto criptografado




