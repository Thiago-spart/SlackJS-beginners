//Transoforma o número em negativo 
function makeNegative(num) {
  if (num <= 0) {
    return num
  } else if (num == 0) {
    return num
  } else { 
    return -Math.abs(num) // you can also use num * -1
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

//test if the number is a factor or a base
function checkForFactor (base, factor) {
  let v = base % factor
  if (v == 0) {
    return true
  } else {
    return false
  }
}

//test
describe('check for factor', function () {
  it('should return true', function () {
    Test.assertEquals(checkForFactor(10,2), true)
    Test.assertEquals(checkForFactor(63,7), true)
    Test.assertEquals(checkForFactor(2450,5), true)
    Test.assertEquals(checkForFactor(24612,3), true)
  })
  it('should return false', function () {
    Test.assertEquals(checkForFactor(9,2), false)
    Test.assertEquals(checkForFactor(653,7), false)
    Test.assertEquals(checkForFactor(2453,5), false)
    Test.assertEquals(checkForFactor(24617,3), false)
  })
})

//array's day
function positiveSum(arr) {
  let t = 0
  
  for (var i = 0; i < arr.length; i++) {   
    if (arr[i] < 0) {
      
    } else {
      t += arr[i] 
    }
  }
  
  if (t == 0 || t == undefined) {
    return 0
  } else {
    return t
  }
  
}

//test
Test.assertEquals(positiveSum([1,2,3,4,5]),15);
Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
Test.assertEquals(positiveSum([]),0);
Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);

