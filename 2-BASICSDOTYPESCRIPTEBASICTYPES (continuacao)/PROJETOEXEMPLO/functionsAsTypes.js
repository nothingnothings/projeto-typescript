"use strict";
function combine2(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    if (typeof n1 === 'string' && typeof n2 === 'string') {
        result = n1 + n2;
    }
    if ((typeof n1 === 'number' && typeof n2 === 'string') || (typeof n1 === 'string' && typeof n2 === 'number')) {
        return;
    }
    if (typeof n1 === 'number' && typeof n2 === 'string' && resultConversion) {
        result = n1 + n2;
    }
    return result;
}
function printResult2(example, example2) {
    return example;
}
// let combineValues3; /// vamos querer definir o type desse negócio como ALGO QUE NÃO SEJA 'any', pq definir como any é péssimo código..
let combineValues3;
combineValues3 = combine2;
console.log(combineValues3(8, 8));
let combineValues;
let combineValues22; ///FUNCTION TYPE...
combineValues22 = add;
// combineValues22 = 5;  //não  é permitido, devido ao type de 'Function'...
combineValues22 = printResult2;
let combineValues55555;
// (
//     QUEREMOS QUE AS FUNCTIONS/A FUNCTION ARMAZENADA DENTRO DESSA VARIABLE 
//     __TENHA__ 2 PARÂMETROS DE TYPE 'number',
//     E QUE 
//     OBRIGATORIAMENTE RETORNE UM 'number'...
// )
