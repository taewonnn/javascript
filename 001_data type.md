      data type_01

      // 문자열 string  -> "" / ''
      let name = "John Doe";
      let name2 = 'John Doe';

      //문자열 안에 ""를 사용할 때   -> \" \"
      let doubleQuote = "He is called \"Johnny\"";
      console.log(doubleQuote);

      //문자열 안에 ''을 사용할 때  -> \' \'
      let singleQuote = 'He is called \'Johnny\''
      console.log(singleQuote);


      //숫자 number
      let x = 3;
      let y = 3.14;

      
      // undefined -> 선언되지 않은 하나의 데이터 타입
      let u = undefined;
      console.log(u);


      // null -> 아무것도 아닌 것
      let n = null;
      console.log(n);


      //objcet -> { key : value의 쌍}
      //방법1  
      let person = {};
      person.firstNmae = "재석";
      person.lastNmae = "유";
      person.age = 50;

      //방법2
      let person2 = {
        firstname : "종국",
        lastname : "김",
        age : 47
      };

      //방법2 - 별도로 추가 방법
      person2.email = "yu@naver.com";

      //방법3
      let person3 = {};
      person3["firstname"] = "석진";
      person3["lastname"] = "지";
      person3["age"] = 52;


      //array -> 배열(여러 개의 데이터) []   * 모든 데이터/함수를 넣을 수 있어!
      let arr1 = ["Hyndai", "KIA", "Volvo"];
      console.log(arr1[0]);
      console.log(arr1[1]);
      console.log(arr1[2]);
      
      let arr2 = [3, 7, 2, 9, 12];
      console.log(arr2[0]);

      let arr3 =["Hyundai", 3, undefined];

      let arr4= [person, person2];

      let arr5 =[];

      // arr5에 추가하는 방법 - push
      arr5.push(2);
      arr5.push(4);
      arr5.push(3);
      arr5.push(5);
      console.log(arr5);

      //몇 개가 담겨있는지 -> .length
      console.log(arr5.length);


      //Boolean -> 참/거짓  - true(1) / false(0)
      let isAdult = true;

      let x2 = 5;
      let y2 = 7;
      console.log(x2 > y2);    // false

      console.log(typeof x2);
      console.log(typeof isAdult);
      console.log(typeof name);
      console.log(typeof person2);
      console.log(typeof arr1);  // 배열의 type은 object 