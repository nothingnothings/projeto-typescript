

interface PersonInterface {
    name: string;
}







function WithTemplate5(template: string, hookId: string) {////decorator FACTORY.. (outer function)....



    ///VVVVVV DECORATOR function em SI....     
        return function(
            // target: Function ///sim, professor (e nós) SABEMOS QUE VAMOS RECEBER A CLASS/constructor function ASSIGNADA A ESSE DECORATOR como __ argumento, aqui, mas isso NÃO IMPORTA... (pq não vamos utilizar essa constructor function aqui para nada)....
            // _: Function //// EM VEZ DISSO, escrevemos um '_', UNDERSCORE, que basicamente _ SINALIZA__ AO JAVASCRIPT QUE __ NÃO VAMOS PRECISAR DESSE PARÂMETRO/ARGUMNETO...
            /// ^^^^   '''yea, eu SEI QUE VOU RECEBER ESSE PARÂMETRO,  __ MAS EU NÃO PRECISO DELE, POIS NÃO O UTILIZAREI'''...
            
            target: any ////também chamado de 'constructor', por alguns desenvolvedores, pq SEMPRE ESSE ARGUMENTO SERÁ UMA CONSTRUCTOR FUNCTION/CLASS..., smepre serão elas passadas como esse parâmetro..
        /////^^^^^---> SE QUEREMOS USAR ALGUMA DAS PROPRIEDADES DA CLASS ASSIGNADA A ESSA 'DECORATOR FUNCTION', __ DEVEMOS __ SETTAR O TYPE DE 'any', e não 'Function'...
            ) { 

        const element = document.getElementById(hookId);

        console.log(element);
        let p: PersonInterface;
        p = new target(); ///sim, podemos usar a class/CONSTRUCTOR function assignada ao nosso decorator __ PARA __ INSTANCIAR_ novos objects ( se queremos USAR ALGUMA DAS PROPRIEDADES DO OBJECT na lógica de nosso decorator)....


        if (element) { ///se esse element REALMENTE EXISTIR no nosso código html de 'index.html'....

            
            element.innerHTML = template; /// por favor, redefina o html (innerHTML) desse elemento, faça que seja igual ao 'template' argument...
            (element.querySelector('p') as HTMLParagraphElement).innerText = p.name;
        }


        return;
        }



}






@WithTemplate5( //vai assignar nossa DECORATOR FACTORY a essa class de 'Person3'...

`<h1>My Person Object: </h1>`, ///1o argumento, 'template'... (vai ser o código html que vai ser inserido naquele local do DOM...)

'app' ///2o argumento, 'hookId' (local do DOM em que vamos querer renderizar esse template desse decorator)....

)
class Person3 implements PersonInterface { ////decorators são 'all about classes', na verdade...
    name = 'Max';
  
    constructor() {
      console.log('Creating person object...');
    }
  }
  
