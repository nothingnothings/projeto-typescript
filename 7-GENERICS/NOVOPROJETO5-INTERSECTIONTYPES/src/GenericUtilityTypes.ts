











// Partial ///o primeiro UTILITY TYPE...













interface CourseGoal {
    title: string;
   description: string;
   completeUntil: Date;
}










function createCourseGoal(title: string, description: string, date: Date): CourseGoal{


    return {
        title: title,
        description: description,
          completeUntil: date
  }
  

};









/// ESSA interface e essa FUNCTIOn estão CORRETAS, SIM... --> ESSA FUNCTION SEMPRE VAI RETORNAR UM 'CourseGoal'....










///////////////////////////////












// COM ISSO, TERÍAMOS UM SETUP 'BREAD AND BUTTER'




// bem simples,


// mas válido...













// --> MAS DIGAMOS QUE NÃO VAMOS FAZER ASSIM,

// NÃO VAMOS ESCREVER UM CÓDIGO FACIL ASSIM....





// (

//     NÃO FAREMOS TUDO 'IN ONE STEp'..





// )











// --> EM VEZ DISSO,


// PROFESSOR QUER COMEÇAR 







// PELO CREATE DE UMA VARIABLE,


// NESSA FUNCTION,


// QUE 



// CRIARÁ UM 


// OBJECT VAZIO...








// -> E AÍ,


// ETAPA POR ETAPA, PROFESSOR QUER IR ADICIONANDO AS PROPERTIES A ESSE OBJECT (title, description e 'date')...













// ex:











// function createCourseGoal2(title: string, description: string, date: Date): CourseGoal {


//     let courseGoal: CourseGoal = {};
//     ///extra validation (possível, entre cada etapa de add de propriedade)..
//     courseGoal.title = title;
//     ///extra validation (possível, entre cada etapa de add de propriedade)..
//     courseGoal.description = description;
//     ///extra validation (possível, entre cada etapa de add de propriedade)..
//     courseGoal.completeUntil = date;
    
    
    
//       }















    


//       --> E QUANDO ESCREVERMOS ESSAS DEFINITIONS COM A DOT NOTATION,


//       VAMOS RECEBER ERRORS....
      
      
      
      
      
      
      
      
      
//       --> serão errors de 
      
      
      
      
      
//       ''' Property 'description' does not exist on type '{}'. '''''
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
//       --> é pq essas propriedades NÃO SÃO PROPRIEDADES DESSE OBJETO....
      
      
      
      
      
      
      
      
      
      
      
      
      
      
//       -_> ESSA SINTAXE PODE FUNCIONAR NO VANILLA JAVASCRIPT (weakly typed),
      
//       MAS 
      
//       NÃO FUNCIONA NO TYPESCRIPT...
      
      
      
      
      
      
      
      
      
//       ----> ts não gosta desse 'on the fly adding',
      
//       essencialmente...
       
      
      
      
      
      
      
      
      
      
//        -> É POR ISSO QUE DEVEMOS DIZER QUE o 'courseGoal
      
//        '
//        deve
      
      
//        ser DE TYPe 'CourseGoal'....
      
      
      
      
      
      
      
      
//        ex:
      
      
      
      
      
      
      
      
      
       
//       function createCourseGoal2(title: string, description: string, date: Date): CourseGoal {
      
      
//           let courseGoal: CourseGoal = {};
//           courseGoal.title = title;
//           courseGoal.description = description;
//           courseGoal.completeUntil = date;
          
          
          
//             }
      
      
      
      
      
      
      
      
//       ----------------------------
      
      
      
      
      
      
      
      
      
//       OK... MAS AGORA O TYPESCRIPT__ VAI __ RECLAMAR __dE OUTRA COISA,
      
//       VAI RECLAMAR 
      
      
      
//       QUE __ O 
      
//       '{}'
      
//       VAI ESTAR COMO UM EMPTY OBJECT,
      
      
      
//       OU SEJA,
      
      
      
//       SEM NENHUMA 
      
//       DAS PROPRIEDADES 
      
