// criar uma lógica para que: quando eu clica em ''criptografar'', a imagem do lado direito suma, e a mensagem criptografada/descriptografada apareça.
// criar um objeto nos botões criptografar/descriptografar -> coloca um addEventListener em ambos para que, ao clicar neles eles sejam ''chamados'' para fazer a ação: 
// a ação: imagem ficará com display: none, e o campo texto abaixo da imagem receberá um ''innerHtml'' que mostrará o valor do campo textarea.

let campoTexto = document.getElementById('campo_texto')
let botaoDo = document.getElementById('do_button');
let botaoUndo = document.getElementById('undo_button');
let imagemLupa = document.getElementById('img_lupa');
let campoMensagem = document.getElementById('msg_cripto');
let campoMensagem2 = document.getElementById('msg_cripto_2');
let divMsg = document.getElementById('div_msg');
let botaoCopy = document.getElementById('tcpy');
let msgmInput = campoTexto.value;

botaoDo.addEventListener('click', criptografar)

function criptografar() {

    imagemLupa.style.visibility = 'hidden';
    campoMensagem.style.visibility = 'hidden';
    campoMensagem2.style.visibility = 'hidden';
    // let newDiv = document.createElement('div')
    // let newParagraph = document.createElement('p');
    // newDiv.appendChild(newParagraph);
    //testeMsg.appendChild(newDiv);
    divMsg.innerText = campoTexto.value;
    let msgmInput = campoTexto.value;

    let mapObj = {

        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"

    };

    let msgCriptografada = msgmInput.replace(/a|e|i|o|u/gi, matched => mapObj[matched]);
    divMsg.innerText = msgCriptografada;

    botaoCopy.addEventListener('click', copyMsgCripto)

    function copyMsgCripto() {

        let msgmInput = campoTexto.value;
        navigator.clipboard.writeText(msgCriptografada)

    }

    botaoUndo.addEventListener('click', descriptografar)

    function descriptografar() {

        imagemLupa.style.visibility = 'hidden';
        campoMensagem.style.visibility = 'hidden';
        campoMensagem2.style.visibility = 'hidden';

        let mapObj = {

            ai: "a",
            enter: "e",
            imes: "i",
            ober: "o",
            ufat: "u"

        };

        let resultado = msgCriptografada.replace(/ai|enter|imes|ober|ufat/gi, matched => mapObj[matched]);
        divMsg.innerText = resultado;

        botaoCopy.addEventListener('click', copyMsgDescripto)

        function copyMsgDescripto() {

            let msgmInput = campoTexto.value;
            navigator.clipboard.writeText(resultado)

        }
    }
}





