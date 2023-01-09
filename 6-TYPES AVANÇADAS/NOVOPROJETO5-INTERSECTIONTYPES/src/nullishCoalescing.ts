



///nullish coalescing operator --> '??' --> é esse operador aí....





// const userInput = null; //como definimos isso no typescript, ele tem 100% DE CERTEZA QUE ESSA CONST é de type 'null'....


// const userInput = '';






// --> MAS SE VAMOS FETCHEAR O VALOR DESSA CONST___ DE UMA DOM API,




// em que __ NÃO TEMOS CERTEZA 





// __ SE O NEGÓCIO SERÁ REALMENTE null...









// --> OU, EM OUTRA HIPÓTESE,

// ESTMAOS FETCHEANDO ESSE VALOR DE UM BACKEND... --> aí também não vamos ter certeza 

// DE 
// QUAL 




// TYPE SERÁ NESSA CONST....















// const storedData = userInput || 'DEFAULT'; ///se isso realmente for NULL, vamos querer que seja adotado um TYPE DE 'DEFAULT' (essa string aí, literal type)...












// /// o problema surge, no caso, SE O VALOR DE 'userInput' for de '' (empty string), E NÃO DE 'UNDEFINED/NULL'.... ----------> ISSO PQ  '' (empty string) É CONSIDERADO, TAMBÉM, UM FALSY VALUE, mas NÃO É UNDEFINED/NULL.... --------> ISSO QUER DIZER QUE O VALOR 'DEFAULT' AINDA VAI SER TRIGGADO, pq esse negócio, que é considerado como 'falsy', vai também triggar esse valor default....


// ///ex: 


// ////const userInput = '';


// ///const storedData = userInput || 'DEFAULT'



// console.log(storedData); ///vai printar 'DEFAULT', por causa do comportamento de '' (empty string) SENDO CONSIDERADA COMO FALSY....













//////////O 'NULLISH COALESCING OPERATOR' é o operador que é escrito com '??' ...









// com esse operator, dizemos 'SÓ VAMOS QUERER QUE ESSE VALOR DEFAULT SEJA DEFINIDO COMO O VALOR DESSA VARIABLE ___ 
//// SE __ REALMENTE__ ESSA CONSTANTE ESTIVER COM UM VALOR DE NULL/UNDEFINED (ou seja, sem avacalhações com empty strings ou ZERO, VALORES FALSY... ---> aqui 
/// REALMENTE VAMOS DIZER ''' QUERO QUE ISSO SEJA DEFINIDO SE _ FOR __ PRECISAMENTE _ UNDEFINED/NULL'''' )







////ex:





const userInput = '';






////const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? 'DEFAULT'; /// o nulllish coalescing operator __ É USADO_ _ NO LUGAR DE "||" (pipe operator).....










console.log(storedData); ////VAI PRINTAR  ''  (empty string), PQ __  ""  NÃO É __ EXATAMENTE A MESMA COISA QUE 'null/undefined', aos olhos do typescript, QUANDO USAMOS O NULLISH COALESCING OPERATOR (??)....