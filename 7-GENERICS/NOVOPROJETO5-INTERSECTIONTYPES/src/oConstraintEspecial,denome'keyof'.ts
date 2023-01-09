
















// function extractAndConvert(obj: object, key: string) {



//     return obj[key]; ///retornamos essa KEY ESPECÍFICA, nesse object...
// }







// extractAndConvert({}, 'name');







function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { /// 'extends keyof' ----> ESSE É O CONSTRAINT DE 'keyof', QUE É EXTREMAMENTE SITUACIONAL (use quando você quiser que ALGUM PARÂMETRO/TYPE DE SUA __ FUNCTION___, SEU VALOR/PROPRIEDADE, TENHA __ QUE EXISTIR DENTRO DE OUTRO PARÂMETRO PASSADO A SUA FUNCTION)...


    return 'Value ' + obj[key];

}







extractAndConvert({}, 'name'); ////exemplo do resultado do 'keyof'...



extractAndConvert({name: 'asasas'}, 'name');







// --> OK.. AÍ ESPECIFICAMOS QUE em 'obj' queremos ter um OBJECT,


// e que em key vamos querer 


// TER UMA _ STRING___...











// EX:













// function extractAndConvert(obj: object, key: string) {



//     return obj[key]; ///retornamos essa KEY ESPECÍFICA, nesse object...
// }
















// ------> ok, MAS MESMO ASSIM,





// VAMOS RECEBER UM ERROR:










// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
//   No index signature with a parameter of type 'string' was found on type '{}'.ts(705
















//   ---------> OK.... --> O ERRO BASICAMENTE DIZ 




//   '''NÃO HÁ COMO SABER SE ESSE 

//   OBJECT ESPECÍFICO _ _REALMENTE__ TERÁ __ 


//   ESSA PROPRIEDADE de 'key'  ''''












//   -----------> ok... -------> POR EXEMPLO, AQUI,


//   PODERÍAMOS 



// CONSOLE.LOGGAR 

// o 


// resultado 


// de um call dessa function,

// SENDO PASSADO UM OBJECT VAZIO... ( sem NENHUMA PROPRIEDADE)....




// ,


// E O SEGUNDO PARâMETRO PODEMOS COLOCAr 'NAME'...











// --> UM OBJECT VAZIO COMO O PARÂMETRo primeiro





// E UMA STRING COMO O SEGUNDO --> E O TYPESCRIPT VAI ME INFORMAR CORRETAMENTE DE QUE 



// __ NÃO HÁ COMO GARANTIR QUE __ UMA PROPRIEDADE DE 'name' vai sempre existir nesse object que vocÊ passa no primeiro parâmetro...

























// AÍ AS COISAS FICAM COMPLICADAS....












// O PROFESSOR ESCREVE ASSIM:











// function extractAndConvert<T extends object, U>(obj: T, key: U) {


//     return 'Value ' + obj[key];

// }













// --> OU SEJA,




// o parametro 'T/obj' 



// DEVERÁ __ SER UM OBJECT QUALQUER... 






// ------> JÁ 



// o parâmetro 'key'

// DEVERÁ ___ SER ALGUMA COISA QUALQUEr...









// --> ENTRETANTO,

// O PROFESSOR QUER 


// COMUNICAR AO TYPESCRIPT __ QUE __ 



// a 'key'/parâmetro de 'U'


// DEVERÁ _ SER OBRIGATORIAMENTE UMA 


// KEY NO INTERIOR DE 

// 'T',


// para que nossa function funcione....












// -------> PARA ISSO, PROVAVELMENTE PRECISAREMOS DAQUELE CONSTRAINT de 'typeof' ,


// que ele mencionou anteriormente....















// --> mas esse constraint de 'keyof' 


// PARECE SER ESPECIAL...













// -->>>> PARECE QUE ELE DEVE SER USADO __ EM CONJUNTO, usado __ COM O 'extends', ao mesmo tempo...





















// ---> ok... o 'U' precisa ser um KEY TYPE de 'T'... -----> 






// O PARÂMETRO 'U' 

// deve ser uma 


// PROPERTY DO PRIMEIRO TYPE,





// do primeiro parâmetro...















// --> PARA ISSO,


// O PROFESSOR 

// ESCREVE 






// 'U extends keyof T' 



// (


//     sintaxe extremamente bizarra, mas que funciona...
// )