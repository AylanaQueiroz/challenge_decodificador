// criar uma lógica para que: quando eu clica em ''criptografar'', a imagem do lado direito suma, e a mensagem criptografada/descriptografada apareça.
// criar um objeto nos botões criptografar/descriptografar -> coloca um addEventListener em ambos para que, ao clicar neles eles sejam ''chamados'' para fazer a ação: 
// a ação: imagem ficará com display: none, e o campo texto abaixo da imagem receberá um ''innerHtml'' que mostrará o valor do campo textarea.




let campoTexto = document.getElementById('campo_texto')
let botaoDo = document.getElementById('do_button');
let botaoUndo = document.getElementById('undo_button');
let imagemLupa = document.getElementById('img_lupa');
let campoMensagem = document.getElementById('msg_cripto');
let campoMensagem2 = document.getElementById('msg_cripto_2');
let testeMsg = document.getElementById('div_msg');
let botaoCopy = document.getElementById('tcpy');



botaoDo.addEventListener('click', criptografar)

function criptografar() {

    imagemLupa.style.visibility = 'hidden';
    campoMensagem.style.visibility = 'hidden';
    campoMensagem2.style.visibility = 'hidden';


    let newDiv = document.createElement('div')
    let newParagraph = document.createElement('p');
    newDiv.appendChild(newParagraph);
    testeMsg.appendChild(newDiv);
    testeMsg.innerText = campoTexto.value;
    let msgmInput = campoTexto.value;
    let arrayMsg = msgmInput.split(' ');







    // let msgCriptografada = msgmInput.replace(/\a+/g, 'ai').replace(/\e+/g, 'enter').replace(/\i+/g, 'imes').replace(/\o+/g, 'ober').replace(/\u+/g, 'ufat')
    //testeMsg.innerText = msgCriptografada;












    botaoCopy.addEventListener('click', copyMsgCripto)

    function copyMsgCripto() {
        var copyText = campoTexto.value;
        navigator.clipboard.writeText(msgCriptografada)
        console.log(msgCriptografada)
    }
}

function descriptografar() {
    imagemLupa.style.visibility = 'hidden';
    campoMensagem.style.visibility = 'hidden';
    campoMensagem2.style.visibility = 'hidden';
    console.log(campoTexto.value);
    console.log(typeof campoTexto.value);
    var texto1 = campoTexto.value;
    //texto1 = texto.toLowerCase()
    var resultado = texto1.replace(/\ai+/g, 'a').replace(/\enter+/g, 'e').replace(/\imes+/g, 'i').replace(/\ober+/g, 'o').replace(/\ufat+/g, 'u')
    testeMsg.innerText = resultado


    botaoCopy.addEventListener('click', copyMsgDescripto)

    function copyMsgDescripto() {
        var copyteste = campoTexto.value;
        navigator.clipboard.writeText(copyteste)
    }
}


/*let arrayVogal = ['a', 'e', 'i', 'o', 'u'];

let criptografadas = ['ai', 'enter', 'imes', 'ober', 'ufat']


let resultadoArray = arrayVogal.splice(0, 5, 'ai', 'enter', 'imes', 'ober', 'ufat')

console.log('resultado do arrayVogal:' + arrayVogal)



console.log('testando' + arrayVogal[1])


let arrayVogal = ['a', 'e', 'i', 'o', 'u'];

    let criptografadas = ['ai', 'enter', 'imes', 'ober', 'ufat']


    let resultadoArray = arrayVogal.splice(0, 5, 'ai', 'enter', 'imes', 'ober', 'ufat');

    console.log('testando' +arrayVogal )

    for (var j=0; j<arrayVogal.length; j++) {
        
        
        document.write(arrayVogal[1] +'<br>')
    }

   console.log( 'testando' + msgmInput)



     (arrayVogal[0] == 'a') {
        arrayVogal[0].replace(/\a+/g, 'ai')
     }







*/




// Criar uma função
// Ligar a função ao botão correspondente no html
// criar um novo p
// add value campoTexto ao novo p criado
// capturar texto escrito no campo de input do html
//Desenvolver a lógica da criptografia
//retornar na tela o resultado do texto criptografado


//criar uma função onde quando apertar a tecla 'e' é convertida para 'enter'


const numbers = [1,4,5,9,14,23]

   function doubleNumber (num) {
    return num*2
   }
    const doubleNumbers = numbers.map(doubleNumber)

    console.log (doubleNumbers)


    const leters = ['a','e']

   function changeletters (let) {
    return  let.replace(/\a+/g, 'ai')
   
  
   

   }
    const changeLetters = leters.map(changeletters)

    console.log (changeLetters)