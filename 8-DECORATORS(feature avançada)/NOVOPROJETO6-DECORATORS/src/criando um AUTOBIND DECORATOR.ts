function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) { ///colocamos '_' e '_2' para indicar ao typescrpit uqe NÃO ESTAMOS INTERESSADOS NESSES VALORES, MAS AINDA VAMOS OS ACEITAR...
    // function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {

    
    const originalMethod = descriptor.value; ///ISSO VAI NOS DAR ACESSO AO 'MÉTODO ORIGINAL/INICIAL' nesse descriptor do method de 'showMessage()'...

    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        writable: true,
        get() {  //esse getter será algo novo/editado/adicionado __ NESSE METHOD EM QUE VAMOS COLOCAR ESSE DECORATOR...

            
            const boundFunction = originalMethod.bind(this);
            return boundFunction;

        }         

        ///o código do GETTEr ('get')  --> VAI SER EXECUTADO  __ANTES__ DO CÓDIGO PROPRIAMENTE DITO de nosso method... (ele que faz o trabalho 'ANTECIPADO', por assim dizer... 'lays the ground'...)
        }

        return adjustedDescriptor;

}



class Printer2 {
  message = 'This works';

  constructor() {}

  @Autobind
  showMessage() {
    console.log(this.message);
  }

  showMessage2() {
    return this.message;
  }
}

const newPrinter2 = new Printer2();
