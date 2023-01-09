"use strict";
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    const value = cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    return 'string';
});
