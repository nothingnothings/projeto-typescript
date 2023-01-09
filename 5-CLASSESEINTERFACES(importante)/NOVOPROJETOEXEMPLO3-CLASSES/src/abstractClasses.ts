

// QUEREMOS ISTO:


// class legataria {

//     describe() {
//         console.log('lógica 1');
//     }
// }





// class herdeira1 extends legataria {

//     describe() {
//         console.log('lógica 2');
//     }
// }





// class herdeira2 extends legataria {

//     describe() {
//         console.log('lógica 3');
//     }
// }







/// ou seja, queremos que o nome DESSE METHOD seja repassado a cada class (cada class terá de ter esse method), MAS __ VAMOS QUERER __ QUE __ CADA CLASS TENHA SUA PRÓPRIA VERSÃO DESSE 'describe', com lógicas distintas e especializadas, customizadas para cada class....









////// PARA ISSO, PRECISAMOS DA KEYWORD De 'abstract' NA FRENTE DO NOSSO METHOD que será legaddo...




/////E TAMBÉM PRECISAMOS DE 'abstract' __ NA __ FRENTE___ do 'class' da CLASS LEGATÁRIA....



//ex:








abstract class Legataria { //////////// OUTRO DETALHE: CLASSES QUE POSSUEM ESSA KEYWORD DE 'abstract' __ NAÕ PODEM SER INSTANCIADAS ELAS MESMAS... (vocÊ só pode instanciar as classes que FAZEM INHERIT DELAS)...

    // abstract describe(this: legataria) {

    // }


    abstract describe(this: Legataria): void;



    }
 
 
 
 
 class Herdeira1 extends Legataria {
 
     describe() {
         console.log('lógica 2');
     }
 }
 
 
 
 
 
 class Herdeira2 extends Legataria {
 
     describe() {
         console.log('lógica 3');
     }
 }
 
 
 
  
 class Herdeira3 extends Legataria { ////exemplo de erro que aparece SE NÃO TIVERMOS ESSA ABSTRACT CLASS, definida lá na nossa 'INHERITED CLASS' de 'legataria'....
 

    //describe() {} ///precisamos escrever isto para parar com o error....

}









//////////// OUTRO DETALHE: CLASSES QUE POSSUEM ESSA KEYWORD DE 'abstract' __ NAÕ PODEM SER INSTANCIADAS ELAS MESMAS... (vocÊ só pode instanciar as classes que FAZEM INHERIT DELAS)...





const objetoErrado = new Legataria(); ///'cannot create an instance of an abstract class'.....












//  abstract class legataria {

//     abstract describe(this: legataria) {

//     }


//     }
 
 
 
 
//  class herdeira1 extends legataria {
 
//      describe() {
//          console.log('lógica 2');
//      }
//  }
 
 
 
 
 
//  class herdeira2 extends legataria {
 
//      describe() {
//          console.log('lógica 3');
//      }
//  }
 
 
 
 













// ----> MAS AGORA TEMOS OUTRO ERRO:




// 'Method 'describe' cannot have an implementation because it is marked 


// abstract'....










// --> PARA RESOLVER ESSE ERRO,

// você tem que 


// REMOVER os '{}' 


// e adicionar um ';',


// FAZENDO COM QUE ESSE METHOD FIQUE REALMETNE 'ABSTRATO'....
















// --> OK... MAS AINDA ASSIM, RECEBEMOS UM ERROR, ERROR DE 



// ''

// 'describe', which lacks return-type annotation, implicitly has an 'any' return type.ts


// '''








// -----> PRECISAMOS DEFINIR TAMBÉM __ O RETURN TYPE __ QUE 


// ESSE METHOD DEVERÁ TER, por meio de ':' ...








// ---> VAMOS COLOCAR, NO CASO, 


// ':'... e então 'void', pq esse method não vai retoranr coisa alguma....












// EX:













// abstract class Legataria {

//     // abstract describe(this: legataria) {

//     // }


//     abstract describe(this: Legataria): void;



//     }
 
 
 
 
//  class Herdeira1 extends Legataria {
 
//      describe() {
//          console.log('lógica 2');
//      }
//  }
 
 
 
 
 
//  class herdeira2 extends Legataria {
 
//      describe() {
//          console.log('lógica 3');
//      }
//  }
 
 
 
 









//  -----------------------------------




//  COM ISSO,

//  OS ERRORS FINALMENTE PARAM DE APARECER....









//  --> AGORA, PORTANTO, ESTAMOS DEFININDO 'COMO ESSE METHOD DEVE SE PARECER'... (

//      como deve ser sua estrutura
//  )










//  --> ENTRETANTO, NÃO ESTAMOS DIZENDO MAIS COISA ALGUMA ALÉM DISSO....










//  -->  MAS O QUE INTERESSA, NO CASO,


//  É 


//  QUE 

//  TODAS SUAS INHERITING CLASSES ___ VÃO __SER ___ OBRIGADAS__ 

//  A 

//  ESCREVER 




//  esse method de 'describe'





// dentro de suas function body....








// --> SE NÃO FIZERMOS ISSO, APARECE O ERROR DE 



// 'Non-abstract class 'ITDepartment' does not implement inherited abstract member 'describe' from 
// class 'Department'.' 


