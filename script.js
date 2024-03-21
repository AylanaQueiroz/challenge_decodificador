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
let arr = ['a','e','i','o','u']


botaoDo.addEventListener('click', TranscreverMsg)

function TranscreverMsg() {

    imagemLupa.style.display = 'none';
    campoMensagem.style.display = 'none';
    campoMensagem2.style.display = 'none';

    let newDiv = document.createElement('div')
    let newParagraph = document.createElement('p');
    newDiv.appendChild(newParagraph);
    testeMsg.appendChild(newDiv);
    testeMsg.innerText = campoTexto.value;
    



    /*console.log(arr.includes('a'))

    if (texto_criptografado.includes('a') == true) {

        console.log ('ai')
    }
    */

}


/*
function codificarMsg2() {

   // let testeMsg1 = testeMsg;
    // testeMsg.includes = ["Mango"];

    
       // console.log(testeMsg1.includes("Mango"))

      
        //let result = text.replace("i", "--");
        console.log(testeMsg)  
        
        if (testeMsg == 'a'){
            alert('a funcionando')
        }
    
}*/






function codificarMsg() {
    let text = "";
   
  console.log(campoTexto.value);
  console.log(typeof campoTexto.value)
/*
  text = campoTexto.value.replace(/a/gi,"ai");
  text = campoTexto.value.replaceAll('e','enter');
  text = campoTexto.value.replaceAll('i','imes');
*/

  var texto = campoTexto.value;
 // var resultado = texto.sub(r"[aeiou]", texto, "")
 var resultado = texto.replace(/\a+/g,'ai').replace(/\e+/g,'enter').replace(/\i+/g,'imes').replace(/\o+/g,'ober').replace(/\u+/g,'ufat')
 


  //console.log(campoTexto.value.replaceAll('a','e'))
 
  
 console.log (resultado)  

}


  












// Criar uma função
// Ligar a função ao botão correspondente no html
// criar um novo p
// add value campoTexto ao novo p criado
// capturar texto escrito no campo de input do html
//Desenvolver a lógica da criptografia
//retornar na tela o resultado do texto criptografado


//criar uma função onde quando apertar a tecla 'e' é convertida para 'enter'