//       que faria esse '{}' ser considerado como 'COMPATÍVEL/ADEQUADO' Às propriedaeds 
      
      
      
//       de 
      
      
//       'CourseGoal' interface....
      
      
      
      
      
      
      
      
      
      
      
      
      
//       -------> ok... ------->  
      
      
      
//       DIGAMOS QUE 
      
      
      
      
//       TEMOS 'VALIDATION' entre cada 1 dos 'adds' das propriedades 
      
      
//       nesse objeto 'courseGoal',
      
      
//       tipo assim:
      
      
      
      
      
      
      
      
      
      
//       function createCourseGoal2(title: string, description: string, date: Date): CourseGoal {
      
      
//           let courseGoal: CourseGoal = {};
//           ///extra validation (possível, entre cada etapa de add de propriedade)..
//           courseGoal.title = title;
//           ///extra validation (possível, entre cada etapa de add de propriedade)..
//           courseGoal.description = description;
//           ///extra validation (possível, entre cada etapa de add de propriedade)..
//           courseGoal.completeUntil = date;
          
          
          
//             }
      
      
      
      
      
      
//       --------------------------------------
      
      
      
      
      
      
      
      
      
      
//       NESSE CASO,
      
      
//       ESSE APPROACH 'STEP-BY-STEP' faz sentido,
      
      
      
      
//       MAS 
      
//       O
       
      
//        TYPESCRIPT ESTÁ CHORANDO 
      
      
//        sobre 
      
      
      
//        essa linha de 
      
      
      
//        'let courseGoal: CourseGoal = {}'..
      
      
      
      
      
      
      
      
      
      
//        ->E É EXATAMENTE AQUI que 
      
      
      
//        O TYPE DE 'PARTIAL' 
      
      
      
      
      
      
      
//        PODE NOS AJUDAR...














// --> PARA RESOLVER O PROBLEMA,

// DEFINIMOS 



// que


// esse 




// 'let courseGoal' que É 


// UM '{}'


// DEVE 

// SER CONSIDERADO, SEU TYPE,

// COMO DE 

// 'PARTIAL'.... 













// --------> E UM TYPE DE 'Partial',


// NO CASO,


// OBRIGA__ QUE __VOCê PASSE, COMO PARÂMETRO EM '<>',


// OQ UE 


// ELE 



// 'SEGURA'...










// --> no caso, 

// VAMOS PASSAR O 'CourseGoal' como argumento...












function createCourseGoal2(title: string, description: string, date: Date): CourseGoal {


    let courseGoal: Partial<CourseGoal> = {}; ///exemplo do uso de 'PARTIAL'...

    ///extra validation (possível, entre cada etapa de add de propriedade)..
    courseGoal.title = title;
    ///extra validation (possível, entre cada etapa de add de propriedade)..
    courseGoal.description = description;
    ///extra validation (possível, entre cada etapa de add de propriedade)..
    courseGoal.completeUntil = date;
    
    


        // return courseGoal; ///não funcionará (pq o return type, caso escrito assim, ainda será de 'Partial<CourseGoal>' ) -_> devemos USAR A SINTAXE DE TYPE CASTING...

//ex:


        return courseGoal as CourseGoal;/// eis aqui o fix para o return type de 'Partial<CourseGoal>'..
    
      }

















    //   --_> NO CASO, ISSO ESTÁ DIZENDO:










    //   ''''ESSE É UM OBJECT QUE__, NO FINAL DA EXECUÇAÕ,  SERÁ UM 
      
    //   "COURSEGOAL", mas que por enquanto não será....'''' ------------> 
      
      
      
      
      
      
      
    //   MAS O QUE O 
      
      
      
    //   'Partial' FAZ __ É, INICIALMENTE,
      
      
      
      
      
    //   DEIXAR_ _ 
      
      
      
      
      
    //   TODAS AS PROPRIEDADES NO NOSSO 'WRAPPED TYPE' ( no caso, 'CourseGoal') 
      
      
      
      
    //   __ COMO OPTIONAL (?)... é isso que ele faz...











    


