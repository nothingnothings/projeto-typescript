// /<reference path="./base-component.ts" />
// /<reference path="../decorators/autobind.ts" />
// /<reference path="../util/validation.ts"/>
// /<reference path="../state/project-state.ts"/>

import { Component } from '../components/base-component.js';



import { Autobind } from '../decorators/autobind.js';


import { Validatable, validate } from '../util/validation.js';

import { ProjectState, projectState } from '../state/project-state.js';


// namespace App {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement; ///INPUT FIELDS DA FORM...
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", "afterbegin", "user-input");

      this.titleInputElement = this.element.querySelector(
        "#title"
      ) as HTMLInputElement;
      console.log(this.titleInputElement.value);
      this.descriptionInputElement = this.element.querySelector(
        "#description"
      ) as HTMLInputElement; //EIS O CÓDIGO EM QUESTÃO.
      this.peopleInputElement = this.element.querySelector(
        "#people"
      ) as HTMLInputElement;

      this.configure();
    }

    renderContent() {}

    configure() {
      this.element.addEventListener(
        "submit",

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
        const [title, desc, people] = userInput; //vamos fazer algo com esse input aí, extraído por meio do array destructuring...

        console.log(title, desc, people, "LINE");
        projectState.addProject(title, desc, people);

        // const projectState = new ProjectState(); //singleton PATTERN  e 'private constructor'...
        this.clearInputs();
      }

      this.clearInputs();
    }

    private gatherUserInputs(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = +this.peopleInputElement.value;

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
        alert("Invalid input, please try again.");
        console.log("TEST");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    }

    private clearInputs() {
      this.titleInputElement.value = "";
      this.descriptionInputElement.value = "";
      this.peopleInputElement.value = "";
    }
  }
// }
