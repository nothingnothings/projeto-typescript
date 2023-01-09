

///interfaces 'DESCREVEM A ESTRUTURA DE UM OBJECT'''


///precisamos da keyword 'interface' --> essa keyword só existe NO TYPESCRIPT...



///interfaces, assim como TYPE ALIASES, demandam letra inicial maiúscula....



//NÃO VAMOS USAR 'Interfaces' como BLUEPRINTS (essa é a utilidade de CLASSSES), e sim COMO __ CUSTOM TYPES_...



interface Person {



    name: string; ///adicionamos field definitions EXATAEMNTE COMO FAZÍAMOS/FAZEMOS COM TYPE ALIASES.... key-type pairs...
    age: number; 
    // age: number = 25;  ///esse código é inválido, não podemos INICIALIZAR propriedades de nossas interfaces, pq as interfaces são meros TYPES....
    greet(phrase: string): void; ////dizemos 'ESSE OBJETO TERÁ UM METHOD DE 'greet()', que retornará VOID'...
    ////esse method aceitará/exigirá um parâmetro 'phrase' de tipo STRING....

}







let user1: Person = {
    name: 'Arthur',
    age: 23,
    greet(phrase: 'asas') {
        console.log(phrase + ' ' + this.name);
    }
}


user1.hobbies = ['Coding']; ///USO INVÁLIDO DA DOT NOTATION.... (essa propriedade NÃO EXISTE NAQUELA INTERFACE)...








interface Greetable { ///exemplo de interfaces mais complexo do que o anterior....

    name: string;
    readonly name2: string; ///o define de propriedades 'readonly' é possível, mas 'PUBLIC/PRIVATE ' _NÃO É....
    greet(phrase: string): void;

}





class Lawyer implements Greetable { ////É ASSIM QUE AS CLASSES FAZEM 'CONTRATOS' com interfaces... (aderem a essas interfaces, devem seguir suas condições/termos)...  --> aqui, no caso, teremos de escrever uma propriedade de 'name', e um method de 'greet()'....
////OBS::: VOCê PODE IMPLEMENTAR__ MAIS DE 1 INTERFACE__ EM 1 MESMA CLASS.... (algo que não acontece com INHERITANCE, com extends)...


            static age = 30; ////isso não foi definido na INTERFACE, mas podemos escrever mesmo assim.... (só temos que satisfazer o 'BARE MININUM' das condições da interface)...

            name2: string;


        greet(phrase: string) { ///satisfeita a condição de 'greet()' de nossa interface...
                console.log(phrase);
        }



        constructor(public name: string) { ///satisfeita a condição de 'name' de nossa interface... (por meio desse shorthand)...
                this.name2 = name;
        }




}



let newLawyer: Greetable;


newLawyer = new Lawyer('excelsior');



newLawyer.name2 = 'valordiferente';


// class Lawyer implements Greetable, Greetable2 { ///IMPLEMENTAÇAÕ DE MÚLTIPLAS INTERFACES EM 1 MESMA CLASS....
    
    
//     }









// type Person = {



//     name: string; ///adicionamos field definitions EXATAEMNTE COMO FAZÍAMOS/FAZEMOS COM TYPE ALIASES.... key-type pairs...
//     age: number; 
//     // age: number = 25;  ///esse código é inválido, não podemos INICIALIZAR propriedades de nossas interfaces, pq as interfaces são meros TYPES....
//     greet(phrase: string): void; ////dizemos 'ESSE OBJETO TERÁ UM METHOD DE 'greet()', que retornará VOID'...
//     ////esse method aceitará/exigirá um parâmetro 'phrase' de tipo STRING....

// }

