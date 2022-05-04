const jsonData= require('./task2 jsondata.json'); 

let uniquedata = [];

jsonData.forEach(function(jsonData ){
    if (uniquedata.indexOf(jsonData) === -1 ){
        uniquedata.push(jsonData)
    }
}
)

console.log(uniquedata)
// for (let j=0;j<jsonData.length;j++){
//     for (let i=0;i<jsonData.length;i++){
//         if(i==j){
//             continue;
//         }
//         else if(jsonData[i].name==jsonData[j].name)
//         {
//             // console.log(i + ' '+ j)
//             jsonData.splice(j,1);
//         }
//     }
// }
// console.log(jsonData)




// // usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']