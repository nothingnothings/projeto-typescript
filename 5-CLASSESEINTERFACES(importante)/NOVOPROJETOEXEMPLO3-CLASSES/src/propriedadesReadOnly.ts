class Department4 {

    
    
 
    constructor(private name: string,
        private employees: string[], 
        private ids: string[], 
        private ssss: number[], 
        private xxx: number, 
        public yyyy: string,
        private readonly id: string ///'READONLY' vai fazer com que o valor dessa propriedade seja _IMUTÁVEL__ (imortal, impossível de ser alterado)....
        ) {

      }
    
    
      addEmployee(employee: string) {
        // this.id = 'd2'; ////ISSO _NÃO FUNCIONARÁ, JUSTAMENTE POR CONTA DA KEYWORD de 'readonly' nessa propriedade específica de 'id'..

        /// é por isso que 'readonly' ADICIONA _ 'TYPE SAFETY' extra aos seus projetos..
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
    
    
    
    
    