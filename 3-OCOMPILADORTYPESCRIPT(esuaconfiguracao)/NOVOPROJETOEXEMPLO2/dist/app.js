"use strict";
let appId;
const button = document.querySelector('button');
console.log('TEST222');
function clickHandler(message) {
    console.log('Clicked !' + message);
}
if (button) {
    button.addEventListener('click', () => {
        clickHandler('EXEMPLO');
        console.log('exemplo');
    });
}
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
console.log('exemplo');
//# sourceMappingURL=app.js.map