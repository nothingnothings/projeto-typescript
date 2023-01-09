interface PersonInterface {
    name: string;
  }
  






  

  function Logger3(logString: string) {  ///esta é uma 'decorator factory'...

    console.log('LOGGER FACTORY');
    return function(target: Function) { 

        console.log('Logging...');
        console.log(target);
        console.log(logString); ////flow:    @Logger2('HEY') ---> logString -> console.log(logString);
}


}



function WithTemplate3(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function (
    
  
      target: any 
    ) {
      const element = document.getElementById(hookId);
      console.log(element);
      let p: PersonInterface;
      p = new target(); 
  
      if (element) {
       
        element.innerHTML = template; 
       const paragraph = document.querySelector('p')!;
       console.log(paragraph);
        paragraph.innerHTML = p.name;
      }
  
      return;
    };
  }












@Logger3('HEY')/// //executa DEPOIS do primeiro (ordem de execução de decorators é DE baixo para cima)....
@WithTemplate3(///executa PRIMEIRO (mesmo estando EMBAIXO)... 
    `<h1>My Person Object: </h1>
      <p></p>
    `, 

    'app'
  )
class Person5 implements PersonInterface { 

    name = 'Max';
  
    constructor() {
      console.log('Creating person object...');
    }
  }
  







  /// na verdade, a explicação é esta:





  
// --> OK, ENTÃO A ORDEM DE EXECUÇAÕ 



// DOS 


// COISOS 



// QUE 'PRODUZEM' as decorator functions 


// _ É 


// NORMAL...






// ---> a única coisa que 




// é uma exceção,

// no caso,
// é O 

// EXECUTE DAS DECORATOR FUNCTIONS.. (Baixo-cima)..
















// --> HMMMMM ----> E PARECE QUE 



// ___ A CRIAÇAÕ__ DESSAS 

// DECORATOR FUNCTIONS,


// NA MEMORY,

// É 

// FEITA 

// NA ORDEM 

// EM QUE 

// ESPECIFICAMOS 




// aqueles calls de 


// ''




// @Logger3('HEY')
// @WithTemplate(
//     `<h1>My Person Object: </h1>
//       <p></p>
//     `, 

//     'app'
//   )




// ''''











// --> isso significa que 

// 'LOGGER' SERÁ _ CRIADO_ ANTES,

// MAS __ EXECUTADO DEPOIS...




// --> E SIGNIFICA QUE 'withTemplate'


// SERÁ __ CRIADO __ DEPOIS, MAS EXECUTADO ANTES... 


