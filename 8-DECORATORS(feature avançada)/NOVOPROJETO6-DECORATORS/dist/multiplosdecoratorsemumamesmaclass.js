"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger3(logString) {
    console.log('LOGGER FACTORY');
    return function (target) {
        console.log('Logging...');
        console.log(target);
        console.log(logString);
    };
}
function WithTemplate3(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (target) {
        const element = document.getElementById(hookId);
        console.log(element);
        let p;
        p = new target();
        if (element) {
            element.innerHTML = template;
            const paragraph = document.querySelector('p');
            console.log(paragraph);
            paragraph.innerHTML = p.name;
        }
        return;
    };
}
let Person5 = class Person5 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person5 = __decorate([
    Logger3('HEY'),
    WithTemplate3(`<h1>My Person Object: </h1>
      <p></p>
    `, 'app')
], Person5);
//# sourceMappingURL=multiplosdecoratorsemumamesmaclass.js.map