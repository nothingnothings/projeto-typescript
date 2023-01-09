










// ---> ANTES DE PROSSEGUIR,



// antes de ver coisas mais avançadas com eles,




// VOCÊ 

// TEM QUE 


// COMPREENDER 



// QUE 


// ALGUNS DECORATORS,



// como 



// 'class decorators' e 'METHOD DECORATORS',






// SÃO __ CAPAZES__ DE 



// FAZER 


// 'RETURN' DE ALGO....














// --> BEM.... ---> O PROFESSOR NÃO VAI RETORNAR 'QUALQUER COISA EM QUALQUER DECORATOR'... -->  









// POR 'return de algo',


// O PROFESSOR 


// NÃO QUER 

// DIZER 



// A 'DECORATOR FUNCTION EM SI'

// que é 

// retornada 


// pela 

// 'DECORATOR FACTORY' (


//     ou seja,

//     não está falando 


//     DISTO:








// function Logger2(logString: string) {  ///esta é uma 'decorator factory'...

//     return function(target: Function) { //////PROFESSOR NÃO ESTÁ FALANDO DISTO, DA DECORATOR FUNCTION EM SI....

//         console.log('Logging...');
//         console.log(target);
//         console.log(logString); 
// }


// }





// )















// --> EM VEZ DISSO,



// PROFESSOR ESTÁ FALANDO 









// '''DO RETURN DE UM VALUE __ NO INTERIOR__ DA DECORATOR FUNCTION''' --> e nos nossos códigos-exemplos 





// que vimos até agora,


// não tivemos nada disso...












// --------------> BEM.... NESSA DECORATOR FUNCTION DE 







// 'WithTemplate',




// NÓS __ PODEMOS, SIM, ACTUALLY RETORNAR ALGUMA COISA:










// function Logger2(logString: string) {  ///esta é uma 'decorator factory'...

//     return function(target: Function) { 

//         console.log('Logging...');
//         console.log(target);
//         console.log(logString); 
// }


// }


// --------------------------------












// -------> E __ AS COIASS QUE VOCÊ É CAPAZ DE RETORNAR, E O QUE O TYPESCRIPT É CAPAZ DE USAR,



// __DEPENDE__ DO 'TYPE' _ DE DECORATOR COM O QUAL VOCê ESTÁ TRABALHANDO....













// ---> COMO AQUI ESTAMOS TRABALHANDO COM UM 'CLASS DECORATOR',








// PODEMOS RETORNAR:









// A) UMA NOVA CONSTRUCTOR FUNCTION, QUE  ___ VAI __ SUBSTITUIR A VELHA CONSTRUCTOR FUNCTION (

//     ou seja,


//     QUE VAI SUBSTITUIR__ A CLASS_ _A QUE VOCÊ 


//     ADICIONOU O DECORATOR,



//     no caso,



//     'Person'...

// )







// eX:














// function WithTemplate(template: string, hookId: string) {
//         return function(
     
//             target: any 
//             ) { 

//         const element = document.getElementById(hookId);

//         console.log(element);
//         let p: PersonInterface;
//         p = new target();


//         if (element) { 
//             element.innerHTML = template; 
//             (element.querySelector('p') as HTMLParagraphElement).innerText = p.name;
//         }


//         return; ////aqqui vamos/podemos RETORNAR UMA CONSTRUCTO FUNCTION QUE VAI SUBSTITUIR A CONSTRUCTOR FUNCTION/CLASS A QUE ATRIBUÍMOS ESSE 'CLASS DECORATOR', originalmente...
//         }


// }









// @WithTemplate(

// '<h1>Exemplo</h1>',
// 'app'
// )
// class Person3 { ////decorators são 'all about classes', na verdade...
//     name = 'Max';
  
//     constructor() {
//       console.log('Creating person object...');
//     }
//   }






// ISSO SIGNIFICA QUE AQUI PODEMOS 






// RETORNAR UMA NOVA CONSTRUCTOR FUNCTION....
























function WithTemplate(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}>(    //transformamos nosso 'DECORATOR' em si em uma 'GENERIC FUNCTION', por meio desse type genérico de 'T' e por meio do extends desse '{new(...args: any[]): {}}' 
 
        // target: any 
        target: T /////é nossa class/constructor function originária, de 'Person'....
        ) { 

    return class extends target {         ////aqqui vamos/podemos RETORNAR UMA CONSTRUCTO FUNCTION QUE VAI SUBSTITUIR A CONSTRUCTOR FUNCTION/CLASS A QUE ATRIBUÍMOS ESSE 'CLASS DECORATOR', originalmente...
                                             ///essa constructor function retornada aqui _ VAI __ SER ANÔNIMA (sem nome), e vai __ FAZER 'INHERIT' da class originária (ou seja, de 'target/constructor', por meio de 'extends')...

                                             ///poderemos adicionar NOVAS FUNCIONALIDADES à class de 'Person' que vinculamos a esse decorator...

            constructor(...args: any[]) { 

                super();  //vai estabelecer contato com o 'target', ou seja, com a class de 'Person' a que vinculamos este decorator.....
                const element = document.getElementById(hookId); //transplantamos aquela lógica existente no 'CONTEXTO' da DECORATOR FUNCTION, lógica solta, PARA DENTRO DA LÓGICA DESSE 'constructor' dessa CLASS QUE VAI SUBSTITUIR/COMPLEMENTAR A CLASS DE 'Person' vinculada a este CLASS DECORATOR....
                console.log(element);
                // let p: PersonInterface;
                // p = new target(); ///pequeno tweak... (já temos acesso a essa propriedade, por meio desta class que inherita 'target')...
                 if (element) { 
                    element.innerHTML = template; 
                    (element.querySelector('p') as HTMLParagraphElement).innerText = this.name; //pequeno tweak;
                    }
            
                }
    }

}


};



@WithTemplate(

    `<h1>My Person Object: </h1>`,

    'app'
)
class Person6 { ////decorators são 'all about classes', na verdade...
name = 'Max';

constructor() {
  console.log('Creating person object...');
}
}











const newPerson = new Person6();


















// OK... MAS DAÍ OBTEMOS UM PEQUENO ERROR/AVISO


// EM 


// '
// ''


// @WithTemplate(

//     `<h1>My Person Object: </h1>`,

//     'app'
// )





// '''





// --> DIZ QUE ' O TYPE NÃO ESTÁ CORRETO'... --------->  PARA CONSERTAR ISSO,



// PODEMOS __ TRANSFORMAR__ NOSSA 



// DECORATOR FUNCTION EM UMA 'GENERIC FUNCTION',

// em que 


// RECEBEMOS UM TYPE DE VERDADE (genérico, 'T')....