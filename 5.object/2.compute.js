const obj = {
  name: 'taewoon',
  age: 29
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name; // taewon
obj.age; // 29



// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));  //taewon


function addKey(key, value) {
  let obj = {}
  obj[key] = value;
  return obj
}
console.log(addKey('job', 'engineer'));



function deleteKey(obj, key) {
  delete object[key];
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects