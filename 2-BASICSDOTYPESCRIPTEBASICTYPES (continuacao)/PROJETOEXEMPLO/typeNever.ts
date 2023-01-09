function generateError(message: string, code: number) {

    throw {message: message, errorCode: code};  ///quando fazemos o THROW DE UM ERROR EM UMA FUNCTION, originalmente RETORNAMOS 'VOID', mas podemos retornar MAIS DO QUE ISSO, se especificarmos...
    
    }
    




const result3 = generateError('AN ERROR OCCURRED', 500); ////passe o cursor por cima, você verá 'never' (ou seja, esse negócio NUNCA VAI RETORNAR VALOR ALGUM... NEVER PRODUCES A RETURN VALUE) ---> é por isso que TAMBÉM É IMPOSSÍVEL ARMAZENAR E CONSOLE.LOGGAR ESSE CÓDIGO... o throw desse error CANCELA O RUN DE NOSSO SCRIPT, POR ISSO NUNCA RETORNA UM VALOR...



console.log(result3); ///leia a explicação logo acima...nunca vamos obter um VALOR em FUNCTIONS QUE FAZEMOS THROW DE ERRORS (pq isso vai CRASHAR NOSSO SCRIPT, levando a um 'não return'...)





////o type de 'never' é TÃO NOVO  que quando voce passa o cursor por cima daquela function, verá que o 'return type' será de void' (type mais antigo, e por isso usado nesse tipo de função utilitária que faz throw de errors)....











function whileExemplo() { ///////OUTRO EXEMPLO DE FUNÇÃO CUJO RETURN TYPE SERÁ DE 'never' (pq nunca vai retornar nada, sempre vai ficar rodando, esse é o propósito de um WHILE LOOP)...
    while(true) {
        console.log('exemplo');
    }
}

