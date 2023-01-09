///<reference path="./base-component.ts" />
///<reference path="../decorators/autobind.ts"/>
///<reference path="../state/project-state.ts"/>
///<reference path="../models/enums&ProjectClass.ts"/>
///<reference path="../models/drag-drop-interfaces.ts"/>




namespace App {
  export class ProjectList
    extends Component<HTMLDivElement, HTMLElement>
    ///agora vamos fazer 'inherit' dessa base class ABSTRATA, que tem várias das coisas necessárias (E reutilizadas) a essa nossa 'child class'...
    implements DragTarget
  {
    ///vamos querer formar um CONTRATO COM ESSA INTERFACE AÍ.... -> e aí vamos precisar definir os methods de 'dragOverHandler', dropHandler' e 'dragLeaveHandler'.... --> methods do cOMPORTAMENTO DRAG AND DROP...

    assignedProjects: Project[] = [];

    constructor(private listType: "active" | "finished") {
      super("project-list", "app", "beforeend", `${listType}-projects`);

      this.assignedProjects = [];

      this.configure();

      this.renderContent(); ///settar o conteúdo dessa list _ DEPOIS__ DE ELA__ TER SIDO ANEXADA AO DOM, com 'attach()'...
    }

    private renderProjects() {
      const listEl = document.getElementById(
        `${this.listType}-projects-list`
      )! as HTMLUListElement;

      listEl.innerHTML = "";

      for (const project of this.assignedProjects) {
        console.log(project);
        console.log(this.assignedProjects);
        const projectItem = new ProjectItem(
          `${this.listType}-projects-list`,
          project
        ); ///versõa do professor, com inherit de 'Component' (Base class)....
        // listEl.appendChild(listItem);
      }
    }

    configure() {
      this.element.addEventListener("dragover", this.dragOverHandler); ////código do professor....
      this.element.addEventListener("dragleave", this.dragLeaveHandler);
      this.element.addEventListener("drop", this.dropHandler);

      projectState.addListener((projects: Project[]) => {
        ///tranpslantado para DENTRO DE 'configure()', este nosso method que ADICIONA UM LISTENER..

        const relevantProjects = projects.filter((project) => {
          if (this.listType === "finished") {
            return project.projectStatus === ProjectStatus.Finished;
          } else {
            return project.projectStatus === ProjectStatus.Active;
          }
        });

        this.assignedProjects = relevantProjects; ////com diferenciação....
        this.renderProjects();
      });
    }

    renderContent() {
      ///usado para PREENCHER O CONTEÚDO DE 'h2' e tals, dentro do TEMPLATE de 'list'... (naquela section, dentro de seu heaeder)....

      const listId = `${this.listType}-projects-list`;

      console.log(listId);

      this.element.querySelector("ul")!.id = listId; //vai adicionar esse 'id' a nossa UNORDERED LIST no template de 'project-list'....

      this.element.querySelector(
        "h2"
      )!.textContent = `${this.listType.toUpperCase()} PROJECTS`;
    }

    @Autobind
    dragOverHandler(event: DragEvent): void {
      ////VERSÃO DO PROFESSOR.

      if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
        const listEl = this.element.querySelector("ul")!;
        listEl.classList.add("droppable");
      }
    }

    @Autobind
    dropHandler(event: DragEvent): void {
      const projectId = event.dataTransfer!.getData("text/plain");
      console.log(event.dataTransfer!.getData("text/plain"));
      projectState.moveProject(
        projectId,
        this.listType === "active"
          ? ProjectStatus.Active
          : ProjectStatus.Finished
      );
    }

    @Autobind
    dragLeaveHandler(event: DragEvent): void {
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.remove("droppable");
    }
  }
}
