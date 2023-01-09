






////O GENERIC 'BUILTIN' MAIS FAMOSO É 'Array'..., BUILTIN NO JAVASCRIPT...





const names1 = []; ////type --> 'const names1: any[]'


const names = ['Max', 'Manuel'];//// type --> 'const names: string[]'








// let names2: Array; //// ''' Generic type 'Array<T>' requires 1 type argument(s).''' ---> ou seja, NÃO PODEMOS DEFINIR ESSE NEGÓCIO SIMPLESMEENTE COMO UM ARRAY GENÉRICO, ESSE TYPE GENÉRICO...  
                        ///// esse código NÃO É SUPORTADO/ADMITIDO, PRECISAMOS DEFINIR PELO MENOS 1 'INNER TYPE' nesse type desse array...











                        const genericArray: string[] = ['MANU', 'MAX'];



                        genericArray[0].split('a');
                        genericArray.concat(); ////TODOS METHDOS DE STRINGS, PQ O TYPESCRIPT VAI SABER QUE ESSAS COISAS AÍ SÃO STRINGS....


                

const arrayMaisGenericoPossivel: any[] = []; ////////ESSE É O ARRAY TYPE MAIS GENÉRICO QUE PODEMOS ESCREVER (const arrayMaisGenericoPossivel: any[])










// const names: Array<string> = []; //sintaxe ALTERNATIVA, MAIS FEIA...




// const names: Array<string | number> = [] ////////ISTO TAMBÉM FUNCIONA COM UNION TYPES ( a sintaxe de 'xxxx: any[] = []' TAMBÉM, mas requer que você defina o union TYPE ANTERIORMENTE, SEPARADAMENTE..)



















//outro exemplo de GENERIC TYPE são 'PROMISES' (pq podemos 'RESOLVE' qualquer coisa, desde uma string até um OBJECT)....









//ex:




// const promise = new Promise( //////// o type dessa const será 'Promise<unknown>'  (OU SEJA, NÃO TEMOS MTAS INFORMAÇÕES)... --> O '<unknown>' significa que O _ TYPESCRIPT __ NÃO SABE__ QUE __ TYPE_ será 'RESOLVIDO' no nosso resolve, nessa promise...
//     (resolve, reject) => {
//             setTimeout(
//                 () => {
//                     resolve('RESOLVE PROMISE');
//                 },


//                 2000
//             )
//     }
// )












const promise: Promise<string> = new Promise( //////// o type dessa const AGORA SERÁ DE 'Promise<string>', solucionado aquele problema do 'unknown' em 'Promise<unknown>' ...
    (resolve, reject) => {
            setTimeout(
                () => { 
                    resolve('RESOLVE PROMISE');
                },


                2000
            )
    }
)











promise.then(
    (data) => {

        console.log(data);


        data.split('E'); ///OBS::: ISSO SÓ FUNCIONA/FUNCIONARÁ PQ DEFINIMOS O 'resolve type' DAQUELA 'const promise' COMO SENDO UMA STRING, por meio daquele código de  ''' const promise: Promise<string> = new Promise(''' 
    }   
)







const promise2: Promise<number> = new Promise( //////// o type dessa const AGORA SERÁ DE 'Promise<string>', solucionado aquele problema do 'unknown' em 'Promise<unknown>' ...
    (resolve, reject) => {
            setTimeout(
                () => { 
                    resolve(25);
                },


                2000
            )
    }
)








promise2.then(
    (data) => {
                console.log(data); //vai printar '25'...

                data.toFixed(); //method de 'NUMBER', pq sabemos que isso será um NUMBER....
    }
)








