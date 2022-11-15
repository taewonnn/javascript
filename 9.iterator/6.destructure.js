// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다


const fruits = ['🍏', '🥝', '🍓', '🍌'];
// console.log(fruits[0])
// console.log(fruits[1])

// 새로운 배열을 만든다!  
const [first, second, ...others] = fruits;
console.log(first); // '
console.log(second); // 🥝
console.log(others); // [ '🍓', '🍌' ]

console.log(x); // 2
console.log(y); // 1
console.log(z); // 0




function createEmoji() {
  return ['apple', '🍎'];
}

// const array = createEmoji();
// console.log(array);

const [title, emoji] = createEmoji();

console.log(title);
console.log(emoji);




const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}

display(ellie);


const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);



// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};


// function changeColor(인자를 만들어보세요) {
//   console.log(color);
// }
// changeColor(prop);


function changeColor({styles: {color}}) {
  console.log(color);
}

changeColor(prop); // black
