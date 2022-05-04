const jsonData= require('./task2 jsondata.json'); 

//Вариант 1

const result = []
const hash = {}
  
  for (const item of jsonData) {
    if (!hash[item.username]) {
      hash[item.username] = true
      result.push(item)
    }
  }
  
  console.log(result)

  //Вариант2

//   let uniqueArray = jsonData.filter

//   function uArray(array) {
//     let out = [];
//     for (let i=0, len=array.length; i<len; i++)
//         if (out.indexOf(array[i]) === -1)
//             out.push(array[i]);
//     return out;
// }
// console.log("Array with unique values = ",uniqueArray);