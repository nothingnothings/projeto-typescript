














/////class StorageData<T extends string | number | boolean> {   ////ESCREVA __ ASSIM _ SE VOCÊ QUISER QUE ESSA GENERIC CLASS__ SÓ TRABALHE COM 'strings', 'numbers' e 'booleans' no storage ( ou seja, SEM _ OBJECTS__ OU ARRAYS)...
class StorageData<T> { /////MESMA __ SINTAXE___ das 'generic functions'

    private data: T[] = [] ///obs: 'private' IMPEDE o inherit das classes herdeiras..... (é 'protected' que deixa essas propriedades existirem, mas ainda bloqueia o acesso por fora)...







    addItem(item: T) { ///''você não disse o type de 'item'''.... --> ''mas não vou querer saber esse type, pq essa é uma GENERIC CLASS'' --> armazena UMA COISA DE TYPE __ GENERIC_ (ou seja, qualquer coisa, desde que seja UNIFORME O STORAGE.... tudo string, ou tudo arrays, ou tudo numbers, etc)....
        this.data.push(item);
    }


    
    removeItem(item: T) {

        // if (this.data.indexOf(item) === -1) { ///fix alternativo para CORRIGIR O BUG quando chamamos 'removeItem' com objects....
        //     return;
        // }


        this.data.splice(this.data.indexOf(item), 1); //// -1 //// --> se chamamos essa lógica com um OBJECT sendo passado como 'item', ACABAMOS REMOVENDO O ÚLTIMO ELEMENTO NESSE ARRAY, SEMPRE___ (pq o 'indexOf' vai retornar '-1') --> -1 significa que NENHUM ELEMENTO IGUAL A ESSE OBJECT FOI ENCONTRADO.... -> e o comportamento PADRÃO de '-1' É fazer 'START FROM THE END OF THE ARRAY', no javascritp...
    }



    getItems() {
        return [...this.data];
    }



}








// const newStorage = new StorageData(); 

// ^^^^ ESSE CÓDIGO DE CIMA, DE INSTANCIAÇÃO, É UMA BOSTA MAL-ESCRITA, POIS NÃO FALA NADA SOBRE O 'type' QUE SERÁ __ USADO __ NO STORAGE DAQUELE ARRAY, nem nos methods no interior desse object criado a partir dessa function...

///o type desse negócio fica um lixo, também:
/// constructor StorageData<unknown>(): StorageData<unknown>  


///para melhor type safety, escrevemos/instanciamos assim:


const textStorage = new StorageData<string>(); 

//o type disso fica assim:  '''''''constructor StorageData<string>(): StorageData<string> ''''




textStorage.addItem(31); ///type safety em ação (e a ação das GENERAL CLASSES, junto com o 'T' delas e também uma INSTANCIAÇAÕ BEM FEITA, com o código de 'const textStorage = new StorageData<string>();')


textStorage.addItem('ITEM');


console.log(textStorage.getItems());


textStorage.removeItem('ITEM');



console.log(textStorage.getItems());












const numberStorage = new StorageData<number>();


const someStorage = new StorageData<string | number>();



///inicialmente, ao escrever a class de 














// class StorageData {

//     private data: [] = [] ///obs: 'private' IMPEDE o inherit das classes herdeiras..... (é 'protected' que deixa essas propriedades existirem, mas ainda bloqueia o acesso por fora)...


//     addItem(item) { 
//         this.data.push(item);
//     }


    
//     removeItem(item) {
//         this.data.splice(this.data.indexOf(item), 1);
//     }



//     getItems() {
//         return [...this.data];
//     }



// }









///, recebemos um MONTE DE ERRORS....




// 1) RECEBEMOS ERRORS PQ 


// O nome 'Storage' é um reserved name --> trocamos para 'storageData'...









// 2) GANHAMOS OUTRO ERROR PQ NÃO ESPECIFICAMOS NADA DO QUE ESTAMOS 'STORING',


// não falamos coisa alguma sobre esse 'item', nada sobre seu 'type'...


// -----> E O PROBLEMA '2' É EXATAMENTE 

// A RA~ZAO 

// PQ 


// PODEMOS _ tRANSFORMAR__ ISSO EM UMA 'GENERIC CLASS'...



// --> GENERIC CLASSES --> SÃO USADAS__ QUANDO VOCÊ __ NÃO SE IMPORTA__ 


// COM OS TYPES DE DATA QUE SERÃO armazenados ... --> VOCÊ VAI QUERER 

// QUE 
// SEJA 


// 'UNIFORM DATA' (


//     ou seja,

//     SÓ STRINGS, SÓ NUMBERS, ETC ETC...
// )


// --> mas fora isso,

// 'uniformized data',



// NÃO NOS IMPORTAMOS COM O TYPE DA DATA....


// -------------> OK, MAS COMO TRANSFORMAMOS  ESSA CLASS EM UMA GENERIC CLASS?


// --> FAZEMOS ISSO com a MESMA SINTAXE DAS 




// 'GENERIC FUNCTIONS'...



// --> OU SEJA,

// VAMOS ESCREVER 




// '<>' 


// E AÍ __ 


// O 'T' de Type.. --> 


// E AÍ,


// você vai 


// USAR O CLÁSSICO 'extends', provavelmente (extends --> são os 'CONSTRAINTS')....










// ---------. OK.... --> MAS VAMOS TER UM PROBLEMA QUANTO A ESSA 




// CLASS DE 'dataStorage'....









///isto vai trazer errors:



const objStorage = new StorageData<object>();




const objectTest = {name: 'Manu'};


objStorage.addItem({name: 'Max'});
objStorage.addItem({name: 'Manu'});

objStorage.addItem(objectTest); ///este add, com aquele remove ali e baixo, funcionarão...
objStorage.removeItem({name: 'Manu'}); ////esse tipo de call NÃO FUNCIONARÁ... (vai remover 'O ÚLTIMO ELEMENTO DO ARRAY', sempre)...



objStorage.removeItem(objectTest); //JÁ ESTE CÓDIGO VAI FUNCIONAR (pq estaremos passando 'the EXACT SAME OBJECT IN MEMORY', coisa que não fizemos naquele 'add-remove' de manu, ali de cima... )


















// objStorage.addItem({name: 'Max'});
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem({name: 'Manu'});
// OK... ----> aqui o problema é que 






// AQUELA LÓGICA DE 

//         this.data.splice(this.data.indexOf(item), 1);









// --> ESSA LÓGICA AÍ __ 'NÃO É BOA'



// QUANDO _ TRABALHAMOS _ COM 'NON PRIMITIVE VALUEs' (objects e arrays)...







// --> ISSO PQ 'indexOf',


// SE PASSAMOS 


// UM OBJECT,



// ISSO NÃO VAI FUNCIONAR.... 











// ---> N VAI FUNCIONAR PQ __ ESTAMOS TRABALHANDO COM 'NON-PRIMITVE VALUEs'...









// --> pq se passamos um OBJECT a esse negócio,










// TIPO ASSIM:









// 'objStorage.addItem({name: 'Max'})',










// esse OBJECT QUE __ existe no INTERIOR DESSA FUNCTION, sendo passado,



// _ NÃO VAI __ SER O MESMO __ OBJECT__ 


// QUE PASSAREMOS 

// EM 


// 'objStorage.removeItem({name: 'Max'})' 












// --> o objeto em 'removeItem' é UM __ OBJECT 'BRAND NEW' na memória,

// e tem um address COMPLETAMENTE DIFERENTE, e é por isso que esse código não funcionará, com essa lógica de 'indexOf'...