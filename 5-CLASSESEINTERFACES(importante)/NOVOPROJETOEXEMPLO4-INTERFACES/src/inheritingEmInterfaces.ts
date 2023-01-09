// interface Named {
//   readonly name: string;
// }

// interface Greetable2 {
//   greet(phrase: string): void;
// }




///vamos querer INHERITTAR A PROPRIEDADE readonly de 'name' NESSA INTERFACE DE 'Greetable' (por meio de algo como 'extends')....








////ex: (NOSSA PRIMEIRA OPÇÃO, NO CASO, É SIMPLESMENTE FAZER 'IMPLEMENT' de múltiplas dessas interfaces, para pegar 'UM POUCO DO CONTRATO' de cada uma delas)....





// class Lawyer2 implements Greetable, Named { //o implement dessas 2 interfaces vai:  1) OBRIGAR ESSA CLASS A TER A PROPRIEDADE DE 'name';  2) OBRIGAR ESSA CLASS A TER A PROPRIEDADE de greet (obrigada por Greetable)....
    
//     static age = 30; 

//     name2: string;


// greet(phrase: string) { 
//         console.log(phrase);
// }



// constructor(public name: string) {
//         this.name2 = name;
// }




// }






/////////////////////////////// JÁ A SEGUNDA ALTERNATIVA É ESCREVER ASSIM:







interface Named {
    readonly name: string;
  }





  
interface Greetable2 extends Named { //////SINTAXE __IDÊNTICA à usada em CLASSES, para legar coisas de uma class 'base' às classes 'HERDEIRAS' (inheriting)....
    greet(phrase: string): void; 

    ////'readonly name: string' ---> isso tbm vai existir nessa INTERFACE, pq herdamos daquela interface de 'Named'...
  }
  




  
class Lawyer2 implements Greetable2 { //o implement dessas 2 interfaces vai:  1) OBRIGAR ESSA CLASS A TER A PROPRIEDADE DE 'name';  2) OBRIGAR ESSA CLASS A TER A PROPRIEDADE de greet (obrigada por Greetable)....
    
    static age = 30; 

    name2: string;


greet(phrase: string) { 
        console.log(phrase);
}



constructor(public name: string) {
        this.name2 = name;
}




}









///OBS::: VOCê PODE FAZER 'extend' de MÚLTIPLAS INTERFACES (algo que não existe com classes, que só permitem 1 único extend por class)...


///ex:
  
// interface Greetable2 extends Named, AnotherNamed {  ////exemplo de MÚLTIPLOS 'EXTEND'...
//     greet(phrase: string): void; 

//    
//   }
  



