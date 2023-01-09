

/////////////OBS::: A SINTAXE DE 'IMPORT' de namespaces é acessada com '///' (3 FORWARD SLASHES... isso não é um comment, e sim um import de namespace)...


///

///^^^^ SINTAXE DE IMPORT DE NAMESPACES...


// /<reference path="./decorators/autobind.ts"/> 
// /<reference path="./models/enums&ProjectClass.ts"/>
// /<reference path="./state/project-state.ts" />
// /<reference path="./util/validation.ts" />

// /<reference path="./components/project-item.ts" />
// /<reference path="./components/project-list.ts" />
// /<reference path="./components/project-input.ts" />


// /<reference path="./components/base-component.ts" />


///REMOVEMOS TUDO ISSO, AGORA USAMOS ES6 MODULES...




// enum ProjectStatus { ///usado para 'ECONOMIZAR CÓDIGO' (passamos 0 e 1 em vez daquelas strings ali)...
//   ActiFve, ///0
//   Finished ////1
// }



// class Project { 

//   constructor( 
//     public id: string, 
//     public title: string, 
//     public description: string, 
//     public people: number, 
//     public projectStatus: ProjectStatus 
//      ) {

//     }

// }





////autobind decorator...
// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   ///// USAREMOS NOS NOSSOS METHODS na nossa class...

//   const originalMethod = descriptor.value;

//   const adjustedDescriptor: PropertyDescriptor = {
//     configurable: true,
//     get() {
//       const boundFunction = originalMethod.bind(this);
//       return boundFunction;
//     },
//   };

//   return adjustedDescriptor;
// }






// abstract class Component<T extends HTMLElement, U extends HTMLElement> { ////class genérica ('T', 'U') que será inherittada por nossas 'interface classes' (como 'ProjectInput' e 'ProjectList')....

    
//   templateElement: HTMLTemplateElement;
//   hostElement: T;
//   element: U;



//   constructor(templateId: string, 
//     hostElementId: string, 
//     insertPosition: 'afterbegin' | 'beforeend',
//     newElementId?: string) {  
//     this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;  
//     this.hostElement = document.getElementById(hostElementId)! as T; ///trocamos 'as HTMLDivElement' por 'as T'...

        

//     //// esse código de 'conversão de template em elementos html de verdade' vai funcionar com todas as classes 'interface/ui' que inheritarem essa nossa class genérica de 'Component'....
//       const importedNode = document.importNode(   
//         this.templateElement.content,
//           true
//           ); 
//       this.element = importedNode.firstElementChild as U;
//         // this.element.id = 'user-input';

//         if(newElementId) { ////minha ideia.... --> pq esse 'newElementId' é OPCIONAL... ('newElementId?'..)...
//           this.element.id = newElementId;
//         }


//         this.attach(insertPosition);
     
//   }


//   private attach(insertPosition: 'afterbegin' | 'beforeend') {

//     this.hostElement.insertAdjacentElement(insertPosition, this.element);
//   }

//   abstract configure(): void ///definimos esses methods como 'abstract', pq __ QUEREMOS _ QUE SUA 'CONCRETE IMPLEMENTATION' só vai acontecer nas CLASSES QUE HERDAREM ESSA NOSSA CLASS ABSTRATA (código/lógica de method específico à cada class que inherita)...

//  abstract renderContent?(): void




// }




// type Listener<T> = (items: T[]) => void; ////type GENÉRICO...




// class State<T> { 
//  protected listeners: Listener<T>[] = [];  ///usamos 'protected' pq queremos que essa propriedade seja usada nas INHERITING CLASSES... (como em 'ProjectState'...)

//   addListener(listenerFunction: Listener<T>) { //forward do 'T' em 'State'...
//     this.listeners.push(listenerFunction);
//   }


// }










//   class ProjectState extends State<Project> { 


//   private projects: Project[] = []; ///o type será nossa CLASS DE 'Project', em 1 array desse tipo de object...

//   private static instance: ProjectState; //EIS O CÓDIGO EM QUESTÃO. SINGLETON PATTERN...



//   private constructor() {
//     //vamos querer que esse constructor seja 'private' por causa do SINGLETON PATTERN (queremos que SÓ POSSA SER CRIADO 1 OBJECT, a partir dessa class, POR MEIO DE UM METHOD INTERNO A ESSA CLASS..)
  
//     super()
  
  
//   }

//   addProject(title: string, description: string, numOfPeople: number) {


//     const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);  ///////OU SEJA, id, title, description, people, ProjectStatus (enum de 0 e 1, active e finished)....

//     this.projects.push(newProject);

//     this.updateListeners();

//   }




