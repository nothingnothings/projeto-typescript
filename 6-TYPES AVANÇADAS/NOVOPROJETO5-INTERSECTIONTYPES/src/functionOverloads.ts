type Combinable2 = string | number; 





function add2(a: Combinable2, b: Combinable2) {

    if (typeof a === 'string' || typeof b === 'string') {

        return a.toString() + b.toString();
    }



    return a + b; 
}









//// se passarmos o mouse em cima de 'add', typescript vai dizer isto: 



///function add2(a: Combinable2, b: Combinable2): string | number  -----------> OU SEJA, VAI DIZER 'ESSE NEGÓCIO VAI RETORNAR OU UMA STRING, OU UM NUMBER'...


 



add2(1, 5); /// ele diz que o VALOR RETORNADO SERÁ DE 'number' ou de 'string',  o que É INCORRETO, PQ O VALOR __ RETORNADO, NESSE CASO, VAI SER 100% UM NUMBER...



const result2 = add2('Max', 'Schwarz'); ///ainda vamos ganhar 'combinable' como return type, o que é MEIO (completamente) ERRADO...




// const result2 = add2('Max', 'Schwarz') as string; ///POSSÍVEL FIX, mas não é ÓPTIMO PQ TEMOS QUE ESCREVER CÓDIGO ADICIONAL...


// result2.split(); /////////COMO ___ CONSEQUÊNCIA DISSO, DO 'type' desse 'result2' SER (string | number), __ NÃO PODEMOS/PODEREMOS __ CHAMAR FUNÇÕES DE STRING NELE, PQ ISSO NOS DARÁ ERRORS....






result2.split('a', ); //////// SE USAMOS 'as string', __ ISSO FUNCIONARÁ.... (é um possível FIX).... --> esse é o fix approach que usa 'TYPE CASTING'...









/////////////////////////
///////////////////////////////














/////////////////////////AGORA O APPROACH DOS FUNCTION OVERLOADS:



///(sim, vocÊ precisa DUPLICAR o 'function add2')...., e também os PARÂMETROS...


////aí você vai colocar o RETURN TYPE PARA CADA 'case' dos parâmetros que você receber, nessa sua função... (ex: '2 parametros com type de number, vou querer retornar 'number'  também''')....







// function add3(a: number): number; //outros exemplos de overloads... (se deixarmos nosso 2o parametro como 'optional'...)

function add3(a: number, b: number): number; /// EXEMPLO DE FUNCTION OVERLOADS....
function add3(a: string, b: string): string;
function add3(a: number, b: string): string;
function add3(a: string, b: number): string;
function add3(a: Combinable2, b: Combinable2) {

    if (typeof a === 'string' || typeof b === 'string') {

        return a.toString() + b.toString();
    }



    return a + b; 
}






const result4 = add3(21, 12); 








result4.toFixed(); //benefício de usar FUNCTION OVERLOADS...




const result5 = add3('21', '12'); /// ''' function add(a: string, b: string): string (+3 overload)''' --> '+3 overload' --> 3 OUTRAS MANEIRAS DE CHAMAR ESSA FUNÇÃO (com diferentes TYPES DE PARAMETERS, em outras palavras)...




result5.split('sss'); ///benefício de usar FUNCTION OVERLOADS ( o type estará definido como 'string', pq é isso que definimos no return type em '' function add3(a: string, b: string): string; '')

