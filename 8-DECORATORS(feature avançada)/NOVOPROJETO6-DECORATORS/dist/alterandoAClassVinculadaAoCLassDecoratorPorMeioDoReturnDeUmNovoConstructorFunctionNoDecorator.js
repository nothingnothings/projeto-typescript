"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(template, hookId) {
    return function (target) {
        return class extends target {
            constructor(...args) {
                super();
                const element = document.getElementById(hookId);
                console.log(element);
                if (element) {
                    element.innerHTML = template;
                    element.querySelector('p').innerText = this.name;
                }
            }
        };
    };
}
;
let Person6 = class Person6 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person6 = __decorate([
    WithTemplate(`<h1>My Person Object: </h1>`, 'app')
], Person6);
const newPerson = new Person6();
//# sourceMappingURL=alterandoAClassVinculadaAoCLassDecoratorPorMeioDoReturnDeUmNovoConstructorFunctionNoDecorator.js.map