// moveProject(projectId: string, newStatus: ProjectStatus) {   ///VERSÃO DO PROFESSOR...
    

//   const projectToMove = this.projects.find(
//     (project) => {
//         return project.id === projectId
//     }
//   )

//   if(projectToMove && projectToMove.projectStatus) {
      
//     projectToMove.projectStatus = newStatus;  ///vai trocar a 'list' em que está o object...
//     this.updateListeners();
//       }
// }

// private updateListeners() {



//   for (const listenerFunction of this.listeners) {
//       listenerFunction(this.projects.slice());
//   }
// }



//   static getInstance() {

//     if (this.instance) {
//       return this.instance; /////VAI MANTER NOSSO 'OBJECT'/instance de nossa class __ INTACTA_.... (Sem mudança)...
//     }

//     this.instance = new ProjectState();
//     return this.instance;
//   }




// }


// const projectState = ProjectState.getInstance();


// interface Validatable {

//   value: string | number; //é o 'actual value' de um determinado field.
//   // inputField: string;

//   required?: boolean; ///são as 'validation properties' de um determinado field (pq um field NÃO PRECISA TER TODAS EM SI... alguns fields podem ter só 'minLength', outros só 'min' com 'required', etc etc..)
//   minLength?: number;
//   maxLength?: number;
//   min?: number;
//   max?: number;
// }



// function validate(validatableInput: Validatable): boolean {
//   let isValid = true;

//   if (validatableInput.required) {
//     isValid = isValid && validatableInput.value.toString().trim() !== ''; ////talvez esta expressão seja válida como a de baixo, também...
//     // isValid = isValid && validatableInput.value.trim().length !== 0; ///esta expressão foi a adotada pelo professor....
//   }

//   if (
//     validatableInput.minLength != null &&
//     typeof validatableInput.value === 'string'
//   ) {

//     isValid =
//       isValid &&
//       validatableInput.value.toString().length > validatableInput.minLength; ////check de MINIMUM LENGTH.
//   }

//   if (
//     validatableInput.maxLength != null &&
//     typeof validatableInput.value === 'string'
//   ) {
//     isValid =
//       isValid &&
//       validatableInput.value.toString().length < validatableInput.maxLength; ////check de MINIMUM LENGTH.
//   }

//   if (
//     validatableInput.min != null &&
//     typeof validatableInput.value === 'number'
//   ) {
//     isValid = isValid && validatableInput.value >= validatableInput.min;
//   }

//   if (
//     validatableInput.max != null &&
//     typeof validatableInput.value === 'number'
//   ) {
//     isValid = isValid && validatableInput.value < validatableInput.max;
//   }

//   return isValid;
// }



// class ProjectList 

// extends Component<HTMLDivElement, HTMLElement>  ///agora vamos fazer 'inherit' dessa base class ABSTRATA, que tem várias das coisas necessárias (E reutilizadas) a essa nossa 'child class'...
// implements DragTarget ///vamos querer formar um CONTRATO COM ESSA INTERFACE AÍ.... -> e aí vamos precisar definir os methods de 'dragOverHandler', dropHandler' e 'dragLeaveHandler'.... --> methods do cOMPORTAMENTO DRAG AND DROP...

// { 
 
 

//   assignedProjects: Project[] = [];

//   constructor(private listType: 'active' | 'finished') {

//     super('project-list', 'app', 'beforeend', `${listType}-projects`);
    
//     this.assignedProjects = [];


//     this.configure();

//     this.renderContent(); ///settar o conteúdo dessa list _ DEPOIS__ DE ELA__ TER SIDO ANEXADA AO DOM, com 'attach()'...
//   }


// private renderProjects() {
//     const listEl = document.getElementById(`${this.listType}-projects-list`)! as HTMLUListElement;


//     listEl.innerHTML = '';

//     for (const project of this.assignedProjects) {
//       console.log(project);
//       console.log(this.assignedProjects);
//         const projectItem = new ProjectItem(`${this.listType}-projects-list`, project) ///versõa do professor, com inherit de 'Component' (Base class)....
//         // listEl.appendChild(listItem);

      
//     }
//   }


//    configure() {



    
// this.element.addEventListener('dragover', this.dragOverHandler);  ////código do professor....
// this.element.addEventListener('dragleave', this.dragLeaveHandler);
// this.element.addEventListener('drop', this.dropHandler);


//     projectState.addListener((projects: Project[]) => { ///tranpslantado para DENTRO DE 'configure()', este nosso method que ADICIONA UM LISTENER..

//       const relevantProjects =  projects.filter(
//   (project) => { 
//     if(this.listType === 'finished') { 

