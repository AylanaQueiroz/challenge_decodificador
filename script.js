// criar uma lógica para que: quando eu clica em ''criptografar'', a imagem do lado direito suma, e a mensagem criptografada/descriptografada apareça.
// criar um objeto nos botões criptografar/descriptografar -> coloca um addEventListener em ambos para que, ao clicar neles eles sejam ''chamados'' para fazer a ação: 
// a ação: imagem ficará com display: none, e o campo texto abaixo da imagem receberá um ''innerHtml'' que mostrará o valor do campo textarea.



const botaoDo = document.getElementById('do_button');
const botaoUndo = document.getElementById('undo_button');
const imagemLupa = document.getElementById('img_lupa');
const campoMensagem = document.getElementById('msg_cripto');
const campoMensagem2 =  document.getElementById('msg_cripto_2');


botaoDo.addEventListener('click', showMessage)

function showMessage() {
   

    imagemLupa.style.display = 'none';
    campoMensagem.innerHTML= 'teste';
    campoMensagem2.innerHTML = 'teste2'
    


}

