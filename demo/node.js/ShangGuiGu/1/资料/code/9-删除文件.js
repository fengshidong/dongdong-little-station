const fs = require('fs')

// fs.unlink('./观书有感.txt',err => {
//   if(err){
//     console.log(false);
//   }
//   console.log(true);
// })

fs.rm('./111.txt',err => {
  if(err){
    console.log(false);
  }
  console.log(true);
})