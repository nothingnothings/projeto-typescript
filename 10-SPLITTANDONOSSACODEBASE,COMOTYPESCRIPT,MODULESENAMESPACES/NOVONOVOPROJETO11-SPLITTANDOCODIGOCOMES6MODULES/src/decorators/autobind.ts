// namespace App {
 export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    ///// USAREMOS NOS NOSSOS METHODS na nossa class...

    const originalMethod = descriptor.value;

    const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFunction = originalMethod.bind(this);
        return boundFunction;
      },
    };

    return adjustedDescriptor;
  }
// }
