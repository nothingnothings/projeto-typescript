///veremos o uso do operador 'OPTIONAL CHAINING'...





const fetchedUserData = {
  id: 'u1',
  name: 'Max',
 /// job: { title: 'CEO', description: 'My own company' }, ////caso hipotético: FALHAMOS NO 'GET' dessa propriedade, LÁ NO OBJETO recebido pelo server/backend/database...
};


// console.log(fetchedUserData.job.title); 








///como evitar RUNTIME __ ERRORS__ NO JAVASCRIPT EM SI...
// console.log(fetchedUserData.job && fetchedUserData.job.title); ///esse é a maneira de 'EVITAR RUNTIME ERRORS' no javascript... (E não no typescript) ---> pq se aquela propriedade inicial de 'job' NÃO EXISTIR/NÃO FOR RECEBIDA/ESTIVER COMO UNDEFINED, o código de '.job.title' TAMBÉM NÃO SERÁ EXECUTADO....












///COMO EVITAR RUNTIME ERRORS __ NO TYPESCRIPT___ ---> usando 'optionalChaining'... (vários '?')...






console.log(fetchedUserData?.job?.title);  ///essa sintaxe É CORRETA, mas o typescript ainda vai apitar (vai apitar pq ele sabe COM CERTEZA, 100%, que 'job' não existe dentro desse objeto)...














// --> OK... ESSE OPTIONAL CHAINING OPERATOR 

// NOS DEIXA 'SAFELY ACCESS NESTED PROPERTIES AND NESTED OBJECTS IN OUR OBJECT DATA''' -->  E 




// SE __ A COISA NA FRENTE DO '?" estiver como UNDEFIND,




// ELE VAI AUTOMATICAMENTE __ NÃO ___ RODAR/LER A COISA QUE VEM NA DIREITA (o que vai evitar um RUNTIME ERROR no nosso projeto, pq não acessaremos um 'job'/title que não existe/está como undefined)...