
namespace App {

    

type Listener<T> = (items: T[]) => void; ////type GENÉRICO...




class State<T> { 
 protected listeners: Listener<T>[] = [];  ///usamos 'protected' pq queremos que essa propriedade seja usada nas INHERITING CLASSES... (como em 'ProjectState'...)

  addListener(listenerFunction: Listener<T>) { //forward do 'T' em 'State'...
    this.listeners.push(listenerFunction);
  }


}


export class ProjectState extends State<Project> {
  private projects: Project[] = []; ///o type será nossa CLASS DE 'Project', em 1 array desse tipo de object...

  private static instance: ProjectState; //EIS O CÓDIGO EM QUESTÃO. SINGLETON PATTERN...

  private constructor() {
    //vamos querer que esse constructor seja 'private' por causa do SINGLETON PATTERN (queremos que SÓ POSSA SER CRIADO 1 OBJECT, a partir dessa class, POR MEIO DE UM METHOD INTERNO A ESSA CLASS..)

    super();
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    ); ///////OU SEJA, id, title, description, people, ProjectStatus (enum de 0 e 1, active e finished)....

    this.projects.push(newProject);

    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    ///VERSÃO DO PROFESSOR...

    const projectToMove = this.projects.find((project) => {
      return project.id === projectId;
    });

    if (projectToMove && projectToMove.projectStatus) {
      projectToMove.projectStatus = newStatus; ///vai trocar a 'list' em que está o object...
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFunction of this.listeners) {
      listenerFunction(this.projects.slice());
    }
  }

  static getInstance() {
    if (this.instance) {
      return this.instance; /////VAI MANTER NOSSO 'OBJECT'/instance de nossa class __ INTACTA_.... (Sem mudança)...
    }

    this.instance = new ProjectState();
    return this.instance;
  }
}

export const projectState = ProjectState.getInstance();



 }
