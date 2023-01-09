// const button = document.querySelector('button') as HTMLButtonElement;



// const button = document.querySelector('button');
// button?.addEventListener();  //esse 'INTERROGAÇÃO' foi automaticamente adicionado pelo typescript...









// const button = document.querySelector('button')!; ///CERTAMENTE TEREMOS UM VALOR NESSe 'button', é isso que nos diz aquele "!" ao final...


///se você __ NÃO QUISER USAR '!' para EXPLICARQ QUE CERTA CONSATNTE VAI CERTAMENTE TER UM VALOR ARMAZENADO EM SI (e não 'undefind/null'),

///VOCÊ PODE OPTAR  POR UMA 'OPÇÃO DO RUNTIME' ,que é justamente aqueles IF CHECKS, como :

// if (button) {


//     button.AddEventListener('click', () => {console.log('Clicked')})
// }




/// ---> ISSO É UMA SOLUÇÃO COMUM, mas que __ NÃO É MAIS PRÁTICA DO QUE A VERSÃO do "!" na definição da variable....


///////////////////





let appId: 'abc'; //variable GLOBAL...




const button = document.querySelector('button')!;



console.log('TEST222');



function clickHandler(message: string) {
    // let userName = 'Max';
    console.log('Clicked !' + message)
}



if (button) {
    button.addEventListener('click', () => {
        
        clickHandler('EXEMPLO');
    
        console.log('exemplo');
    
    })
}



// button.addEventListener('button', 


// () => {
//     console.log('exemplo');
// }

// );






// button.addEventListener('button', 


// () => {
//     console.log('exemplo');
// }

// );





function add(n1: number, n2: number) {


    if (n1 + n2 > 0) {
            return n1 + n2;

    }

    return; ///DEVEMOS __ RETORNAR DELIBERADAMENTE cada 1 dos resultados dos statements.... (por causa da option de 'noIMplicitReturns')...
}













console.log('exemplo');






