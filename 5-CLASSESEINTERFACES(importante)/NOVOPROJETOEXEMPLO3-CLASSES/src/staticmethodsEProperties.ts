class NovaClass {
  static metodoEstatico() { //vamos poder chamar isso _ SEM __ TER QUE _ INSTANCIAR OBJETOS A PARTIR DESSA CLASS ....
    console.log('exemplo');
  }

  metodoComum() {
    console.log('exemplo');
  }
}





class Department7 {

    
    static fiscalYear = 2020;
 
    constructor(private name: string, //////essa propriedade __ NÃO EXISTIRÁ NAS CLASSES QUE INHERITAREM 'Department5'... (por causa da keyword de 'private'...)
        ////private employees: string[], 
        protected employees: string[], ///// VERSÃO DE 'private' (essa keyword) QUE __ FAZ COM QUE __ A PROPRIEDADE EM QUE VOCê EMBUTIU ISSO __ PASSE __ A EXISTIR EM CLASSES QUE INHERITAM ESSA CLASS de 'Department5', MAS QUE _ AO MESMO TEMPO AINDA DEIXE ESSA CLASS COMO 'private' ( ou seja, AINDA NÃO SERÁ POSSÍVEL ALTERAR O VALOR DESSA PROPRIEDADE POR MEIO DE RE-DEFINES EXTERNOS A ESSA CLASS/que não usem seus methods).... -> ou seja, 'protected' é uma versão MAIS LIGHT de 'private'.... (pq private não deixa essa propriedade ser 'inherited' pelas inheriting classes/extended classes)....
        private ids: string[], 
        private ssss: number[], 
        private xxx: number, 
        public yyyy: string,
        private readonly id: string ///'READONLY' vai fazer com que o valor dessa propriedade seja _IMUTÁVEL__ (imortal, impossível de ser alterado)....
       
        ) {
            console.log(Department7.fiscalYear); //isso aqui funciona (por alguma razão) -->  
            console.log(this.fiscalYear); //mas isto não funciona..... -->         ----------> OK, MAS PQ  'this' NÃO FUNCIONA? --> NÃO FUNCIONA PQ  'this' SEMPRE VAI SE  REFERIR   "TO THE INSTANCE BASED ON THE CLASS''' --> e como __ NÓS _ NUNCA TEREMOS 'INSTANCES'   COM NOSSOS METHODS/PROPRIEDADES ESTÁTICOS,  esse código é simplesmente INCORRETO...
      }
    
    
      addEmployee(employee: string) {
        this.employees.push(employee); 
      }
    
      printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
      }
    
      describe(this: Department) {
        console.log('Department: ' + this.name);
      }



      static createEmployee(name: string) { //EIS O CÓDIGO EM QUESTÃO.
        return { name: name}
          }
    }







class UtilityClassExample { //essa feature dos 'static methods' FREQUENTEMENTE É USADA PARA DEFINIR 'UTILITY CLASSES', ou seja, CLASSES __ CUJO PROPÓSITO ÚNICO SERÁ DE 'SERVIR COMO AGRUPADORES DE METHODS UTILITY'... (exatametne como a class de 'Math', no javascript)....
    static removeConsoleLogs() { 
      //....
    }
  
    static removeComments() {
        ////....
    }



    static removeEventListeners() {
        ///...
    }


    static cleanUp() {

    }
  }
  
  







NovaClass.metodoEstatico(); //não precisamos instanciar coisa alguma...




const novoObjeto = new NovaClass();

novoObjeto.metodoComum();








UtilityClassExample.cleanUp();


UtilityClassExample.removeComments();



UtilityClassExample.removeConsoleLogs();


UtilityClassExample.removeEventListeners();







const employee1 = Department7.createEmployee('Max');




console.log(employee1);











////'Math' --> é um exemplo de CONSTRUCTOR FUNCTION (builtin) no javascript__ que TEM VARIOS DESSES METHODS ESTÁTICOS, pq você OS ACESSA DIRETAMENTE EM 'Math', não precisa instanciar coisa alguma...














// ---------> ESSES METHODS TODOS 


// SÃO 


// ESTÁTICOS,




// pq você não tem que escrever 



// 'const math = new Math()' 



// PARA OS 

// UTILIZAR...












// -------> VOCê ACESSA TODOS ESSES 
// METHODS E PROPRIEDADES__ DIRETAMENTE_ NA CLASSE EM SI.... --> é por isso que 

// dizemos que 


// '
// Math'



// ATUA MAIS COMO UM 'NAMING SPACE',


// como um 


// 'GROUPING MECHANISM' 

// de diversas functions....










// ------------> E ESSE 

// É 

// UM 

// COMMON USE-CASE 

// PARA 


// 'STATIC METHODS' E PROPERTIES.... ------> você simplesmente 

// define 

// uma 


// class que vai ser de UTILITY, no seu código,


// e 

// aí 




// ADICIONA VÁRIOS DESSES METHODS 




// de 'utility', estáticos,

// nela....


