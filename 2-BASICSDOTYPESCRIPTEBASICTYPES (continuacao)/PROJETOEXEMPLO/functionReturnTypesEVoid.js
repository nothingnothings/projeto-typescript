"use strict";
function add6(n1, n2) {
    return n1 + n2;
}
function add25(n1, n2) {
    return n1.toString() + n2.toString();
}
///É UMA BOA IDEIA __ DEIXAR __ O PRÓPRIO TYPESCRIPT 'infer' O RETURN TYPE DE NOSSAS FUNCTIONS (exatamente da mesma forma com 'variables')....
// function add(n1: number, n2: number): string { /////////CÓDIGO ERRADO/INCOMPATÍVEL, PQ AQUI NÃO SERÁ FEITO O RETUNR DE UM NUMBER, E SIM DE UMA __ STRING__....
//     return n1 + n2;
//  }
//NOVO 'RETURN TYPE', type de 'void'...
function printResult42(num) {
    console.log('Result: ' + num); /// não estamos RETORNANDO  (return) NADA NESSA FUNCTION, POR ISSO O RETURN TYPE (':xxx') ESTÁ MOSTRANDO COMO 'void' (só estamos console.loggando, pq return não estamos retornando nada...)
}
//void --> essa função NÃO TEM UM RETURN STATEMENT, NÃO RETORNA COISA ALGUMA....
printResult42(1221);
printResult42(add6(5, 12));
// let someValue: undefined; ///jeito de settar uma variable como 'FOREVER UNDEFINED' (pq o undefined TAMBÉM É UM TYPE, EM TYPESCRIPT)...
function printResult222(num) {
    console.log();
    return 'string'; /////EIS O CÓDIGO EM QUESTÃO. (vai dar error pq ESCREVEMOS, ALI EM CIMA, QUE O RETURN TYPE SERÁ/é de 'undefined'....)
}
function printResult22(num) {
    console.log();
    return; /////EIS O CÓDIGO EM QUESTÃO.
}
