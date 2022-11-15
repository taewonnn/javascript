// map 
// 키 - 값(유일한 키!)   * 키만 다르다면 값이 중복이 가능
// 순서 상관 없음


const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 사이즈 확인 map.size
console.log(map.size); // 2


// 존재하는지 확인 map.has
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false


// 순회  - foreach
map.forEach((value, key) => console.log(key, value));

console.log(map.keys());
console.log(map.values());
console.log(map.entries());


// 찾기 - map.get()
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));


// 추가 map.set
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }


// 삭제 map.delete()
map.delete('key3');
console.log(map);


// 전부삭제
map.clear();
console.log(map);


// 오브젝트와의 큰 차이점??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};

console.log(obj);


const map2 = new Map([[key, milk]]);

console.log(map2);

console.log(obj[key]);
console.log(map2[key]); // 접근 불가능
console.log(map2.get(key));
