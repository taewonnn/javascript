// 접근자 프로퍼티 (Accessor Property)
// getter , setter


class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName 함수를 호출하는 시점에 데이터를 만들어서 리턴을 해줌
  // get -> 함수 호출() 하듯이가 아닌, 그냥 접근(.)이 가능하게 해줌!
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // set -> 할당(=)
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName); // 안나
console.log(student.fullName);  
student.fullName = '김철수';
