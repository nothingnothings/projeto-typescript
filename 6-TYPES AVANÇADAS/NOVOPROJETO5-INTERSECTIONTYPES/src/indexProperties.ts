











interface ErrorContainer { //queremos que essa interface/object formado a partir dessa interface _ TENHA VÁRIAS PROPERTIES, properties que se omitem/escondem dependendo do case... (pq vamos querer ter 1 propriedade para CADA INPUT FIELD no nosso html, para que consigamos fazer error handling em todos eles ao mesmo tempo)....

    ///esta é uma index property....
    [prop: string]: string; ///agora todas as propriedades nesse object vão ter names que serão STRINGS ('[prop: string]' ), COM VALORES DE 'STRING' também... ':string' ....



    id: string; ///ainda PODEMOS ADICIONAR 'PRE-DEFINED' PROPERTIES no nosso código, além daquela 'INDEX PROPERTY' vista ali em cima... ---> ENTRETANTO ,O __ TYPE_ DE NOSSAS PROPERTIES PRÉ-DEFINIDAS DEVE SER IGUAL AO TYPE DAQUELE 'index Property'...



    /// exemplo2: number;//// não é permitido (Property 'exemplo2' of type 'number' is not assignable to 'string' index type 'string'.ts(2411)) ---> ver explicação logo acima...


    exemplo: string;
}







const errorBag: ErrorContainer = {
        id: 'asasjasoasjaso',
        exemplo: 'UMA STRING',
        1: 'OUTRA STRING', ///-_> OBS:::: SE USARMOS UM 'number' NO PROPERTY NAME, NÃO RECEBEREMOS UM ERRO (pq numbers podem ser interpretados, pelo javascript, COMO STRINGS, também)...
        // 2: 125; //a única coisa REALMENTE PROIBIDA É COLOCAR, NESSE EXEMPLO, propriedades com VALORES QUE SEJAM DE 'number' (pq definimos na nossa interface que as propreidades deverão ser de 'string, conforme visto em ':string' ...).

        email: 'Your email was invalid',
        username: 'Passed username was invalid',
        password: 'Inputted password was invalid',
        zipCode: 'Invalid Zipcode' ////podemos colocar QUALQUER PROPRIEDADE AQUI DENTRO, tudo por causa daquela linha de  ''     [prop: string]: string;''  


}




















// -> COM ISSO [prop:string],




// ESTAMOS 

// DIZENDO:

// '




// ''não sei qual será essa exata property, nem seu nome,



// nem sei 
//  O NÚMERO DE PROPERTIES QUE TEREI NESSE OBJECT,


// MAS SEI __ QUE CADA PROPERTY QUE SERÁ ADICIONADA A ESSE OBJECT 


// DEVERÁ TER UM PROPERTY NAME QUE É UMA STRING, E O VALOR DESSA PROPERTY TAMBÉM DEVE SER DE 'string'....'''