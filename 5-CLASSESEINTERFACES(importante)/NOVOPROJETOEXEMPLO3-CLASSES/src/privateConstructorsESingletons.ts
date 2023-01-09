// ------> HÁ MAIS UMA FEATURE INTERESSANTE QUE O PROFESSOR QUER NOS MOSTRAR....

// --> É A FEATURE DO 'PRIVATE CONSTRUCTOR'...

// --> PRIVATE CONSTRUCTORS..

// --> O QUE SÃO PRIVATE CONSTRUCTORS,

// E ___ QUAL É SUA UTILIDADE?

// --> BEM, EXISTE UM PADRÃO EM 'OOP' (object-oriented programming)

// _ QUE __ É CHAMADO DE '

// singleton'...

// 'SINGLETON PATTERN' -----> ESSE PADRÃO É ALL ABOUT

// SEMPRE

// GARANTIR

// QUE VOCÊ __ TENHA __ APENAS 1 ÚNICA

// 'INSTANCE'

// DE

// 1 CLASS...--------> ISSO PODE SER ÚTIL, NO CASO,

// EM

// __SITUAÇÕES EM QUE VOCê __  (por alguma razão ) NÃO PODE

// USAR

// STATIC METHODS/PROPERTIEs... --------->  MAS ESSE PATTERN É ÚTIL

// TBM

// QUANDO

// VOCê

// ____ QUER ASSEGURAR QUE

// VOCê

// NÃO

// CRIE MÚLTIPLOS OBJECTS

// COM BASE EM
// 1
//  CLASS ------------> VOCÊ ESSENCIALMENTE VAI QUERER TER

//  APENAS

//  1
//  OBJECT

//  COM

//  BASE

// EM

// 1
// CLASS....

// --------> DIGAMOS QUE

// PARA NOSSA CLASS DE 'AccountingDepartment',

// VAMOS QUERER _ CRIAR ___ APENAS 1

// OBJECT

// COM BASE NESSA CLASS....

// ex:

//     class AccountingDepartment2 extends Department5 {

//             private lastReport: string;

//         constructor(id: string, private reports: string[]) {
//                 // super(id, 'Accounting');
//                 super('Accounting', ['a', 'b', 'c'], ['c1', 'x2'], [1, 5, 7], 122121, 'asasojasOsaj', id);
//                 this.lastReport = reports[0]
//         }

//         addEmployee(name: string) { ////vamos querer passar esse method POR CIMA DO METHOD JÁ EXISTENTE de 'addEmployee' na class de 'Department'...

//             if (name === 'Max') {
//                 return; //retorna 'void'...
//             }

//             this.employees.push(name); //essa propriedade NÃO EXISTE NESSA CLASS.... --> na verdade, NÃO EXISTIA (keyword de 'private') --> MAS AGORA EXISTE, PQ USAMOS A KEYWORD DE 'protected'...
//         }

//         addReport(text: string) {
//             this.lastReport = text;
//             this.reports.push(text);
//         }

//         getReports() {
//             console.log(this.reports);
//             return this.reports;
//         }

//         get mostRecentReport() { ///EXEMPLO __ DE __ UM __ GETTER_...

//             if (this.lastReport) {
//                 return this.lastReport; ////GETTERS__ SEMPRE__ RETORNAM __ PROPRIEDADES DE NOSSA CLASS.... (servem para ACESSAR OS VALORES DESSAS PROPRIEDADES __ NO LADO __ DE FORA__ DE NOSSAS CLASSES.... isso pq quando você define 'private/protected em uma PROPRIEDADE, nas suas classes, VOCê __ NÃO CONSEGUE __ ACESSAR O VALOR DESSA PROPRIEDADE POR MEIO DA DOT NOTATION, no lado de fora... para isso, para conseguir esse valor, ou você usa UM METHOD, OU ENTÃO UM GETTER, ambos definidos dentro da sua class...)
//             }

//             throw new Error('No report found.');
//         }

//        set mostRecentReport(value: string) { /// ------> OK.... ATÉ AGORA, BEM PARECIDO COM UM _ GETTEr__.... ---> ENTRETANTO, COM OS SETTERS __ VOCÊ __ É __ FORÇADO__ A PASSAR/EXIGIR 1 PARÂMETRO...

//         if(!value || this.reports.length <= 0 ) {
//             throw new Error('Something has gone wrong...');
//         }

//         this.reports[this.reports.length - 1] = value; ///////ISSO VAI __ DEFINIR O VALOR DESSE NEGÓCIO COMO SENDO O VALUE QUE O USER PASSOU....

//         }

//     }

// const onlyAccountingDepartment = new AccountingDepartment('xx', 'yy', 'zz');

//     --> VAMOS QUERER APENAS 1

//     OBJECT DISSO __ _JUSTAMENTE__ PQ SÓ TEMOS

//     1 ÚNICO

//     'accounting department'

//     na nossa empresa...

