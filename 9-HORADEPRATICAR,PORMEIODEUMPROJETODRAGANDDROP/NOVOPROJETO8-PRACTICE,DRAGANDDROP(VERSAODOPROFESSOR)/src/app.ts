// const inputTemplate = document.getElementById('project-input') as HTMLTemplateElement
// const inputTemplateForm = inputTemplate.content.cloneNode(true) as HTMLFormElement;
// const projectTemplate = document.getElementById('single-project') as HTMLTemplateElement;
// const listTemplate = document.getElementById('project-list') as HTMLTemplateElement;

// document.body.appendChild(inputTemplateForm);

// const realInputForm = document.querySelector('form') as HTMLFormElement;
// const titleInput = document.getElementById('title') as HTMLInputElement;
// const descInput = document.getElementById('description') as HTMLInputElement;
// const peopleInput = document.getElementById('people') as HTMLTextAreaElement;

// const submitButton = document.querySelector('button') as HTMLButtonElement;

// // console.log(titleInput, descInput, peopleInput);
// // console.log(titleInput.value, descInput.value, peopleInput.value);

// // console.log(realInputForm);

// var stringToHTML = function (str: string) {
// 	var parser = new DOMParser();
// 	var doc = parser.parseFromString(str, 'text/html');
//     console.log(doc);
// 	return doc.body;
// };

// interface Project {

//    title: string;
//    description: string;
//    people: number;
//    displayProjects(): void;
// }

// const products: Project[] = [];

// class Project implements Project {

//     title: string;
//     description: string;
//     people: number;

//     constructor(title: string,  description: string, people: number) {

//         this.title = title;
//         this.description = description;
//         this.people = people;
//     }

// }

// realInputForm.addEventListener('submit',

// (event) => {
//         event.preventDefault();
//     const newPerson = new Project(titleInput.value, descInput.value, +peopleInput.value);

//     products.push(newPerson);

//     const manipulatedProducts = products.map(
//         (product) => {
//                 return `
//                 <li>
//                     <h2>${product.title}</h2>
//                     <p>${product.description}</p>
//                     <p>${product.people}</p>
//                 </li>
//                 `
//         }
//     ).join().split(',').join(''); ///tudo para ficarmos com uma fita de HTML regular...

//         console.log(manipulatedProducts);

//     const alteredString = stringToHTML(manipulatedProducts);

//     console.log(alteredString);

//     if (products.length > 1) {

//         // const list = document.getElementsByClassName('projects');
//         let list = document.querySelector('.projects')?.lastElementChild as HTMLElement;

//         console.log(list, 'LINE');

//         return list.innerHTML = manipulatedProducts;
//         // const parent

//     }

//     const parent = document.createElement('div');

//     parent.append(listTemplate.content.cloneNode(true));

//     console.log(parent);
//     // parent.innerHTML = `

//     // `

//     parent.innerHTML = `
//         <section class="projects" id="insert">
//             <header>
//                 <h2></h2>
//             </header>
//             <ul>
//                 ${manipulatedProducts}
//         </section>
//     `

//     return document.body.append(parent);

// //   const insertedNode = document.createElement(manipulatedProducts);

// }
// )

////////////MINHNA VERSÃO DO CÓDIGO ^^^^^^






//////////// PARTE FINAL DO DESENVOLVIMENTO DE NOSSO APP  ---> (construção/definição de INTERFACES PARA DIFERENCIAR OS 'ELEMENTOS DRAGGABLE' e as 'AREAS DROPPABLE' de nosso app )

//// essas 2 interfaces estabelecem o comportamento de 'drag and drop' de nosso código... --> ELAS 'FORÇAM' as classes em que são implementadas __A SEGUIR OS 'TERMOS DO CONTRATO' , de seu próprio contrato, com os methods na interface, etc etc....


interface Draggable {

  dragStartHandler(event: DragEvent): void ; ///'DragEvent' --> é um type BUILTIN no typescript... --> e esse method vai retornar 'void' (não vai retornar coisa alguma, portanto, e sim só configura O DRAGEVENT...)....
  dragEndHandler(event: DragEvent): void;
}








interface DragTarget {

  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void; ///O UPDATE DA UI E DA DATA, AO MESMO TEMPO, OCORRE EM 'dropHandler', essencialmente....
  dragLeaveHandler(event: DragEvent): void;
}

// 1) o 'dragOverHandler' ___ '''''PERMITE'''''__ O 'DROP' NAQUELE ELEMENTO... (é ativado quando arrastamos nosso elemento ('elemento permitido') em cima de uma 'droppable area')...
// 2) o 'dropHandler' ___ '''REALIZA''' O DROP NAQUELE ELEMENTO.... HANDLA O DROP... // ///O UPDATE DA UI E DA DATA OCORRE EM 'dropHandler', essencialmente....
// 3) 'dragLeaveHandler' É __ ÚTIL___  SE QUEREMOS _ DAR  UM  'VISUAL FEEDBACK' AO USER, FEEDBACK DE QUE __ SEU __ ELEMENTO __ ESTÁ ___ '''SAINDO''' DA LIST EM QUE ESTAVA...




















