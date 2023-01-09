









// type funcaoLegal = (a: number, b: number) => number; /////típica definição de 'FUNCTION TYPE' no typescript... (vamos compará-la com UMA INTERFACE USADA COMO FUNCTION TYPE...)






// let add: funcaoLegal = (num1: number, num2: number) => {
//     return num1 + num2;
// }




// add(12, 24);














///OK... AGORA É HORA DE VER O MESMO CÓDIGO, mas com uma 'interface' no lugar desse FUNCTION TYPE... (pq vocÊ PODE CRIAR FUNCTION TYPES COM INTERFACES) --> isso pq INTERFACES TE DEIXAM DEFINIR A ESTRUTURA DE OBJECTS, E FUNCTIONS __ TAMBÉM SÃO OBJECTS...










interface InterfaceLegal {
        (a: number, b: number): number; ///mesma coisa que escrever 'type funcaoLegal = (a: number, b:number) => number'
        
        
        
        //para definir uma interface como FUNCTION TYPE, temos que quase que __ DEFINIR_ UMA ANON FUNCTION no interior dessa interface ( sintaxe bem parecidA)...
        ///// (a: number, b:number) ---> são os parameters de seu function type

        // ':number' --> é o RETURN TYPE de seu function type....


}





let add: InterfaceLegal;




add = (num1: number, num2: number) => {
        return num1 + num2;
}


add(12, 24);

