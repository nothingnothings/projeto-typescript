"use strict";
class StorageData {
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
const newStorage = new StorageData();
newStorage.addItem('ITEM');
console.log(newStorage.getItems());
newStorage.removeItem('ITEM');
console.log(newStorage.getItems());
//# sourceMappingURL=importante,genericClasses.js.map