enum ProjectStatus { ///usado para 'ECONOMIZAR CÓDIGO' (passamos 0 e 1 em vez daquelas strings ali)...
  Active, ///0
  Finished ////1
}




class Project { //usamos uma CLASS e não um type JUSTAMENTE PQ _ QUEREMOS __ SER CAPAZES __ DE __ INSTANCIAR__ ESSA CLASS... (com types/interfaces, isso não é possível)...

  constructor( ///shortcut que DEFINE ESSES NEGÓCIOS AO MESMO TEMPO COMO 'PARAMETERS' DE NOSSA CLASS E __ PROPRIEDADES_ DELA...
    public id: string, 
    public title: string, 
    public description: string, 
    public people: number, 
    public projectStatus: ProjectStatus /////uso de ENUM, aquele enum ali de cima (passamos ou '0' ou '1', quando instanciamos esse 'project')...
    // public projectStatus: 'active' | 'finished' ///PROPRIEDADE ESSENCIAL... (filter for active/finished projects)... --> aqui, nessa VERSÃO, usaríamos LITERAL TYPES COM UNION TYPE, para definir apenas essas 2 hipóteses de valores nesse parameter dessa class..
     ) {

    }

}





////autobind decorator...
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  ///// USAREMOS NOS NOSSOS METHODS na nossa class...

  const originalMethod = descriptor.value;

  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };

  return adjustedDescriptor;
}

////validation decorator:

// interface ValidatorConfig {

//     [property: string]: {

//       [validatableProperty: string]: string[]
//     }
//   }

// const registeredValidators: ValidatorConfig = {}

// function PositiveNumber(target: any, propName: string) {//DECORATOR (property decorator)
//     registeredValidators[target.constructor.name] = { //// 'registeredValidators[target.constructor.name] 'retornará uma string dizendo 'Course'... (que será O NOME DESSA PROPRIEDADE, lá em 'registeredValidators' )...

//         ...registeredValidators[target.constructor.name], //vamos pegar todos os 'validators que já existiam/passaram a existir previamente, e vamos os somar nesse array aqui..
//       [propName]: ['positive']
//     }
//   }

// function Required(target: any, propName: string) { ///decorator (property decorator)

//   registeredValidators[target.constructor.name] = { //// 'registeredValidators[target.constructor.name] 'retornará uma string dizendo 'Course'... (que será O NOME DESSA PROPRIEDADE, lá em 'registeredValidators' )...

//     ...registeredValidators[target.constructor.name], //vamos pegar todos os 'validators que já existiam/passaram a existir previamente, e vamos os somar nesse array aqui..
//     [propName]: ['required']
//   }

// }

// function MinLength5(target: any, propName: string) { ///decorator (property decorator)

//   registeredValidators[target.constructor.name] = { //// 'registeredValidators[target.constructor.name] 'retornará uma string dizendo 'Course'... (que será O NOME DESSA PROPRIEDADE, lá em 'registeredValidators' )...

//     ...registeredValidators[target.constructor.name], //vamos pegar todos os 'validators que já existiam/passaram a existir previamente, e vamos os somar nesse array aqui..
//     [propName]: ['minLength5']
//   }

// }

// function validate(obj: any) { //ESSA É UMA FUNCTION, E NÃO UM VALIDATOR... ela vai 'go through all validators' ----> E AÍ VAI EXECUTAR DIFERENTE LÓGICA, COM BASE NOS DIFERENTES VALIDATORS QUE ENCONTRAR...

//   const objectValidatorConfig = registeredValidators[obj.constructor.name];

//   if (!objectValidatorConfig) { //procuramos 'validator configuration'  para a class de 'Course'... e nenhuma é encontrada, portanto o object é automaticamente válido....
//     return true;
//   }

//   let isValid = true; //garante que todos nossos fields de 'input' SÃO VERIFICADOS..
//   for (const prop in objectValidatorConfig) {
//     for (const validator of objectValidatorConfig[prop]) { //vai ser sempre 1 array, mesmo nós tendo, hipotéticamente, 1 único 'validator' adicionado..

//       console.log(obj[prop]);
//       switch (validator) { ///essa é a lógica de validate em si...
//         case 'required':
//           isValid = isValid && !!obj[prop]; //vai retornar/converter esse valor em 'true' ou 'false'... --> queremos retornar TRUE se a propriedade tiver um valor 'non empty'... --> e podemos fazer isso por meio do 'double bang operator' do javascript... --> double bang operator converte isso em um 'REAL BOOLEAN VALUE'(true ou false)....
//           break;
//           case 'positive':
//          isValid = isValid && obj[prop] > 0;
//          break;
//          case 'minLength5':
//              console.log(obj[prop]);
//              isValid = isValid && obj[prop].length >= 5; //não está funcionando...
//          break;
//       }
//     }
//   }

//   return isValid
// }





