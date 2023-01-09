"use strict";
function combine2(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    if (typeof n1 === 'string' && typeof n2 === 'string') {
        result = n1 + n2;
    }
    if ((typeof n1 === 'number' && typeof n2 === 'string') || (typeof n1 === 'string' && typeof n2 === 'number')) {
        return;
    }
    if (typeof n1 === 'number' && typeof n2 === 'string' && resultConversion) {
        result = n1 + n2;
    }
    return result;
}
console.log(combine2('212', '45', 'stringResult'));
console.log(combine2('212', '45'));
console.log(combine2('212', '412'));
