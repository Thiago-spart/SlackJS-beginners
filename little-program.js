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

//teste para quantidade do caminho 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  mpg = distanceToPump - (25 * fuelLeft)
  
  if (mpg <= 0) {
    return true
  } else {
    return false
  }
  
  distanceToPump
};
//teste
const assert = require("chai").assert;

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});

//cenaforo 
function updateLight(current) {
  
  if (current == "green") {
    return "yellow"
  } else if (current == "yellow") {
    return "red"
  } else {
    return "green"
  }

}

//teste
describe("Sample tests", function(){
  Test.assertEquals(updateLight("green"), "yellow");
  Test.assertEquals(updateLight("yellow"), "red");
  Test.assertEquals(updateLight("red"), "green");
});