let buf = Buffer.alloc(10)
console.log(buf);
let buf_2 = Buffer.allocUnsafe(10000)
console.log(buf_2);
let buf_3 = Buffer.from("hello")
console.log(buf_3);
let buf_4 = Buffer.from([1,2,3])
console.log(buf_4);