class Department3 {
//   name: string; ///comente para fora TUDO ISSO....
//   private employees: string[]; 
///private name: string;
///private employee: string[];
///private ids: string[];
////private ssss = number[];
////private xxx = number;
//// yyyy = string;



//// VVVVVVV --> esse é o SHORTHAND PARA __ ADICIONAR __ PROPRIEDADES/fields __ na sua CLASS, sem precisar digitar tudo 500 vezes ali em cima e embaixo...
constructor(private name: string, private employees: string[], private ids: string[], private ssss: number[], private xxx: number, public yyyy: string) {
    // this.name = n; ///COMENTE PARA FORA TUDO ISSO...
    // this.employees = emp;
  }


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












// --> VOCÊ SE LIVRA DESSES FIELDS,



// E AÍ...