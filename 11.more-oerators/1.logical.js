// 논리연산자 Logical Operator

// && 그리고 둘 다 true!
// || 또는  둘 중 하나만 true!

// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

// if()안에가 true인지 false인지 확인하기 위해 boolean으로 평가가 된다!
if (obj1 || obj2) {
  console.log('둘다 true!');
} // 둘다 true!


// obj1이 true임!! -> let result = obj2가 할당된다!
let result = obj1 && obj2;
console.log(result); // { name: '🐱', owner: 'Ellie' }


// obj1이 true니 뒤에건 확인 필요 없어! -> let result = obj1
result = obj1 || obj2;
console.log(result); // { name: '🐶' }



// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우

// 주인이 있는 경우에만 주인을 바꿔주는!
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}

// 주인이 없는 경우에만 새로운 주인으로 바꿔주는!
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}


obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);


// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price;
console.log(price);


// 기본값을 설정
// default parameter는 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
