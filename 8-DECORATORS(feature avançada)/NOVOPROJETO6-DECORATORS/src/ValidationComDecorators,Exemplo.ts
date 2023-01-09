const courseForm = document.querySelector('form') as HTMLFormElement;




interface ValidatorConfig {
  [property: string]: { ///exemplo de 'INDEXABLE TYPES' ( ou seja, de um OBJECT/class com PROPRIEDADES INFINITAS/VARIÁVEIS...)


    [validatableProperty: string]: string[] //// ['required', 'positive'] //lista de validators...


  } ////////E PARECE QUE CADA 'PROPRIEDADE VARIÁVEL' nessa nossa class _ VAI __ ARMAZENAR UM OBJECT ({})...

}



const registeredValidators: ValidatorConfig = {}






function PositiveNumber(target: any, propName: string) {//DECORATOR (property decorator)
  registeredValidators[target.constructor.name] = { //// 'registeredValidators[target.constructor.name] 'retornará uma string dizendo 'Course'... (que será O NOME DESSA PROPRIEDADE, lá em 'registeredValidators' )...

      ...registeredValidators[target.constructor.name], //vamos pegar todos os 'validators que já existiam/passaram a existir previamente, e vamos os somar nesse array aqui..
    [propName]: ['positive']
  }
}


function Required(target: any, propName: string) { ///decorator (property decorator)


  registeredValidators[target.constructor.name] = { //// 'registeredValidators[target.constructor.name] 'retornará uma string dizendo 'Course'... (que será O NOME DESSA PROPRIEDADE, lá em 'registeredValidators' )...

    ...registeredValidators[target.constructor.name], //vamos pegar todos os 'validators que já existiam/passaram a existir previamente, e vamos os somar nesse array aqui..
    [propName]: ['required']
  }
  
}




function validate(obj: any) { //ESSA É UMA FUNCTION, E NÃO UM VALIDATOR... ela vai 'go through all validators' ----> E AÍ VAI EXECUTAR DIFERENTE LÓGICA, COM BASE NOS DIFERENTES VALIDATORS QUE ENCONTRAR... 

  const objectValidatorConfig = registeredValidators[obj.constructor.name];


  if (!objectValidatorConfig) { //procuramos 'validator configuration'  para a class de 'Course'... e nenhuma é encontrada, portanto o object é automaticamente válido....
    return true;
  }

  let isValid = true; //garante que todos nossos fields de 'input' SÃO VERIFICADOS..
  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) { //vai ser sempre 1 array, mesmo nós tendo, hipotéticamente, 1 único 'validator' adicionado..
      switch (validator) { ///essa é a lógica de validate em si...
        case 'required':
          isValid = isValid && !!obj[prop]; //vai retornar/converter esse valor em 'true' ou 'false'... --> queremos retornar TRUE se a propriedade tiver um valor 'non empty'... --> e podemos fazer isso por meio do 'double bang operator' do javascript... --> double bang operator converte isso em um 'REAL BOOLEAN VALUE'(true ou false)....
          break;
          case 'positive':
         isValid = isValid && obj[prop] > 0;
         break;
      }
    }
  }

  return isValid
}







class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}






courseForm.addEventListener(
  'submit',

  (event) => {
    event.preventDefault();

    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;



    const newCourse = new Course(title, price);
    

    if(!validate(newCourse)) {

      alert('Invalid input, please try again.');
      return;

    }

    console.log(newCourse);
  }



  
);