// --> TALVEZ TENHAMOS MAIS DE 1 'ITDepartment',

// MAS

// TEMOS

// exatamente 1 único

// accounting department..

// --> BEM.... PARA
// __-FORÇAR ISSO,

// E PARA

// _EVITAR__ QUE

// SEJAM

// CRIADOS MÚLTIPLOS

// 'ac deparment'

// objects no nosso código,

// E _ PARA __ EVITAR QUE __

// CHAMEMOS

// 'new AccountingDepartment()'

// MÚLTIPLAS VEZES,

// PODEMOS _ TRANSFORMAR__

// O

// CONSTRUCTOR___

// __ DESSA class de 'AccountingDepartment'

// _ EM UMA

// CLASS __ PRIVADA___ (private)...

// ------> FAZEMOS ISSO POR MEIO DA ESCRITA DE 'private'

// NA FRENTE DO __ CONSTRUCTOR__ DA CLASS QUE QUEREMOS 'PRIVATIZAR'...

// ex:





class Department8 {

    
    
 
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











class AccountingDepartment3 extends Department8 {
  private lastReport: string;

  private static instance: AccountingDepartment3 //sim, podemos combinar 'private' com 'static', combinar seus efeitos....
        ///VAMOS QUERER que o type dessa propriedade SEJA _ A NOSSA CLASS EM SI.... (vamos usar essa propriedade 'instance' para _ INSTANCIAR NOSSA CLASS, com a ajuda do method 'getInstance'..)
        ///--> e essa propriedade é ESTÁTICA (ou seja, SÓ EXISTE  DENTRO DESSA CLASS...)
        ///--> e é PRIVATE ( ou seja, só é acessível DE DENTRO DESSA CLASS, POR MEIO DE METHODS)....
        ////(g)

    ///(g)
 private constructor(id: string, private reports: string[]) { ///esse 'private' TRANSFORMA NOSSO CONSTRUCTOR EM UM 'PRIVATE CONSTRUCTOR',  o que faz com que __ SÓ SEJA PERMITIDA_ A CRIAÇÃO DE 1 ÚNICO 'object' vinculado a essa class....
    
    // super(id, 'Accounting');
    super(
      'Accounting',
      ['a', 'b', 'c'],
      ['c1', 'x2'],
      [1, 5, 7],
      122121,
      'asasojasOsaj',
      id
    );
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.lastReport = text;
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
    return this.reports;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value || this.reports.length <= 0) {
      throw new Error('Something has gone wrong...');
    }

    this.reports[this.reports.length - 1] = value;
  }



  static getInstance() {////(g)
    if (this.instance) { //HIPÓTESE EM QUE __ JÁ TEMOS UMA INSTANCE ARMAZENADA...
        return this.instance;
    } 
     this.instance = new AccountingDepartment3('sss', ['aa', 'bb'])  //HIPÓTESE EM QUE __ NÃO TEMOS UMA INSTANCE ARMAZENADA, TEMOS QUE CRIAR UMA NOVA INSTANCE...
    return this.instance;
  }


}

const onlyAccountingDepartment = new AccountingDepartment3('xx', 'yy', 'zz'); //////// NÃO PODEMOS CHAMAR 'new'/instanciar essa class JUSTAMENTE POR CAUSA DO USO Da keyword de 'private' no constructor dessa class....
    ////Constructor of class 'AccountingDepartment3' is private and only accessible within the class declaration.ts(2673)




    const onlyAccountingDepartmentLegitWorking = AccountingDepartment3.getInstance(); ///código que vai FUNCIONAR, ao contrário do de cima... (e este não dará erros nem nada)... ---> E SÓ 1 ÚNICA INSTÂNCIA DE 'AccountingDepartment3' poderá existir, justamente por conta da LÓGICA DENTRO DE 'getInstance' (aquele if check)....

    // const onlyAccountingDepartmentLegitWorking2 = AccountingDepartment3.getInstance(); /// isso naõ vai nos dar um novo objeto, e sim VAI __ SÓ NOS DAR__ UM POINTER AO MESMO OBJETO visto em  '' const onlyAccountingDepartmentLegitWorking = AccountingDepartment3.getInstance();''
    // const onlyAccountingDepartmentLegitWorking3 = AccountingDepartment3.getInstance();
    // const onlyAccountingDepartmentLegitWorking4 = AccountingDepartment3.getInstance();



///ok, não podemos MAIS INSTANCIAR ESSA CLASS.... como vamos criar um objeto 'AccountingDepartment', então, a partir dessa class?



///a resposta é: 'STATIC METHODS' --> vamos chamar um static METHOD _ DIRETAMENTE__ NA NOSSA CLASS COM CONSTRUCTOR PRIVATE, para então _ CRIAR_ 1 OBJETO....




//isso faz com que A CLASS de 'AccountingDepartment3' NÃO PRECISE SER INSTANCIADA, ESSENCIALMENTE....