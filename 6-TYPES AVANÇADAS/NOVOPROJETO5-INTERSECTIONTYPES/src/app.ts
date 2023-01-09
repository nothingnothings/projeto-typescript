








type Admin = {
    name: string;
    privileges: string[];
};






type Employee = {
    name: string;
    startDate: Date; ///baseado no OBJECT BUILTIN NO JAVASCRIPT...
}





// DEPOIS DISSO, TEMOS O TYPE DE 'ElevatedEmployee',


//  QUE SERÁ NOSSO INTERSECTION TYPE, __ SERÁ __ A COMBINAÇÃO DAQUELES 2 TYPES ANTERIORES...



// type ElevatedEmployee = {

//     name: string;
//     startDate: Date;
//        privileges: string[];
// }



// (ISSO, REALMENTE, É UMA '''FUSÃO''' DOS 2 OUTROS TYPES, mas uma fusão MANUAL, escrita)...




type ElevatedEmployee = Admin & Employee;







const newObject: ElevatedEmployee = {
        name: 'object',
        privileges: ['a', 'b'],
        startDate: new Date()
}









//////////////////////////////////////////////
/////////////////////////////////////////////




///alternativa nº 1 a escrever aquilo ali em cima (uso de INTERFACES e IMPLEMENTING DE MÚLTIPLAS INTERFACES no lugar de types)...


// interface Admin {
//     name: string;
//     privileges: string[];
// }







// interface Employee {
//      name: string;
//      startDate: Date;
     
//  }







// class newClass implements Admin, Employee {
//         name: 'object',
//         privileges: ['a', 'b'],
//         startDate: new Date()
// }



//////////////////////////////////////////////


////////////////////////////////////////////



// interface Admin {
//     name: string;
//     privileges: string[];
// }







// interface Employee {
//      name: string;
//      startDate: Date;
     
//  }



// type ElevatedEmployee = Admin & Employee; //podemos seguir usando esse type, mas com 2 interfaces...





// const newObject: ElevatedEmployee {
//         name: 'object',
//         privileges: ['a', 'b'],
//         startDate: new Date()
// }




///////////////////////////////////
////////////////////////////////






///OUTRA ALTERNATIVA (com a sintaxe de INHERITANCE das interfaces...):





// interface Admin {
//     name: string;
//     privileges: string[];
// }







// interface Employee {
//      name: string;
//      startDate: Date;
     
//  }




//  interface ElevatedEmployee extends Admin, Employee;




// const newObject: ElevatedEmployee {
//         name: 'object',
//         privileges: ['a', 'b'],
//         startDate: new Date()
// }











///////////////OUTRA POSSIBILIDADE, MAS MENOS ÚTIL:


///OBS:: NO CASO DOS UNION TYPES, só será determinado como 'intersection type' os TYPES QUE __ ESSES UNION TYPES TIVEREM EM COMUM (nesse caso, 'number'...)...




// type Combinable = string | number; ////////ISSO É UM UNION TYPE....




// type Numeric = number | boolean ;






// type Universal = Combinable & Numeric; 