"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs('10kg');
//# sourceMappingURL=index.js.map