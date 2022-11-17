// 옵셔널 체이닝 연산자 Optional Chaining Operator

// ?.
// null 또는 undefined을 확인할때

// let item = { price: 1 };
// const price = item && item.price;
// console.log(price);

// 위 코드에 item이 중복되니 ?.로 간단하게!
let item = { price: 1 };
const price = item?.price;

console.log(price);



let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName(obj);
