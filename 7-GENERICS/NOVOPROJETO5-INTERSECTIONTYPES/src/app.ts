class StorageData2<T> {
  /////MESMA __ SINTAXE___ das 'generic functions'

  private data: T[] = []; ///obs: 'private' IMPEDE o inherit das classes herdeiras..... (é 'protected' que deixa essas propriedades existirem, mas ainda bloqueia o acesso por fora)...

  addItem(item: T) {
    ///''você não disse o type de 'item'''....
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const newStorage2 = new StorageData2();

newStorage2.addItem('ITEM');

console.log(newStorage2.getItems());

newStorage2.removeItem('ITEM');

console.log(newStorage2.getItems());

///ao escrever essa class, recebemos um MONTE DE ERRORS....

// 1) RECEBEMOS ERRORS PQ

// O nome 'Storage' é um reserved name --> trocamos para 'storageData'...

// 2) GANHAMOS OUTRO ERROR PQ NÃO ESPECIFICAMOS NADA DO QUE ESTAMOS 'STORING',

// não falamos coisa alguma sobre esse 'item', nada sobre seu 'type'...

// -----> E O PROBLEMA '2' É EXATAMENTE

// A RA~ZAO

// PQ

// PODEMOS _ tRANSFORMAR__ ISSO EM UMA 'GENERIC CLASS'...

// --> GENERIC CLASSES --> SÃO USADAS__ QUANDO VOCÊ __ NÃO SE IMPORTA__

// COM OS TYPES DE DATA QUE SERÃO armazenados ... --> VOCÊ VAI QUERER

// QUE
// SEJA

// 'UNIFORM DATA' (

//     ou seja,

//     SÓ STRINGS, SÓ NUMBERS, ETC ETC...
// )

// --> mas fora isso,

// 'uniformized data',

// NÃO NOS IMPORTAMOS COM O TYPE DA DATA....

// -------------> OK, MAS COMO TRANSFORMAMOS  ESSA CLASS EM UMA GENERIC CLASS?

// --> FAZEMOS ISSO com a MESMA SINTAXE DAS

// 'GENERIC FUNCTIONS'...

// --> OU SEJA,

// VAMOS ESCREVER

// '<>'

// E AÍ __

// O 'T' de Type.. -->

// E AÍ,

// você vai

// USAR O CLÁSSICO 'extends', provavelmente (extends --> são os 'CONSTRAINTS')....