//         return project.projectStatus === ProjectStatus.Finished;
  
//     } else {

//             return project.projectStatus === ProjectStatus.Active
//     }
//         }
//     );

//       this.assignedProjects = relevantProjects ////com diferenciação....
//       this.renderProjects();
//     });


//   }

//    renderContent() {
//     ///usado para PREENCHER O CONTEÚDO DE 'h2' e tals, dentro do TEMPLATE de 'list'... (naquela section, dentro de seu heaeder)....

//     const listId = `${this.listType}-projects-list`;

//     console.log(listId);

//     this.element.querySelector('ul')!.id = listId; //vai adicionar esse 'id' a nossa UNORDERED LIST no template de 'project-list'....

//     this.element.querySelector(
//       'h2'
//     )!.textContent = `${this.listType.toUpperCase()} PROJECTS`;
//   }



  
// @Autobind 
// dragOverHandler(event: DragEvent):  void  {  ////VERSÃO DO PROFESSOR.
  
//   if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {

//     event.preventDefault();
//     const listEl = this.element.querySelector('ul')!;
//     listEl.classList.add('droppable');
// }

// }



//   @Autobind
//   dropHandler(event: DragEvent): void {
//     const projectId = event.dataTransfer!.getData('text/plain');
//       console.log(event.dataTransfer!.getData('text/plain'));
//   projectState.moveProject(projectId, this.listType === 'active' ? ProjectStatus.Active : ProjectStatus.Finished )
//   }





//   @Autobind
//   dragLeaveHandler(event: DragEvent): void {
//     const listEl = this.element.querySelector('ul')!;
//     listEl.classList.remove('droppable');
//   }

// }


// class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {

//   titleInputElement: HTMLInputElement; ///INPUT FIELDS DA FORM...
//   descriptionInputElement: HTMLInputElement;
//   peopleInputElement: HTMLInputElement;

//   constructor() {






//     super('project-input', 'app', 'afterbegin', 'user-input');

    
//     this.titleInputElement = this.element.querySelector(
//       '#title'
//     ) as HTMLInputElement;
//     console.log(this.titleInputElement.value);
//     this.descriptionInputElement = this.element.querySelector(
//       '#description'
//     ) as HTMLInputElement; //EIS O CÓDIGO EM QUESTÃO.
//     this.peopleInputElement = this.element.querySelector(
//       '#people'
//     ) as HTMLInputElement;







//     this.configure();
//   }



//   renderContent() {

//   }

//   configure() {
//     this.element.addEventListener(     
//       'submit',
    
//       this.submitHandler
//     );
//   }






//   @Autobind
//   private submitHandler(event: Event) {
//     ///vai ser usado no nosso eventListener, por isso esse parâmetro de 'event', de type 'Event'..  ---> ///propriedade apenas capaz de ser acessada por EXECUÇÕES DENTRO DE NOSSA CLASS... (ou dentro do object) --> vocÊ só não pode usar A DOT NOTATION, no lado de fora, mesmo...

//     event.preventDefault();
//     console.log(this.titleInputElement); // se chamamos 'solto' assim, com esse 'this', vamos conseguir __ 'UNDEFINED', resultando em um erro... .
//     console.log(this.titleInputElement.value); /// --> para consertar esse comportamento, precismaos bindar a 'this' keyword a nossa class de 'ProjectInput'...
//     const userInput = this.gatherUserInputs();
//     if (Array.isArray(userInput)) {
 
//       const [title, desc, people] = userInput; //vamos fazer algo com esse input aí, extraído por meio do array destructuring...

//       console.log(title, desc, people, 'LINE');
//       projectState.addProject(title, desc, people);

//       // const projectState = new ProjectState(); //singleton PATTERN  e 'private constructor'...
//       this.clearInputs();
//     }

//     this.clearInputs();
//   }





//   private gatherUserInputs(): [string, string, number] | void {

//     const enteredTitle = this.titleInputElement.value;
//     const enteredDescription = this.descriptionInputElement.value;
//     const enteredPeople = +this.peopleInputElement.value;



//     const titleValidatable: Validatable = {
//       value: enteredTitle,
//       required: true,
//       minLength: 5, ///lógica de validation, etc....
//     };

//     const descriptionValidatable: Validatable = {
//       value: enteredDescription,
//       required: true,
//       minLength: 5,
//     };

//     const peopleValidatable: Validatable = {
//       value: enteredPeople,
//       required: true,
//       min: 1,
//       max: 10,
//     };

//     if (
//       !validate(titleValidatable) ||
//       !validate(descriptionValidatable) ||
//       !validate(peopleValidatable)
//     ) {
//       alert('Invalid input, please try again.');
//       console.log('TEST');
//       return;
//     } else {
//       return [enteredTitle, enteredDescription, +enteredPeople];
//     }
//   }

