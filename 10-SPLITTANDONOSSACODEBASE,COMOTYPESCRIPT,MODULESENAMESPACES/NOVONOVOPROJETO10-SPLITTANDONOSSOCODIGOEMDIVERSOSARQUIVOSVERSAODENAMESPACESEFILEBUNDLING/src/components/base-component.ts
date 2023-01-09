

namespace App {
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  ////class genérica ('T', 'U') que será inherittada por nossas 'interface classes' (como 'ProjectInput' e 'ProjectList')....

  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertPosition: "afterbegin" | "beforeend",
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T; ///trocamos 'as HTMLDivElement' por 'as T'...

    //// esse código de 'conversão de template em elementos html de verdade' vai funcionar com todas as classes 'interface/ui' que inheritarem essa nossa class genérica de 'Component'....
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    // this.element.id = 'user-input';

    if (newElementId) {
      ////minha ideia.... --> pq esse 'newElementId' é OPCIONAL... ('newElementId?'..)...
      this.element.id = newElementId;
    }

    this.attach(insertPosition);
  }

  private attach(insertPosition: "afterbegin" | "beforeend") {
    this.hostElement.insertAdjacentElement(insertPosition, this.element);
  }

  abstract configure(): void; ///definimos esses methods como 'abstract', pq __ QUEREMOS _ QUE SUA 'CONCRETE IMPLEMENTATION' só vai acontecer nas CLASSES QUE HERDAREM ESSA NOSSA CLASS ABSTRATA (código/lógica de method específico à cada class que inherita)...

  abstract renderContent?(): void;
}
   }