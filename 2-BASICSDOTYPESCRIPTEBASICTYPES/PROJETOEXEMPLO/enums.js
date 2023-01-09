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
const person2 = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    role2: 'READ-ONLY-USER',
    role3: READ_ONLY_USER,
    role4Enum: Role.READ_ONLY ///EXEMPLO DE _ COMO _ USAR um 'ENUM' que settamos anteriormente... (vai outputtar '1', pq é nesse slot que esse 'READ_ONLY' se encontra)....
};
