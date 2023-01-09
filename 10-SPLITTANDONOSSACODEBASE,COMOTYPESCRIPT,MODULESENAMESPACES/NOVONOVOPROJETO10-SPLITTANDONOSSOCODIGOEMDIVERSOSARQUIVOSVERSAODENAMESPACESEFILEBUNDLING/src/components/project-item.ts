///<reference path="./base-component.ts" />
///<reference path="../decorators/autobind.ts"/>
///<reference path="../models/enums&ProjectClass.ts"/>
///<reference path="../components/project-list.ts"/>



namespace App {

export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  ///até nossos projectItem vao usar a 'base-class' de 'Component' como BASE, pq __ eles também são 'parte da UI'...
  implements Draggable
{
  private project: Project; /////type de 'Project', type QUE NÓS MESMOS CRÍAMOS...

  get persons() {
    ///getter para RETORNAR UM VALOR FORMATADO ADEQUADAMENTE DE 'persons' (one person assigned, two persons assigned, etc)....

    if (this.project.people === 1) {
      return "One Person Assigned";
    } else {
      return `${this.project.people} Persons Assigned`;
    }
  }

  constructor(hostId: string, project: Project) {
    super(
      //////////////// templateId: string, hostElementId: string, insertPosition: "afterbegin" | "beforeend", newElementId?: string | undefined

      "single-project", ///checar 'index.html', na parte em que existe nosso template com id de 'single-project' (template que é um template de APENAS 1 '<li>'...)
      hostId, ////local em que QUEREMOS QUE SEJA RENDERIZADO NOSSO 'PROJECTITEM' (em qual list, para ser mais exato)....,
      "beforeend", //queremos que o elemento seja posicionado AO FINAL DA LIST...

      project.id ///repasse daquele parâmetro ali, no CONSTRUCTOR, que receberemos DE FORA....
    );

    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure() {
    ///define os listeners para o comportamento de 'drag and drop'...

    this.element.addEventListener("dragstart", this.dragStartHandler); ////obs::: para ativar O DRAG AND DROP, VOCÊ TAMBÉM PRECISA IR LÁ NO INDEX.HTML e colocar, no elemento que deve ser draggable, 'draggable= true' (no caso, será o element 'li' )....
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent() {
    const { title, description, people } = this.project;

    const projectItemTitle = this.element.querySelector("#title")!;
    const projectItemPeople = this.element.querySelector(
      "#people"
    )! as HTMLElement;
    const projectItemDescription = this.element.querySelector(
      "#description"
    ) as HTMLParagraphElement;

    projectItemTitle.textContent = title;
    // projectItemPeople.textContent = people.toString(); ////sem uso de GETTER...
    projectItemPeople.textContent = this.persons; ///COM uso de GETTER...

    console.log(projectItemPeople.textContent);
    projectItemDescription.textContent = description;
  }

  @Autobind ////conserta o comportamento de 'this' no nosso LISTENER em 'configure()'... (exatamente como fizemos com 'submitHandler')....
  dragStartHandler(event: DragEvent): void {
    ////isso por si só não vai fazer 'listen to a drag event'... --> precisamos do method de 'configure()' para isso...
    event.dataTransfer!.setData("text/plain", this.project.id); ////anexamos apenas uma STRING COM UM ID, e não o object em si, pq ISSO JÁ SERÁ SUFICIENTE PARA, MAIS TARDE, fetchear esse determinado object 'ProjectItem' lá do state de nosso app de projects....
    //com isso, anexamos data AO DRAGEVENT... (para uqe depois essa data SEJA EXTRAÍDA, quando realizarmos o 'drop event' desse element)...

    event.dataTransfer!.effectAllowed = "move"; ////ISSO BASICAMENTE __ CONTROLA __ COMO O CURSOR DEVE SE PARECER, QUAL DEVE SER SUA APARÊNCIA DURANTE O DRAG-AND-DROP
    ////--> ISSO DIZ AO BROWSER 1 POUCO DE NOSSAS INTENCOES ( diz que queremos mover o cursor de 'A' para 'B', etc etc... )

    // console.log(event); ///só para ver esse event de 'dragstart'....
  }

  @Autobind
  dragEndHandler(event: DragEvent): void {
    console.log("DragEnd");
  }
}

 }