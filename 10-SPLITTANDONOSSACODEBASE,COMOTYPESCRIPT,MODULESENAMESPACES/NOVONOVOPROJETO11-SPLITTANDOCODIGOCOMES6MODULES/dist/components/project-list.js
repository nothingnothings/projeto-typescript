var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '../components/base-component.js';
import { Autobind } from '../decorators/autobind.js';
import { ProjectStatus } from '../models/enums&ProjectClass.js';
import { ProjectItem } from './project-item.js';
import { projectState } from '../state/project-state.js';
export class ProjectList extends Component {
    constructor(listType) {
        super("project-list", "app", "beforeend", `${listType}-projects`);
        this.listType = listType;
        this.assignedProjects = [];
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.listType}-projects-list`);
        listEl.innerHTML = "";
        for (const project of this.assignedProjects) {
            console.log(project);
            console.log(this.assignedProjects);
            const projectItem = new ProjectItem(`${this.listType}-projects-list`, project);
        }
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter((project) => {
                if (this.listType === "finished") {
                    return project.projectStatus === ProjectStatus.Finished;
                }
                else {
                    return project.projectStatus === ProjectStatus.Active;
                }
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.listType}-projects-list`;
        console.log(listId);
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent = `${this.listType.toUpperCase()} PROJECTS`;
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            const listEl = this.element.querySelector("ul");
            listEl.classList.add("droppable");
        }
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData("text/plain");
        console.log(event.dataTransfer.getData("text/plain"));
        projectState.moveProject(projectId, this.listType === "active"
            ? ProjectStatus.Active
            : ProjectStatus.Finished);
    }
    dragLeaveHandler(event) {
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
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
//# sourceMappingURL=project-list.js.map