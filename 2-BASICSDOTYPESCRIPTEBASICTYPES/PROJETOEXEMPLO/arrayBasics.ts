

const person: {

    name: string;
    age: number;
    hobbies: (string | number)[];
    hobbies2: string[];
    role: [number, string]
  
  
              ///vamos inferir 'explicitamente' JUSTAMENTE PARA QUE O field de 'role' consiga ter seu 'type' SETTADO COMO SENDO O DE UMA 'tuple' (tupla)....
  } = { 
    name: 'Maximillian',
    age: 30,
    hobbies: ['Sports', 12], //PASSE O CURSOR POR CIMA de 'hobbies', para ver os infered types...
    hobbies2: ['Sports', 'Strinzxz'], ////PASSE O CURSOR POR CIMA, PARA VER OS INFERED TYPES...
    role: [2, 'author']
  }
  
  
  
  
  for (const hobby of person.hobbies) {
  
    // console.log(hobby.toUpperCase()); //NÃO PODEMOS USAR ESSE METHOD DIRETAMENTE, AQUI, pq o  TYPE É MIXED (é tanto NUMBER quanto STRING...)...
    //console.log(hobby.map()); //MESMA COISA, VAI NOS DAR 1 ERROR (não temos como usar '.map()' em uma STRING ou number, e sim SÓ EM ARRAYS...)
  }
  
  for (const hobby2 of person.hobbies2) {
  
    // console.log(hobby2.);
  }
  
  