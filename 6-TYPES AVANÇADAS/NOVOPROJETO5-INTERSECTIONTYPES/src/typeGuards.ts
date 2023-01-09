








type Combinable = string | number; ////type guards _ NOS AJUDAM __ ESPECIFICAMENTE _cOM 'union types'....



////'TYPE GUARDS''--_> NOS deixam 'CHECK IF A CERTAIN PROPERTY/METHOD EXISTS, BEFORE USING IT'...



///----> ÀS VEZES VOCê VAI QUERER __ SABER 'WHAT EXACT TYPE __ARE WE GETTING NOW, AT RUNTIME'...





/////primeiro TIPO de type guard (typeof) :




///1)


function add(a: Combinable, b: Combinable) {



    if (typeof a === 'string' || typeof b === 'string') { ///ISTO É UM TYPE GUARD  --->  É UM TYPE GUARD QUE USA 'typeof' --> mas é claro que existem OUTROS APPROACHES PARA ESCREVER TYPE GUARDS....
        return a.toString() + b.toString();
    }
    
    return a + b; ////sabemos, nesse código, com certeza absoluta, que nenhum desses parameters será uma string... (serão numbers)...
}





// ----> ISSO É UM TYPE GUARD,





// PQ __ ELA___ NOS DEIXA_ _ USAR A __ FLEXIBILIDADE _ QUE 

// OS UNION TYPES__ NOS DÃO 


// para_ DETERMINAR__ COMO  O 'FLOW' 



// DE NOSSA FUNCTION DEVERÁ 



// ACONTECER... (GARANTIR QUE NOSSO CÓDIGO RODARÁ __ CORRETAMENTE_ DURANTE O RUNTIME)....




// --> ISSO PQ FREQUENTEMENTE VOCÊ 

// TERÁ 





// __ FUNCTIONS QUE ___ FUNCIONAM COM 2 OU 3 DIFERENTES TYPES,



// e é exatamente por isso que 


// union types 



// SÃO PERFEITOS.... ---->   MAS O QUE ***__ EXATAMENTE__**** FAZEMOS COM 



// OS VALORES,

// ISSO É ALGO QUE __ DEPENDE__ DO TYPE 'escolhido'/NÃO PROTEGIDO (não 'guarded')....







//////SEGUNDO TIPO DE TYPE GUARD (que utiliza a keyword de 'in', tipo ''''propriedade in object''''):





///2) 



type Admin2 = {
    name: string;
    privileges: string[];
};






type Employee2 = {
    name: string;
    startDate: Date; ///baseado no OBJECT BUILTIN NO JAVASCRIPT...
}





type ElevatedEmployee2 = Admin2 & Employee2;



type UnknownEmployee = Employee2 | Admin2;  /////UNION TYPE COM 2 DE NOSSOS 'CUSTOM OBJECT TYPES'....  (o 'UnknownEmployee' VAI SER __ UM DOS DOIS, NO CASO)....
 






function printEmployeeInformation(emp: UnknownEmployee) {


    console.log('Name: ' + emp.name); //isto ('emp.name") existe nas 2 variações de 'emp'...

        // if(typeof emp === 'object' ) ///TYPEGUARDS da variante 'typeof' NÃO FUNCIONARÃO AQUI, pq O TYPE DESSE ARGUMENTO 'emp' SEMPRE SERÁ DE 'object' (não há como colocar um valor de TYPEOf COMPLEXO, ou algo assim... só existem os tipos básicos de 'string', 'boolean', 'object', 'array'... )
                ////quando você precisa definir um typeguard MAIS COMPLEXO, provavelmente de 'SE ESSA PROPRIEDADE EXISTIR DENTRO DESSE OBJETO', etc etc, VOCê _ DEVE _ UTILIZAR A KEYWORD DE 'in' PARA DEFINIR O TYPEGUARD....
               
                //tipo assim:


                if ('privileges' in emp) { /////////SE A PROPRIEDADE 'privileges' EXISTIR DENTRO DESSE PARÂMETRO/object DE 'emp', vamos querer EXECUTAR ESSE CÓDIGO Aí....
                    console.log('Privileges: ' + emp.privileges); 
                }


                if('startDate' in emp) { ///EXEMPLO DE 'TYPE GUARD' definido por meio da keyword de 'in'....
                    console.log('StartDate: ' + emp.startDate);  
                }


}









printEmployeeInformation({ ///vai printar ''          console.log('StartDate: ' + emp.startDate);   ''''
 name: 'Arthur',
    startDate: new Date()
})





printEmployeeInformation({ ///vai printar ''          console.log('Privileges: ' + emp.privileges);    ''''
    name: 'Arthur2',
        privileges: ['a', 'b']
   })











   /// OK... É ASSIM QUE PODEMOS USAR/definir 'type guards' para alterar a maneira pela qual nosso código é executado....


















///////HÁ AINDA OUTRA__ MANEIRA DE DEFINIR 'TYPE GUARDS', que é utilizada com __ CLASSES...



/// É O APPROACH QUE USA O OPERADOR DE 'instanceof'...







//// 3) INSTANCEOF....














class Car {
    drive() {
        console.log('Driving...')
    }
}



class Truck {
    drive() {
        console.log('Driving a truck...')
    }
    loadCargo(amount: number) {


        console.log('Loading cargo ...' + amount);
    }
}






type Vehicle = Car | Truck;







const v1 = new Car(); 






const v2 = new Truck();





// function useVehicle(vehicle: Vehicle) { ///usamos nosso 'Vehicle' como TYPE disso, union type...


//     vehicle.drive(); ///essa propriedade sempre existirá, nesse exemplo, em ambos tipos de object, por isso podemos só chamar simples assim.. (sem if checks)...




    
//     if ('loadCargo' in vehicle) { ///ISSO __ FUNCIONA, POR ALGUMA RAZÃO ( o check de METHODS em vez de propriedades, dentro de seus OBJECTS PASSADOS A SUAS FUNCTIONS, também funciona).... --> esse tipo de type guard FUNCIONA..

//         vehicle.loadCargo(1000);

//     }

// }





// useVehicle(v1);


// useVehicle(v2); //isso funciona....












///////ESSE CÓDIGO AÍ DE CIMA FUNCIONA, MAS É DESELEGANTE... --> o código mais elegante é este de baixo, que usa 'INSTANCEOF' para checar qual tipo de function executamos...








// ex:








function useVehicle(vehicle: Vehicle) { ///usamos nosso 'Vehicle' como TYPE disso, union type...


    vehicle.drive(); ///essa propriedade sempre existirá, nesse exemplo, em ambos tipos de object, por isso podemos só chamar simples assim.. (sem if checks)...

    


    
    if (vehicle instanceof Truck) { ///ISSO __ FUNCIONA, E É BEM MAIS ELEGANTE (checa se esse negócio, nosso parâmetro, realmente é uma INSTANCIA DAQUELA CLASS, e retorna truthy/falsy)...


        ////OBS: 'instanceof' SÓ __ PODE __ SER UTILIZADO __ COM 'CLASSES', e não FUNCIONA COM INTERFACES...
        vehicle.loadCargo(1000);
    }

}





useVehicle(v1);


useVehicle(v2); //isso funciona....
















// 1) COM OBJECTS, PODEMOS CRIAR TYPE GUARDS COM 'typeof' ou com 'in', com if checks....











// 2) COM classes, PODEMOS CRIAR TYPE GUARDS COM 'in' ou com 'instanceof'....







// 3) com interfaces, não podemos usar 'instanceof'...
