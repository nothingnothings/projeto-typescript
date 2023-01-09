
class Department5 {

    
    
 
    constructor(private name: string, //////essa propriedade __ NÃO EXISTIRÁ NAS CLASSES QUE INHERITAREM 'Department5'... (por causa da keyword de 'private'...)
        ////private employees: string[], 
        protected employees: string[], ///// VERSÃO DE 'private' (essa keyword) QUE __ FAZ COM QUE __ A PROPRIEDADE EM QUE VOCê EMBUTIU ISSO __ PASSE __ A EXISTIR EM CLASSES QUE INHERITAM ESSA CLASS de 'Department5', MAS QUE _ AO MESMO TEMPO AINDA DEIXE ESSA CLASS COMO 'private' ( ou seja, AINDA NÃO SERÁ POSSÍVEL ALTERAR O VALOR DESSA PROPRIEDADE POR MEIO DE RE-DEFINES EXTERNOS A ESSA CLASS/que não usem seus methods).... -> ou seja, 'protected' é uma versão MAIS LIGHT de 'private'.... (pq private não deixa essa propriedade ser 'inherited' pelas inheriting classes/extended classes)....
        private ids: string[], 
        private ssss: number[], 
        private xxx: number, 
        public yyyy: string,
        private readonly id: string ///'READONLY' vai fazer com que o valor dessa propriedade seja _IMUTÁVEL__ (imortal, impossível de ser alterado)....
        ) {

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
    }
    
    

/////////////////////////////////////////////////

// class ITDepartment extends Department4 { //extends --> é a inheritance...
        ///esta é a versão __ SEM CONSTRUCTOR ESCRITO...

// }




// const ITGuys = new ITDepartment('Arthur', ['a', 'b', 'c'], ['c1', 'x2'], [1, 5, 7], 122121, 'asasojasOsaj', 'ID25' ); //mesmo constructor da CLASS QUE FIZEMOS 'INHERIT'... (isso se você NÃO ESCREVER UM CONSTRUCTOR DENTRO DA INHERITING CLASS...)...



//////////////////////////////////////////////////









// class ITDepartment extends Department4 {


//  novaPropriedade: string

//         //'id: string' --> é a coisa que você vai instanciar __ NESSA CLASS DE 'ITDepartment'...
//     constructor(id: string) { /// dentro do CONSTRUCTOR QUE VOCÊ ESCREVER (se escrever, nessa sua inheriting class), VOCê _ SEMPRE DEVE __ ESCREVER 'super(){}'...

//         // this.novaPropriedade = id; ////ver explicação em '(g)'
//         super('IT', ['a', 'b', 'c'], ['c1', 'x2'], [1, 5, 7], 122121, 'asasojasOsaj', id) //id é o 'id' que obtivemos nessa INSTANCIAÇÃO de 'ITDepartment'...

//         this.novaPropriedade = id;  //// '(g)' SE VOCÊ FOR __ ADICIONAR QUAISQUER NOVAS PROPRIEDADES nessa sua nova class, VOCÊ __ SÓ PODE FAZER COISAS COM A KEYWORD DE 'this' __ DEPOIS __ DO CALL de 'super()'..
//     }
// }









class ITDepartment extends Department4 {


   
   
           //'id: string' --> é a coisa que você vai instanciar __ NESSA CLASS DE 'ITDepartment'...
       constructor(id: string, public novaPropriedade: string) { /// dentro do CONSTRUCTOR QUE VOCÊ ESCREVER (se escrever, nessa sua inheriting class), VOCê _ SEMPRE DEVE __ ESCREVER 'super(){}'...
   
           // this.novaPropriedade = id; ////ver explicação em '(g)'
           super('IT', ['a', 'b', 'c'], ['c1', 'x2'], [1, 5, 7], 122121, 'asasojasOsaj', id) //id é o 'id' que obtivemos nessa INSTANCIAÇÃO de 'ITDepartment'...

        //    this.novaPropriedade = id; //isto pode ser omitido, pois já escrevemos aquele shorthand de 'public novaPropriedade: string'...

        //    this.novaPropriedade = id;  //// '(g)' SE VOCÊ FOR __ ADICIONAR QUAISQUER NOVAS PROPRIEDADES nessa sua nova class, VOCÊ __ SÓ PODE FAZER COISAS COM A KEYWORD DE 'this' __ DEPOIS __ DO CALL de 'super()'..
       }
   }





   class AccountingDepartment extends Department5 {



    constructor(id: string, private reports: string[]) {
            // super(id, 'Accounting');
            super('Accounting', ['a', 'b', 'c'], ['c1', 'x2'], [1, 5, 7], 122121, 'asasojasOsaj', id)
    }

    addEmployee(name: string) { ////vamos querer passar esse method POR CIMA DO METHOD JÁ EXISTENTE de 'addEmployee' na class de 'Department'...


        if (name === 'Max') {
            return; //retorna 'void'...
        }


        this.employees.push(name); //essa propriedade NÃO EXISTE NESSA CLASS.... --> na verdade, NÃO EXISTIA (keyword de 'private') --> MAS AGORA EXISTE, PQ USAMOS A KEYWORD DE 'protected'...
    }


    addReport(text: string) {

        this.reports.push(text);
    }


    getReports() {
        console.log(this.reports);
        return this.reports;
    }
}









const ITGuys = new ITDepartment('ID25', 'entraEmNovaPropriedade'); ///chamamos/instanciamos com APENAS 1 VALOR __ JUSTAMNETE__ PQ O CONSTRUCTOR DESSE NEGÓCIO SÓ ACEITA/EXIGE 1 ÚNICO VALOR (o resto dos valores está meio 'hardcoded', como visto ali em cima)....





const acGuys = new AccountingDepartment('ID26', ['entraEmNovaPropriedade1', 'entraEmNovaPropriedade2']);


acGuys.addReport('Something went wrong...');





acGuys.getReports();



 acGuys.addEmployee('Max');// vai 'return void' (por causa do if check)...



 acGuys.addEmployee('Manu'); // vai adicionar 'Manu' (string) AO ARRAY DE 'employees', na class de 'AccountingDepartment'...



 acGuys.printEmployeeInformation();




