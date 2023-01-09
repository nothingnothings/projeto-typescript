
class Department6 {

    
    
 
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
    









    class AccountingDepartment2 extends Department5 {


            private lastReport: string;


        constructor(id: string, private reports: string[]) {
                // super(id, 'Accounting');
                super('Accounting', ['a', 'b', 'c'], ['c1', 'x2'], [1, 5, 7], 122121, 'asasojasOsaj', id);
                this.lastReport = reports[0]
        }
    
        addEmployee(name: string) { ////vamos querer passar esse method POR CIMA DO METHOD JÁ EXISTENTE de 'addEmployee' na class de 'Department'...
    
    
            if (name === 'Max') {
                return; //retorna 'void'...
            }
    
            
            this.employees.push(name); //essa propriedade NÃO EXISTE NESSA CLASS.... --> na verdade, NÃO EXISTIA (keyword de 'private') --> MAS AGORA EXISTE, PQ USAMOS A KEYWORD DE 'protected'...
        }
    
    
        addReport(text: string) {
            this.lastReport = text;
            this.reports.push(text);
        }
    
    
        getReports() {
            console.log(this.reports);
            return this.reports;
        }


        get mostRecentReport() { ///EXEMPLO __ DE __ UM __ GETTER_...

            if (this.lastReport) {
                return this.lastReport; ////GETTERS__ SEMPRE__ RETORNAM __ PROPRIEDADES DE NOSSA CLASS.... (servem para ACESSAR OS VALORES DESSAS PROPRIEDADES __ NO LADO __ DE FORA__ DE NOSSAS CLASSES.... isso pq quando você define 'private/protected em uma PROPRIEDADE, nas suas classes, VOCê __ NÃO CONSEGUE __ ACESSAR O VALOR DESSA PROPRIEDADE POR MEIO DA DOT NOTATION, no lado de fora... para isso, para conseguir esse valor, ou você usa UM METHOD, OU ENTÃO UM GETTER, ambos definidos dentro da sua class...)
            }

            
            throw new Error('No report found.');
        } 




       set mostRecentReport(value: string) { /// ------> OK.... ATÉ AGORA, BEM PARECIDO COM UM _ GETTEr__.... ---> ENTRETANTO, COM OS SETTERS __ VOCÊ __ É __ FORÇADO__ A PASSAR/EXIGIR 1 PARÂMETRO...


        if(!value || this.reports.length <= 0 ) {
            throw new Error('Something has gone wrong...');
        }



        this.reports[this.reports.length - 1] = value; ///////ISSO VAI __ DEFINIR O VALOR DESSE NEGÓCIO COMO SENDO O VALUE QUE O USER PASSOU....

        }






    }
    






const newAccounting = new AccountingDepartment2('ID21212', ['Report1', 'Report2']);







console.log(newAccounting.lastReport); ///EXEMPLO DE FALHA NO GET desse 'lastReport', justamente por conta do uso da keyword de 'private'....







console.log(newAccounting.mostRecentReport); ///EXEMPLO DO __ USO __ DE 1 GETTER... --> VOCÊ SEMPRE VAI USAR GETTERS( 'get mostRecentReport') COMO __ PROPRIEDAEDS, e não comom FUNCTIONS ...

///isso aqui, esse GETTER, vai nos dar o valor de 'lastReport'






newAccounting.mostRecentReport = 'REPORTNOVO' ///call/USO de um _ SETTER__... ( o '=' FAZ TODA A DIFERENÇA, PQ BASICAMENTE CONFIRMA QUE 'ESTAMOS SETTANDO ALGUMA COISA' NESSA PROPRIEDADE)... (bem diferente de um 'getter', portanto...)




















// ''''GETTER'''' --> DEFINIÇÃO --> ''É ESSENCIALMENTE UMA 



// _PROPRIEDADE__ EM QUE __ VOCÊ EXECUTA UMA FUNÇÃO/METHOD em que 

// VOCê 

// RETRIEVA UM VALUE' ----------> a mera existência 

// de

// UM GETTER__ TE DEIXA,

// COMO __ DEVELOPER_, 

// ADICIONAR CÓDIGO MAIS COMPLEXO...



// -> OS GETTERS _ _SÃO CRIADOS __ DENTRO DE CLASSES... --> PARA CRIAR UM 


// GETTER,



// você 





// segue a formula 



// 'get' + 'qualquerNome'....



// --> TIPICAMENTE O NOME DO GETTER _ VAI _ TER RELAÇAÕ PRÓXIMA COM A PROPRIEDADE 




// QUE VOCÊ ESTÁ TENTANDO ACESSAR DO LADO DE FORA....