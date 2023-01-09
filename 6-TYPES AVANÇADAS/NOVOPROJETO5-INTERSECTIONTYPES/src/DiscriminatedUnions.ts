// ------> CERTO..... --> MAS HÁ TAMBÉM UM 'TIPO ESPECIAL DE TYPE GUARD',

// OU ALGO QUE __ TE AJUDA __ COM

// TYPEGUARDS... ----------> O NOME DISSO É

// 'DISCRIMINATED UNION'...

// -------> O QUE É ISSO? ------->´E UM PATTERN

// QUE VOCê PODE USAR

// __QUANDO _ TRABALHA COM UNION TYPES,

// QUE FAZ

// A IMPLEMENTAÇÃO DE

// TYPE GUARDS

// BEM MAIS FÁCIL...

// ------------> É UM PATTERN QUE SE TORNA DISPONÍVEL QUANDO

// __ VOCÊ TRABALHA COM OBJECT TYPES....



/////




interface Bird {
    flyingSpeed: number;
    type: 'bird'; //informação acerca da class.... (desenvolvedores também usam 'kind' em vez de 'type', Às vezes) -----> VOCÊ USARÁ ESSA INFO _ JUSTAMENTE __ PARA DEFINIR 'discriminated types'...
    //não confunda isso com 'a definiçaõ de um valor'.... -> não... o 'bird', essa string aí, é na verdade um 'LITERAL TYPE'  (ou seja, 'Bird' DEVERÁ _ CERTAMENTE__ SEGURAR UMA PROPRIEDAED 'type', que __ CERTAMENTE__ SERÁ DE VALOR 'bird') ---> isso é um IDENTIFICADOR DE TYPE, portanto.... --> e é usado para fazer 'discriminated Unions'....

}




interface Horse {
runningSpeed: number;
type: 'horse'; ///usado para definir 'discriminated unions'...
}






type Animal = Horse | Bird; ///union type..









// function moveAnimal(
//     animal: Animal
// ) {


//     if('runningSpeed' in animal) { ////problema de seguir essa sintaxe é que se você tiver um union type com UM MONTE DE TYPES, você vai ter que escrever if checks PARA CADA UMA DAS PROPRIEDADES de cada 1 desses types....
//         console.log('Moving with speed: ' + animal.runningSpeed)
//     }


//     if('flyingSpeed' in animal) {
//         console.log('Moving with speed: ' + animal.flyingSpeed)
//     }
    
// }





function moveAnimal(
    animal: Animal
) {


    // if('runningSpeed' in animal) { ////problema de seguir essa sintaxe é que se você tiver um union type com UM MONTE DE TYPES, você vai ter que escrever if checks PARA CADA UMA DAS PROPRIEDADES de cada 1 desses types....
    //     console.log('Moving with speed: ' + animal.runningSpeed)
    // }


    // if('flyingSpeed' in animal) {
    //     console.log('Moving with speed: ' + animal.flyingSpeed)
    // }



    switch(animal.type) {

        case 'bird': 
        console.log('Moving with speed: ' + animal.flyingSpeed)

        break;

        case 'horse':
            console.log('Moving with speed: ' + animal.runningSpeed);
        default: 
        return;
    }
}




moveAnimal({type: 'bird', flyingSpeed: 21211});



moveAnimal({type: 'horse', runningSpeed: 21211});










// --> ISSO SIGNIFICA QUE ESTA SINTAXE NÃO FUNCIONA:


// if (animal instanceof Bird) {



// }




// --> ISSO NÃO VAI FUNCIONAR PQ ___ INTERFACES SÃO FEATURES PURAMENTE TYPESCIPRT, O QUE QUER DIZER QUE 



// ELAS NÃO SERÃO COMPILADAS PARA JAVASCIRPT.... (isso significa que no runtime esse 'Bird' não vai estar disponível como constructor function)...