////professor também vai querer definir essa class genérica como ABSTRACT CLASS..
//-------> ABSTRACT CLASS- --> ISSO PQ ELE _ NUNCA VAI QUERER QUE AS PESSOAS A INSTANCIEM __ DIRETAMENTE__ (e sim  apenas a utilizem com 'inherit' em outras classes)
///a keyword 'abstract' BLOQUEIA AS TENTATIVAS DE INSTANTIATE DESSA NOSSA CLASS....
abstract class Component<T extends HTMLElement, U extends HTMLElement> { ////class genérica ('T', 'U') que será inherittada por nossas 'interface classes' (como 'ProjectInput' e 'ProjectList')....

    
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;



  constructor(templateId: string, 
    hostElementId: string, 
    insertPosition: 'afterbegin' | 'beforeend',
    newElementId?: string) {  ///OBS::: OPTIONAL PARAMETERS (que podem ser omitidos) SEMPRE DEVEM VIR POR ÚLTIMO, DEPOIS DE TODOS SEUS PARAMETERS 'não opcionais'...


    // this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
    // this.hostElement = document.getElementById('app')! as HTMLDivElement;


    //esse código genérico de 'GET/SELECT AN ELEMENt' vai funcionar com todas as classes 'interface/ui' que inheritarem essa nossa class genérica de 'Component'....
    
    this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;  
    this.hostElement = document.getElementById(hostElementId)! as T; ///trocamos 'as HTMLDivElement' por 'as T'...

        

    //// esse código de 'conversão de template em elementos html de verdade' vai funcionar com todas as classes 'interface/ui' que inheritarem essa nossa class genérica de 'Component'....
      const importedNode = document.importNode(   
        this.templateElement.content,
          true
          ); 
      this.element = importedNode.firstElementChild as U;
        // this.element.id = 'user-input';

        if(newElementId) { ////minha ideia.... --> pq esse 'newElementId' é OPCIONAL... ('newElementId?'..)...
          this.element.id = newElementId;
        }


        this.attach(insertPosition);
     
  }


  private attach(insertPosition: 'afterbegin' | 'beforeend') {

    this.hostElement.insertAdjacentElement(insertPosition, this.element);
  }

  abstract configure(): void ///definimos esses methods como 'abstract', pq __ QUEREMOS _ QUE SUA 'CONCRETE IMPLEMENTATION' só vai acontecer nas CLASSES QUE HERDAREM ESSA NOSSA CLASS ABSTRATA (código/lógica de method específico à cada class que inherita)...

 abstract renderContent?(): void


  


// ---------> A UTILIDADE DE 'ABSTRACT METHODS'
// É 
// QUE 
// CLASSES  
// QUE INHERITAREM 
// 'Component'
// ,
// ESSA NOSSA 'ABSTRACT CLASS',
// _ SEMPRE_ SERÃO FORÇADOS _ A CODAR SUA PRÓPRIA VERSÃO DE 
// 'configure' e 
// 'renderContent'...





// --> se olharem nosso código,
// saberão 
// QUE 
// ESSA CLASS DE 'Component'
// FAZ 
// O 
// 'GENERAL RENDERING/ATTACHMENT DO COMPONENT',
// MAS __ QUE __ 'THE CONCRETE CONTENT AND CONFIGURATION' PRECISA __ ACONTECER NO LOCAL EM QUE INHERITAMOS ESSA CLASS....





}





// type Listener = (projects: Project[]) => void; //retorna nada.... ////usávamos esse type quando SÓ TÍNHAMOS A CLASS DE 'ProjectState' (como adicionamos aquela BASE CLASS/generic class de 'State', para ser INHERITTADA POR TODO TIPO DE CLASS QUE FAZ MANAGE DE STATE, e não só MANAGE DE PROJECT STATE, fomos obrigados a REFORMULAR ESSE TYPE de 'Listener', para que ACEITASSE QUALQQUER, any, tipo de coisa, e nõa só objects de tipo 'Project')...

// type Listener = (items: any[]) => void; //// VAMOS QUERER QUE NOSSO LISTENER TRABALHE COM QUALQUER TIPO DE OBJECT, e não só de type 'Project'... --> por isso o uso de um GENERIC TYPE, em vez de um 'Project'...


type Listener<T> = (items: T[]) => void; ////type GENÉRICO...




class State<T> { ///será uma 'BASE CLASS' (E generica, <T>) para todos nossos tipos de 'State classes' (classes que fazem MANAGE DE STATE).... --> vamos ter uma base class JUSTAMENTE PQ PODEMOS TER 'state' PARA UM MONTAO DE DIFERENTES COISAS NO NOSSO APP (como shop cart, projects, user login status, etc etc)....


  // private listeners: Listener<T>[] = []; //forward do 'T' generico em 'State'...
  
 protected listeners: Listener<T>[] = [];  ///usamos 'protected' pq queremos que essa propriedade seja usada nas INHERITING CLASSES... (como em 'ProjectState'...)

