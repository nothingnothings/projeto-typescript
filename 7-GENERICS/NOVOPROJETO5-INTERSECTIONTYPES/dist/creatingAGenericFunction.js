"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
const age = mergedObj.age;
const mergedObj2 = merge({ job: 'coder' }, { name: 'asasas' });
const mergedObj3 = merge({ job: 'coder' }, { name: 'asasas' });
//# sourceMappingURL=creatingAGenericFunction.js.map