"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    function Autobind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjustedDescriptor = {
            configurable: true,
            get() {
                const boundFunction = originalMethod.bind(this);
                return boundFunction;
            },
        };
        return adjustedDescriptor;
    }
    class Component {
        constructor(templateId, hostElementId, insertPosition, newElementId) {
            this.templateElement = document.getElementById(templateId);
            this.hostElement = document.getElementById(hostElementId);
            const importedNode = document.importNode(this.templateElement.content, true);
            this.element = importedNode.firstElementChild;
            if (newElementId) {
                this.element.id = newElementId;
            }
            this.attach(insertPosition);
        }
        attach(insertPosition) {
            this.hostElement.insertAdjacentElement(insertPosition, this.element);
        }
    }
    class State {
        constructor() {
            this.listeners = [];
        }
        addListener(listenerFunction) {
            this.listeners.push(listenerFunction);
        }
    }
    class ProjectState extends State {
        constructor() {
            super();
            this.projects = [];
        }
        addProject(title, description, numOfPeople) {
            const newProject = new App.Project(Math.random().toString(), title, description, numOfPeople, App.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListeners();
        }
        moveProject(projectId, newStatus) {
            const projectToMove = this.projects.find((project) => {
                return project.id === projectId;
            });
            if (projectToMove && projectToMove.projectStatus) {
                projectToMove.projectStatus = newStatus;
                this.updateListeners();
            }
        }
        updateListeners() {
            for (const listenerFunction of this.listeners) {
                listenerFunction(this.projects.slice());
            }
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
    }
    const projectState = ProjectState.getInstance();
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim() !== '';
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid &&
                    validatableInput.value.toString().length > validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid &&
                    validatableInput.value.toString().length < validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value < validatableInput.max;
        }
        return isValid;
    }
    class ProjectList extends Component {
        constructor(listType) {
            super('project-list', 'app', 'beforeend', `${listType}-projects`);
            this.listType = listType;
            this.assignedProjects = [];
            this.assignedProjects = [];
            this.configure();
            this.renderContent();
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.listType}-projects-list`);
            listEl.innerHTML = '';
            for (const project of this.assignedProjects) {
                console.log(project);
                console.log(this.assignedProjects);
                const projectItem = new ProjectItem(`${this.listType}-projects-list`, project);
            }
        }
        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            projectState.addListener((projects) => {
                const relevantProjects = projects.filter((project) => {
                    if (this.listType === 'finished') {
                        return project.projectStatus === App.ProjectStatus.Finished;
                    }
                    else {
                        return project.projectStatus === App.ProjectStatus.Active;
                    }
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }
        renderContent() {
            const listId = `${this.listType}-projects-list`;
            console.log(listId);
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent = `${this.listType.toUpperCase()} PROJECTS`;
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        }
        dropHandler(event) {
            const projectId = event.dataTransfer.getData('text/plain');
            console.log(event.dataTransfer.getData('text/plain'));
            projectState.moveProject(projectId, this.listType === 'active' ? App.ProjectStatus.Active : App.ProjectStatus.Finished);
        }
        dragLeaveHandler(event) {
            const listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        }
    }
    __decorate([
        Autobind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        Autobind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        Autobind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    class ProjectInput extends Component {
        constructor() {
            super('project-input', 'app', 'afterbegin', 'user-input');
            this.titleInputElement = this.element.querySelector('#title');
            console.log(this.titleInputElement.value);
            this.descriptionInputElement = this.element.querySelector('#description');
            this.peopleInputElement = this.element.querySelector('#people');
            this.configure();
        }
        renderContent() {
        }
        configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }
        submitHandler(event) {
            event.preventDefault();
            console.log(this.titleInputElement);
            console.log(this.titleInputElement.value);
            const userInput = this.gatherUserInputs();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                console.log(title, desc, people, 'LINE');
                projectState.addProject(title, desc, people);
                this.clearInputs();
            }
            this.clearInputs();
        }
        gatherUserInputs() {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = +this.peopleInputElement.value;
            const titleValidatable = {
                value: enteredTitle,
                required: true,
                minLength: 5,
            };
            const descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5,
            };
            const peopleValidatable = {
                value: enteredPeople,
                required: true,
                min: 1,
                max: 10,
            };
            if (!validate(titleValidatable) ||
                !validate(descriptionValidatable) ||
                !validate(peopleValidatable)) {
                alert('Invalid input, please try again.');
                console.log('TEST');
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }
        clearInputs() {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
    }
    __decorate([
        Autobind
    ], ProjectInput.prototype, "submitHandler", null);
    class ProjectItem extends Component {
        constructor(hostId, project) {
            super('single-project', hostId, 'beforeend', project.id);
            this.project = project;
            this.configure();
            this.renderContent();
        }
        get persons() {
            if (this.project.people === 1) {
                return 'One Person Assigned';
            }
            else {
                return `${this.project.people} Persons Assigned`;
            }
        }
        configure() {
            this.element.addEventListener('dragstart', this.dragStartHandler);
            this.element.addEventListener('dragend', this.dragEndHandler);
        }
        renderContent() {
            const { title, description, people } = this.project;
            const projectItemTitle = this.element.querySelector('#title');
            const projectItemPeople = this.element.querySelector('#people');
            const projectItemDescription = this.element.querySelector('#description');
            projectItemTitle.textContent = title;
            projectItemPeople.textContent = this.persons;
            console.log(projectItemPeople.textContent);
            projectItemDescription.textContent = description;
        }
        dragStartHandler(event) {
            event.dataTransfer.setData('text/plain', this.project.id);
            event.dataTransfer.effectAllowed = 'move';
        }
        dragEndHandler(event) {
            console.log('DragEnd');
        }
    }
    __decorate([
        Autobind
    ], ProjectItem.prototype, "dragStartHandler", null);
    __decorate([
        Autobind
    ], ProjectItem.prototype, "dragEndHandler", null);
    const projectInput = new ProjectInput();
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
})(App || (App = {}));
//# sourceMappingURL=app.js.map