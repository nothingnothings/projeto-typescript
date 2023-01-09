
// --> ALÉM DE PODER ADICIONAR 'DECORATORS'



// A PROPRIEDADES DE OBJECTS,




// VOCÊ PODE 

// ADICIONAR 


// DECORATORS A 'ACCESSORS'....



// ACCESSORS ---> SÃO 'GETTERS' E 'SETTERS',

// basicamente...


// ----> NESTA LIÇÃO,

// VEREMOS 



// COMO 


// COLOCAR DECORATORS EM GETTERS E SETTERS,



// e também em PARAMETERS DE FUNCTIONS...

// -----------------------------------------------------------------




// OS DECORATORS DE 'ACCESSORS' (getters/setters)




// SÃO 


// MAIS COMPLEXOS,


// POR ISSO 


// ACEITAM/EXIGEM 





// 3 ARGUMENTOS, em vez de 1/2.....




// -------> 






// PROFESSOR CRIA UM 



// DECORATOR DE NOME 'Log2'...




// 'Log2'...






// ex:







// function Log2(target)



// ------> PARAMETROS:





// 1) SERÁ O 'target' desse decorator...  -----> VAI SER OU O __PROTOTYPE__ (se for um ACCESSOR de UM _ OBJECT/instance)
// -   ----------> OU VAI SER A CONSTRUCTOR FUNCTION que contém esse acessor...



// (COMO NÃO SABEMOS QUAL SERÁ O 'TYPE' exatamente, se seRÁ UM ACCESSOR DE UMA INSTANCIA OU DA CLASS EM SI, ESCREVEMOS 
// 'target: any'...)








// 2) O NOME DO 'member' com que estamos lidando (é o nome do accessor, no final das contas)... -----> colocamos um type de 'string'...










// 3) POR FIM, TEREMOS UM 'descriptor', QUE SERÁ UM 'PROPERTY DESCRIPTOR'... -------> O TYPE DESSE NEGÓCIO SERÁ 'PropertyDescriptor', que é um TYPE BUILTIN NO TYPESCRIPT...


























function Log22(target: any, name: string, descriptor: PropertyDescriptor ) { ////decorator usado em um ACCESSOR (geeter/setter de uma class/object instanciado a partir de uma class)...


    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);


}





function Log55(target: any, name: string, descriptor: PropertyDescriptor) {  ////decorator usado em um METHOD...
    console.log('Method Decorator');
console.log(target);
console.log(name);
console.log(descriptor);

}


function Log66(target: any, name: string, ////decorator usado em um PARAMETER DE UM METHOD.... (tax)...
     position: number) {   ///é a 'posição'/ordem desse PARAMETER naquele method específico... (é isso que 'position' representa)...
    console.log('Parameter Decorator');
console.log(target);
console.log(name);
console.log(position);

}











 
class Product2 {
        title: string;

    constructor(
      
        title: string,
        private _price: number ) { 

            this.title = title;
    }


    @Log22 //////EIS O CÓDIGO EM QUESTÃO. (decorator em 'SETTER', que é um tipo de ACCESSOR...)
    set price(val: number) {
        if(val > 0) {
            this._price = val;

        } else {
            throw new Error('Invalid price set - should be positive!');
        }

    }

    @Log55 ///decorator em 'METHOD'...
    getPriceWithTax(@Log6 tax: number) {
        return this._price * (1 + tax);
    }


  
}






/////////////////









// -> OK... MAS ALÉM DE 





// 1) CLASSES,



// 2) PROPRIEDADES__ 




// 3) SETTERS/GETTERS,







// TAMBÉM TEMOS A OPÇÃO__ DE ADICIONAR 


// 'DECORATORS'

// A METHODSS... 





