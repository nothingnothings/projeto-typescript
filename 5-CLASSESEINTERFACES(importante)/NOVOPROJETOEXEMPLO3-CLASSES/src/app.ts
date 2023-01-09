











// class Department { ///é assim que vocÊ ESCREVE CLASSES __ NO TYPESCRIPT, supostamente ( COM ESSA DEFNIÇÃO DE 'KEY-TYPE' pairs)...
//         ///ainda VAMOS PRECISAR DE CONSTRUCTOR FUNCTIONS NAS NOSSAS CLASS, EXATAMENTE COMO NO JAVASCRIPT COMUM...


//     name: string = 'VALORDEFAULTQUESERÁSETTADOSENENHUMPARÂMETROFORPASSADO A ESSA SUA CLASS'; 
//     number: number;


//     constructor(n: string, z: number) {
//         this.name = n; //// essa propriedade vai ser aquele 'name' visto ali em cima
//         this.number = z; //essa propriedade vai ser aquele 'number' definido ali em cima....
//     }




//     describe() {
//         // console.log('Department: ' + name); //essa variable __ NÃO EXISTE_ DENTRO DO CONTEXTO DE 'describe', e essa escrita/sintaxe é ERRADA...

//         console.log('Department: ' + this.name); ////ISSO VAI SE REFERIR à PROPRIEDADE 'name' DE CADA OBJECT CRIADO A PARTIR DE NOSSA CLASS...
//     }
// }






// const shiningApartment = new Department('salao', 55);





// console.log(shiningApartment);






// shiningApartment.describe(); ///////ISSO VAI PRINTAR 'Department: salao' ...
























class Department {


    name: string;
    employees: string[];


    constructor (n: string, emp: string[]) {
        this.name = n;
        this.employees = emp;
    }


    addEmployee(employee: string) {
        this.employees.push(employee); ///array de 'employees' PASSARÁ A EXISTIR quando esse method for executado....
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }






    describe(this: Department) { //////////EIS O CÓDIGO EM QUESTÃO. ----->  ---->  SE VOCÊ COLOCA 'this'  COMO __ PARÂMETRO __  EM  1  DE SEUS  METHODS em 1 class, __ VOCÊ ATIVA UMA FEATURE ESPECIAL NO TYPESCRIPT... -------> SE VOCê ADICIONA  UM PARAMETER DE 'THIS' no seu method, _ NÃO SERÁ REALMENTE UM PARAMETER DE 'THIS' que  será esperado... (pq você AINDA SERÁ CAPAZ DE CHAMAR '.describe()" SEM _ PASSAR NENHUM VALOR COMO PARÂMETRO DESSE CALL)....
            ///esse 'this' aqui é usado para 'CONSERTAR'/TELL A HINT TO TYPESCRIPT __ ABOUT_ WHAT 'THIS' SHOULD REFER TO....
            ////tipicamente settamos o 'this' de nossos methods __ COMO __ REFERENTE A __ NOSSA __ CLASS EM SI.... (é uma convenção)... --> isso __ CONSERTA O COMPORTAMENTO Da keyword 'this' em calls como de 'accountingCopy.describe()'... 
            // O QUE FAZ ESSE PARÂMETRO DE 'this: Department'? --> QUANDO DESCRIBE() FOR EXECUTADO, o  'this' DENTRO DE 'describe' DEVERÁ  SE REFERIR  SEMPRE__ A UMA __ ''''' INSTANCE QUE É BASEADA NA CLASSE DE DEPARTMENT''''' 
       
       
            console.log('Department: ' + this.name);

    }
}









const accounting = new Department('Accounting', ['a', 'b']);






accounting.describe();





// const accountingCopy = { describe: accounting.describe }; ///////object que nÃO FOI CRIADO COM A INSTANCIACAO DE NOSSA CLASS... (class de 'Department")...



// accountingCopy.describe(); //// esse código é considerado INVÁLIDO_ JUSTAMNETE__ PQ ESTAMOS TENTNADO CHAMAR 'describe()' (esse method) EM 1 OBJECT_ _QUE __ NÃO _ É UM OBJECT CRIADO A PARTIR DA INSTANCIAÇÃO DAQUELA CLASS DE 'Department', que foi passada como type lá em 'describe(){}'... (e isso faz com que o 'THIS' de 'accounting' NÃO ACABE SE RFEFERINDO A UM OBJECT DE TYPE 'DEPARTMENT'  )


/// como consertar ^^^^^esse código? --> bem, basta ADICIONAR A PROPRIEDADE DE 'name' A ESSE OBJECT de 'accountingCopy'.... (ou seja, esse object TEM QUE TER A MESMA ESTRUTURA DE NOSSA 'CLASS' de 'Department', pq é ISSO QUE ESTÁ __ EXIGINDO _ AQUELE PARÂMETRO de 'this: Department', lá em 'describe()', no interior dessa class)...


const accountingCopy = { describe: accounting.describe, name: 'asihasiashais', employees: ['a', 'b']}; ///////object que nÃO FOI CRIADO COM A INSTANCIACAO DE NOSSA CLASS... (class de 'Department")... --> ENTRETANTO, POR MEIO DO ADD da propriedade 'name', ACABAMOS COM O ERRO DE 'você não pode usar essa propriedade de describe pq o type desse seu object não é de type 'Department', definido nesse method....



const accountingCopy2 = {describe: accounting.describe };


// accountingCopy2.describe(); ///ler explicações ao redor destes códigos....

// accountingCopy.describe();

// accountingCopy.describe(); //vai printar 'Department: assashashasahj'






accounting.addEmployee('Max');
accounting.addEmployee('Manu');



accounting.printEmployeeInformation();





accounting.employees.push('c'); ///ISSO FARÁ PUSH DIRETO DE um novo 'employee' dentro do array interno de 'employees' de 'accounting'...
 
///NÃO QUEREMOS QUE ESSE COMPORTAMENTO SEJA PERMITIDO... ----> QUEREMOS QUE EMPLOYEES SEJAM ADMITIDOS NESSE ARRAY __ SOMENTE__ POR MEIO DE METHODS OFICIAIS, criados na nossa class (QUEREMOS BLOQUEAR ESSE 'ADD DIRETO' de elementos, pq queremos USAR OS METHODS, QUE VÃO FREQUENTEMENTE FAZER MAIS COISAS DO QUE APENAS ADICIONAR ESSE ELEMENT... --> PODEM FAZER TAMBÉM COISAS COMO VALIDATION, ANALYTICS, ETC....)