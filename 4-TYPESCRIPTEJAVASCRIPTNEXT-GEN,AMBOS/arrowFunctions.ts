

// ex:






// const printOutput = (output: string | number) => console.log(output);












// PODEMOS RETORNAR O VALOR DE 'console.log', mas isso é inútil...











// E PODEMOS ESCREVER ISSO DE MANEIRA AINDA MAIS CURTA:






// const printOutput = output: string | number => console.log(output);













// --> MAS ISSO _ NÃO FUNCIONA... ----> NÃO FUNCIONA SE ESCREVERMOS O TYPE ASSIGNMENT NO MEIO... ( o 'string | number' )











// --> SE VOCÊ QUISER QUE ISSO FUNCIONE,



// VOCÊ TERIA DE ESCREVER ASSIM:




// const printOutput = output => console.log(output);












// --> MAS ISSO __ NÃO É SUPORTADO __ NO TYPESCRIPT,

// PQ 

// AÍ 

// ESTARÍAMOS __ OMITIDNO O 'TYPE ASSIGNMENT' (o que´e um crime).... 












// ---> MAS SE TIVERMOS O 'TYPE ASSIGNMETN' 





// EM ALGUM OUTRO LOCAL,



// como 






// EM UM 'FUNCTION TYPE ASSIGNADO A CONSTANT',

// tipo assim:











// const printOutput: (a: number | string) => void = output => console.log(output);














// ------> ISSO FUNCIONARÁ (


//     o function type será de 


//     '(a: number | string) => void' 
// )