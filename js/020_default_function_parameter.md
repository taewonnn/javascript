      // Default Function Parameter


      // 함수의 파라미터에 디폴트 값을 지정하는 방법

      // function say(messeage) {
      //   console.log(messeage);
      // }
      // say("안녕하세요");
      // say();  // undefined  -> 파라미터가 없으니...


      // Default Function Parameter  -> 파라미터가 넘어오지 않았을 때 나오게 하는 값 설정
      function say(message2="파라미터가 넘어오지 않았습니다") {
        console.log(message2)
      }
      say("안녕하세요");  // 안녕하세요
      say();  // 파라미터가 넘어오지 않았습니다.


      function plus(x, y=1) {
        console.log(x+y);
      }
      plus(3);  // 4
      plus(4, 2);  // 6
