function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log5(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}


function Log6(target: any, name: string, position: number) {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product3 {
  title: string;

  constructor(title: string, private _price: number) {
    this.title = title;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price set - should be positive!');
    }
  }

  @Log5
  getPriceWithTax(@Log6 tax: number) {
    return this._price * (1 + tax);
  }
}
