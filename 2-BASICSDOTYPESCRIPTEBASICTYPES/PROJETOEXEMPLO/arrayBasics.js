"use strict";
const person = {
    name: 'Maximillian',
    age: 30,
    hobbies: ['Sports', 12],
    hobbies2: ['Sports', 'Strinzxz'],
    role: [2, 'author']
};
for (const hobby of person.hobbies) {
    // console.log(hobby.toUpperCase()); //NÃO PODEMOS USAR ESSE METHOD DIRETAMENTE, AQUI, pq o  TYPE É MIXED (é tanto NUMBER quanto STRING...)...
    //console.log(hobby.map()); //MESMA COISA, VAI NOS DAR 1 ERROR (não temos como usar '.map()' em uma STRING ou number, e sim SÓ EM ARRAYS...)
}
for (const hobby2 of person.hobbies2) {
    // console.log(hobby2.);
}
