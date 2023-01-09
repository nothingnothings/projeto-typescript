"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytics('exemplo');
//# sourceMappingURL=analytics.js.map