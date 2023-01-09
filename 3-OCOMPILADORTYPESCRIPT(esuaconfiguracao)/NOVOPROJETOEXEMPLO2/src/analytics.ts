







let logged;




function sendAnalytics(data: string) { ///'noImplicitAny' é a opçaõ que faz esse error de 'type: any aparecer..
    console.log(data);
    logged = true;
    console.log(logged);
}







sendAnalytics('exemplo');







////////////////////////////////

// let logged;



// logged = true;



// logged = 'string';  ////isso não é incorreto JUSTAMENTE PQ O TYPE DAQUELA VARIABLE INICIAL ESTÁ COMO 'any'...

//////////////////////////////////////














///////////////////////////////
// let logged: boolean;



// logged = true;


// logged = 'EXEMPLO' ;  ///////AGORA ISSO VAI NOS DAR UM ERRO__.... (mudança súbita de type dessa variable, coisa não permitida pq settamos o type de 'logged: boolean', lá no início)...



