var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '../components/base-component.js';
import { Autobind } from '../decorators/autobind.js';
export class ProjectItem extends Component {
    constructor(hostId, project) {
        super("single-project", hostId, "beforeend", project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        if (this.project.people === 1) {
            return "One Person Assigned";
        }
        else {
            return `${this.project.people} Persons Assigned`;
        }
    }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
        const { title, description, people } = this.project;
        const projectItemTitle = this.element.querySelector("#title");
        const projectItemPeople = this.element.querySelector("#people");
        const projectItemDescription = this.element.querySelector("#description");
        projectItemTitle.textContent = title;
        projectItemPeople.textContent = this.persons;
        console.log(projectItemPeople.textContent);
        projectItemDescription.textContent = description;
    }
    dragStartHandler(event) {
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEndHandler(event) {
        console.log("DragEnd");
    }
}
__decorate([
    Autobind
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    Autobind
], ProjectItem.prototype, "dragEndHandler", null);
//# sourceMappingURL=project-item.js.map