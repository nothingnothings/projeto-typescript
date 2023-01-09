

//  ------>  PROFESSOR EXPLCIA QUE 




//  '''TODOS OS DECORATORS EXIGEM A EXISTÊNCIA DE UMA CLASS,


//  MAS NINGUÉM __ NOS OBRIGA _ A ADICIONAR TODOS OS DECORATORS DIRETAMENTE 


//  NESSA CLASS''''....










function NewLogger(target: any, propertyName: string | Symbol) { ///é nosso DECORATOR....
     
    console.log('Property Decorator');
    console.log(target, propertyName);
}






class Product {
    
        @NewLogger ///sintaxe comum de ASSIGN DE DECORATORS A PROPRIEDADES...
        title: string;

    constructor(
        //@NewLogger public title: string, //podemos usar DECORATORS TAMBÉM (MAS NÃO SEI COMO ESCREVÊ-LOS)  na versão 'shortcut' do assign de propriedades na nossa class, na verdade...
        title: string,
        private _price: number ) { 

            this.title = title;
    }



    set price(val: number) {
        if(val > 0) {
            this._price = val;

        } else {
            throw new Error('Invalid price set - should be positive!');
        }

    }


    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);

    }


  
}














// --> E SE VOCÊ ADICIONA UM DECORATOR A UMA PROPRIEDADE,


// VOCÊ 



// RECEBE 

// 2 

// ARGUMENTOS, SEMPRE..













// 1o ARGUMENTO) --> É O 'TARGET' da PROPRIEDADE... -> E PARA UMA 'INSTANCE PROPERTY', como esta que temos aqui,



// (


//     OU SEJA,

// É UMA PROPRIEDADE_ QUE É CHAMADA EM CADA INSTANCE,

// SE VOCÊ TRABALHA COM ELA....
     
// ) ----------> 




// SE VOCê ESTÁ 


// COM UMA 'INSTANCE PROPERTY',



// o 



// target DEVERÁ SER O 'PROTOTYPE'  DO OBJECT QUE FOI CRIADO.... 










// ----------> JÁ SE ESTIVÉSSEMOS COM UMA 'STATIC PROPERTY/FUNCTION',


// o target __ SERIA__ A CONSTRUCTOR FUNCTION, em vez disso...














// ---------> COMO O PROFESSOR __ NÃO SABE__ QUAL É A ESTRUTURA EXATA QUE 


// ESSE 'object'


// de 'target'

// VAI TER,




// _ ELE  DEFINE UM TYPE DE 'any'...











// --> JÁ O SEGUNDO ARGUMENTO É O 'propertyName'... ------->  (o formato desse nome.... será string, geralmente)...







