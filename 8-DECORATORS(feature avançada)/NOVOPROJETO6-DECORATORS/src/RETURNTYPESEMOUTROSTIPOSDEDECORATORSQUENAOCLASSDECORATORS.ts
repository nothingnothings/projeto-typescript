function Log222(target: any, name: string, descriptor: PropertyDescriptor ): PropertyDescriptor { ////decorator usado em um ACCESSOR (geeter/setter de uma class/object instanciado a partir de uma class)...


    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);

    return { //isso vai editar o 'PropertyDescriptor' de nosso ACCESSOR (no caso, o setter de 'set price')...
        // enumerable: xxx,
        // configurable: yy,
        // set: zzz,
        // get: qqqq
    }

}





function Log555(target: any, name: string, descriptor: PropertyDescriptor) {  ////decorator usado em um METHOD...
    console.log('Method Decorator');
console.log(target);
console.log(name);
console.log(descriptor);

}







 
class Product22 {
    title: string;

constructor(
  
    title: string,
    private _price: number ) { 

        this.title = title;
}


@Log222 //////EIS O CÓDIGO EM QUESTÃO. (decorator em 'SETTER', que é um tipo de ACCESSOR...)
set price(val: number) {
    if(val > 0) {
        this._price = val;

    } else {
        throw new Error('Invalid price set - should be positive!');
    }

}

@Log555 ///decorator em 'METHOD'...
getPriceWithTax(@Log6 tax: number) {
    return this._price * (1 + tax);
}



}
