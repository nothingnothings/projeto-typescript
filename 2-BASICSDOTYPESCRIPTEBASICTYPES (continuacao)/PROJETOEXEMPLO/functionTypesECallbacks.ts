function addAndHandle (n1: number, n2: number, cb: (num: number) => void ) {

    const result = n1 + n2;
  const value = cb(result);

}












addAndHandle(10, 20, (result) => {console.log(result); 
                                    return 'string';

});