      operator
      
      // 더하기(+)
      var x = 5;
      var y = 2;
      var y2 = 3;
      var z = x + y + y2;
      console.log(z);

      // 빼기(-)
      var x = 5;
      var y = 2;
      var z = x - y;
      console.log(z);

      // 곱하기(*)
      var x = 5;
      var y = 2;
      var z = x * y;
      console.log(z);
      
      // 나누기(/)
      var x = 5;
      var y = 2;
      var z = x / y;
      console.log(z);

      // 거듭제곱(**)
      var x = 5;
      var y = 2;
      var z = x ** y
      console.log(z);

      // 나머지(%)
      var x = 5;
      var y = 2;
      var z = x % y;
      console.log(z);

      // ++(1만큼 증가)  
      var x = 1;
      x++;
      console.log(x);

      // --(1만큼 감소)
      var x = 4;
      x--;
      console.log(x);

      // 값을 할당하기 위한 연산자(+=)
      var x = 5;
      var y = 2;

      x += y; // x = x + y;
      x -= y; // x = x - y;     
      x *= y // x = x * y;
      x /= y // x = x / y;
      x %= y // x = x % y;
      x **= y; // x = x ** y;


      // 문자열 연산자 (+로 문자를 붙여줌)
      var txt1 = "John";
      var txt2 = "Doe";
      var txt3 = txt1 + " " + txt2;
      console.log(txt3);

      txt1 += txt2; // txt1 = txt1 + txt2;
      console.log(txt1);


      //숫자열과 문자열 
      var y = "5" + 5;   // 55
      console.log(y);

      var z = "Hello" + 5;  // Hello5
      console.log(z);


      //비교 연산자
      console.log(1 == 1);    // 1과 1 값이 같아? -> true
      console.log(1 == "1");  // 1과 "1" 값이 같아? -> true  ==는 데이터 타입(문자열/숫자열) 구분 X
      console.log(1 === "1");  // 1과 "1"이 값과 데이터 타입까지 같아? -> false

      console.log(1 != 3);  // 1과 3 값이 달라? -> true
      console.log(1 != "1");   // 1과 "1" 값이 달라? -> false
      console.log(1 !== "1");   // 1과 "1" 값과 데이터 타입까지 달라? -> true

      console.log(3 > 2); // true
      console.log(3 < 2); // false
      console.log(3 >= 2); // true
      console.log(3 <= 2); // false

      
      // logical 연산자(&& / ||)   * && : and 조건(두 개 다 만족해야 true) / || : or 조건(둘 중에 하나만 만족해도 true)
      console.log(3 > 2 && 1 > 2);   // falses
      console.log(3 > 2 || 1 > 2);   // true
      console.log(!(3 > 2));    // false    * !는 반대로 바꿈
      console.log(!(3 < 2));    // true
