const fs = require('fs')

// fs.writeFile('./111.txt','112233445',err => {
//   if(err) {
//     console.log('写入失败');
//   }
//   console.log("写入成功");
// })

// fs.writeFileSync('./222.txt','test')

// fs.appendFile('./111.txt',",\r\n择其善者而从之。其不善者而改之。",err => {
//   if(err){
//     console.log(false);
//   }
//   console.log(true);
// })

fs.appendFileSync('./222.txt','\n123123123')