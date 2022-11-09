// extends(클래스 확장)

// 호랑이 클래스
// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }


// 강아지 클래스
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }


// 두 가지 클래스 공통점 -> animal, 먹고 , 자고
// 클래스 상속을 이용하여 중복을 제거해줄 수 있어!

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

// tiger = animal과 동일한 속성이기에 그대로 상속!
class Tiger extends Animal {} // 상속

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();


// Dog는 play라는 속성이 추가되야 함!
class Dog extends Animal {
  // constructor를 이용하여 외부로부터 이름을 가져올 수 있음!
  // 자식에 추가할 것이 있어 constuctor를 추가할 때, 부모의 요소(color)도 같이 작성해야함!
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~!');
  }

  // 오버라이딩 overriding - 자식 클래스에서 부모 클래스에 있는 함수를 덮어씌운다!
  eat() {
    super.eat();
    console.log('강아지가 먹는다!');
  }
}


const dog = new Dog('빨강이', '엘리');

console.log(dog);
dog.sleep();
dog.eat();
dog.play();
