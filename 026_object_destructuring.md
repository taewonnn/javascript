      // Object Destructuring(구조 분해 할당)

      //
      function getPerson() {
        return {
          firstName: "John",
          lastName: "Doe",
          age: 37,
          email: "jhon@gmail.com",
          city: "New York",
          country: "USA"
        };
      }

      var person = getPerson();
      console.log(person); // {firstName: 'John', lastName: 'Doe', age: 37, ...}

      // 특정 키값만 가져오고 싶을 때 평소에는 아래와 같이 사용
      console.log(person.firstName);  // John
      console.log(person.lastName);   // Doe


      // 구조 분해 할당 ->
      var {firstName, lastName} = getPerson();
      console.log(firstName);  // John
      console.log(lastName);   // Doe


      // 일반 변수 선언의 구조분해할당

      let a, b, c 
      [a, b] = [10, 20]

      let one, two, three
      [one, two, three] = '010-9232-2394'.split('-')

      let one1, two1, three1, four1
      [one1, two1, three1, four1] = '010-9232-2394-0000'.split('-')


      // 문제 1 
      // a, b, c로 각각을 분해할 것입니다.
      // a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
      let data = [10, 20, 30, 40, 50]
      [a1, ...b1, c1] = [10, 20, 30, 40, 50] // (X)
      [a1, b1, c1] = [data[0], [data[1], data[2], data[3]], data[4]]; // O

      // 문제 2
      // a, b, c로 각각을 분해할 것입니다.
      // a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
      [...a2, b2, c2] = [10, 20, 30, 40, 50] // (X)
      [a2, b2, c2] = [[data[0], data[1], data[2]], data[3], data[4]]; // O



      // 문제3
      // a, b, c로 각각을 분해할 것임
      // a에는 10 , b에는 20 , c에는 30,40,50을 할당해보라
      [a3, b3, ...c3] = [10, 20, 30, 40, 50]
