











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
























class Department2 {


    name: string;
    // public name: string;
    private employees: string[]; //////////PRIVATE__ PROPERTY.... --> impede que __MODIFIQUEMOS ESSA PROPRIEDADE lá do lado de FORA Dessa class (somos obrigados a usar OS METHODS dessa class para modificar as propriedades, com isso)...
    //essa keyword de 'private' É ALGO _ QUE __ CHAMAM DE 'modifier' no typescript...
    ///o outro modifier que existe é o 'public', que é o DEFAULT (você não precisa escrever, já é o default de todas as coisas na sua class)... 








    constructor (n: string, emp: string[]) {
        this.name = n;
        this.employees = emp;
    }



    // private fireEmployee(employeeId: string) { ///////TAMBÉM PODEMOS USAR 'private' COM __ METHODS__ nas nossas classes...

    // }

    addEmployee(employee: string) {
        this.employees.push(employee); ///array de 'employees' PASSARÁ A EXISTIR quando esse method for executado....
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }



    describe(this: Department) {
            console.log('Department: ' + this.name);

    }
}






const accounting5 = new Department2('Accounting', ['a', 'b']);






accounting5.describe();



accounting5.addEmployee('Max');
accounting5.addEmployee('Manu');



accounting5.printEmployeeInformation();





accounting5.employees.push('c'); ///ISSO FARÁ PUSH DIRETO DE um novo 'employee' dentro do array interno de 'employees' de 'accounting'...
 
///NÃO QUEREMOS QUE ESSE COMPORTAMENTO SEJA PERMITIDO... ----> QUEREMOS QUE EMPLOYEES SEJAM ADMITIDOS NESSE ARRAY __ SOMENTE__ POR MEIO DE METHODS OFICIAIS, criados na nossa class (QUEREMOS BLOQUEAR ESSE 'ADD DIRETO' de elementos, pq queremos USAR OS METHODS, QUE VÃO FREQUENTEMENTE FAZER MAIS COISAS DO QUE APENAS ADICIONAR ESSE ELEMENT... --> PODEM FAZER TAMBÉM COISAS COMO VALIDATION, ANALYTICS, ETC....)

//PARA ISSO, TEMOS A FEATURE DAS 'PRIVATE PROPERTIES', vista nessa propriedade de 'employees' lá em cima.... (bloqueia A ALTERAÇÃO DESSA PROPRIEDADE no lado de fora dessa class, por approaches que não sejam dos methods dessa class...)

// por isso que observamos esse error aí....