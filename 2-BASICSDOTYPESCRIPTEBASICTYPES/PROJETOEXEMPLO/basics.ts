
console.log('EXEMPLO');


function add(n1: number, n2: number, showResult: boolean, phrase: string) {




    const calculus = n1 + n2;


    const result = `${resultPhrase} ${calculus}`


    if (showResult) {
        console.log(result);
    } else {
        return calculus;
    }
}




const resultPhrase = "Result is: "


const number1 = 5;    ///type inference --> 'const number1: 5' (VOCê DEVE PASSAR O MOUSE EM CIMA, COM O IDE) ---> isso vai te mostrar QUAL É O TYPE DESSE NEGÓCIO, QUE SERÁ '5', é claro (ou seja, mais específico do que um number, pq ele vai ser ESPECIFICAMENTE O __ NÚMERO 5__....).


let number10 = 10; ////TYPE INFERENCE --> isso vai mostrar, por outro lado, 'const number10: number' ----> ISSO PQ _ ESSE NEGÓCOI É UMA VARIA´VEL, SUA RESTRIÇÃO É MENOR DO QUE A CONST --> significa que esse VALOR dessa constante _ PODERÁ EVENTUALEMNTE SER MUDADO, por meio de uma re-define como 'number10 = 55'; 


//const number1 = '5'; //só existe aqui para mostrar que SE TENTARMOS ADICIONAR UMA STRING E UM NUMBER, JAVASCRIPT VAI TRATAR OS 2 COMO STRINGS E VAI OS CONCATENAR (comportamento indesejado)...




let number11: number; ///////POR MEIO DESSA SINTAXE, 'UNASSIGNED VARIABLES' ficam com 'INSTRUÇÕES', pq vamos SABER COM CERTEZA, NO FUTURO, QUE ESSA VARIABLE AÍ __ SÓ _ ADMITE__ VALORES QUE SÃO 'number' no seu interior/store...



// number11 = 'dados'; ///EXEMPLO DAQUILO DE CIMA...



number11 = 122109210;




//--------------------------------------------

///EXEMPLO DE 'TYPE INFERING' do TYPESCRIPT.... ( só existe quando temos o typescript instalado, e em arquivos 'ts'...)
// let exemploDeString = 'EXEMPLO DE STRING';


// exemploDeString = 12; ////exemplo de define INVÁLIDO, pq estamos tentando armazenar um NUMBER EM UMA VARIABLE QUE SÓ DEVE TRABALHAR COM STRINGS...
    //exemploDeString = 'EXEMPLOOOO'; /////EXEMPLO DE DEFINE VÁLIDO, PQ É DE MESMO TYPE DA DECLARAÇÃO de 'exemploDeString'...

//-------------------------------------------









const printResult = true;

const number2 = 2.8;





const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

