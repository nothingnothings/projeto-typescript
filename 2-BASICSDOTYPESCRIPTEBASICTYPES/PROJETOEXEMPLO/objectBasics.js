"use strict";
// const person = { ///ISSO __ NÃO VAI NOS DAR AUTO-COMPLETE...
//   name: 'Maximillian',
//   age: 30,
// };
// const person: { ///isso vai nos dar AUTO-COMPLETE.... (MAS VOCÊ NÃO DEVE SEGUIR ESSE FORMATO DE ESCRITA, PQ DEFINIR EXPLICITAMENTE OS TYPES SUPORTADOS EM CADA 'key' de um 'key-type' pair É REDUNDANTE, E CÓDIGO RUIM)...
//   name: string; ///EM VEZ DISSO, SIGA A SINTAXE VISTA LOGO ABAIXO, aquele object 'person' simples (que já vai ter 'TYPE INFERRAL' automticamente)
//   age: number;
// } = {
//   name: 'Maximillian',
//   age: 30
// }
// const person = { ///ISSO AQUI JÁ VAI TER 'type inference' do typescript (ou seja, se vocÊ tentar, mais tarde, trocar o valor de 'person.name', trocar de uma STRING PARA UM NUMBER, ele já vai AUTOMATICAMENTE DE DAR UM ERROR/AVISO...)
//   name: 'Maximillian',
//   age: 30,
//   hobbies: ['Sports', 12], //PASSE O CURSOR POR CIMA de 'hobbies', para ver os infered types...
//   hobbies2: ['Sports', 'Strinzxz'] ////PASSE O CURSOR POR CIMA, PARA VER OS INFERED TYPES...
// }
const person = {
    name: 'Maximillian',
    age: 30,
    hobbies: ['Sports', 12],
    hobbies2: ['Sports', 'Strinzxz'],
    role: [2, 'author']
};
// person.role.push('admin'); ///isso FUNCIONA, NÃO VAI DAR ERROR (o que é ruim, pq ESTAMOS QUEBRANDO A REGRA DAS TUPLES DE 'número/quantidade de elementos FIXA')...
//person.role[1] = 10; ///ISSO __ NÃO FUNCIONA/FUNCIONARÁ, PQ ESTAMOS TENTANDO TROCAR 1 ELEMENTO 'string' por 1 'number'....
// person.role = [0, 'admin', 'user'] --------> VAMOS GANHAR UM ERRO,
// PQ 
// VAMOS ESTAR TENTANDO TROCAR O NÚMERO DE ELEMENTOS PARA '3', quando apenas 2, 'number' e 'string',
// SÃO PERMITIDOS...
for (const hobby of person.hobbies) {
    // console.log(hobby.toUpperCase()); //NÃO PODEMOS USAR ESSE METHOD DIRETAMENTE, AQUI, pq o  TYPE É MIXED (é tanto NUMBER quanto STRING...)...
    //console.log(hobby.map()); //MESMA COISA, VAI NOS DAR 1 ERROR (não temos como usar '.map()' em uma STRING ou number, e sim SÓ EM ARRAYS...)
}
for (const hobby2 of person.hobbies2) {
    // console.log(hobby2.);
}
// const personAnon: {
//   name: 'NOME ESPECÍFICO';
//   age: 155
// } = {
//       name: 'NOME ESPECÍFICO', ///SÓ ASSIM EVITAREMOS AQUELE ERROR, pq definimos que SÓ ESSES VALORES ESPECÍFICOS SERÃO VÁLIDOS, NESSE NOSSO OBJECT..
//       age: 155
// }
let favoriteActivities;
// let favoriteActivities: any[]; ///PÉSSIMA PRÁTICA, evite fazer isso (mt aberto, vago).... 
// let favoriteActivities: (string | number)[]; ////FAÇA/ESCREVA ISSO SE VOCÊ PLANEJA TER UM 'MIXED ARRAY TYPE'...
favoriteActivities = 'UMA STRING SOLTA'; //inválido re-define.... (assignment)
favoriteActivities = ['STRING DENTRO DE ARRAY', 'STRING DENTRO DE ARRAY']; //válido re-define.. (assignment)...
// favoriteActivities = ['STRING DENTRO DE ARRAY', 1221]; //INVÁLIDO RE-DEFINE (mixed types, strings e numbers)
// const person: object = {
//   name: 'Maximillian',
//   age: 30,
// };
console.log(person, person.id, person.nickname, person.age, person.name); //propriedades INEXISTENTES DENTRO DE 'person'; o typescript JÁ APITA...
