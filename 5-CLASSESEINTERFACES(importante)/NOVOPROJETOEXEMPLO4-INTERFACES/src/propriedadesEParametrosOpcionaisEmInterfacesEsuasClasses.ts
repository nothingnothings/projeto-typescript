interface Named2 {
  readonly name?: string;


  outputtedName?: string; //////EXEMPLO DE 'optional property'... (a class em que implementarmos 'Named2' NÃO VAI PRECISAR TER ESSA PROPRIEDADE, OBRIGATORIAMENTE)....
}

interface Greetable3 extends Named2 {
  greet(phrase: string): void;
  name2?: string;

}

class Lawyer3 implements Greetable3 {

  static age = 30;

  name2?: string;

  greet(phrase: string) {


    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {

      console.log('No greetings for you, no parameter provided');
    }


  
  }

  constructor(public name?: string, name2?: string) {
    this.name = name;
    this.name2 = name2;
  }
}







const newLawyer5 = new Lawyer3();  ////podemos chamar assim justamente pq definimos esses parâmetro, na INTERFACE E NA CLASS, como optional...






newLawyer5.greet('frase');






