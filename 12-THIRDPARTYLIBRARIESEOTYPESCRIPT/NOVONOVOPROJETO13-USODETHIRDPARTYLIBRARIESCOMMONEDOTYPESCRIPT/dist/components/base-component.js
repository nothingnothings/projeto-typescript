export class Component {
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
//# sourceMappingURL=base-component.js.map