  addListener(listenerFunction: Listener<T>) { //forward do 'T' em 'State'...
    this.listeners.push(listenerFunction);
  }
  
// --> deixamos 'STATE' generico com '<T>'


// do lado do nome...

// --> AÍ EM 'private listeners: Listener[] = []',


// EM QUE 

// DIZEMOS '''QUEREMOS TER UMA LISTA DE LISTENERS''',
// TEMOS QUE DIZER AO

// TYPESCRIPT '''QUAL GENERIC TYPE OS LISTENERS USARÃO/USAM PARA __ ESSE 
// OBJECT DE STATE QUE ESTAMOS CRIANDO'''...



}








////CLASS DE PROJECT STATE MANAGEMENT (vamos imitar o react, na verdade)....

///ex:

// class ProjectState {  ////sem inherit


  class ProjectState extends State<Project> { 
  ///approach parecido com o REACT (state management, global state objecT)....

  // private projects: any[] = [];


  private projects: Project[] = []; ///o type será nossa CLASS DE 'Project', em 1 array desse tipo de object...

  private static instance: ProjectState; //EIS O CÓDIGO EM QUESTÃO. SINGLETON PATTERN...

  // private listeners: any[] = []; //também usado com o SINGLETON...

  // private listeners: Listener[] = []; ///TRANSPLANTADO/agora inheritado por esse 'ProjectState', por conta de 'State'...



  private constructor() {
    //vamos querer que esse constructor seja 'private' por causa do SINGLETON PATTERN (queremos que SÓ POSSA SER CRIADO 1 OBJECT, a partir dessa class, POR MEIO DE UM METHOD INTERNO A ESSA CLASS..)
  
    super()
  
  
  }

  addProject(title: string, description: string, numOfPeople: number) {
    // const newProject = {  /// usávamos isto antes de usar o approach da class de 'Project'
    //   title: title,
    //   description: description,
    //   people: numOfPeople,
    //   id: Math.random().toString(),
    // };

    const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);  ///////OU SEJA, id, title, description, people, ProjectStatus (enum de 0 e 1, active e finished)....

    this.projects.push(newProject);
    for (const listenerFunction of this.listeners) {

      console.log(this.projects.slice(), 'YOUR PROJECTS');
      listenerFunction(this.projects.slice()); //retorna uma CÓPIA DAQUELE ARRAY...
    }
  }

  // addListener(listenerFunction: Function) {
  //   addListener(listenerFunction: Listener) {
  //   this.listeners.push(listenerFunction);
  // }

  static getInstance() {
    ///ESSE METHOD TBM FAZ PARTE DO 'SINGLETON PATTERN' (apenas 1 object instanciado a uma class, E ESSE OBJECT SÓ PODE SER OBTIDO POR METHODS DEFINIDOS DENTRO DA CLASS EM SI)...

    if (this.instance) {
      return this.instance; /////VAI MANTER NOSSO 'OBJECT'/instance de nossa class __ INTACTA_.... (Sem mudança)...
    }

    this.instance = new ProjectState();
    return this.instance;
  }
}

// const projectState = new ProjectState(); /// não podemos instanciar diretamente, pq nosso constructor está como 'private'....

const projectState = ProjectState.getInstance();

// // ISSO SIGNIFICA QUE AGORA O 'COMMUNICATE' COM ESSE 'STATE GLOBAL' SERÁ MT FÁCIL,

// PQ TEREMOS ESSA CONSTANTE GLOBAL, QUE PODE SER USADA EM QUALQUER LUGAR DO ARQUIVO...

// (
//     para falar com

//     essa class de 'ProjectState',

//     será super simples, basta você MENCIONAR ESSA CONSTANTE de 'projectState'...

// )
// ------> OK... NÓS PODEMOS ATÉ MESMO USAR UMA __ FEATURE__ QUE

// APRENDEMOS

// ANTERIORMENTE,

// BEM COMPLEXA... --> É A FEATURE DE

// 'GARANTIR QUE SUA CLASS TEM UM __ PRIVATE__ CONSTRUCTOR' (singleton),

// ____ PARA __ QUE _ _SEJA___ _____ GARANTIDO__  QUE __ ESSA CLASS '''DEVERÁ TER APENAS 1

// OBJECT INSTANCIADO A PARTIR DELA'''....

interface Validatable {
  ////objeto usado para o validation, lá na function de 'validate()', executada lá no 'submitHandler()'....

  value: string | number; //é o 'actual value' de um determinado field.
  // inputField: string;

