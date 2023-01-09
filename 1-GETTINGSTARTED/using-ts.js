"use strict";
const button = document.querySelector('button');
const input1 = document.getElementById('num1'); ////some com o erro de, em 'add()', 'AH, NÃO EXISTE ESSA PROPRIEDADE DE 'value' no elemento que você selecionou e referenciou'...
const input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2; ///possível fix, sem o TYPESCRIPT: '+num1 + +num2' (converter em NUMBERs)
}
button.addEventListener('click', function () {
    //   console.log(add(input1.value, input2.value)); ///exemplo de error
    console.log(add(+input1.value, +input2.value)); /// exemplo de fix...
});
