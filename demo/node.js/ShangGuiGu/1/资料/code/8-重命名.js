const fs = require('fs')
fs.rename('./观书有感2.txt','./观书有感3.txt',err => {
  if(err){
    console.log(false);
  }
  console.log(true);
})