var Lawyer3 = /** @class */ (function () {
    function Lawyer3(name, name2) {
        this.name = name;
        this.name = name;
        this.name2 = name2;
    }
    Lawyer3.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('No greetings for you, no parameter provided');
        }
    };
    Lawyer3.age = 30;
    return Lawyer3;
}());
var newLawyer5 = new Lawyer3(); ////podemos chamar assim justamente pq definimos esses parâmetro, na INTERFACE E NA CLASS, como optional...
newLawyer5.greet('frase');





var newLawyer6 = new Lawyer3('Max', 'Manu');



newLawyer6.greet('frase');