

function Logger(target: Function) {  ///o target de DECORATORS DE CLASSES __ sempre_ será uma FUNCTION (pq é a/uma CONSTRUCTOR FUNCTION, o alvo, que é uma CLASS)....  ---> você também poderia chamar esse parâmetro de 'constructor', pq ele sempre será um constructor, também....
    ///este é um DECORATOR.... --> decorators são aplicadas a coisas, como CLASSES, por exemplo... (e decorators são sempre escritos com INICIAL MAIÚSCULA)...
    console.log('Logging...'); 
    console.log(target);
}





@Logger ///////é isso que vai __''''APLICAR NOSSA DECORATION A ESSA CLASS''''...  ---> você deve escrever o identificador de '@' e aí + 'nomeDeSeuDecorator', isso tudo SEM EXECUTAR esse call (  ou seja, sem parênteses)....


class Person { ////decorators são 'all about classes', na verdade...
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();






console.log(person);










// ------> CERTO.... -----------> MAS NESSE EXEMPLO,

// NÃO TEMOS NENHUM DECORATOR ENVOLVIDO....






////adicionamos um DECORATOR LÁ NO TOPO.... ---> um decorator, no final das contas, é uma mera FUNCTION....


// --> É UMA __ FUNCTION___ QUE É APLICADA A ___ ALGO__, no caso, uma 


// CLASS,


// de uma certa forma....






// --> o '@' 

// É UM __IDENTIFICADOr__ ESPECIAL 

// ___ NO TYPESCRIPT, QUE O TYPESCRIPT ENTENDE/RECONHECe....












// ------> É CLARO QUE DEPOIS DE '@'

// vamos __ APONTAR A UMA FUNCTION/DECORATOR.... ---> basta 




// APONTAR,



// __ SEM EXECUTAR__ ('()' )....









// ---------->  CERTO..
















// ---> AÍ O TYPESCRIPT NOS DÁ UMA INFO:





// 'Logger accepts too few arguments to be used as a decorator here.
// Did you mean to call it FIRST and write '@Logger()'? '



// --------> OK.... ---> ISSO SIGNIFICA QUE:


// 1) O TYPESCRIPT__ ENTENDE/ENTENDEU QUE VAMSO QUERER O UTILIZAR COMO UM DECORATOR, EM ALGUMA CLASS...




// 2) A MÁ NOTÍCIA É QUE 

//  AINDA NÃO PASSAMOS ARGUMENTOS SUFICIENTES.....




//  ---------> E, DE FATO,


//  DECORATORS _ __ RECEBEM__ ARGUMENTOS__....



//  -> QUANTOS ARGUMENTOS?









//  --> DEPENDE DO __ LOCAL__ EM QUE VOCê VAI QUERER UTILIZAR ESSE DECORATOR...












//  --> aqui, 



//  PARA UM _ DECORATOR QUE __ ADICIONAMOS/APLICAMOS EM 1 CLASS,


 
// VAMOS __ OBTER/EXIGIR_ SÓ 1 


// PARÂMETRo/ARGUMENTO...





















// --> OK.... ISSO SIGNFICA QUE 



// NOSSA 

// LÓGICA 

// DO DECORATOR É 



// __EXECUTADA__ ANTEs___ DE TODO O RESTO.... (Basta ver a lógica do decorator, de print, e o print no console)...