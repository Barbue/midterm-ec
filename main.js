

let array1 = [23];
let array2 = [];
let array3 = [4000, 2150 ,777,300000,999,23, 56, 2, 77, 3]
 
 function twoSmallest(array){
  
  array2.push(array[0]);
  array2.push(array[1]);
for(let i = 2; i < array.length; i++){
if(array[i] < array2[0]){array2.unshift(array[i]), array2.pop()
}else if(array[i] < array2[1]){array2.splice(1,1,array[i])}
}
return array2
 }



  
  


  





 

twoSmallest(array1)

console.log(array2);
 
 
 
 
 
 
 
 
 
//  if (typeof twoSmallest === 'undefined') {
//     twoSmallest = undefined
//   }


//  module.exports = {
//     twoSmallest,
//   }
