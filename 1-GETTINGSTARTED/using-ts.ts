const button = document.querySelector('button') as HTMLButtonElement;
const input1 = document.getElementById('num1') as HTMLInputElement; ////some com o erro de, em 'add()', 'AH, NÃO EXISTE ESSA PROPRIEDADE DE 'value' no elemento que você selecionou e referenciou'...
const input2 = document.getElementById('num2') as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2; ///possível fix, sem o TYPESCRIPT: '+num1 + +num2' (converter em NUMBERs)
}

button.addEventListener('click', function () {
  //   console.log(add(input1.value, input2.value)); ///exemplo de error
  console.log(add(+input1.value, +input2.value)); /// exemplo de fix...
});
