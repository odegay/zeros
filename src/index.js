module.exports = function getZerosCount(number) {
  //sorry but this is available on Internet
  //https://site.ada.edu.az/~medv/acm/Docs%20e-olimp/Volume%202/123.htm
  qty = 0;
  while (number > 0){
    number = Math.floor(number/5);
    qty += number;
  }
  return qty;
}

//console.log(getZerosCount(25));