  required?: boolean; ///são as 'validation properties' de um determinado field (pq um field NÃO PRECISA TER TODAS EM SI... alguns fields podem ter só 'minLength', outros só 'min' com 'required', etc etc..)
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

// function validate(configObj: Validatable): boolean { ///minha versão do ´codigo...

//     switch(configObj.inputField) {

//     case 'title':
//     if (configObj.required && typeof configObj.value === 'string') {
//         return true;
//     }
//     return false;
//     break;
//     case 'description':
//         if (configObj.required && typeof configObj.value === 'string' && configObj.minLength >= 5) {
//             return true;
//         }

//     }

// }

function validate(validatableInput: Validatable): boolean {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim() !== ''; ////talvez esta expressão seja válida como a de baixo, também...
    // isValid = isValid && validatableInput.value.trim().length !== 0; ///esta expressão foi a adotada pelo professor....
  }

  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    //// OBS::: QUANDO ESCREVEMOS  '!= null',  ESTAMOS  DIZENDO 'NÃO DEVE SER IGUAL TANTO A UNDEFINED, COMO NULL'... (engloba undefined e null em uma mesma categoria)... --> colocamos esse check aí APENAS PARA SER EXTRA SAFE, PARA QUE o pass de '0' como minLength não bugue todo nosso código (para que não seja considerado como falsy)..

    ///será SKIPPADO esse check se for constatado que esse 'value' NÃO É UMA STRING... (é um nubmer)...
    ////deverá ser de type STRING, e deverá SER MAIOR OU IGUAL A 5...
    isValid =
      isValid &&
      validatableInput.value.toString().length > validatableInput.minLength; ////check de MINIMUM LENGTH.
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid &&
      validatableInput.value.toString().length < validatableInput.maxLength; ////check de MINIMUM LENGTH.
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value < validatableInput.max;
  }

  return isValid;
}

//   interface Project {
//     title: string;
//     description: string;
//     people: number;

//   }

//   const projects: Project[] = [];

class ProjectList 

extends Component<HTMLDivElement, HTMLElement>  ///agora vamos fazer 'inherit' dessa base class ABSTRATA, que tem várias das coisas necessárias (E reutilizadas) a essa nossa 'child class'...
implements DragTarget ///vamos querer formar um CONTRATO COM ESSA INTERFACE AÍ.... -> e aí vamos precisar definir os methods de 'dragOverHandler', dropHandler' e 'dragLeaveHandler'.... --> methods do cOMPORTAMENTO DRAG AND DROP...

