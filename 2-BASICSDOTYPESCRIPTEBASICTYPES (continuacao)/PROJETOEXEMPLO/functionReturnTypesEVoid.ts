function add6(n1: number, n2: number) { //passe o mouse em cima de 'function add6' PARA _ VER _ QUAL É O RETURN TYPE dessa função (valor depois do ':')....
  return n1 + n2;
}






function add25(n1: number, n2: number) { ///NOVAMENTE, VEJA O 'infered type' quando vocÊ colocar o MOUSE EM CIMA da 'function add25'... --> infered type de 'STRING'...
    return n1.toString() + n2.toString();
}






///É UMA BOA IDEIA __ DEIXAR __ O PRÓPRIO TYPESCRIPT 'infer' O RETURN TYPE DE NOSSAS FUNCTIONS (exatamente da mesma forma com 'variables')....

// function add(n1: number, n2: number): string { /////////CÓDIGO ERRADO/INCOMPATÍVEL, PQ AQUI NÃO SERÁ FEITO O RETUNR DE UM NUMBER, E SIM DE UMA __ STRING__....

//     return n1 + n2;


//  }














//NOVO 'RETURN TYPE', type de 'void'...









function printResult42(num: number) { 

    console.log('Result: ' + num); /// não estamos RETORNANDO  (return) NADA NESSA FUNCTION, POR ISSO O RETURN TYPE (':xxx') ESTÁ MOSTRANDO COMO 'void' (só estamos console.loggando, pq return não estamos retornando nada...)
}


//void --> essa função NÃO TEM UM RETURN STATEMENT, NÃO RETORNA COISA ALGUMA....



printResult42(1221);






printResult42(add6(5, 12));













// let someValue: undefined; ///jeito de settar uma variable como 'FOREVER UNDEFINED' (pq o undefined TAMBÉM É UM TYPE, EM TYPESCRIPT)...












function printResult222(num: number): undefined { /////ESTE CÓDIGO NÃO É TIDO COMO CAPAZ DE CAUSAR ERROS NO TYPESCRIPT, isso pq apesar de termos definido o return type como 'undefined', nós REALMENTE ESTAMOS RETORNANDO 'undefined' (como visto em 'return; ')...
  console.log();


  return 'string'; /////EIS O CÓDIGO EM QUESTÃO. (vai dar error pq ESCREVEMOS, ALI EM CIMA, QUE O RETURN TYPE SERÁ/é de 'undefined'....)
}







function printResult22(num: number): undefined { /////ESTE CÓDIGO NÃO É TIDO COMO CAPAZ DE CAUSAR ERROS NO TYPESCRIPT, isso pq apesar de termos definido o return type como 'undefined', nós REALMENTE ESTAMOS RETORNANDO 'undefined' (como visto em 'return; ')...
  console.log();


  return; /////EIS O CÓDIGO EM QUESTÃO.
}



