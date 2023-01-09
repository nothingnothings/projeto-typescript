const button = document.querySelector('button') as HTMLButtonElement;

const inputElement = document.getElementById(
  'inputElementSpecific'
) as HTMLInputElement;

const specificButton = document.getElementById('specific'); ////só veremos type de 'HTMLElement', algo bem mais abstrato do que '''HTMLButtonElement'''....

///getElementById() --> é bem MAIS ABSTRATO DO QUE 'querySelector'...

inputElement.value = 'EXEMPLO'; ///só conseguimos tirar esse error de '.value' __ SE DEFINIMOS ISSO COMO 'HTMLInputElement' (pq só esse e mais alguns tipos de elementos HTML vao ter essa propriedade de 'value' no seu niterior)....

/////////existem 2 SINTAXES/APPROACHES PARA CONSEGUIR FAZER O 'TYPE CASTING' de uma variable no seu código.... ------> A PRIMEIRA DELAS É PELO USO DE 'as'

///as 2 escritas fazem a mesma coisa, mas são diferentes no formato...

// 1o formato:

const userInputElement2 = <HTMLInputElement>(
  document.getElementById('user-input')
);



////// ok, colocamos em um '<>' NO INÍCIO DO VALOR __ DESSA CONSTANTE...





////////////////////////////////////////













// -> e o '!' é necessário em algumas expressions,

// como essa

// de 'ELEMENTOS DOM',

// __ PQ __ ÀS VEZES PODEREMOS RECEBER 'null'.... ------> E

// SE SOUBERMOS QUE ESSE

// NEGÓCIO NUNCA VAI RETORNAR 'null',

// USAMOS

// esse

// '!'

// --> CASO CONTRÁRIO,

// CASO VOCÊ _ NÃO TIVER__ CERTEZA DE QUE ISSO SERÁ 100% 'not null',

// VOCê PODE ADICIONAR UM IF CHECK,

// TIPO ASSIM:

// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {

// userInputElement.value = 'MUDANÇA'

// }

// --------> AGORA SE ESSE VALOR FOR TRUTHY (se esse elemento existir)...,

// E SÓ NESSA HIPÓTESE,

// VAMOS QUERER EXECUTAR O CÓDIGO DENTRO DESSE BLOCK....








const userInputElement3 = document.getElementById('user-input2')! as HTMLInputElement;






const userInputElement4 = document.getElementById('user-input3'); ////nesse exemplo, NÃO TEMOS CERTEZA SE ESSE ELEMENT SERÁ 'HTMLInputElement' de verdade, ou se será NULL (falsy)....









if (userInputElement4) { //como não sabemos com 100% de certeza que isso será 'HTMLInputElement' (ou se será null), colocamos um IF CHECK.... -> se isso for truthy (ou seja, NÃO NULL), vamos querer executar o código dentro desse if check...

        ////se o negócio NÃO FOR 'TRUTHY', queremos O DEFINIR, DENTRO DESSE BLOCK, como sendo de tipo 'HTMLInputElement', para então acessar a propriedae 'value' no seu interior...
    (userInputElement4 as HTMLInputElement).value = 'VALOR ALTERADO'; ///// isso vai funcionar, podemos fazer type casting assim também...


}