//   private clearInputs() {
//     this.titleInputElement.value = '';
//     this.descriptionInputElement.value = '';
//     this.peopleInputElement.value = '';
//   }
// }





// class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>  ///até nossos projectItem vao usar a 'base-class' de 'Component' como BASE, pq __ eles também são 'parte da UI'...


// implements Draggable  {   

//   private project: Project /////type de 'Project', type QUE NÓS MESMOS CRÍAMOS...








//   get persons() { ///getter para RETORNAR UM VALOR FORMATADO ADEQUADAMENTE DE 'persons' (one person assigned, two persons assigned, etc)....


//     if (this.project.people === 1) {

//       return 'One Person Assigned'

//     } else {

//       return `${this.project.people} Persons Assigned`
//     }

//   }





















//   constructor(hostId: string, project: Project ) {






//     super(//////////////// templateId: string, hostElementId: string, insertPosition: "afterbegin" | "beforeend", newElementId?: string | undefined

//       'single-project' ///checar 'index.html', na parte em que existe nosso template com id de 'single-project' (template que é um template de APENAS 1 '<li>'...)
//       ,
//       hostId,  ////local em que QUEREMOS QUE SEJA RENDERIZADO NOSSO 'PROJECTITEM' (em qual list, para ser mais exato)....,
//       'beforeend', //queremos que o elemento seja posicionado AO FINAL DA LIST...

//       project.id ///repasse daquele parâmetro ali, no CONSTRUCTOR, que receberemos DE FORA....
//     );


//     this.project = project;

//     this.configure();
//     this.renderContent();
//   }





//   configure() { ///define os listeners para o comportamento de 'drag and drop'...

//     this.element.addEventListener('dragstart', this.dragStartHandler); ////obs::: para ativar O DRAG AND DROP, VOCÊ TAMBÉM PRECISA IR LÁ NO INDEX.HTML e colocar, no elemento que deve ser draggable, 'draggable= true' (no caso, será o element 'li' )....
//     this.element.addEventListener('dragend', this.dragEndHandler)

//   }



//   renderContent() {

//     const { title, description, people } = this.project;


//     const projectItemTitle = this.element.querySelector('#title')!;
//     const projectItemPeople = this.element.querySelector('#people')! as HTMLElement;
//     const projectItemDescription = this.element.querySelector('#description') as HTMLParagraphElement;



//     projectItemTitle.textContent = title;
//     // projectItemPeople.textContent = people.toString(); ////sem uso de GETTER...
//     projectItemPeople.textContent = this.persons; ///COM uso de GETTER...

//     console.log(projectItemPeople.textContent);
//     projectItemDescription.textContent = description;
    

//   }




//   @Autobind ////conserta o comportamento de 'this' no nosso LISTENER em 'configure()'... (exatamente como fizemos com 'submitHandler')....
//   dragStartHandler(event: DragEvent): void { ////isso por si só não vai fazer 'listen to a drag event'... --> precisamos do method de 'configure()' para isso...
//     event.dataTransfer!.setData('text/plain', this.project.id); ////anexamos apenas uma STRING COM UM ID, e não o object em si, pq ISSO JÁ SERÁ SUFICIENTE PARA, MAIS TARDE, fetchear esse determinado object 'ProjectItem' lá do state de nosso app de projects....
//      //com isso, anexamos data AO DRAGEVENT... (para uqe depois essa data SEJA EXTRAÍDA, quando realizarmos o 'drop event' desse element)...
    
//      event.dataTransfer!.effectAllowed = 'move';   ////ISSO BASICAMENTE __ CONTROLA __ COMO O CURSOR DEVE SE PARECER, QUAL DEVE SER SUA APARÊNCIA DURANTE O DRAG-AND-DROP
//     ////--> ISSO DIZ AO BROWSER 1 POUCO DE NOSSAS INTENCOES ( diz que queremos mover o cursor de 'A' para 'B', etc etc... )
    
    
    
    
//     // console.log(event); ///só para ver esse event de 'dragstart'....
//   }




//   @Autobind
//   dragEndHandler(event: DragEvent): void {
//       console.log('DragEnd')
//   }






// }



    
import { ProjectInput } from "./components/project-input";

import { ProjectList } from "./components/project-list";




const projectInput = new ProjectInput(); /// É ISTO QUE vai fazer toda a diferneça (pq nós temos 'this.attach() ).

const activeProjectList = new ProjectList('active'); ////render de nossas 2 project lists.
const finishedProjectList = new ProjectList('finished');

