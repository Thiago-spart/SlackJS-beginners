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

//removendo espaços de uma String 
function noSpace(x){
  //o comando a baixo verifica se tem espaços dentro da variável e as elimina 
  x = x.replace(/\s+/g, '');
  return x
}

//test
Test.describe("Example tests",_=>{
Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
});

//soma todos os números ao quadrado(vezes ele msm)
function squareSum(numbers){
  let r = 0
  for (var i = 0; i < numbers.length; i++) {   
   r += numbers[i] * numbers[i]
  }
  return r
}

//test
Test.assertEquals(squareSum([1,2]), 5)
Test.assertEquals(squareSum([0, 3, 4, 5]), 50)

//procura palavra e retorna um texto baseado no resultado (incompleto)
function findNeedle(haystack) {
  let msg = "found the needle at position "
  let p = 0
  for (var i = 0; i < haystack.length; i++) {   
    if (haystack[i] === "needle") {
      p = haystack[i]  
    }
    return msg + p
  }
}

//test
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
