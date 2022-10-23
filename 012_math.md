      Math

      // Math

      // round() -> 반올림, 반내림하여 정수로 만들어줌
      console.log(Math.round(4.9));  // 5
      console.log(Math.round(4.32));  // 4

      // ceil() -> 무조건 올림 처리
      console.log(Math.ceil(4.254));  // 5
      console.log(Math.ceil(13.1342332));  // 14

      // floor()  -> 무조건 내림 처리
      console.log(Math.floor(7.92342)); // 7
      console.log(Math.floor(-4.2)); // -5   -> 무조건 내림 처리이니 -5가 됨

      // trunc() -> 정수만 리턴해줌
      console.log(Math.trunc(4.932)); // 4
      console.log(Math.trunc(-4.2)); // -4

      // sign() -> 음수: -1, 양수: 1, 0: 0
      console.log(Math.sign(-7));   // -1
      console.log(Math.sign(103));  // 1
      console.log(Math.sign(0));  // 0

      // pow(a, b) -> 제곱(a의 b승)
      console.log(Math.pow(8, 2));  //64

      // sqrt()  -> root
      console.log(Math.sqrt(64)); // 8
      // n **0.5  -> 루트 n 동일의미

      // abs() -> 무조건 양수로 변환(계산, 간격 확인 시 사용)
      console.log(Math.abs(-4.565)); // 4.565

      // max() -> 최댓값을 찾아줌
      console.log(Math.max(0, 140, 23, -28, 134, 180)); // 180

      // min() -> 최솟값을 찾아줌
      console.log(Math.min(0, 140, 23, -28, 134, 180)); // -28

      // random()  -> 랜덤으로 뽑아줌(자주 사용!)
      console.log(Math.random());  // 0부터 1 사이의 숫자(소숫점 포함) 랜덤으로 아무 숫자 나옴

      // 1부터 10 사이의 랜덤 숫자(정수만) 구하기
      var x = Math.random() * 10 //  0 < x < 10
      var x = Math.floor(Math.random() * 10)  // 0 ~ 9까지 정수만 나옴
      var x = Math.floor(Math.random() * 10 + 1)  // 1부터 10까지 정수로 나옴
      

      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      console.log(getRndInteger(10, 20)) // 10부터 20사이 정수