{ 
 
 
 
  // templateElement: HTMLTemplateElement; ///isso agora existe na nossa 'BASE CLASS' (class abstrata de 'Component')....
  // hostElement: HTMLDivElement;
  // element: HTMLElement;
  // assignedProjects: any[] = [];
  assignedProjects: Project[] = [];

  constructor(private listType: 'active' | 'finished') {
    ///vamos alimentar nossa class, no momento de sua instanciação, com A INFO __ DE QUAL ___ PROJECTLIST QUEREMOS CRIAR (active/finished projectList)...
    
    
    super('project-list', 'app', 'beforeend', `${listType}-projects`);
    
    // this.templateElement = document.getElementById( //isso passa a ser feito no constructor de 'Component'...
    //   'project-list'
    // ) as HTMLTemplateElement;
    // this.hostElement = document.getElementById('app') as HTMLDivElement; ///isso passa a ser feito no constructor de 'Component'...
    this.assignedProjects = [];
    // const importedNode = document.importNode( ///isso passa a ser feito no constructor de 'Component'...
    //   this.templateElement.content,
    //   true
    // );

    // this.element = importedNode.firstElementChild as HTMLElement; //// isso passa a ser feito no constructor de 'Component'...
    // this.element.id = `${this.listType}-projects`; ///esse id vai ser dinâmico, id de styling, JUSTAMENTE PQ TEREMOS 2 LISTS, UMA DE 'FINISHED PROJECTS' e outra de 'active'... --> ou aactive, ou finished...
     //// ^^^^isso passa a ser feito no constructor de 'Component'...



  //   projectState.addListener((projects: Project[]) => { ///tranpslantado para DENTRO DE 'configure()', este nosso method...

  //     const relevantProjects =  projects.filter(
  // (project) => { //sim, aparentemente é possível escrever IF STATEMENTS DENTRO DE 'filter'...


  //   if(this.listType === 'finished') { 
  //       return project.projectStatus === ProjectStatus.Finished;
  //   } else {
  //           return project.projectStatus === ProjectStatus.Active
  //   }
  //       }
  //   );

  //     // this.assignedProjects = projects; ///sem diferenciação entre 'active' e 'finished'
  //     // this.attach(); //agora isso vai acontecer na nossa BASE CLASs..
  //     this.assignedProjects = relevantProjects ////com diferenciação....
  //     this.renderProjects();
  //   });


    this.configure();

    this.renderContent(); ///settar o conteúdo dessa list _ DEPOIS__ DE ELA__ TER SIDO ANEXADA AO DOM, com 'attach()'...
  }

  // private attach() {
  //   this.hostElement.insertAdjacentElement('beforeend', this.element);
  // }

private renderProjects() {
    const listEl = document.getElementById(`${this.listType}-projects-list`)! as HTMLUListElement;

    // const listEl = document.getElementById(`${this.listType}-projects-list`)! as HTMLUListElement;

    // console.log(listEl);
    listEl.innerHTML = '';

    // listEl.innerHTML = ''; ///LIMPAMOS O código html (e todos os LIST items da list), ISSO PQ __ O CÓDIGO LOGO ABAIXO, DO FOR OF LOOP, vai readicionar esses list items/re-renderizá-los, mas com o novo list item já adicionado...

    for (const project of this.assignedProjects) {
      console.log(project);
      console.log(this.assignedProjects);
      /// vai efetivamente renderizar nossos 'list item' na nossa ul (append)...

        console.log('TEST');

        // const listItem = document.createElement('li');
        // listItem.textContent = project.title;

        // const projectItem = new ProjectItem(project.title, project.description, project.people, project.id, this.listType); /// MINHA VERSÃO DO CÓDIGO.... sem inherit de 'Component' (Base class)....

        const projectItem = new ProjectItem(`${this.listType}-projects-list`, project) ///versõa do professor, com inherit de 'Component' (Base class)....
        // listEl.appendChild(listItem);

      
    }
  }


   configure() {
    projectState.addListener((projects: Project[]) => { ///tranpslantado para DENTRO DE 'configure()', este nosso method que ADICIONA UM LISTENER..

      const relevantProjects =  projects.filter(
  (project) => { //sim, aparentemente é possível escrever IF STATEMENTS DENTRO DE 'filter'...

    // this.element.querySelector('ul')!.addEventListener('dragstart', this.dragOverHandler);

    if(this.listType === 'finished') { 
      this.element.querySelector('ul')!.addEventListener('dragenter', this.dragOverHandler);
      this.element.querySelector('ul')!.addEventListener('dragleave', this.dragLeaveHandler);
        return project.projectStatus === ProjectStatus.Finished;
  
    } else {
      this.element.querySelector('ul')!.addEventListener('dragstart', this.dragOverHandler);
      this.element.querySelector('ul')!.addEventListener('dragend', this.dragLeaveHandler);
            return project.projectStatus === ProjectStatus.Active
    }
        }
    );

      // this.assignedProjects = projects; ///sem diferenciação entre 'active' e 'finished'
      // this.attach(); //agora isso vai acontecer na nossa BASE CLASs..
      this.assignedProjects = relevantProjects ////com diferenciação....
      this.renderProjects();
    });


  }

   renderContent() {
    ///usado para PREENCHER O CONTEÚDO DE 'h2' e tals, dentro do TEMPLATE de 'list'... (naquela section, dentro de seu heaeder)....

    const listId = `${this.listType}-projects-list`;

    console.log(listId);

    this.element.querySelector('ul')!.id = listId; //vai adicionar esse 'id' a nossa UNORDERED LIST no template de 'project-list'....

    this.element.querySelector(
      'h2'
    )!.textContent = `${this.listType.toUpperCase()} PROJECTS`;
  }




  @Autobind
  dragOverHandler(event: DragEvent): void {
    console.log(this.element);
      this.element.querySelector('ul')!.className = 'droppable';
  }



  dropHandler(event: DragEvent): void {
      
  }


  @Autobind
  dragLeaveHandler(event: DragEvent): void {
    console.log('TEST');
    this.element.querySelector('ul')!.className = '';
  }


}


class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> { ///extend de nossa class genérica abstrata....
  /////resumo desta class:

  ///a ideia é ter A 'SELECTION AND ROUGH SETUP' lá no constructor... já A 'ACTUAL INSERTING AND FINE-TUNING' será feita LÁ NOS METHODS, PARTICULARMENTE NO NOSSO METHOD de 'configure()', que será usado PARA ___ INSERIR UM 'eventListener' NA FORM CRIADA POR NÓS....

  // templateElement: HTMLTemplateElement; ///eis o código em questão. Vai consertar o aviso de 'isso não existe no type 'ProjectInput'...

  // hostElement: HTMLDivElement;
  // element: HTMLFormElement; //EIS O CÓDIGO EM QUESTÃO.

