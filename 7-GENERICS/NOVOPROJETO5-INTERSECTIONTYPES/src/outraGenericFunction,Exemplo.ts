





interface Lengthy { ///o object/string/class/array que TIVER ESSA INTERFACE__ DEVERÁ OBRIGATORIAMENTE TER A PROPRIEDADE DE 'length'....


    length: number;
}






// function countAndDescribe<T extends Array<string>>(element: T){ //////versão alternativa, mais restritiva (aceita só ARRAYS DE STRINGS como parâmetro)...


//     let descriptionText = 'Got no value';
//     if (element.length === 1) {
//         descriptionText = 'Got 1 element';
//     } else if (element.length > 1) {
//         descriptionText = 'Got ' + element.length + ' elements';
//     }

//     return [element, descriptionText];

// }





function countAndDescribe<T extends Lengthy>(element: T): [T, string]{ //return type será essa TUPLE de T e string...


    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }

    return [element, descriptionText];

}










console.log(countAndDescribe('Hi there!')); ///strings possuem essa propriedade de 'length', por isso não receberemos um error...



console.log(countAndDescribe(['a', 'b', 'c'])); ///arrays também possuem LENGTH...




console.log(countAndDescribe({length: 15})); ////aqui críamos um OBJECT com uma propriedade de length, então satisfeita aquela condição...




console.log(countAndDescribe({propriedade: 15})); /////insatisfeita a condição da 'interface'...


















// -> QUANDO O PROFESSOR PASSA O MOUSE EM CIMA DA FUNÇÃO 'countAndDescribe',



// ELE VÊ ISTO:






// function countAndDescribe<T extends Lengthy>(element: T): (string | T)[]














// '''''(string | T)[]'''''' --------> OU SEJA,


// ELE ESTÁ NOS DIZENDO QUE __ VAI __RETORNAR SEMPRE UM ARRAY 









// COM OS TYPES OU de 

// 'string' ou  de 'T'





// (pq 'T' pode ser ou uma string, ou um array, ou um object, etc etc)...






// ------------------------------------







// OK...  ---->  MAS O PROFESSOR EXPLICA QUE ELE QUER SER MAIS ESPECÍFICO QUANTO AO RETURN TYPE DESSE NEGÓCIO,




// por isso 




// ELE DEFINE que 









// O RETURN TYPE DESSE NEGÓCIO DEVERÁ SER 'UMA TUPLE' ---> (ou seja '[xx, yy]' )













// --> NO CASO, O RETURN TYPE VAI SER DE 



// '[T, string]' ----------> OU SEJA,









// SEMPRE VAMOS RETORNAR 'T' e 'string',




// EM UMA TUPLE,

// tipo assim:






// [T, string]      (ou seja, NÃO É UM UNION/MIXED TYPE, E SIM UMA TUPLE, QUE É RETORNADA AQUI)....





















// MAIS PROPRIAMENTE, ESTA LINHA:







// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {





//     ':[T, string]' {}












///isso faz o type ficar assim: 



// function countAndDescribe<T extends Lengthy>(element: T): [T, string]











// --> MAS É CLARO QUE NÃO PODEREMOS CHAMAR 


// 'countAndDescribe'


// com um NUMBER, PQ 
// NUMBERS NÃO POSSUEM 

// ESSA PROPRIEDADE 

// DE 

// 'length'....
















// AQUI, PORTANTO, TEMOS NOVAMENTE NOSSA/UMA 'GENERIC FUNCTION':







// QUEREMOS SER UM POUCO NÃO ESPECÍFICOS SOBRE 

// A DATA QUE 

// VAMOS RECEBER AQUI,








// __ PQ __ A ÚNICA COISA QUE VAMOS QUERER É QUE ESSE NEGÓCIO __TENHA__ UMA PROPRIEDADE DE 'length'

// no seu interior.... 

// (

//     pq fora isso, não temos interesse algum no tipo de data que vamos querer receber 
// )