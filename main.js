

let array1 = [23];
let array3 = [12, 15, 7, 100, 5, 200, 111, 1000, 11, 4];
let array4 = [];
 
 function twoSmallest(array){
if(array.length < 2){return undefined}
  let array2 = [];
  let array0 = array[0];
  let array1 = array[1];

  if(array0 > array1){array2.push(array1), array2.push(array0)}
  else if(array0 < array1){array2.push(array0), array2.push(array1)}

 
 
for(let i = 2; i < array.length; i++){

if(array[i] < array2[0]){array2.unshift(array[i]), array2.pop()
}else if(array[i] < array2[1]){array2.splice(1,1,array[i])}

}

return array2
  
}
  
console.log(twoSmallest(array3));
 



 
 
 
 
 if (typeof twoSmallest === 'undefined') {
    twoSmallest = undefined
  }


 module.exports = {
    twoSmallest,
  }
