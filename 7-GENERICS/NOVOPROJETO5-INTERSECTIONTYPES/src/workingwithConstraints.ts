










// function merge<T, U>(objA: T, objB: U) {


//     return Object.assign(objA, objB);
// }




// const mergedObj5 = merge({name: 'Max'}, 30); ////isso vai dar um ERRO... --> pq NUMBERS NÃO FUNCIONAM/NÃO SÃO ACEITOS COMO PARÂMETRO DE 'Object.assign' --> É POR ISSO QUE VAMOS QUERER 
//             ///DECLARAR QUE ESSA FUNCTION DE 'MERGE'  SÓ __ VAI __ FUNCIONAR/ACEITAR __ oBJECTS, OBJECTS COM ESTRUTURAS VARIADAS, MAS __ SÓ OBJECTS_...



// console.log(mergedObj5.age);





///QUEREMOS _ RESTRINGIR__ OS TYPES DE '''T''' e 'U'''',

//ou seja, DE SEUS GENERIC TYPES....





///------> E PODEMOS FAZER ISSO COM 'TYPE CONSTRAINTS'.... ------> OS TYPE CONSTRAINTS EXISTEM QUANDO VOCÊ ESCREVE 'extends xxxx' LÁ NO SEU '<>'... (type assignment).... 



//// NO CASO, VAMOS QUERER QUE ISSO SEJA 'object', que ESSES PARAMETERS SEJAM OBJECTS DE QUALQUER ESTRUTURA, mas que sejam OBJECTs...







function merge2<T extends object, U extends object>(objA: T, objB: U) {


    return Object.assign(objA, objB);
}




const mergedObj5 = merge2({name: 'Max'}, 30); ////isso vai dar um ERRO... --> VAI DAR ERRO JUSTMAENTE PQ DEFINIMOS EM ''' <T extends object, U extends object> ''' QUE __ O ÚNICO TYPE ACEITADO SERÁ O DE 'object'...
















///// ' Letra extends xxx' 



// function merge<T extends object, U extends object>(objA: T, objB: U) {


//     return Object.assign(objA, objB);
// }




// const mergedObj5 = merge({name: 'Max'}, 30); ////isso vai dar um ERRO... --> pq NUMBERS NÃO FUNCIONAM/NÃO SÃO ACEITOS COMO PARÂMETRO DE 'Object.assign' --> É POR ISSO QUE VAMOS QUERER 
//             ///DECLARAR QUE ESSA FUNCTION DE 'MERGE'  SÓ __ VAI __ FUNCIONAR/ACEITAR __ oBJECTS, OBJECTS COM ESTRUTURAS VARIADAS, MAS __ SÓ OBJECTS_...



// console.log(mergedObj5.age);







// -------> SE FAZEMOS ISSO, JÁ RECEBEMOS UM ERRO EM '30',


// PQ ELE NÃO SERÁ ASSIGNÁVLE AO TYPE DE 'object'....








// EX:














// function merge2<T extends object, U extends object>(objA: T, objB: U) {


//     return Object.assign(objA, objB);
// }




// const mergedObj5 = merge2({name: 'Max'}, 30); ////isso vai dar um ERRO... --> VAI DAR ERRO JUSTMAENTE PQ DEFINIMOS EM ''' <T extends object, U extends object> ''' QUE __ O ÚNICO TYPE ACEITADO SERÁ O DE 'object'...





















// ----------> OK... ESSE É O PADRÃO QUE QUEREMOS, AQUI.. -> e agora somos forçados a REALMENTE PASSAR UM OBJECT MAIS UMA VEZ (e não uam string/number),




// PQ  O 'Object.assign'




// VAI REALMENTE EXIGIR 2 OBJECTS, 


// E AÍ 


// VAMOS QUERER _ _ ASSEGURAR QUE RECEBEMOS 2 OBJECTS EM 'T' e 'U'.......

 










//  E ESSAS CONSTRAINTS (o '<extends xxx>' lá na function definition ) PODEM/PODERÍAM SER __ QUALQUER COISA... ---->  PODERÍAMOS NOS RFEFERIR 



//  a 

//  'string', 'number',



//  'array',





//  E _ ATÉ MESMO_ SEU PRÓPRIO TYPE....












//  ------> VOCÊ PODE ATÉ MEMSO USAR UNION TYPES- -> há mt flexibilidade 



//  quanto 



//  ao 

//  USO DE CONSTRAINTs 





//  NOS SEUS 'GENERIC TYPES'...












// -> E É CLARO QUE VOCê _ NÃO É FORÇADO A 'CONSTRAIN' __ tODOS _OS 






// ___ 'GENERIC TYPEs'-----> OU SEJA, SE VOCÊ QUER 'constrain' APENAS ___O  'U',






// VOCÊ SÓ ADICIONA O 'extends object'


// NELE...












