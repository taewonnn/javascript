// ๊ณ ์ฐจํจ์(higher-order-function)


const fruits = ['๐', '๐', '๐', '๐'];

// For๋ฌธ์ ์ด์ฉํ์ฌ ํ๋ํ๋ ์ถ๋ ฅํ๋๊ฒ ๋๋ฌด ๊ท์ฐฎ๋ค!
for(let i = 0; i <fruits.length; i ++) {
  console.log(fruits[i]);
}

// For๋ฌธ์ ๊ฐํธํ๊ฒ!!  -> foreach
// ๋ฐฐ์ด์ ๋น๊ธ ๋น๊ธ ๋๋ฉด์ ์ํ๋๊ฒ(์ฝ๋ฐฑํจ์)์ ํ ๋
fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => console.log(value));




// ์กฐ๊ฑด์ ๋ง๋(์ฝ๋ฐฑํจ์) ์์ดํ์ ์ฐพ์๋
// find: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ๋ฐํ
const item1 = { name: '๐ฅ', price: 2 };
const item2 = { name: '๐ช', price: 3 };
const item3 = { name: '๐', price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((item) => item.name === '๐ช');
console.log(result);



// findIndex: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ์ธ๋ฑ์ค๋ฅผ ๋ฐํ
result = products.findIndex((item) => item.name === '๐ช');
console.log(result);


// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ๋ถ๋ถ์ ์ผ๋ก ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
result = products.some((item) => item.name === '๐ช');
console.log(result);


// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ์ ๋ถ ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
result = products.every((item) => item.name === '๐ช');
console.log(result);


// ์กฐ๊ฑด์ ๋ง๋ ๋ชจ๋  ์์ดํ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก!
result = products.filter((item) => item.name === '๐ช');
console.log(result);


console.clear();




// Map ๋ฐฐ์ด์ ์์ดํ๋ค์ ๊ฐ๊ฐ ๋ค๋ฅธ ์์ดํ์ผ๋ก ๋งคํํ  ์ ์๋, ๋ณํํด์ ์๋ก์ด ๋ฐฐ์ด ์์ฑ!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result); // [ 1, 4, 3, 8, 5 ]



// Flatmap: ์ค์ฒฉ๋ ๋ฐฐ์ด์ ์ซ์ ํด์ ์๋ก์ด ๋ฐฐ์ด๋ก!
result = nums.map((item) => [1, 2]);
console.log(result); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1, 2]);
console.log(result); // [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);  // ['d', 'r', 'e', 'a', 'm', 'c', 'o', 'd', 'i', 'n', 'g']



// sort ๋ฐฐ์ด์ ์์ดํ๋ค์ ์ ๋ ฌ
// ๋ฌธ์์ด ํํ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์์๋ฅผ ์ ๋ ฌํ๊ณ , ๊ธฐ์กด์ ๋ฐฐ์ด์ ๋ณ๊ฒฝ

const texts = ['hi', 'abc'];
texts.sort(); 
console.log(texts); // [ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ] 1๋ค์์ 10์ด ๋์ด!

// < 0 a๊ฐ ์์ผ๋ก ์ ๋ ฌ, ์ค๋ฆ์ฐจ์
// > 0 b๊ฐ ์์ผ๋ก ์ ๋ ฌ, ๋ด๋ฆผ์ฐจ์
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]



// reduce ๋ฐฐ์ด์ ์์๋ค์ ์ ์ด์ ์ ์ด์ ๊ฐ์ ํ๋๋ก!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result); // 15
