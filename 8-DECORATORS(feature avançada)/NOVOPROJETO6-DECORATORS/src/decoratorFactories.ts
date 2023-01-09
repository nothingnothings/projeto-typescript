// function Logger(target: Function) { /// isto aqui nos mostra __ COMO CRIAR 1 ÚNICA 'DECORATOR FUNCTION' simples...
//   console.log('Logging...');
//   console.log(target);
// }

// @Logger ////isto aqui ASSOCIA AQUELE 'DECORATOR' a essa class.....
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const person = new Person();
















///já isto aqui é um EXEMPLO DE COMO __ CRIAR/ESCREVER UMA 'DECORATOR FACTORY'....

function Logger2(logString: string) {  ///esta é uma 'decorator factory'...

    return function(target: Function) { 

        console.log('Logging...');
        console.log(target);
        console.log(logString); ////flow:    @Logger2('HEY') ---> logString -> console.log(logString);
}


}







@Logger2('HEY')  /////quando criamos/usamos DECORATOR FACTORIES, somos obrigados a EXECUTAR as 'outer function' dessas factories, assim mesmo...
//// ^^^^^^^^ 'HEY', essa string aí, é passada como sendo o PARAMETER de 'logString', lá naquela DECORATOR FACTORy... --> o valor de 'logString' é então REPASSADO AO DECORATOR EM SI, no interior dessa factory...

class Person2 { ////decorators são 'all about classes', na verdade...
    name = 'Max';
  
    constructor() {
      console.log('Creating person object...');
    }
  }
  
















//   o flow, na realidade, é este:










// 1) ''''@Logger()''' é executado..







// 2) isso faz com que 'function Logger() {}' SEJA EXECUTADA.... (a outer function)...








// 3) isso, por sua vez, faz com que a INNER FUNCTIOn ('return (target: Function) => {console.log(...)}') SEJA __ EXECUTADA__...


// (OBS::: ESSA INNER FUNCTION É 'OUR VALID DECORATOR FUNCTION')...



// 4) EXECUTADA ESSA INNER FUNCTION, ELA É '''ASSIGNED AS A DECORATOR''' à clase de 'Person'....










// OK, MAS QUAL É A VANTAGEM DE 

// USAR 


// UMA 


// 'DECORATOR FACTORY'


// em vez de um 'DECORATOR SIMPLES'?












// --> bem... é pq 



// AGORA 




// PODEMOS COLOCAR __ ARGUMENTOS__ NESSA 


// '
// OUTER FUNCTION' (que é a factory propriamente dita)...