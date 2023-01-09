"use strict";
class Department {
    constructor(n, z) {
        this.name = 'VALORDEFAULTQUESERÁSETTADOSENENHUMPARÂMETROFORPASSADO A ESSA SUA CLASS';
        this.name = n;
        this.number = z;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const shiningApartment = new Department('salao', 55);
console.log(shiningApartment);
shiningApartment.describe();
//# sourceMappingURL=app.js.map