  titleInputElement: HTMLInputElement; ///INPUT FIELDS DA FORM...
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {






    super('project-input', 'app', 'afterbegin', 'user-input');
    ///'SELECTION AND ROUGH SETUP of our element in the dom'....

    ////esse código agora será todo feito lá na base class de 'Component'.... (no constructor)...
    // const templateEl =  document.getElementById('project-input'); ///sintaxe alternativa ao uso de '!' naquele valor de 'this.templateElement'...
    // if(templateEl) {
    //     this.templateElement = templateEl;
    // }

    // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!; ////SINTAXE ALTERNATIVA.
    // this.templateElement = document.getElementById(
    //   'project-input'
    // ) as HTMLTemplateElement;
    // this.hostElement = document.getElementById('app') as HTMLDivElement;

    //// o type desse 'importedNOde' será de 'DocumentFragment'... --> inferido pelo typescript automaticamnete....
    // const importedNode = document.importNode( 
    //   this.templateElement.content,  ////'content' É UMA PROPRIEDADE QUE SEMPRE EXISTE EM ELEMENTOS DE TIPO 'HTMLTemplateElement'... --> ela simplesmente DÁ UMA REFERENCE AO __cONTEÚDO__ DE UM TEMPLATE (código html ENTRE AS TAGS '<template>'..)...
    //   true
    // ); 
  
    ///primeiro parâmetro DEVE SER UM POINTER AO CONTEÚDO DO SEU TEMPLATE EM QUESTÃO...
    ///segundo parâmetro deve ser true/false, dependendo DE SUAS INTENÇÕES: SE VOCê PLANEJA CRIAR UM DEEP CLONE (com as nested coisas todas intactas, no interior desse template), coloque 'true', caso contrário, defina 'false'....

    // this.element = importedNode.firstElementChild as HTMLFormElement;
    // this.element.id = 'user-input'; ///isso vai adicionar o STYLING DEFINIDO LÁ NO NOSSO 'app.css'... (pq esse HTMLFormElement NÃO VAI TER ESSE ID, out of the box)....
    
    
    // this.titleInputElement = this.element.querySelector( ///transplantado para dentro de 'configure()'...
    //   '#title'
    // ) as HTMLInputElement;
    // console.log(this.titleInputElement.value);
    // this.descriptionInputElement = this.element.querySelector(
    //   '#description'
    // ) as HTMLInputElement; //EIS O CÓDIGO EM QUESTÃO.
    // this.peopleInputElement = this.element.querySelector(
    //   '#people'
    // ) as HTMLInputElement;


    
    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    console.log(this.titleInputElement.value);
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement; //EIS O CÓDIGO EM QUESTÃO.
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;







    this.configure();
    // this.attach(); ///será feito lá no CONSTRUCTOR de 'Component' (base class)...
  }

  // private attach() {
  //   ///propriedade apenas capaz de ser acessada por EXECUÇÕES DENTRO DE NOSSA CLASS... (ou dentro do object) --> vocÊ só não pode usar A DOT NOTATION, no lado de fora, mesmo...
  //   this.hostElement.insertAdjacentElement('afterbegin', this.element);
  // }


  renderContent() {

  }

  configure() {
    this.element.addEventListener(     ///inserting and fine-tuning of the element  in our dom.... --> ///propriedade apenas capaz de ser acessada por EXECUÇÕES DENTRO DE NOSSA CLASS... (ou dentro do object) --> vocÊ só não pode usar A DOT NOTATION, no lado de fora, mesmo...
      'submit',
      //this.submitHandler.bind(this) //// --> esse código foi substituído POR NOSSO 'AUTOBIND DECORATOR', que é muito útil... (ver method de 'submitHandler')
      ///bind da 'this' keyword À class de 'ProjectInput', para evitar error....
      this.submitHandler
    );
  }






  @Autobind
  private submitHandler(event: Event) {
    ///vai ser usado no nosso eventListener, por isso esse parâmetro de 'event', de type 'Event'..  ---> ///propriedade apenas capaz de ser acessada por EXECUÇÕES DENTRO DE NOSSA CLASS... (ou dentro do object) --> vocÊ só não pode usar A DOT NOTATION, no lado de fora, mesmo...

    event.preventDefault();
    console.log(this.titleInputElement); // se chamamos 'solto' assim, com esse 'this', vamos conseguir __ 'UNDEFINED', resultando em um erro... .
    console.log(this.titleInputElement.value); /// --> para consertar esse comportamento, precismaos bindar a 'this' keyword a nossa class de 'ProjectInput'...
    const userInput = this.gatherUserInputs();
    if (Array.isArray(userInput)) {
      //se entrmaos nesse BLOCK, o valor recebido em 'userInput' realmente foi uma TUPLE, E NÃO 'undefined' (que é o valor recebido quando a validatioN FALHA)...

      const [title, desc, people] = userInput; //vamos fazer algo com esse input aí, extraído por meio do array destructuring...

      console.log(title, desc, people, 'LINE');

      // const newProject = new Project(title, desc, people);

      // if(!validate(newProject)) {
      //     console.log(validate(newProject))
      //     alert('Invalid input, please try again');
      //     this.clearInputs
      //     return;
      // }

      // projects.push(newProject);
      // console.log(projects, 'TYPE');

      // const newProjectList = new ProjectList('active');
      projectState.addProject(title, desc, people);

      // const projectState = new ProjectState(); //singleton PATTERN  e 'private constructor'...
      this.clearInputs();
    }

    this.clearInputs();
  }





  private gatherUserInputs(): [string, string, number] | void {
    ///SINTAXE DE 'RETURN TYPE' __ TUPLES (tuples como RETURN TYPE)... --> o return type aqui OBRIGATORIAMENTE SERÁ os valores dos nossos 3 'main inputs', que são TITLE, DESCRIPTION E PEOPLE..

    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = +this.peopleInputElement.value;

    // if (enteredTitle.trim().length === 0 ||
    // enteredDescription.trim().length === 0 ||
    // enteredPeople.trim().length === 0) {

    //     alert('Invalid input, please try again.');
    //     return;

    // } else {
    //     return [enteredTitle, enteredDescription, +enteredPeople]
    // }

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
      minLength: 5, ///lógica de validation, etc....
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 10,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again.');
      console.log('TEST');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }
}

