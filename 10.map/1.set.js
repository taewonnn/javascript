// Set
// 중복이 불가능함! 인덱스도 없고 순서도 없음

const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }


// 사이즈 확인 set.size
console.log(set.size); // 3

// 존재하는지 확인 set.has()
console.log(set.has(2)); // true
console.log(set.has(6)); // false


// 순회
set.forEach((item) => console.log(item));

for (const value of set.values()) {
  console.log(value);
}


// 추가 set.add()  * 중복은 불가능하다!!!
set.add(6);
console.log(set);
set.add(6);
console.log(set);


// 삭제 set.delete()
set.delete(6);
console.log(set);


// 전부 삭제  set.clear()
set.clear();
console.log(set); // Set(0) {}


// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// 퀴즈1
obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } }
// 동일한 object 추가하니 동일! set은 중복허용하지않아!


// 퀴즈2
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs); 
// Set(3) {{ name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 5 }}
// object는 메모리의 주소가 다르기 떄문에 안에 내용이 달라도 메모리 주소가 다르기에 새로 추가됨!


obj3.price = 8;
console.log(objs);
// Set(3) {{ name: '🍎', price: 10 }, { name: '🍌', price: 5 },{ name: '🍌', price: 8 }}



