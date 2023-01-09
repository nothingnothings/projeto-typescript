"use strict";
class StorageData2 {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const newStorage2 = new StorageData2();
newStorage2.addItem('ITEM');
console.log(newStorage2.getItems());
newStorage2.removeItem('ITEM');
console.log(newStorage2.getItems());
//# sourceMappingURL=app.js.map