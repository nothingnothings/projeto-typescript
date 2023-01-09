"use strict";
const inputTemplate = document.getElementById('project-input');
const inputTemplateForm = inputTemplate.content.cloneNode(true);
const projectTemplate = document.getElementById('single-project');
const listTemplate = document.getElementById('project-list');
document.body.appendChild(inputTemplateForm);
const realInputForm = document.querySelector('form');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('description');
const peopleInput = document.getElementById('people');
const submitButton = document.querySelector('button');
var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    console.log(doc);
    return doc.body;
};
const products = [];
class Project {
    constructor(title, description, people) {
        this.title = title;
        this.description = description;
        this.people = people;
    }
}
realInputForm.addEventListener('submit', (event) => {
    var _a;
    event.preventDefault();
    const newPerson = new Project(titleInput.value, descInput.value, +peopleInput.value);
    products.push(newPerson);
    const manipulatedProducts = products.map((product) => {
        return `
                <li>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>${product.people}</p>
                </li>
                `;
    }).join().split(',').join('');
    console.log(manipulatedProducts);
    const alteredString = stringToHTML(manipulatedProducts);
    console.log(alteredString);
    if (products.length > 1) {
        let list = (_a = document.querySelector('.projects')) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        console.log(list, 'LINE');
        return list.innerHTML = manipulatedProducts;
    }
    const parent = document.createElement('div');
    parent.append(listTemplate.content.cloneNode(true));
    console.log(parent);
    parent.innerHTML = `
        <section class="projects" id="insert">
            <header>
                <h2></h2>
            </header>
            <ul>
                ${manipulatedProducts}
        </section>
    `;
    return document.body.append(parent);
});
//# sourceMappingURL=app.js.map