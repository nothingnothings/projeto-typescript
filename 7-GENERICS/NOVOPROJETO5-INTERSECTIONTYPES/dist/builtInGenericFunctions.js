"use strict";
const names1 = [];
const names = ['Max', 'Manuel'];
const genericArray = ['MANU', 'MAX'];
genericArray[0].split('a');
genericArray.concat();
const arrayMaisGenericoPossivel = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('RESOLVE PROMISE');
    }, 2000);
});
promise.then((data) => {
    console.log(data);
    data.split('E');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(25);
    }, 2000);
});
promise2.then((data) => {
    console.log(data);
    data.toFixed();
});
//# sourceMappingURL=builtInGenericFunctions.js.map