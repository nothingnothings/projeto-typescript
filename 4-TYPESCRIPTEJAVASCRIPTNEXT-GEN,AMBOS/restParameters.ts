


const add = (...arguments: number[]) => {



    return arguments.reduce(
            (prevValue, curValue) => {
                return prevValue + curValue;
            },
            0
    ); 

}







add(2, 50, 1221)






















// PQ EM VEZ DE ESCREVER ISTO:



// const add = (number1: number, number2: number, number3: number),









// É MAIS PRÁTICO ESCREVER ISTO:





// const add = (...numbers: [number, number, number])' ///é a mesma coias que o código de cima, mas mais CONCISO...