// class Project {

//     // @Required
//     @MinLength5
//     title: string;

//     // @Required
//     @MinLength5
//     description: string;

//     @PositiveNumber
//     people: number;

//     constructor(title: string, description: string, people: number) {
//         this.title = title;
//         this.description = description;
//         this.people = people;
//     }

// }




class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>  ///até nossos projectItem vao usar a 'base-class' de 'Component' como BASE, pq __ eles também são 'parte da UI'...


implements Draggable  {   ///COM 'implements', FORMAMOS UM CONTRATO COM ESSA INTERFACE DE 'Draggable'... (contrato entre a class 'ProjectItem' e essa interface... somos obrigados a ter os methods dessa interface)

  // constructor(public title: string, public description: string, public people: number, public id: string, private listType: string) { //CÓDIGO DE MINHA AUTORIA, MINHA VERSÃO (não usava/inheritava a class de 'Component')....



    // console.log('YOURLISTITEM')
    // const listEl = document.getElementById(`${this.listType}-projects-list`)! as HTMLUListElement;
    // // listEl.innerHTML = ''; ///LIMPAMOS O código html (e todos os LIST items da list), ISSO PQ __ O CÓDIGO LOGO ABAIXO, DO FOR OF LOOP, vai readicionar esses list items/re-renderizá-los, mas com o novo list item já adicionado...
    //         const listItem = document.createElement('li');
    //     listItem.innerHTML = `
    //     <h1>${this.title}</h1>
    //     <p>${this.description}</p>
    //     <p>${this.people}</p>
    //     `

      
    //     listEl.appendChild(listItem);




  // }


  private project: Project /////type de 'Project', type QUE NÓS MESMOS CRÍAMOS...







///OBS: GETTERS GERALMENTE SÃO POSICIONADOS LOGO ABAIXO DAS SUAS 'properties/fields'...

  get persons() { ///getter para RETORNAR UM VALOR FORMATADO ADEQUADAMENTE DE 'persons' (one person assigned, two persons assigned, etc)....


    if (this.project.people === 1) {

      return 'One Person Assigned'

    } else {

      return `${this.project.people} Persons Assigned`
    }

  }





















  constructor(hostId: string, project: Project ) {






    super(//////////////// templateId: string, hostElementId: string, insertPosition: "afterbegin" | "beforeend", newElementId?: string | undefined

      'single-project' ///checar 'index.html', na parte em que existe nosso template com id de 'single-project' (template que é um template de APENAS 1 '<li>'...)
      ,
      hostId,  ////local em que QUEREMOS QUE SEJA RENDERIZADO NOSSO 'PROJECTITEM' (em qual list, para ser mais exato)....,
      'beforeend', //queremos que o elemento seja posicionado AO FINAL DA LIST...

      project.id ///repasse daquele parâmetro ali, no CONSTRUCTOR, que receberemos DE FORA....
    );


    this.project = project;

    this.configure();
    this.renderContent();
  }





  configure() { ///define os listeners para o comportamento de 'drag and drop'...

    this.element.addEventListener('dragstart', this.dragStartHandler); ////obs::: para ativar O DRAG AND DROP, VOCÊ TAMBÉM PRECISA IR LÁ NO INDEX.HTML e colocar, no elemento que deve ser draggable, 'draggable= true' (no caso, será o element 'li' )....
    this.element.addEventListener('dragend', this.dragEndHandler)

  }



  renderContent() {

    const { title, description, people } = this.project;


    const projectItemTitle = this.element.querySelector('#title')!;
    const projectItemPeople = this.element.querySelector('#people')! as HTMLElement;
    const projectItemDescription = this.element.querySelector('#description') as HTMLParagraphElement;



    projectItemTitle.textContent = title;
    // projectItemPeople.textContent = people.toString(); ////sem uso de GETTER...
    projectItemPeople.textContent = this.persons; ///COM uso de GETTER...

    console.log(projectItemPeople.textContent);
    projectItemDescription.textContent = description;
    

  }




  @Autobind ////conserta o comportamento de 'this' no nosso LISTENER em 'configure()'... (exatamente como fizemos com 'submitHandler')....
  dragStartHandler(event: DragEvent): void { ////isso por si só não vai fazer 'listen to a drag event'... --> precisamos do method de 'configure()' para isso...
      
      console.log(event); ///só para ver esse event de 'dragstart'....
  }




  @Autobind
  dragEndHandler(event: DragEvent): void {
      console.log('DragEnd')
  }






}












const projectInput = new ProjectInput(); /// É ISTO QUE vai fazer toda a diferneça (pq nós temos 'this.attach() ).

const activeProjectList = new ProjectList('active'); ////render de nossas 2 project lists.
const finishedProjectList = new ProjectList('finished');
