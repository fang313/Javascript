const jsonData= require('./task2 jsondata.json'); 

const result = []
const hash = {}
  
  for (const item of jsonData) {
    if (!hash[item.username]) {
      hash[item.username] = true
      result.push(item)
    }
  }
  
  console.log(result)