// ------> O ÚNICO PROBLEMA, AQUI, 



// É QUE NÃO VAMOS PODER FAZER 'RETURN' 


// de 


// 'courseGoal',






// ------> O ÚNICO PROBLEMA, AQUI, 



// É QUE NÃO VAMOS PODER FAZER 'RETURN' 


// de 


// 'courseGoal',







// PQ O TYPESCRIPT AINDA ACHA QUE 

// O 


// TYPE DESSA FUNCTION SERÁ de 


// 'Partial<CourseGoal>'


// EM VEZ DE 


// 'CourseGoal'...












//// O FIX PARA ISSO 






// -----> O FIX PARA ISSO É SIMPLES... -> TEMOS QUE __ CONVERTER__ O 

// TYPE DE 'Partial<CourseGoal>'



// ,



// nesse 'return courseGoal',






// PARA __ 


// 'CourseGoal'....










// --> E FAREMOS ISSO POR MEIO DO CO´DIGO DE 'TYPE INFER',


// tipo assim:






// function createCourseGoal2(title: string, description: string, date: Date): CourseGoal {


//     let courseGoal: Partial<CourseGoal> = {}; ///exemplo do uso de 'PARTIAL'...

//     ///extra validation (possível, entre cada etapa de add de propriedade)..
//     courseGoal.title = title;
//     ///extra validation (possível, entre cada etapa de add de propriedade)..
//     courseGoal.description = description;
//     ///extra validation (possível, entre cada etapa de add de propriedade)..
//     courseGoal.completeUntil = date;
    
    


//         return courseGoal as CourseGoal; ///RESOLVIDO O PROBLEMA....
    
//       }










////////////////////////////////////










///OUTRO BUILTIN RETURN TYPE É O DE 'Readonly'....













///exemplo:











let names3 = ['MAX', 'SPORTS']; //// typescript vai 'infer' que o type disso aí é 'string[]'...



// -> COMO ISSO É UM STRING ARRAY,


// PODEMOS FAZER __ PUSH_ DE STRINGS PARA DENTRO DELE....


////ex:


names3.push('Manu');











// OK........ MAS DIGAMOS....

// QUE __ DEPOIS __ DE 


// ADICIONAR ESSA STRING AÍ,




// quermos__


// DEIXAR ESSE 
// ARRAY 

// COMO 

// 'LOCKED'....







// OU SEJA,

// NÃO QUEREMOS DEIXAR NENHUMA STRING SER ADICIONADA... 



// -------> QUERO QUE O TYPESCRIPT GRITE COMIGO,



// QUE TENTE ME IMPEDIR DE ADICIONAR MAIS VALORES STRING A ESSE ARRAY...

// --> PARA ISSO,


// PODEMOS DEFINIR O GENERIC TYPE DE 'Readonly',



// tipo assim:


// const names: Readonly<string[]> = ['Max', 'Anna']









const names5: Readonly<string[]> = ['MAX', 'SPORTS']; ////OK, ESTAMOS DIZENDO QUE ISSO É REALMENTE UM ARRAY DE STRINGS, MAS UM ARRAY QUE É 'READONLY', ou seja, QUE NÃO PODE SER ALTERADO (valores não podem ser adicionados, nem alterados, nem removidos)...





names5.push('Manu');


names5.pop();













// --------> E É CLARO QUE ISSO NÃO SE LIMITA A ARRAYS,


// VOCÊ PODE 

// USAR 

// 'readonly'



// COM_ _ OBJECTS_, TAMBÉM,



// PARA_ _ QUE __ 



// VOCÊ NÃO SEJA CAPAZ DE MUDAR SUAS PROPRIEDADES...















// -> E TODOS ESSES 'UTILITY TYPES'


// SÃO GENERIC 

// PQ 




// ELES SEMPRE __ PEGAM UM TYPE QUE 

// JÁ EXISTE 






// ___ E ENTÃO__ FAZEM ALGO COM ELE (ou 'set everything to optional', como no 'Partial', ou então 'LOCK EVERYTHING DOWN', com o 'readonly')....