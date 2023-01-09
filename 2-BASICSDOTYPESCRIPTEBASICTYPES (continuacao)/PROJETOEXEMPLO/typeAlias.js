"use strict";
function combine3(n1, ///EXEMPLO DE USO DE 'TYPE ALIAs' (no caso , alias de 'input').... --> salva a repetiçaõ de várias vezes de 'string | number' nos seus parâmetros...
n2, 
// resultConversion?: 'stringResult' | 'numberResult'
resultConversion //exemplo de uso de LITERAL TYPE + UNION TYPE + TYPE ALIAS...
) {
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
