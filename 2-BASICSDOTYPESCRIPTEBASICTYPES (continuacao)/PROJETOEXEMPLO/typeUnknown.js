"use strict";
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = 'Max';
// userName = userInput; ////ISSO CAUSARÁ UM ERROR ('type unknown is not assignable to type string');
let userInput;
let userName;
let userPassword;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') { ///isso vai evitar o erro visto logo acima...
    userName = userInput;
    console.log('ENTERED1');
}
if (typeof userInput === 'number') {
    userPassword = userInput;
    console.log('ENTERED2');
}
//unknown é mais RESTRICTIVE DO QUE O 'any'...
// --> SIM, NÓS SETTAMOS USERNAME como sendo UMA STRING, logo antes 
// do 'userName = userInput',
// MAS ISSO __ SÓ __ É O CASE NESSA LINHA 
// __ ESPECÍFICA (
//     ou seja,
//     O 'userInput'
//     PODE CONTINUAR__ 'HOLDING ANY POSSIBLE TYPE',
//     PQ ELE _TECNICAMENTE__ PODERÁ 
//     SEGURAR QUALQUER TYPE,
//     PQ ELE VAI CONTINUAR SENDO 'UNKNOWN'...
// )
