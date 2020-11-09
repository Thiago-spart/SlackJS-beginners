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
  let indices = [];
  let elemento = "needle";
  let idx = haystack.indexOf(elemento);
  while (idx != -1) {
    indices.push(idx);
    idx = haystack.indexOf(elemento, idx + 1);
  }
  return msg + indices 
}

//outra maneira
function findNeedle(haystack) {
  let msg = "found the needle at position "
  
  for (var i = 0; i < haystack.length; i++) {   
    if (haystack[i] === "needle") {
      return msg + i 
    }
  }
}

//test
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')

//reportar bug e parar loop infinito 
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

//test
Test.describe("Fix Timmys Counter", function() {
  Test.it("Fixed Tests", function() {
    Test.assertSimilar(createArray(1),[1]);
    Test.assertSimilar(createArray(2),[1,2]);
    Test.assertSimilar(createArray(3),[1,2,3]);
    Test.assertSimilar(createArray(4),[1,2,3,4]);
    Test.assertSimilar(createArray(5),[1,2,3,4,5]);
  });
});

//pega números de um array e incrementa e confere se é divisivel por divisor, após isso atribui a novo array como retorno(incompleto)
function divisibleBy(numbers, divisor){
  let div = []
  for (let i = 0; i < numbers.lentgh; i++){   //Armazenou os números de 2 a 9
    let quant = 0
    for(var b = 1; b < i; b++) { //Armazenou os números de 1 a 9     
        //se o resto dessa divisão for 0 é um divisor e incrementa quantidadeDeDivisores
      if (i % b == 0) {
        quant ++;
      }

      }

      if (quant % i == 0) {
        div.push(i);  
      }
    }
  return div;
}
//teste
Test.describe("Sample tests", function() {
  Test.it("should pass sample tests", function() {
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
    Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    Test.assertDeepEquals(divisibleBy([0], 4), [0]);
    Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
  })  
})      

//pega a soma de divisores entre 3 e 5 e retorna a soma 
function solution(number){
  let soma = 0 
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      soma += i
    }
  }
  return soma
}
//teste
function test(n, expected) {
  let actual = solution(n)
  Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function(){
  test(10,23)
})

//a soma de números negativos e decimais
function sum (numbers) {
    //"use strict";
  let soma = 0
  for(let i = 0; i < numbers.length; i++) {
    soma += numbers[i]
    if (soma == 0 || soma == undefined) {
      soma = 0
    }  
  }  
  return soma
};

//test
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);

//testa para ver se um número ou caractere existe dentor do array
function check(a, x) {
  let r = 0
  
  for (let i = 0; i < a.length; i++) {
    
    if (a[i] === x) {
     r++ 
    }
  }
  if (r == 1) {
    return true
  } else {
    return false
  }
}
//test
Test.describe("Basic tests",_=>{
Test.assertEquals(check([66, 101], 66), true);
Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
})

//confere se é um arco-íris de verdade
function sortRainbow(colour){
  let v = ['red','orange','yellow','green','blue','indigo','violet'] 
  let r = 0
  for (let i = 0; i < v.length; i++) {
    if (colour[i] == v[i]) {
      r++
    } 
  }
  
  if (r == 7) {
    return true
  } else {
    return false
  } 
}
//test
Test.assertEquals(sortRainbow(['red','green']),false);
Test.assertEquals(sortRainbow(['red','orange','yellow', 'green','blue','indigo',1]),false);
Test.assertEquals(sortRainbow(['red','green','yellow','orange','blue','indigo','violet']),false);
Test.assertEquals(sortRainbow(['red','orange','yellow','green','blue','indigo','violet']),true);
