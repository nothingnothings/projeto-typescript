
// function WithTemplate10(template: string, hookId: string) {
//   return function<T extends {new(...args: any[]): {name: string}}>(

//       // target: any
      
//       target: T
//       ) { 

//   return class extends target {         ////aqqui vamos/podemos RETORNAR UMA CONSTRUCTO FUNCTION QUE VAI SUBSTITUIR A CONSTRUCTOR FUNCTION/CLASS A QUE ATRIBUÍMOS ESSE 'CLASS DECORATOR', originalmente...
//                                            ///essa constructor function retornada aqui _ VAI __ SER ANÔNIMA (sem nome), e vai __ FAZER 'INHERIT' da class originária (ou seja, de 'target/constructor', por meio de 'extends')...

//                                            ///poderemos adicionar NOVAS FUNCIONALIDADES à class de 'Person' que vinculamos a esse decorator...

//           constructor(...args: any[]) { 

//               super();  //vai estabelecer contato com o 'target', ou seja, com a class de 'Person' a que vinculamos este decorator.....
//               const element = document.getElementById(hookId); //transplantamos aquela lógica existente no 'CONTEXTO' da DECORATOR FUNCTION, lógica solta, PARA DENTRO DA LÓGICA DESSE 'constructor' dessa CLASS QUE VAI SUBSTITUIR/COMPLEMENTAR A CLASS DE 'Person' vinculada a este CLASS DECORATOR....
//                if (element) { 
//                   element.innerHTML = template; 
//                   (element.querySelector('p') as HTMLParagraphElement).innerText = this.name;
//                   }
          
//               }
//   }

// }


// };


// @WithTemplate10(

// '<h1>Exemplo</h1>',
// 'app'
// )
// class Person8 { ////decorators são 'all about classes', na verdade...
// name = 'Max';

// constructor() {
// console.log('Creating person object...');
// }
// }




// // OK... MAS DAÍ OBTEMOS UM PEQUENO ERROR/AVISO


// // EM 


// // '
// // ''


// // @WithTemplate(

// //     `<h1>My Person Object: </h1>`,

// //     'app'
// // )





// // '''





// // --> DIZ QUE ' O TYPE NÃO ESTÁ CORRETO'... --------->  PARA CONSERTAR ISSO,



// // PODEMOS __ TRANSFORMAR__ NOSSA 



// // DECORATOR FUNCTION EM UMA 'GENERIC FUNCTION',

// // em que 


// // RECEBEMOS UM TYPE DE VERDADE (genérico, 'T')....













// class Printer {




//   message = 'This works';



//         constructor() {
        
//         }

//   showMessage() {
//       console.log(this.message); 
//   }     


//   showMessage2() {
//       return this.message;
//   }

// }





// const newPrinter = new Printer();






// const textMessage = newPrinter.showMessage;
// const textMessage2 = newPrinter.showMessage2();


// console.log(textMessage, 'UNDEFINED? POR QUE? --> é pq esse call desse method EXECUTA UM CONSOLE.LOG ');
// console.log(textMessage2);



// const button = document.querySelector('button') as HTMLButtonElement;




// button.addEventListener('click', newPrinter.showMessage.bind(newPrinter));















function Autobind2(_: any, _2: string, descriptor: PropertyDescriptor) { ///colocamos '_' e '_2' para indicar ao typescrpit uqe NÃO ESTAMOS INTERESSADOS NESSES VALORES, MAS AINDA VAMOS OS ACEITAR...
  // function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {

  
  const originalMethod = descriptor.value; ///ISSO VAI NOS DAR ACESSO AO 'MÉTODO ORIGINAL/INICIAL' nesse descriptor do method de 'showMessage()'...

  const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      writable: true,
      get() {  //esse getter será algo novo/editado/adicionado __ NESSE METHOD EM QUE VAMOS COLOCAR ESSE DECORATOR...

          
          const boundFunction = originalMethod.bind(this);
          return boundFunction;

      }         

      ///o código do GETTEr ('get')  --> VAI SER EXECUTADO  __ANTES__ DO CÓDIGO PROPRIAMENTE DITO de nosso method... (ele que faz o trabalho 'ANTECIPADO', por assim dizer... 'lays the ground'...)
      }

      return adjustedDescriptor;

}



class Printer22 {
message = 'This works';

constructor() {}

@Autobind2
showMessage() {
  console.log(this.message);
}

showMessage2() {
  return this.message;
}
}

const newPrinter23 = new Printer22();







newPrinter23.showMessage();