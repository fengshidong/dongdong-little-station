function test (){
  console.log(111);
}
function upper(str){
  return str.substring(0,1).toUpperCase()+str.substring(1)
}
module.exports = {
  test,
  upper
}