"use strict";
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['a', 'b', 'c']));
console.log(countAndDescribe({ length: 15 }));
//# sourceMappingURL=outraGenericFunction,Exemplo.js.map