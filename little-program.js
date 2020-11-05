//Transoforma o número em negativo 
function makeNegative(num) {
  if (num <= 0) {
    return num
  } else if (num == 0) {
    return num
  } else { 
    return -Math.abs(num)
  }
}
//testa
Test.assertEquals(makeNegative(42), -42);