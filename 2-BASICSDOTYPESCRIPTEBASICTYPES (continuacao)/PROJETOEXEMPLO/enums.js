"use strict";
// const person2: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //exemplo de TUPLE
// } = {
//   name: 'Max',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'], //exemplo de TUPLE
// };
const ADMIN_USER = 'ADMIN_USER'; ///approach JAVASCRIPT de representar 'STRINGS' POR MEIO DE constantes (evita MISTYPES)...
const ADMIN_USER2 = 0; ///OUTRA FORMA DO CÓDIGO DE CIMA, NA VERDADE...
const READ_ONLY_USER = 1;
const AUTHOR_USER = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR"; ///0, 1, 2
})(Role || (Role = {}));
// enum Role { ///ESSA É A MANEIRA DE FAZER 'OVERRIDE' do default de seu ENUM.... (ou seja, vocÊ pode FAZER O PRIMEIRO ELEMENTO COMEÇAR COM '5', para que o próximo seja 6, e o próximo seja 7, TUDO AUTOMATICAMENTE)  --> isso pq OS elementos/referenciais nesse 'enum' sempre terão seus valores 'incremented' por 1, 1 por 1...
//     ADMIN = 5, READ_ONLY, AUTHOR ///5, 6, 7 (basta passar o mouse por cima)...
// }
// enum Role { ///OUTRA MANEIRA DE FAZER 'OVERRIDE' DO DEFAULT, dessa vez definindo CADA REFERENCIAL COM UM _ VALOR ESPECÍFICO (sem increments progressivos entre elementos)...
//     ADMIN = 100, READ_ONLY = 200, AUTHOR = 300
// }
// enum Role { ///OUTRA MANEIRA DE FAZER 'OVERRIDE' DO DEFAULT, dessa vez definindo CADA REFERENCIAL COM UM _ VALOR ESPECÍFICO (STRINGS)...
//     ADMIN = 'TEXT1', READ_ONLY = 'TEXTO2', AUTHOR = 'TEXTS'
// }
const person2 = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    role2: 'READ-ONLY-USER',
    role3: READ_ONLY_USER,
    role4Enum: Role.READ_ONLY ///EXEMPLO DE _ COMO _ USAR um 'ENUM' que settamos anteriormente... (vai outputtar '1', pq é nesse slot que esse 'READ_ONLY' se encontra)....
};
let favoriteActivities2; ///se vocÊ definir 'any', NÃO RECEBERÁ 1 ERROR...
let favoriteActivities3; ///aqui dizemos ao typescript que ESSE NEGÓCIO DEVERÁ SER 'UM ARRAY DE ALGUMA COISA'... -------> mas tem de ser um ARRAY, NÃO PODE SER 'um valor solto '(como um object, string ou number)..
// favoriteActivities3 = 'exemplo'; //EXEMPLO DE RE-DEFINE INVÁLIDO..
