

 function combine(n1: number | string , n2: number | string ) {

    let result;

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    } 
    
    if (typeof n1 === 'string' && typeof n2 === 'string') {
        result = n1 + n2;
    } 

    if ((typeof n1 === 'number' && typeof n2 === 'string') || (typeof n1 === 'string' && typeof n2 === 'number') ) {
        return;
    } 
  
    return result;
  }
  




  console.log(combine('212', '45'));


  console.log(combine(22, 51));










  
//  function combine(n1: number | string | boolean , n2: number | string ) {


//     if (typeof n1 === 'number' && typeof n2 === 'number') {
//         const result = n1 + n2;
//     } 
    
//     if (typeof n1 === 'string' && typeof n2 === 'string') {
//         const result = n1 + n2;
//     } 

//     if ((typeof n1 === 'number' && typeof n2 === 'string') || (typeof n1 === 'string' && typeof n2 === 'number') ) {
//         return;
//     } 
  
//     return result;
//   }
  