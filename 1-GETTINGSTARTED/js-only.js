// const button = document.querySelector('button'); //comentei para fora para CALAR A BOCA DO TYPESCRIPT...
// const input1 = document.getElementById('num1');
// const input2 = document.getElementById('num2');

// function add(num1, num2) {
//   return num1 + num2; ///possível fix, sem o TYPESCRIPT: '+num1 + +num2' (converter em NUMBERs)
// }

button.addEventListener('click', function () {
  console.log(add(input1.value, input2.value));
});
