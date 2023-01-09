

















// function merge(objA: object, objB: object) { ///essa função é/seria válida...




//         return Object.assign(objA, objB); 


// }











// console.log(merge({name: 'NOME'}, {age: 21})); /////////ISSO FUNCIONA/FUNCIONARIA....








// const mergedObject = merge({name: 'NOME'}, {age: 21}); ////SE FIZERMOS TIPO ASSIM.... ---> SURGIRÁ UM PROBLEMA.... --> não conseguiremos acessar '.name' nesse STORED OBJECT...





// mergedObject.name ////erro typescript... --> Property 'name' does not exist on type 'object'. --> isso ocorreu JUSTAMENTE PELO USO DE 'type: object', lá na nossa function...








// ---> OU SEJA,



// O USO DO TYPE GENERIC DE 'object'



// É INSATISFATÓRIO, PQ 
// VAI 


// RESULTAR EM ERRORS COMO ESSE....







///POSSÍVEL FIX:



// const mergedObj = merge({name: 'Max'}, {age: 30}) as {name: string, age: number}; ////SIM, PODERÍAMOS FAZER ASSIM....
// //// o problema é que teríamos que fazer isso para __ CADA__ CALL __DE 'merge' no nosso código....



////////////////










// --> NESSE EXEMPLO, 'GENERICS' PODERIAM/PODEM NOS AJUDAR...

















// --> PARA __tRANSFORMAR___ UMA FUNÇÃO EM UMA 'GENERIC FUNCTIOn',







// _ VOCÊ_ DEVE escrever '<>' 






// ___dEPOIS__ DO FUNCTION NAME...









// tipo assim:











// function merge<>(objA: object, objB: object) {




//         return Object.assign(objA, objB); 


// }







// ---------------------------------------------












// AÍ, DENTRO DESSE '<>',



// DEFINIMOS ___ 



// 2 IDENTIFIERS__ DIFERENTES...















// --------> O PRIMEIRO __ IDENTIFIER__ TIPICAMENTE É 'T',




// que é uma abreviação de 'Type'.... (mas você poderia usar qualquer identifier, não precisa ser 1 letra só)....











// --> MAS A CONVENÇÃO É USAR__ APENAS 1 'CHARACTER',



// e se VOCÊ TEM APENAS 1 
// GENERIC TYPE NO SEU CÓDIGO,



// vocÊ usa 'T'...




















// --> FICA TIPO ASSIM:






// function merge<T>(objA: object, objB: object) {




//         return Object.assign(objA, objB); 


// }


















// ISSO VAI BASICAMENTE DIZER AO TYPESCRIPT:




// '''ESSE GENERIC TYPE DE "T" VAI 


// AGORA FICAR DISPONÍVEL_ _ _APENAS__ DENTRO DESSA FUNCTION_ ....."















// -> DEFINIDO ESSE NOME DE 'T',




// podemos o UTIIZAR EM PARTES DE NOSSA FUNCTION LOCAL...









// TIPO ASSIM:







// function merge<T>(objA: T, objB: object) { 




//     return Object.assign(objA, objB); 


// }













//// MAS QUEREMOS QUE 'objB' também tenha um 'CUSTOM TYPE', que não seja object, por isso CRÍAMOS UM NOVO 'GENERIC TYPE' nessa function, tipo assim:





////





// function merge<T, U>(objA: T, objB: U) { 




//     return Object.assign(objA, objB); 


// }













///// o type seguinte será de 'U' (pq vamos seguir o alfabeto, em ordem, para definir esses types locais)...
















function merge<T, U>(objA: T, objB: U) { 




    return Object.assign(objA, objB);   //// '(method) ObjectConstructor.assign<T, U>(target: T, source: U): T & U (+3 overloads)' 


}











const mergedObj = merge({name: 'Max'}, {age: 30});







const age = mergedObj.age; ///sem errors..






const mergedObj2 = merge({job: 'coder'}, {name: 'asasas'});






// const mergedObj3 = merge<string, number>({job: 'coder'}, {name: 'asasas'}); //exemplo de incompatibilidade (de '<string>' com {job: 'coder'}) 



const mergedObj3 = merge<{job: string}, {name: string}>({job: 'coder'}, {name: 'asasas'}); //JÁ ESTE CÓDIGO AQUI SERIA/É COMPATÍVEL, mas é mt VERBOSE... --> é REDUNDANTE.




// ------> BEM, SE VOCÊ PASSAR O MOUSE EM CIMA de 


// 'function',


// VOCê 

// VERÁ 

// ISTO AQUI:










// function merge<T, U>(objA: T, objB: U): T & U














// -> OU SEJA, TYPESCRIPT INFERIU QUE __ 

// ESSA FUNCTION__ VAI RETORNAR UMA 'INTERSECTION' 



// entre 

// T e U .... ('T & U')...
















// OK, MAS PQ ELE FEZ ISSO?




// COMO FOI CAPAZ DE INFERIR ISSO AGORA, com 


// 'T' E 'U',




// __ E NÃO COM 'object', como antes...? 




// --> ISSO É PQ 



// 'object' É UM 

// TYPE ALTAMENTE INESPECÍFICO.... ------> NÓS DIZEMOS 'ANY OBJECT',







// o que VAI FAZER COM QUE O 


// TYPESCRIPT SIM, CONSIGA INFER QUE  




// VAMOS RETORNAR UMA INTERSECTION DE 


// '''object & object'''' --> MAS 




// A INTERSECTION DE 2 'UNKNOWN OBJECTS'


// VAI RETORNAR EXATAEMNTE ISSO,

// UM




// 'UNKNOWN OBJECT'....






















// --> esse 'object' é mt genérico, e deve ser evitado....



// ---> JÁ COM OS 'generic types' (como 'T' e 'U') ,


// SOMOS _ CAPAZES__ DE DIZER_ AO TYPESCRIPT _ QUE 

// ESSES 2 

// PARAMETERS 

// PODEM, e frequentemente VÃO,


// ser 

// DE __ DIFERENTES__ TYPES__....
















// --> O TYPESCRIPT VAI ENTENDER QUE NÃO ESTMAOS 'WORKING WITH SOME RANDOM OBJECT TYPE',


// e sim 



// QUE __ VAMOS RECEBER 'DIFFERENT DATA' AQUI,


// e que 

// ESSA FUNCTION, OVERALL, 




// VAI __ RETORNAR__ A INTERSECTION DESSA DATA... -----------> E É POR ISSO 

// QUE 


// O TYPESCRIPT VAI ENTENDER 

// QUE 



// O RETURN DESSA DATA ALI VAI __ SER A INTERSECTION DESSES 2 TYPES ESPECÍFICOS... (

//     pq agora 

//     não estamos 

//     mais lidando com 


//     2 objects inespecíficos/vagos, e sim 


//     COM 


//     2 TYPES __ BEM DEFINIDOS...
// )



////EX:










// -------> NÃO NOS IMPORTAMOS QUANTO AO EXATO OBJECT QUE SERÁ O TYPE,




// E SIM SÓ QUE '''SERÁ UM OBJECT COM ALGUMAS COISAS NO SEU INTERIOR''' ( e não '''UM OBJECT VAGO''') 







//// E ESCREVEMOS 'T' E 'U' JUSTAMENTE PARA __ DIFERENCIAR OS PARAMETERS, serão 2 diferentes objects como parameters..