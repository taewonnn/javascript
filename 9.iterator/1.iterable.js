// Iterable 하다는건! 순회가 가능하다는 것!!

// 순회가 가능하려면
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것

// 순회가 가능하면 무엇을 할 수 있나?
// 빙글 빙글 도는 for of, spread 반복문, 연산자들을 사용할 수 있다!!


const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기!
const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

// for of - 배열 안에 아이템들을 하나하나 순회
for (let item of array) {
  console.log(item);
}

// array.values() / array.keys()  / array.entries() 모두 사용 가능
for (let item of array.values()) {
  console.log(item);
}


// obj는 for in으로 사용 가능!! obj안에 있는 key를 출력함!
const obj = { id: 123, name: 'Ellie' };
for (const key in obj) {
  console.log(key);
}
 // id, name
