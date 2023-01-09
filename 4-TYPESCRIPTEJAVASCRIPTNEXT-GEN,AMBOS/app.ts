
 


//  if (age > 20 ) {


//      var isOld = true;
//  }


//  console.log(isOld); //////ISSO VAI OUTPUTTAR 'true', mesmo que AQUELA DEFINIÇAÕ DE VARIABLE ESTEJA DENTRO DE '{}' -----> O QUE É MUITO RUIM, pois 'isOld' e seu valor PASSARÃO A EXISTIR GLOBALMENTE, MESMO TENDO SIDO DEFINIDOS APENAS NO CONTEXTO DE UM IF CHECK/block...











//  ------> SE TENTAMOS EXECUTAR ESSE CONSOLE.LOG AÍ,



//  VAMOS RECEBER UM __ ERRO__ NO TYPESCRIPT....










//  --> ENTRETANTO,

//  SE COPIARMOS E COLARMOS ESSE CÓDIGO NO CONSOLE DO CHROME,


//  vamos receber um print de 'true',

//  o que 


//  significa que 

//  ESSA VARIABLE ESTÁ SENDO DEFINIDA, em outras palavras (mesmo o typescript outputtando aquele erro...)

















//  --> ISSO SIGNIFICA QUE ESSA VARIABLE ESTÁ SENDO DEFINIDA __ GLOBALMENTE,



//  E NÃO SÓ 



//  DENTRO DO CONTEXTO DESSE 'IF CHECK'...






//  (


//      É JUSTAMENTE POR CAUSA DAQUILO:


//      COM 'VAR', O JAVASCRIPT _ NÃO CONHECE 

//      NENHUMA OUTRA SCOPE QUE NÃO SEJA 

//      'GLOBAL' 

//      OU 'FUNCTION SCOPE' 
//  ) --------> E ISSO 



//  __ MUDA__ COM 


//  'let'...














//  -----> COM 'LET':








//  if (age > 20 ) {


//      let isOld = true;
//  }


//  console.log(isOld); //////ISSO VAI OUTPUTTAR 'UNDEFINED'....














//  --> COM 'let',



//  ESSE 


//  VALOR DE 'true' definido NESSE __ IF CHECK __ 


//  SÓ __ VAI 


//  EXISTIR  DENTRO DO CONTEXTO DESSE IF CHECK (dentro dos {}) --------> FORA DOS '{}',



//  O VALOR DE 





//  'isOld', essa variable aí,


//  AINDA SERÁ DE 'UNDEFINED'....